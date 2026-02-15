function calculateResult(){

let scores = {E:0,I:0,R:0,S:0,P:0,F:0,A:0,C:0};

const map = [
["E","I"],["I","E"],["E","I"],["I","E"],
["R","S"],["S","R"],["R","S"],["S","R"],
["P","F"],["F","P"],["P","F"],["F","P"],
["C","A"],["C","A"],["A","C"],["C","A"]
];

// 16問すべて読む
for(let i=0;i<16;i++){

  let answer = localStorage.getItem("q"+i);

  if(!answer) continue;

  if(answer==="A"){
    scores[map[i][0]]++;
  }else{
    scores[map[i][1]]++;
  }
}

// 4軸判定
let type =
 (scores.E>=scores.I?"E":"I")+
 (scores.R>=scores.S?"R":"S")+
 (scores.P>=scores.F?"P":"F")+
 (scores.A>=scores.C?"A":"C");

localStorage.setItem("resultType",type);

window.location.href="result.html";
}
