const btn = document.getElementById("btn");
const status = document.getElementById("status");
const result = document.getElementById("result");
btn.addEventListener("click", () => {
    status.innerHTML = "Loading...";
    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            result.innerHTML = "";
            for(let i = 0; i < data.length; i++){
                result.innerHTML +=
                "<h3>" + data[i].name + "</h3>" +
                "<p>Email : " + data[i].email + "</p>" +
                "<p>Phone : " + data[i].phone + "</p>" +
                "<hr>";
            }
            status.innerHTML = "Loaded Successfully";
        })
        .catch(error => {
            status.innerHTML = "Error Loading Data";
        });
    }, 2000);
});