let db = [
    {
        info:"ABCDE"
    }
];
let container = document.querySelector(".cards");

container.innerHTML = db          
.map(item => `
<div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
    <p>${item.info}</p> 
  </div>
</div>
<div className="card"></div>`)
.join("");
