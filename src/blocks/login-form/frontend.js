document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.querySelectorAll ('.open-modal');
    const modalElement = document.querySelector('.wp-block-block-plus-login-form');
    const modalCloseElement = document.querySelectorAll('.modal-overlay , .modal-btn-close');
    const signinForm = document.querySelector('#signin-tab');
    const signupForm = document.querySelector('#signup-tab');

    openModalButton.forEach(el => {
        el.addEventListener('click', event => {
            event.preventDefault();
            modalElement.classList.add('modal-show'); 
        })
    })

    modalCloseElement.forEach(el => {
        el.addEventListener('click', event =>{
            event.preventDefault(); 
            modalElement.classList.remove('modal-show')
        })
    })

    const tabs = document.querySelectorAll('.tabs a')

    tabs.forEach(tab => {
        tab.addEventListener('click' , event => {
            event.preventDefault();

            tabs.forEach(currentTab => {
                currentTab.classList.remove('active-tab')
            })

           event.currentTarget.classList.add('active-tab');
           const activeTab = event.currentTarget.getAttribute('href');
           if(activeTab === '#signin-tab'){
            signinForm.style.display = 'block'
            signupForm.style.display = 'none'
           }else{
            signinForm.style.display = 'none'
            signupForm.style.display = 'block'
           }
        })
    })

    signupForm.addEventListener('submit', event => {
        event.preventDefault()

        const signUpFieldSet = signupForm.querySelector('fieldset')
        signUpFieldSet.setAttribute('disabled', true)

        const signUpStatus = signupForm.querySelector('#signup-status')
        signUpStatus.innerHTML = `
            <div class="modal-status modal-status-info">
                Please Wait! We are creating your account.
            </div>
        `
        
    })
})