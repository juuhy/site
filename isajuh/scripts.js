let cart = [];

function addToCart(button) {
    const productDiv = button.closest('.product');
    const id = productDiv.getAttribute('data-id');
    const name = productDiv.getAttribute('data-name');
    const price = parseFloat(productDiv.getAttribute('data-price'));

    // Verifica se o produto já está no carrinho
    const existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    const totalElement = document.getElementById('total');

    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - R$${item.price.toFixed(2)} x ${item.quantity}`;
        cartList.appendChild(listItem);
    });

    totalElement.textContent = `Total: R$${total.toFixed(2)}`;
}
