const produtos = [
  {
    nome: "Pamonha",
    preco: 12,
    emoji: "🌽"
  },
  {
    nome: "Canjica",
    preco: 15,
    emoji: "🥣"
  },
  {
    nome: "Milho Cozido",
    preco: 10,
    emoji: "🌽"
  },
  {
    nome: "Quentão",
    preco: 18,
    emoji: "🍷"
  },
  {
    nome: "Maçã do Amor",
    preco: 9,
    emoji: "🍎"
  },
  {
    nome: "Pé de Moleque",
    preco: 11,
    emoji: "🥜"
  },
  {
    nome: "Curau",
    preco: 14,
    emoji: "🍮"
  },
  {
    nome: "Bolo de Fubá",
    preco: 13,
    emoji: "🍰"
  }
];

const container = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalElement = document.getElementById("total");

const cartModal = document.getElementById("cart-modal");
const cartBtn = document.getElementById("cart-btn");
const closeCart = document.getElementById("close-cart");

let carrinho = [];

function renderProdutos() {
  produtos.forEach((produto) => {

    const card = document.createElement("div");

    card.className =
      "bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition";

    card.innerHTML = `
      <div class="text-7xl mb-4">
        ${produto.emoji}
      </div>

      <h3 class="text-2xl font-bold mb-2">
        ${produto.nome}
      </h3>

      <p class="text-lg text-gray-600 mb-4">
        R$ ${produto.preco}
      </p>

      <button
        class="bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-full font-bold">
        Adicionar
      </button>
    `;

    card.querySelector("button")
      .addEventListener("click", () => adicionarCarrinho(produto));

    container.appendChild(card);
  });
}

function adicionarCarrinho(produto) {
  carrinho.push(produto);

  atualizarCarrinho();
}

function atualizarCarrinho() {

  cartItems.innerHTML = "";

  let total = 0;

  carrinho.forEach((item) => {

    total += item.preco;

    const div = document.createElement("div");

    div.className =
      "flex justify-between border-b pb-2";

    div.innerHTML = `
      <span>${item.emoji} ${item.nome}</span>
      <span>R$ ${item.preco}</span>
    `;

    cartItems.appendChild(div);
  });

  cartCount.innerText = carrinho.length;
  totalElement.innerText = total;
}

cartBtn.addEventListener("click", () => {
  cartModal.classList.remove("hidden");
});

closeCart.addEventListener("click", () => {
  cartModal.classList.add("hidden");
});

renderProdutos();