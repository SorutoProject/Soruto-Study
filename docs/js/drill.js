window.onload = function(){
so.setVal("num","0");
var xhr = new XMLHttpRequest();
  xhr.open('GET', "txtdb/sample.txt", true);
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
      so.setVal("qlist",xhr.responseText);
    }
    if (xhr.readyState === 4 && xhr.status === 0){
      so.setVal("qlist",xhr.responseText);
    }
  };
  xhr.send(null);
  showQ();
};
function showQ(){
var num = so.getVal("num")
var dlist = so.getVal("qlist").split("\r\n");
var nq = dlist[num];
if(nq===undefined){
//問題終了時の処理
  so.divIH("question",'問題はこれで終わりです。お疲れ様でした。<br><b><a href="../">戻る</a></b>');
  so.displayNone("c1b");
  so.displayNone("c2b");
  so.displayNone("c3b");
  so.displayNone("c4b");
}else{
var nqlist = nq.split("|");
if(nqlist[0]=="c4"){
so.divIH("question",nqlist[1]);
so.setVal("c1b",nqlist[2]);
so.setVal("c2b",nqlist[3]);
so.setVal("c3b",nqlist[4]);
so.setVal("c4b",nqlist[5]);
so.setVal("ansnum",nqlist[6]);
}else{
so.divIH("question",'不明な識別子が見つかりました。<br>一旦Top画面へお戻りください。<br><b><a href="../">戻る</a></b>');
}
}
}
function answer(n){
var answer = so.getVal("ansnum");
if(answer == n){
so.modal.ms("OK!!","正解です。");
so.modal.cTime(1500);
setTimeout("showQ()",1500);
so.setVal("num",parseInt(so.getVal("num")) + 1);
}else{
so.modal.ms("Oops!!","不正解です。<br>正解するまでは、先に進めません");
so.modal.cTime(2500);
}
}
