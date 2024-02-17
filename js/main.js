const boxes = document.querySelectorAll('.box')

boxes.forEach(function(box) {
    box.addEventListener('click', log);
  });

let randomSpotGenerator = {
    boxArr: ['TL', 'TM', 'TR', 'ML', 'MM', 'MR', 'BL', 'BM', 'BR'],
    returnRandom: function () {
      return this.boxArr[Math.floor(Math.random() * this.boxArr.length)]
    }

  }

let playerTurn = {

}


let slotLogic = {

}


function log(){
    // console.log(section.id);
    console.log('Clicked section ID:', event.target.id)

}
  