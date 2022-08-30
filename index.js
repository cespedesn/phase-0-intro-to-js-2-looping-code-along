/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

function writeCards(names, event) {
    const thankYouMessage = [];
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        thankYouMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    console.log(thankYouMessage);
    return thankYouMessage;
    
}
function countDown(number){
    let loop = number;
    while (loop >= 0) {
    console.log(loop --);    
    }
}