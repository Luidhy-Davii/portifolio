// inicializa a biblioteca AOS
AOS.init({
  duration: 1000, // Duração da animação
  // once: true
  easing: 'ease-in-out', // Tipo de easing
  delay: 100, // Atraso padrão para todas as animações
});

//menu hambuerguer
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav--list');

function toggleMenu() {
mobileMenu.classList.toggle('active');
navList.classList.toggle('active');
}

// Clique do mouse
mobileMenu.addEventListener('click', toggleMenu);

// Teclado: Enter ou Espaço 
mobileMenu.addEventListener('keydown', (event) => {
if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // Evita rolagem ao pressionar espaço
    toggleMenu();
}
});

// 
const habilidades = document.querySelectorAll('.habilidade');
const descricaoHabilidade = document.getElementById('descricaoHabilidade');

// Define o texto padrão inicial
descricaoHabilidade.textContent = "*Passe o cursor do mouse no card para ler*";
descricaoHabilidade.style.opacity = '1';

habilidades.forEach((habilidade) => {
  const mostrarDescricao = () => {
    const descricao = habilidade.getAttribute('data-descricao');
    descricaoHabilidade.textContent = descricao;
  };

  const resetarDescricao = () => {
    descricaoHabilidade.textContent = "*Passe o cursor do mouse no card para ler*";
  };

  // Para desktop (hover)
  habilidade.addEventListener('mouseover', mostrarDescricao);
  habilidade.addEventListener('mouseout', resetarDescricao);

  // Para mobile (clique)
  habilidade.addEventListener('click', (event) => {
    mostrarDescricao();
    event.stopPropagation(); // Evita que clique no documento esconda o texto imediatamente
  });
});

// Esconder a descrição ao clicar fora (mobile)
document.addEventListener('click', () => {
  resetarDescricao();
});

