let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function ex() {
        return new Promise(function (resolve, reject) {
            
        
        let request = new XMLHttpRequest();
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();


        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);
                inputUsd.value = inputRub.value / data.usd;
                resolve();
            } else {
                reject();
            }
        });
    });
    }
    ex().catch(() => inputUsd.value = "Что-то пошло не так!");
   
});