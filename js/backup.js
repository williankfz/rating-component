function initRating(){
  //Pega os elementos HTML
  const numbers = document.querySelectorAll('.rating-numbers span');
  const submitButton = document.querySelector('.button-submit');
  const ratingContainer = document.querySelector('.rating');
  const resultContainer = document.querySelector('.result');
  const resultSummary = document.querySelector('.result-summary');

  //Nesta função é incluido e retirado a class active, também é construido o texto da div de rating.
  function getNumber(e){
    e.preventDefault();
    numbers.forEach((active) =>{
      active.classList.remove('active');
    });
    this.classList.add('active');
    const numberSelected = this.innerHTML;
    resultSummary.innerHTML = `You selected ${numberSelected} out of 5`;
  }

  //Ao clicar em submit ele troca os displays
  function submit(e){
    e.preventDefault();
    ratingContainer.style.display = 'none';
    resultContainer.style.display = 'block';
  }

  //Aplica a função getNumber nos numeros(span)
  numbers.forEach((item) =>{
    item.addEventListener('click', getNumber);
  });

  //Aplica a função submit no botão
  submitButton.addEventListener('click', submit);
}

initRating();