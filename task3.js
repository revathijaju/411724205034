const input = document.getElementById("input");
const count = document.getElementById("count");
const btn = document.getElementById("btn");
const clear = document.getElementById("clear");
const expired = document.getElementById("expired");
const status = document.getElementById("status");
const result = document.getElementById("result");
const total = document.getElementById("total");

let messages = [];
let expiredMessages = [];

input.addEventListener("input", function(){

    count.textContent = "Character Count : " + input.value.length;

});

btn.addEventListener("click", function(){

    let text = input.value;

    let promise = new Promise(function(resolve, reject){

        if(text.length >= 3){
            resolve(text);
        }
        else{
            reject("Message must contain at least 3 characters");
        }

    });

    promise.then(function(msg){

        status.textContent = "Message Added Successfully";

        messages.push(msg);

        total.textContent = "Total Messages : " + messages.length;

        let p = document.createElement("p");

        p.textContent = msg;

        result.appendChild(p);

        setTimeout(function(){

            p.remove();

            expiredMessages.push(msg);

            messages.pop();

            total.textContent = "Total Messages : " + messages.length;

            status.textContent = "Message Expired";

        },10000);

        input.value = "";

        count.textContent = "Character Count : 0";

    })

    .catch(function(error){

        status.textContent = error;

    });

});

clear.addEventListener("click", function(){

    result.innerHTML = "";

    messages = [];

    total.textContent = "Total Messages : 0";

    status.textContent = "All Messages Cleared";

});

expired.addEventListener("click", function(){

    result.innerHTML = "";

    for(let i = 0; i < expiredMessages.length; i++){

        let p = document.createElement("p");

        p.textContent = expiredMessages[i];

        result.appendChild(p);

    }

});