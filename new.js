let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');


inputRub.addEventListener('input', () => {

    // function exchange() {
        
        let myPromise = new Promise(function (resolve, reject) {

            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            request.addEventListener('readystatechange', function () {
                if (request.readyState === 4 && request.status == 200) {
                    let func = function(){
                        let data = JSON.parse(request.response);
                        inputUsd.value = inputRub.value / data.usd;
                    };
                    resolve(func);
                } else {
                    let reason = new Error('Не то вообще!!!');
                    reject(reason);
                }
            });
            request.send();
        });
    // }
    


    let obmen = function(){
        myPromise
            .then(function(fulfilled) {
                console.log(fulfilled);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    obmen();



    // exchange({})
    //     .then(function () {
    //     })
    //     .catch(() => inputUsd.value = "Не то!!");


});