(function(){

  const btns = document.querySelectorAll('.btn--check');
  const btnCheckedClass = 'btn--checked';

  for (const btn of btns) {
    btn.addEventListener('click', clickHandler);
  }

  function clickHandler(event) {
    event.preventDefault();
    if (!this.classList.contains(btnCheckedClass)) {
      this.classList.add(btnCheckedClass);
    }
    else {
      this.classList.remove(btnCheckedClass);
    }
  }

})('switchmecss');

(function(){

  const toggles = document.querySelectorAll('.btn-toggle');

  for (const toggle of toggles) {
    toggle.children[0].addEventListener('click', clickHandler0);
    toggle.children[1].addEventListener('click', clickHandler1);
  }

  function clickHandler0(event) {
    event.preventDefault();
    this.parentNode.setAttribute('data-checked', '0');
  }

  function clickHandler1(event) {
    event.preventDefault();
    this.parentNode.setAttribute('data-checked', '1');
  }

})('switchmecss');
