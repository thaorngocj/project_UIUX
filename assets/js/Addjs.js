document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('[data-bs-target="#footerCollapse"]');
  const icon = document.getElementById('footerArrow');
  const collapse = document.getElementById('footerCollapse');

  collapse.addEventListener('shown.bs.collapse', function () {
    icon.className = 'bi bi-chevron-up';
  });

  collapse.addEventListener('hidden.bs.collapse', function () {
    icon.className = 'bi bi-chevron-down';
  });
}); 