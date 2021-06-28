var q=0;
let screen=document.getElementById("res");
function fun1(){
    screen.innerHTML+="0";
}
function fun2(){
    
    screen.innerHTML+="1";
}
function fun3(){
    screen.innerHTML="";
    
}
function fun4(){  
  if(m=='+')
      {
        var k =(screen.innerHTML).indexOf("+");
        var operation=parseInt((screen.innerHTML).substr(k+1),2);
        var a =q+operation;
      }
    else if(m=='-')
    
    {
        var i =(screen.innerHTML).indexOf("-");
        var operation=parseInt((screen.innerHTML).substr(i+1),2);
        var a =q-operation;
    }
     
      else if(m=='*')
    
    {
        var i =(screen.innerHTML).indexOf("*");
        var operation=parseInt((screen.innerHTML).substr(i+1),2);
        var a =q*operation;
    }
      else if(m=='/')
    
    {
        var i =(screen.innerHTML).indexOf("/");
        var operand2=parseInt((screen.innerHTML).substr(i+1),2);
        var a =q/operand2;
    }
     screen.innerHTML=a.toString(2);
}

function fun5(){
    m="+";
    q=parseInt(screen.innerHTML,2);
    screen.innerHTML=screen.innerHTML+"+";
}
function fun6(){
    m="-";
    screen.innerHTML=screen.innerHTML+"-";
}
function fun7(){
    m="*";
    q=parseInt(screen.innerHTML,2);
    screen.innerHTML=screen.innerHTML+"*";
}
function fun8(){
    m="/";
    screen.innerHTML=screen.innerHTML+"/";
}
