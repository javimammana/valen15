const formAsistencia = "https://forms.gle/XfVKqUnnrnDDh11M8";
    dressCode.innerHTML = "Código de Vestimenta";


const asistenciaFecha = "01/09/2026";

asistenciaHasta.innerHTML = `Confirmar asistencia hasta ${asistenciaFecha}`;

const costo = 136500;

valorTarjeta.innerHTML = `Valor de Tarjeta $${costo} hasta el 15/05/2026 (Estimado un incremento de 5% mensual).-`;

document.getElementById('copyBtnT').addEventListener('click', function() {
    const aliasTxtCopy = aliasTarjetasCvu;
    navigator.clipboard.writeText(aliasTxtCopy)
    .then(() => {
        Swal.fire({
        position: "top",
        title: "Alias Copiado!",
        color: "#023859",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        });
    })
    .catch(err => {
        console.log("Error al copiar Alias:", err);
    });
});

