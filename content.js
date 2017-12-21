if(document.getElementById("resultStats")!==null){document.getElementById("resultStats").innerHTML = "There are enough ****ing results for you to see.";}
if(document.getElementById("rhs_title")!==null){document.getElementById("rhs_title").innerHTML = "Whatever ****ing you searched for.";}
if(document.getElementById("swml-upd")!==null){document.getElementById("swml-upd").innerHTML = "Let me be ****ing creepy.";}
if(document.getElementsByClassName("hdtb-mitem hdtb-imb")!==null){
var s = document.getElementsByClassName("hdtb-mitem hdtb-imb");
for(var i = 0; i < s.length; i++){
  s[i].innerHTML = "Be more or less ****ing specific";
}
}
if(document.getElementsByClassName("cwsbc-c cwbd cwsbc1")!==null){
var c = document.getElementsByClassName("cwsbc-c cwbd cwsbc1");
for(var i = 0; i < c.length; i++){
  switch(c[i].id.split("t")[1]){
    case "10":
      c[i].innerHTML = ' <div class="cwbtpl cwdgb-tpl"> <span class="cwbts">**** Back Mode</span> </div> ';
    break;
    case "20":
      c[i].innerHTML = ' <div class="cwbtpl cwdgb-tpl"> <span class="cwbts">A ****ing circle constant</span> </div> ';
    break;
    case "30":
      c[i].innerHTML = ' <div class="cwbtpl cwdgb-tpl"> <span class="cwbts">A ****ing calculus constant</span> </div> ';
    break;
  }
}
}
if(document.getElementsByClassName("cwsbc-c cwbd cwsbc2")!==null){
var d = document.getElementsByClassName("cwsbc-c cwbd cwsbc2");
for(var i = 0; i < d.length; i++){
  switch(d[i].id.split("t")[1]){
    case "11":
      d[i].innerHTML = ' <div class="cwbtpl cwdgb-tpl"> <span class="cwbts">****-sine</span> </div> ';
    break;
    case "21":
      d[i].innerHTML = ' <div class="cwbtpl cwdgb-tpl"> <span class="cwbts">A ****ing ****-sine</span> </div> ';
    break;
    case "31":
      d[i].innerHTML = ' <div class="cwbtpl cwdgb-tpl"> <span class="cwbts">A ****ing tangent</span> </div> ';
    break;
  }
}
}
