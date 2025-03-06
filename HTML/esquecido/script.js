let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

showSlides(slideIndex);

setInterval(function() {
    plusSlides(1);
}, 5000);

  // Função para carregar os itens do carrinho
    function adicionarAoCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoContainer = document.getElementById('carrinho-container');
    const totalContainer = document.getElementById('total-container');
    let total = 0;

    carrinhoContainer.innerHTML = 'X'; // Limpa os itens existentes

    if (carrinho.length > 0) {
        carrinho.forEach(item => {
            total += item.preco;
            const divItem = document.createElement('div');
            divItem.classList.add('item-carrinho');
            divItem.innerHTML = `
                <h3>${item.nome}</h3>
                <p>Preço: R$ ${item.preco}</p>
            `;
            carrinhoContainer.appendChild(divItem);
        });
        totalContainer.innerHTML = `Total: R$ ${total.toFixed(2)}`;
    } else {
        carrinhoContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        totalContainer.innerHTML = 'Total: R$ 0,00';
    }
}

// Carrega os produtos do carrinho quando a página for carregada
window.onload = adicionarAoCarrinho;
