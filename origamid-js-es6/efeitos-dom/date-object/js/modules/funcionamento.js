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


// agora.getDate(); //exactly date and time at the moment
// agora.getDay(); //day of the week (0 - 6)
// agora.getMonth();
// agora.getFullYear();
// agora.getHours();
// agora.getMinutes();
// agora.getTime(); // total of mile seconds since 1 jan 1970
// agora.getUTCHours() - 3// Brasilia time

// new Date() is a constructor that creates an object with 
// values based on the intern user's computer clock 
