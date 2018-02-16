window.onload = function(){
so.setVal("num","0");
var xhr = new XMLHttpRequest();
  xhr.open('GET', "txtdb/sample.txt", true);
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
      so.setVal("qlist",xhr.responseText);
        showQ();
    }
    if (xhr.readyState === 4 && xhr.status === 0){
      so.setVal("qlist",xhr.responseText);
        showQ();
    }
  };
  xhr.send(null);
};
function showQ(){
var num = so.getVal("num")
var dlist = so.getVal("qlist").split(/\r\n|\n/);
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
//識別子を定義
if(nqlist[0]=="c4"){
so.divIH("question",nqlist[1]);
so.setVal("c1b",nqlist[2]);
so.setVal("c2b",nqlist[3]);
so.setVal("c3b",nqlist[4]);
so.setVal("c4b",nqlist[5]);
so.setVal("ansnum",nqlist[6]);
}
if(nqlist[0]=="end"){
  so.divIH("question",'問題はこれで終わりです。お疲れ様でした。<br><b><a href="../">戻る</a></b>');
  so.displayNone("c1b");
  so.displayNone("c2b");
  so.displayNone("c3b");
  so.displayNone("c4b");
}
if(nqlist[0]=="c3"){
so.divIH("question",nqlist[1]);
so.setVal("c1b",nqlist[2]);
so.setVal("c2b",nqlist[3]);
so.setVal("c3b",nqlist[4]);
so.setVal("c4b","×");
so.setVal("ansnum",nqlist[5]);
}
if(nqlist[0]=="c2"){
so.divIH("question",nqlist[1]);
so.setVal("c1b",nqlist[2]);
so.setVal("c2b",nqlist[3]);
so.setVal("c3b","×");
so.setVal("c4b","×");
so.setVal("ansnum",nqlist[4]);
}
}
}
function answer(n){
var answer = so.getVal("ansnum");
if(answer == n){
so.modal.al("OK!!","正解です。");
so.modal.cTime(1500);
setTimeout("showQ()",1500);
so.setVal("num",parseInt(so.getVal("num")) + 1);
}else{
so.modal.al("Oops!!","不正解です。<br>正解するまでは、先に進めません");
so.modal.cTime(2500);
}
}
