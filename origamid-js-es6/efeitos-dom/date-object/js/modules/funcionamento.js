export default function initFuncionamento() {

    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number); 
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number); 
                                        // .split to turn string into an array
                                        // .map to turn the elements of array into number
    
    console.log(diasSemana, horarioSemana);
    
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay(); 
    const horarioAgora = dataAgora.getHours(); 
    
    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
    
    
    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
    
    if(semanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto');
    }
}
