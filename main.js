let toppingCost = 0;

let basePrice = 0;

let total = 0;

let reversed;

let deliveryCost = 0;

let bill = 0;

let show = document.querySelector(".delivery-add");

let deliveryAddress = document.querySelector('#delivery-address').value;

let deliverTo = document.querySelector('#deliver-to');


const delivery = document.querySelector('#delivery');

const addedToppings = [];

const pizzaBase = [];


function finalSum(){

    if (addedToppings.length > 4 ){
    
        toppingCost = .50 * addedToppings.length - 2;
    
    }
    else{
        toppingCost = 0;
    }

    if (delivery.value == "home delivery" && +toppingCost + +pizzaBase !== 0) {
        theDelivery.textContent = "Home delivery: €5";
        deliveryCost = 5.0;
        bill = +toppingCost + +pizzaBase + +deliveryCost;

        show.classList.add('delivery-show');

        deliverTo.textContent = deliveryAddress;


        thePrice.textContent = bill.toFixed(2);
    }

    else{
        deliveryCost = 0;
        theDelivery.textContent = "Delivery cost: Not applicable";
        bill = +toppingCost + +pizzaBase + +deliveryCost;

        show.classList.remove('delivery-show');


        thePrice.textContent = bill.toFixed(2);
    }

    bill = +toppingCost + +pizzaBase + +deliveryCost;

    return thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;

}

const cname = document.querySelector("#cname");

const check2 = document.querySelector('#size2');
const check4 = document.querySelector('#size4');
const check6 = document.querySelector('#size6');
const check8 = document.querySelector('#size8');

check2.addEventListener("change", pizzaSize);
check4.addEventListener("change", pizzaSize);
check6.addEventListener("change", pizzaSize);
check8.addEventListener("change", pizzaSize);

const jalapeno = document.querySelector('#jalapeno');
const mushroom = document.querySelector('#mushroom');
const chicken = document.querySelector('#chicken');
const blueCheese = document.querySelector('#blue-cheese');
const beef = document.querySelector('#beef');
const mozzarela = document.querySelector('#mozzarela');
const feta = document.querySelector('#feta');
const ham = document.querySelector('#ham');
const pepperoni = document.querySelector('#pepperoni');
const prawn = document.querySelector('#prawn');

jalapeno.addEventListener('change', toppingsChecker);
mushroom.addEventListener('change', toppingsChecker);
chicken.addEventListener('change', toppingsChecker);
blueCheese.addEventListener('change', toppingsChecker);
beef.addEventListener('change', toppingsChecker);
mozzarela.addEventListener('change', toppingsChecker);
feta.addEventListener('change', toppingsChecker);
ham.addEventListener('change', toppingsChecker);
pepperoni.addEventListener('change', toppingsChecker);
prawn.addEventListener('change', toppingsChecker);

const orderName = document.querySelector('.customer');
const theSize = document.querySelector('.pizza-size');
const toppingsHeading = document.querySelector('.toppings-heading');
const theToppings = document.querySelector('#toppings-list');

const theDelivery = document.querySelector('.delivery-method');
const thePrice = document.querySelector('#total-price');

delivery.addEventListener('change', finalSum);

cname.addEventListener("input", customerName);

// deliveryAddress.addEventListener('change', finalSum);

function customerName (){
    orderName.textContent = `Name: ${cname.value}`;
}

const toppings = [jalapeno, mushroom, chicken, beef, mozzarela, prawn, feta, ham, pepperoni, blueCheese];

const checks = [check2, check4, check6, check8]

function pizzaSize () {

    for (const size of checks) {

        if(size.checked === true){

            theSize.textContent = `Size ${+size.size} pizza: €${size.value}`;

            pizzaBase.pop();


            pizzaBase.push(size.value);

            finalSum();
    
        } 
    }

}

function toppingsChecker(){

    switch (this.checked) {
        case true:  
        
        addedToppings.push(this.name);

        console.log(addedToppings)
        finalSum();
        
        if(addedToppings.length > 4){

            theToppings.textContent = addedToppings.join(', ');

                toppingsHeading.textContent = `${addedToppings.length} Toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
               
                  toppingsHeading.textContent = `${addedToppings.length} Toppings: free`; 
                    
                    theToppings.textContent = addedToppings.join(', ');

            }
            
            finalSum();

            break;
           
        case false: 
            
            let start = addedToppings.indexOf(this.name);
            addedToppings.splice(start, 1);

            finalSum();
        
            if(addedToppings.length > 4){

                theToppings.textContent = addedToppings.join(', ');
              
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                toppingsHeading.textContent = `${addedToppings.length} Toppings: free`;
                    
                    theToppings.textContent = addedToppings.join(', ');

            }

            finalSum();

            break;
           
        }     
}