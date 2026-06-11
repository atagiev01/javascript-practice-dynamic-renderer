let db = [
    {
        info:"ABCDE"
    }
];
let container = document.querySelector(".cards");

container.innerHTML = db          
.map(item => <div className="card">${item.info}</div>)
.join("")