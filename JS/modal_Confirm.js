const modalConfirm = function () {
  const event2 = document.querySelectorAll(".Pay");

  if (event2) {
    event2.forEach((el) => {
      el.addEventListener("click", function () {
        // Método swal para criar os alertas dos dowloads (biblioteca sweetalert) -----------
        document
          .querySelector("form")
          .addEventListener("click", function (event) {
            event.preventDefault();
          });

        swal({
          title: "FINALIZAR PAGAMENTO?",
          buttons: ["Não", "Sim"],
        }).then((willDelete) => {
          if (willDelete) {
            swal("PAGAMENTO COM SUCESSO !", {
              icon: "success",
            });
            setTimeout(() => { document.formulario.submit();}, 1000);// aguardando 2 segundos para envio do formulario. 
          } else {
            swal("ERRO COM SEU PAGAMENTO !", {
              icon: "warning",
            });
          }
        });
      });
    });
  }
};



modalConfirm();

