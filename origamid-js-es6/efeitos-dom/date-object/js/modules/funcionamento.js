export default function initFuncionamento() {

}

const agora = new Date();
const futuro = new Date('Aug 10 2021 00:00');

console.log(agora.getMonth());
console.log(futuro);

function transformarDias(tempo) {
    return tempo / (24 * 60 * 60 * 1000);
}

const diasAgora = transformarDias(agora);
const diasFuturo = transformarDias(futuro);

console.log(diasFuturo - diasAgora);