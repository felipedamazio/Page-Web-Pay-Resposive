const modalConfirm = function() {
  // Método swal para criar os alertas dos dowloads (biblioteca sweetalert) -----------
  swal({
    title: "FINALIZAR PAGAMENTO?",
    buttons: ["Não", "Sim"],
  }).then(willDelete => {
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
};

const form = document.querySelector("form");
const input = document.querySelectorAll("input");
form.addEventListener("submit", event => {
  event.preventDefault();
  if (Array.from(input).some(input => !input.value)) {
    return;
  }
  modalConfirm();
});


//utilizei o Array.from() passando o input como parametro pois transforma o input em array e usei o  Array.from.some para validar se tinha input e se tinha valor se tiver valor o código prossegue para a chamada da função se não tiver ele retorna