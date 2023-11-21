window.onload = function() {
  let game = document.querySelector('.game');
  let score = document.querySelector('.score');
  let click = document.querySelector('.click');
  let s=1;
  let min = 0, sec = 0;


  function Create2DArray(rows, columns) {
    var x = new Array(rows);
    for(let i = 0; i < rows; i++) {
      x[i] = new Array(columns);
    }
    return x;
  }

  function shuffleArray(d) {
    for(let c=d.length-1; c > 0; c--) {
        let b = Math.floor(Math.random() *(c+1));
        let a=d[c];
        d[c] = d[b];
        d[b] = a;
    }

    return d
  };

 rc=5;
 data1=[];
 data2=[];
 table = Create2DArray(rc);

 for(let i = 0; i < 25; i++) {
   data1[i] = i + 1;
 }

 for(let i = 26; i <= 50; i++) {
   data2[i- 26] = i; 
 }

 shuffleArray(data1);
 shuffleArray(data2);
 let inc = 0;

 for(let i = 0; i < rc; i++) {
   let row = document.createElement('tr');
   for(let j = 0; j < rc; j++) {
     let d = document.createElement('td');
     row.appendChild(d);
     table[i][j] = [d, data1[inc]];
     table[i][j][0].addEventListener('click', interact);
     inc++;
     table[i][j][0].innerText = table[i][j][1];
     table[i][j][0].style.textAlign = 'center';
     table[i][j][0].style.color = 'white';
   }
   game.appendChild(row)
 }

 function interact() {
   if(this.innerText == 50&& s == 50){
     displayScore();
   }

   if(this.innerText == 1) {
     a= setInterval(scoreTime, 1000)
   }
   if(this.innerText == s && s <= 25 ) {
     this.style.backgroundColor = "blue";
     this.innerText = data2[s-1];
     click.innerText = "click:"+(s+1);
     s++;
   }
   if(this.innerText == s&&s > 25) {
     this.style.backgroundColor = "white";
     this.innerText = '';
     click.innerText = "click:"+(s+1);
     s++;
   }
 }

 function displayScore() {
   click.remove();
   game.remove();
   score.innerText = "score:"+min+"min and"+sec+"sec";
   score.style.fontSize = "3em";
   score.style.textAlign = "center";
   score.style.color = 'green';
   clearInterval(a);
 }

 function scoreTime() {
   if(sec == 59) {
     sec = 0;
     min++
   } else {
     sec++
   }
   score.innerText = "time:"+min+ "min and" +sec+"sec";
 }




}