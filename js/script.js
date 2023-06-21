const modals = document.querySelectorAll("dialog");
const bodyElement = document.body;

if (modals.length) {
    modals.forEach(modal => {
        const modalOpenerBtn = document.querySelector(`[data-dialog-btn-for='${modal.dataset.dialog}']`);
        modalOpenerBtn.addEventListener("click", openModalAndLockScroll);
        modal.addEventListener("click", closeModalOnBackdrop);

        function closeModalAndReturnScroll(modal) {
            modal.close();
            bodyElement.classList.remove("scroll-lock");
        }
    
        function closeModalOnBackdrop(e) {
            if (!e.target.closest('.dialog__wrapper')) {
                closeModalAndReturnScroll(modal);
            }
            if (e.target === modal.querySelector('button.dialog__close-btn')) {
                closeModalAndReturnScroll(modal);
            }
        }
        
        function openModalAndLockScroll() {
            modal.showModal();
            bodyElement.classList.add("scroll-lock");
        }
    });
}




