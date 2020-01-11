let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');
    
    inputRub.addEventListener('input', () => {
    
function exchange() { 
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            

            request.addEventListener('readystatechange', function() {
                if (request.readyState === 4 && request.status == 200) {
                    resolve();
                    // let data = JSON.parse(request.response);
                    // inputUsd.value = inputRub.value / data.usd;
                } else {
                    reject();
                }
            });
            request.send();
    });

    }

    exchange({})
        .then(function() {
            let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value / data.usd;
        })
        .catch(() => inputUsd.value = "Не то!!");
});