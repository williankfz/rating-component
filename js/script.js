function initRating(){
  const numbers = document.querySelectorAll('[data-rating="numbers"] span');
  const submitButton = document.querySelector('[data-rating="submit"]');
  const ratingContainer = document.querySelector('[data-rating="ratingContainer"]');
  const resultContainer = document.querySelector('[data-rating="resultContainer"]');
  const resultSummary = document.querySelector('.result-summary');

  function getNumbers(){
    numbers.forEach((active) =>{
      active.classList.remove('active');
    });
    this.classList.add('active');
    resultSummary.innerHTML = `You selected ${this.innerHTML} out of 5`;
  };

  function submit(e){
    e.preventDefault();
    ratingContainer.style.display = 'none';
    resultContainer.style.display = 'block';
  }

  numbers.forEach((item) =>{
    item.addEventListener('click',getNumbers);
  });
  submitButton.addEventListener('click',submit);
}

initRating();