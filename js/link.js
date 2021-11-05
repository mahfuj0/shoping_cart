const art = document.getElementById('art')

const img_1 = document.getElementById('img-1');
const img_2 = document.getElementById('img-2');
const img_3 = document.getElementById('img-3');

const desc = document.getElementById('desc')
const price = document.getElementById('price')

const free = document.getElementById('free');
const express = document.getElementById('express');

const shipping = document.getElementById('shipping');

const total=document.getElementById('total');

free.addEventListener('click',function(){
    shipping.innerText= '5'
    totalUpdate()

});
express.addEventListener('click',function(){
    shipping.innerText= '30'
    totalUpdate()

});

function totalUpdate(){
    const shippingCharge= Number(shipping.innerText)
    const productPrice= Number(price.innerText);
     total.innerText=productPrice+shippingCharge
}

img_1.addEventListener('click',function(){
    art.src = "images/1.jpg"
    desc.innerText = 'first - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus recusandae amet at sapiente esse ad similique officiis. Dolorem cumque vitae nam maxime dolores atque dicta, odio, tempora ratione, recusandae at.'
    price.innerText= '750'
    totalUpdate()
    
})
img_2.addEventListener('click',function(){
    art.src = "images/2.jpg"
    desc.innerText = 'second - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus recusandae amet at sapiente esse ad similique officiis. Dolorem cumque vitae nam maxime dolores atque dicta, odio, tempora ratione, recusandae at.'
    price.innerText= '450'
    totalUpdate()
    
    
})
img_3.addEventListener('click',function(){
    art.src = "images/3.jpg"
    desc.innerText = 'third - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus recusandae amet at sapiente esse ad similique officiis. Dolorem cumque vitae nam maxime dolores atque dicta, odio, tempora ratione, recusandae at.'
    price.innerText= '850'
    totalUpdate()
    
    
})