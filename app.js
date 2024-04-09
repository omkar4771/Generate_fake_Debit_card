let url = "https://fakerapi.it/api/v1/credit_cards?_quantity=1";
let btn = document.querySelector("button");
let card__digit_group_1 = document.querySelector('.one');
let card__digit_group_2 = document.querySelector(".two");
let card__digit_group_3 = document.querySelector(".three");
let card__digit_group_4 = document.querySelector(".four");
let card__exp_date = document.querySelector(".card__exp-date");
let card__name = document.querySelector(".card__name");

async function getCard() {
    try {
        console.log("getting data ...");
        let response = await fetch(url);
        console.log(response); 
        let card = await response.json();//JSON Format 

        card__exp_date.innerText = card.data[0].expiration;
        card__name.innerText = card.data[0].owner;
        card__digit_group_1.innerText = card.data[0].number.slice(0,4);
        card__digit_group_2.innerText = card.data[0].number.slice(4,8);
        card__digit_group_3.innerText = card.data[0].number.slice(8,12);
        card__digit_group_4.innerText = card.data[0].number.slice(12,16);
    
    } catch (err) {
      console.log("Error", err);
    }
  }
  btn.addEventListener("click", () => {
    getCard();
  });