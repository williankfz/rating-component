function initRating(){
  const numbers = document.querySelectorAll('[data-rating="numbers"] span');
  const submit = document.querySelector('[data-rating="submit"]');
  const ratingContainer = document.querySelector('[data-rating="ratingContainer"]');
  const resultContainer = document.querySelector('[data-rating="resultContainer"]');
  const resultSummary = document.querySelector('.result-summary');

  function getNumber(e){
    e.preventDefault();
    numbers.forEach((active)=>{
      active.classList.remove('active');
    });
    this.classList.add('active');
    const summary = this.innerHTML;
    resultSummary.innerHTML = `You selected ${summary} out of 5`;
  }

  function submitClick(e){
    e.preventDefault();
    ratingContainer.style.display = 'none';
    resultContainer.style.display = 'block';
  }

  numbers.forEach((item) =>{
    item.addEventListener('click',getNumber);
  });

  submit.addEventListener('click', submitClick);
}

initRating();