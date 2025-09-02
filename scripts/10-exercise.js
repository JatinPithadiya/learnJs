  console.log(document.querySelector(".js-button")
        .classList.contains("js-button"));

        //toggle button js
        function changeColor(e){
            const button = document.querySelector(e);
            if(!button.classList.contains("is-toggled")){        
                turnOffOthers();
                button.classList.add("is-toggled");
            } else {
                button.classList.remove("is-toggled");
            }
        }

        function turnOffOthers(){
            const previousButton = document.querySelectorAll(".is-toggled");
            previousButton.forEach((button) => {
                button.classList.remove("is-toggled");
            });
        
        }

          function handleCostKeydown(event) {
            if(event.key === 'Enter') {
                calculateShipping();
            }
        }

         function calculateShipping() {
            const amount = parseFloat(document.querySelector('.js-amount').value);
            if(isNaN(amount) || amount < 0) {
                document.querySelector('.js-shipping-validation').innerHTML = `Error: Cost cannot be less then $0`;
                return;
            }
            if(amount < 40) {
                document.querySelector('.js-total').innerHTML = `$${amount + 10}`;
            } else {
                document.querySelector('.js-total').innerHTML = `$${amount}`;
            }
        }

        //calculator js
         let calculation = localStorage.getItem('calculation') ? localStorage.getItem('calculation') : "";
         displayCalcualtion();//display calculation on page load
        function calculate(value) {
            calculation += value;
            displayCalcualtion();
        }
        function displayCalcualtion() {
            localStorage.setItem('calculation', calculation);
            document.querySelector('.js-calculation').innerHTML = calculation;
        }