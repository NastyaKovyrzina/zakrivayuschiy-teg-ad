document.addEventListener('DOMContentLoaded', () => {
  const openBtns = document.querySelectorAll('[data-dialog-target]');
  const closeBtns = document.querySelectorAll('[data-dialog-close]');

  openBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const modal = document.getElementById(btn.dataset.dialogTarget);
      if (modal?.showModal) modal.showModal();
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('dialog')?.close();
    });
  });

  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', e => {
      if (e.target === dialog) dialog.close();
    });
  });
});