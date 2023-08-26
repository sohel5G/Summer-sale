
let products = document.querySelectorAll('#product');
for (let product of products) {
    product.addEventListener('click', function () {
        let productPriceString = product.childNodes[5].childNodes[3].childNodes[0].innerText;
        let productTitle = product.childNodes[5].childNodes[1].innerText;
        let productPrice = parseFloat(productPriceString);

        let totalPrice = getElementValueById('total-price');
        let subTotalPrice = productPrice + totalPrice;

        setProductTitle('title-box', productTitle);

        if(subTotalPrice > 0){
            document.getElementById('purchase-btn').removeAttribute('disabled');
        }

        setElementValueById('total-price', subTotalPrice.toFixed(2));
        let total = productPrice + totalPrice;
        setElementValueById('total', total.toFixed(2));

        if(subTotalPrice >= 200){
            document.getElementById('discount-btn').removeAttribute('disabled');
            document.getElementById('discount-btn').addEventListener('click', function(e){
                let discountInputValue = getInputValueById('discount-input');
                if(discountInputValue !== 'SELL200'){
                    alert('Please add a valid coupon code!');
                    e.stopImmediatePropagation();
                    return;
                }else{
                    let discount = (subTotalPrice / 100) * 20;
                    setElementValueById('discounted', discount.toFixed(2));
                    total = subTotalPrice - discount;
                    setElementValueById('total', total.toFixed(2));
                }
            });
        };

    });

};