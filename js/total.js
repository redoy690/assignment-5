



document.getElementById('card-1').addEventListener('click', function(){
    const listNode = document.getElementById('order-text');
    const textNode = document.createTextNode('K. Accessories');
    const liNode = document.createElement('li');
    liNode.appendChild(textNode);
    listNode.appendChild(liNode)
    const totalPriceOld = document.getElementById('total-price');
    const totalPriceString = totalPriceOld.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const newPrice = totalPrice + 39;
    const newPriceTwoCount = newPrice.toFixed(2)
    totalPriceOld.innerText = newPriceTwoCount;



    const afterPrice = document.getElementById('total-price');
    const afterPricevalue = afterPrice.innerText; 
    if(afterPricevalue >= 1){    
     const join = document.getElementById('purchase')
     join.removeAttribute('disabled')
     }  

    if(afterPricevalue >= 200){
      const apply = document.getElementById('apply');
      apply.removeAttribute('disabled')  
    }

    const olddiscount = document.getElementById('discount');
    const olddiscountpriceString = olddiscount.innerText
    const olddiscountPrice = parseFloat(olddiscountpriceString) 
    const lastTotalPrice = document.getElementById('total')
    if(olddiscountPrice <=1){
       lastTotalPrice.innerText = totalPriceOld.innerText;
    }
    


})
document.getElementById('card-2').addEventListener('click', function(){
    const listNode = document.getElementById('order-text');
    const textNode = document.createTextNode('K. Accessories');
    const liNode = document.createElement('li');
    liNode.appendChild(textNode);
    listNode.appendChild(liNode)
    const totalPriceOld = document.getElementById('total-price');
    const totalPriceString = totalPriceOld.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const newPrice = totalPrice + 25;
    const newPriceTwoCount = newPrice.toFixed(2)
    totalPriceOld.innerText = newPriceTwoCount;


   
    const afterPrice = document.getElementById('total-price');
    const afterPricevalue = afterPrice.innerText; 
    if(afterPricevalue >= 1){    
     const join = document.getElementById('purchase')
     join.removeAttribute('disabled')
     }  

    if(afterPricevalue >= 200){
      const apply = document.getElementById('apply');
      apply.removeAttribute('disabled')  
    }

    const olddiscount = document.getElementById('discount');
    const olddiscountpriceString = olddiscount.innerText
    const olddiscountPrice = parseFloat(olddiscountpriceString) 
    const lastTotalPrice = document.getElementById('total')
    if(olddiscountPrice <=1){
       lastTotalPrice.innerText = totalPriceOld.innerText;
    }
    

})
document.getElementById('card-3').addEventListener('click', function(){
    const listNode = document.getElementById('order-text');
    const textNode = document.createTextNode('Home Cooker');
    const liNode = document.createElement('li');
    liNode.appendChild(textNode);
    listNode.appendChild(liNode)
    const totalPriceOld = document.getElementById('total-price');
    const totalPriceString = totalPriceOld.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const newPrice = totalPrice + 49;
    const newPriceTwoCount = newPrice.toFixed(2)
    totalPriceOld.innerText = newPriceTwoCount;   


    
    const afterPrice = document.getElementById('total-price');
    const afterPricevalue = afterPrice.innerText; 
    if(afterPricevalue >= 1){    
     const join = document.getElementById('purchase')
     join.removeAttribute('disabled')
     }  

    if(afterPricevalue >= 200){
      const apply = document.getElementById('apply');
      apply.removeAttribute('disabled')  
    }

    const olddiscount = document.getElementById('discount');
    const olddiscountpriceString = olddiscount.innerText
    const olddiscountPrice = parseFloat(olddiscountpriceString) 
    const lastTotalPrice = document.getElementById('total')
    if(olddiscountPrice <=1){
       lastTotalPrice.innerText = totalPriceOld.innerText;
    }
    
})


document.getElementById('card-4').addEventListener('click', function(){
    const listNode = document.getElementById('order-text');
    const textNode = document.createTextNode('Sports Back Cap');
    const liNode = document.createElement('li');
    liNode.appendChild(textNode);
    listNode.appendChild(liNode)
    const totalPriceOld = document.getElementById('total-price');
    const totalPriceString = totalPriceOld.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const newPrice = totalPrice + 49;
    const newPriceTwoCount = newPrice.toFixed(2)
    totalPriceOld.innerText = newPriceTwoCount;



    
    const afterPrice = document.getElementById('total-price');
    const afterPricevalue = afterPrice.innerText; 
    if(afterPricevalue >= 1){    
     const join = document.getElementById('purchase')
     join.removeAttribute('disabled')
     }  

    if(afterPricevalue >= 200){
      const apply = document.getElementById('apply');
      apply.removeAttribute('disabled')  
    }

    const olddiscount = document.getElementById('discount');
    const olddiscountpriceString = olddiscount.innerText
    const olddiscountPrice = parseFloat(olddiscountpriceString) 
    const lastTotalPrice = document.getElementById('total')
    if(olddiscountPrice <=1){
       lastTotalPrice.innerText = totalPriceOld.innerText;
    }
    
})
document.getElementById('card-5').addEventListener('click', function(){
    const listNode = document.getElementById('order-text');
    const textNode = document.createTextNode('Full Jersey Set');
    const liNode = document.createElement('li');
    liNode.appendChild(textNode);
    listNode.appendChild(liNode)
    const totalPriceOld = document.getElementById('total-price');
    const totalPriceString = totalPriceOld.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const newPrice = totalPrice + 69;
    const newPriceTwoCount = newPrice.toFixed(2)
    totalPriceOld.innerText = newPriceTwoCount;


    
    const afterPrice = document.getElementById('total-price');
    const afterPricevalue = afterPrice.innerText; 
    if(afterPricevalue >= 1){    
     const join = document.getElementById('purchase')
     join.removeAttribute('disabled')
     }  

    if(afterPricevalue >= 200){
      const apply = document.getElementById('apply');
      apply.removeAttribute('disabled')  
    }

    const olddiscount = document.getElementById('discount');
    const olddiscountpriceString = olddiscount.innerText
    const olddiscountPrice = parseFloat(olddiscountpriceString) 
    const lastTotalPrice = document.getElementById('total')
    if(olddiscountPrice <=1){
       lastTotalPrice.innerText = totalPriceOld.innerText;
    }
    
})
document.getElementById('card-6').addEventListener('click', function(){
    const listNode = document.getElementById('order-text');
    const textNode = document.createTextNode('Sports cates');
    const liNode = document.createElement('li');
    liNode.appendChild(textNode);
    listNode.appendChild(liNode)
    const totalPriceOld = document.getElementById('total-price');
    const totalPriceString = totalPriceOld.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const newPrice = totalPrice + 159;
    const newPriceTwoCount = newPrice.toFixed(2)
    totalPriceOld.innerText = newPriceTwoCount;



    
    const afterPrice = document.getElementById('total-price');
    const afterPricevalue = afterPrice.innerText; 
    if(afterPricevalue >= 1){    
     const join = document.getElementById('purchase')
     join.removeAttribute('disabled')
     }  

    if(afterPricevalue >= 200){
      const apply = document.getElementById('apply');
      apply.removeAttribute('disabled')  
    }

    const olddiscount = document.getElementById('discount');
    const olddiscountpriceString = olddiscount.innerText
    const olddiscountPrice = parseFloat(olddiscountpriceString) 
    const lastTotalPrice = document.getElementById('total')
    if(olddiscountPrice <=1){
       lastTotalPrice.innerText = totalPriceOld.innerText;
    }
    
})
document.getElementById('card-7').addEventListener('click', function(){
    const listNode = document.getElementById('order-text');
    const textNode = document.createTextNode('Single Relax Chair');
    const liNode = document.createElement('li');
    liNode.appendChild(textNode);
    listNode.appendChild(liNode)
    const totalPriceOld = document.getElementById('total-price');
    const totalPriceString = totalPriceOld.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const newPrice = totalPrice + 185;
    const newPriceTwoCount = newPrice.toFixed(2)
    totalPriceOld.innerText = newPriceTwoCount;



    
    const afterPrice = document.getElementById('total-price');
    const afterPricevalue = afterPrice.innerText; 
    if(afterPricevalue >= 1){    
     const join = document.getElementById('purchase')
     join.removeAttribute('disabled')
     }  

    if(afterPricevalue >= 200){
      const apply = document.getElementById('apply');
      apply.removeAttribute('disabled')  
    }

    const olddiscount = document.getElementById('discount');
    const olddiscountpriceString = olddiscount.innerText
    const olddiscountPrice = parseFloat(olddiscountpriceString) 
    const lastTotalPrice = document.getElementById('total')
    if(olddiscountPrice <=1){
       lastTotalPrice.innerText = totalPriceOld.innerText;
    }
    
})
document.getElementById('card-8').addEventListener('click', function(){
    const listNode = document.getElementById('order-text');
    const textNode = document.createTextNode('Children play');
    const liNode = document.createElement('li');
    liNode.appendChild(textNode);
    listNode.appendChild(liNode)
    const totalPriceOld = document.getElementById('total-price');
    const totalPriceString = totalPriceOld.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const newPrice = totalPrice + 299;
    const newPriceTwoCount = newPrice.toFixed(2)
    totalPriceOld.innerText = newPriceTwoCount;



    
    const afterPrice = document.getElementById('total-price');
    const afterPricevalue = afterPrice.innerText; 
    if(afterPricevalue >= 1){    
     const join = document.getElementById('purchase')
     join.removeAttribute('disabled')
     }  

    if(afterPricevalue >= 200){
      const apply = document.getElementById('apply');
      apply.removeAttribute('disabled')  
    }

    const olddiscount = document.getElementById('discount');
    const olddiscountpriceString = olddiscount.innerText
    const olddiscountPrice = parseFloat(olddiscountpriceString) 
    const lastTotalPrice = document.getElementById('total')
    if(olddiscountPrice <=1){
       lastTotalPrice.innerText = totalPriceOld.innerText;
    }
    
})
document.getElementById('card-9').addEventListener('click', function(){
    const listNode = document.getElementById('order-text');
    const textNode = document.createTextNode('Flexible Sofa');
    const liNode = document.createElement('li');
    liNode.appendChild(textNode);
    listNode.appendChild(liNode)
    const totalPriceOld = document.getElementById('total-price');
    const totalPriceString = totalPriceOld.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const newPrice = totalPrice + 339;
    const newPriceTwoCount = newPrice.toFixed(2)
    totalPriceOld.innerText = newPriceTwoCount;

    
    const afterPrice = document.getElementById('total-price');
    const afterPricevalue = afterPrice.innerText; 
    if(afterPricevalue >= 1){    
     const join = document.getElementById('purchase')
     join.removeAttribute('disabled')
     }  

    if(afterPricevalue >= 200){
      const apply = document.getElementById('apply');
      apply.removeAttribute('disabled')  
    }

    const olddiscount = document.getElementById('discount');
    const olddiscountpriceString = olddiscount.innerText
    const olddiscountPrice = parseFloat(olddiscountpriceString) 
    const lastTotalPrice = document.getElementById('total')
    if(olddiscountPrice <=1){
       lastTotalPrice.innerText = totalPriceOld.innerText;
    }
    

})


document.getElementById('apply').addEventListener('click', function(){
    const inputValue = document.getElementById('coupon-input');
    const inputV = inputValue.value;
    if(inputV === 'SELL200' ){
        const totalPriceOld = document.getElementById('total-price');
        const totalPriceString = totalPriceOld.innerText;
        const totalPrice = parseFloat(totalPriceString);
        const discountPrice = totalPrice * .20
        const discountPriceFixed = discountPrice.toFixed(2)
        const olddiscountprice = document.getElementById('discount');
        olddiscountprice.innerText = discountPriceFixed;  
        const finalTotalPrice = totalPriceOld.innerText - olddiscountprice.innerText
        const finalTotalPriceToFixed = finalTotalPrice.toFixed(2)
        const lastTotalPrice = document.getElementById('total')
        const lastTotalString = lastTotalPrice.innerText;
        lastTotalPrice.innerText = finalTotalPriceToFixed 
    }
})
    


document.getElementById('go-home').addEventListener('click', function(){
    window.location = "index.html"
})