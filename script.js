const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', open); });
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const labels = { '#163b36': 'Verde floresta', '#e17958': 'Terracota', '#d6b759': 'Amarelo solar', '#d9d0bd': 'Areia' };
document.querySelectorAll('.swatch').forEach(swatch => swatch.addEventListener('click', () => {
  document.querySelectorAll('.swatch').forEach(item => item.classList.remove('active'));
  swatch.classList.add('active');
  document.querySelector('.preview-cover').style.background = swatch.dataset.color;
  document.querySelector('.color-label').textContent = labels[swatch.dataset.color] || 'Sua escolha';
}));

const notebooks = document.querySelector('#notebooks');
const notebookValue = document.querySelector('#notebooks-value');
const waterResult = document.querySelector('#water-result');
const treeResult = document.querySelector('#tree-result');
function updateImpact() { const count = Number(notebooks.value); notebookValue.textContent = `${count} ${count === 1 ? 'caderno' : 'cadernos'}`; waterResult.textContent = (count * 120).toLocaleString('pt-BR'); treeResult.textContent = (count * .1).toLocaleString('pt-BR', { minimumFractionDigits: 1 }); }
notebooks?.addEventListener('input', updateImpact); updateImpact();

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
