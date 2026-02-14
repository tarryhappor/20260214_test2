function calculateResult(){

let scores = {E:0,I:0,R:0,S:0,P:0,F:0,A:0,C:0};

document.querySelectorAll("input[type=radio]:checked").forEach(input=>{
  let q = parseInt(input.name.replace("q",""));
  let val = input.value;

  const map = [
  ["E","I"],["I","E"],["E","I"],["I","E"],
  ["R","S"],["S","R"],["R","S"],["S","R"],
  ["P","F"],["F","P"],["P","F"],["F","P"],
  ["C","A"],["C","A"],["A","C"],["C","A"]
  ];

  if(val==="A") scores[map[q][0]]++;
  else scores[map[q][1]]++;
});

let type =
 (scores.E>=scores.I?"E":"I")+
 (scores.R>=scores.S?"R":"S")+
 (scores.P>=scores.F?"P":"F")+
 (scores.A>=scores.C?"A":"C");

localStorage.setItem("resultType",type);
window.location.href="result.html";
}