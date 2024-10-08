document.getElementById('turnoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    
    const turnoActual = parseInt(document.getElementById('turnoActual').value);
    const turnoUsuario = parseInt(document.getElementById('turnoUsuario').value);
    const tiempoPorTurno = parseInt(document.getElementById('tiempoPorTurno').value);

    
    if (isNaN(turnoActual) || isNaN(turnoUsuario) || isNaN(tiempoPorTurno) || turnoActual <= 0 || turnoUsuario <= 0 || tiempoPorTurno <= 0) {
        alert('Por favor, ingresa valores válidos en los campos.');
        return;
    }

    if (turnoUsuario < turnoActual) {
        alert('Tu número de turno no puede ser menor que el turno actual.');
        return;
    }

    
    const turnosRestantes = turnoUsuario - turnoActual;
    const tiempoRestante = turnosRestantes * tiempoPorTurno;

    
    document.getElementById('tiempoRestante').textContent = `Faltan aproximadamente ${tiempoRestante} minutos para tu turno.`;
});
