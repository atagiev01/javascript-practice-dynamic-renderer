let db = [
    {
        info:"ABCDE",
        image:"https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg"
    },
      {
        info:"EDCBA",
        image:"https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg"
    }
    
];
let container = document.querySelector(".cards");

container.innerHTML = db          
.map(item => `
<div class="card">
  <img src="${item.image}" alt="Avatar" style="width:100%">
  <div class="container">
    <p>${item.info}</p> 
  </div>
</div>
<div className="card"></div>`)
.join("");
