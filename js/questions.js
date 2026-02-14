const questions = [
"初対面の人とも自然と会話が始まる",
"休日は誰かと過ごすより、一人の時間が回復になる",
"広い場所にいるとテンションが上がる",
"静かで人目につかない場所に安心する",
"「ぺるり」の意味が気になるタイプだ",
"理由は説明できないがなんとなく好きという感覚を大事にする",
"記念碑や説明板はつい読んでしまう",
"不思議なオブジェがあると惹かれる",
"予定はあらかじめ決めておきたい",
"思い立ったらすぐ行動する",
"地図を見ずに歩くのが好き",
"多少不便でも景色や雰囲気を優先する",
"海岸線をそのまま歩いていきたくなる",
"山や緑に囲まれると安心する",
"スポーツや軽い遊びができる場所が好き",
"ベンチに座って物思いにふける時間が好き"
];

function loadQuestions(page){
  const start = (page-1)*4;
  const end = start+4;
  document.getElementById("progress").innerText="Q"+(start+1)+"-"+end+"/16";

  let html="";
  for(let i=start;i<end;i++){
    html += `
    <div>
      <p>${questions[i]}</p>
      <label><input type="radio" name="q${i}" value="A" required> はい</label>
      <label><input type="radio" name="q${i}" value="B"> いいえ</label>
    </div>`;
  }
  document.getElementById("questionBox").innerHTML=html;
}