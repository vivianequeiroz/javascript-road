let friend = {name: 'Clarice',
sex: 'F',
weight: 63,
gainWeight(p = 0){
    console.log('Emagreceu');
    this.weight -= p;
}}

friend.gainWeight(4);
console.log(`${friend.name} pesa ${friend.weight}Kg`);