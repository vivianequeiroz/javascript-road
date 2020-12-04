function changeImage() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('image');
    var data = new Date();
    var hour = data.getHours();

    msg.innerHTML = `Agora são ${hour} horas.`

    if (hour >= 0 && hour < 12){
        img.src = 'day.svg'; 
        document.body.style.background = '#FDAB00';
    } else if (hour >= 12 && hour <= 18) {
        img.src = 'afternoon.svg';
        document.body.style.background = '#832702';
    } else {
        img.src = 'night.svg';
        document.body.style.background = '#12223B';
    }

    msg.innerHTML = `Agora são ${hour} horas.`
}
