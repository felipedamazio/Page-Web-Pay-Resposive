const modalConfirm = function () {
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
      return;
    }
  
    const thirdInput = input[2];
    const thirdInputRegex = /^\d{3,4}$/; // permite até 4 dígitos numéricos.
    if (!thirdInputRegex.test(thirdInput.value)) {
      return;
    }
  
    modalConfirm();
  });
  