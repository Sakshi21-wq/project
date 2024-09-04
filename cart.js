let btns= document.querySelectorAll(".btn");
let table= document.querySelector("table");
let data=document.createElement("tr");

let abc=0;
for(let btn of btns){
    btn.addEventListener("click",()=>{
        alert("Product added to the cart.");
        abc=1;
    });
};

if(abc=1){
    data.innerHTML="<td>name</td> <td>dvdbdf</td>  <td>dfngg</td>";
    table.appendChild(data);
};
// const addToCartButtons = document.querySelectorAll('btn');
// function addToCart(event){
//     const productElement = event.target.parentElement;
//     const productName = productElement.querySelector('.name') .textContent;
//     const productPrice = productElement.querySelector('.price') .textContent;

//     const CartItem = document.createElement('li');
//     CartItem.textContent= '${productName} - ${productPrice}';

//     document.getElementById('tr').appendChild(cartItem);

// }

// addToCartButtons.forEach(button =>{
//     button.addEventListener('click', addToCart);
// })