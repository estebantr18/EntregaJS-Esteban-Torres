document.addEventListener("DOMContentLoaded", function() {
    function mostrarAlerta(mensaje, tipo) {
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensaje}</div>`;
        setTimeout(() => {
            resultado.innerHTML = '';
        }, 3000);
    }

    function calcularTiempoEspera(turno) {
        const tiempoPorTurno = 5; 
        return turno * tiempoPorTurno;
    }

    function esNumeroValido(turno) {
        return !isNaN(turno) && turno > 0;
    }

    function generarTurnos(selectElement, cantidadTurnos) {
        for (let i = 1; i <= cantidadTurnos; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Turno ${i}`;
            selectElement.appendChild(option);
        }
    }

    const turnoSelect = document.getElementById("turnoSelect");
    if (turnoSelect) {
        generarTurnos(turnoSelect, 100); 
    }

    document.getElementById("turnoForm").addEventListener("submit", function(e) {
        e.preventDefault(); 
        let turnoSeleccionado = parseInt(turnoSelect.value);


        if (!esNumeroValido(turnoSeleccionado)) {
            mostrarAlerta('Debe seleccionar un turno válido.', 'danger');
        } else {
            let tiempoEspera = calcularTiempoEspera(turnoSeleccionado);
            mostrarAlerta(`Turno ${turnoSeleccionado}, Tiempo estimado de espera: ${tiempoEspera} minutos.`, 'success');
        }
    });
});
