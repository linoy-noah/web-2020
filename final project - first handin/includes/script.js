
var select
var tableBody
var foods
var flowers
var mails
var mboxes
var gifts

function hideAll(){
    var c = tableBody[0].children.length;
    for(var i=0;i<c;i++){
        tableBody[0].children[i].style.display="none"
    }
}
function showAll(){
    var c = tableBody[0].children.length;
    for(var i=0;i<c;i++){
        tableBody[0].children[i].style.display="table-row"
    }
}
function showFood(){
    hideAll()
    foods = document.getElementsByClassName("food")
    for(var i=0;i<foods.length;i++){
        foods[i].style.display="table-row"
    }
}
function showMail(){
    hideAll()
    foods = document.getElementsByClassName("mailBox")
    for(var i=0;i<foods.length;i++){
        foods[i].style.display="table-row"
    }
}
function showFlower(){
    hideAll()
    foods = document.getElementsByClassName("flowers")
    for(var i=0;i<foods.length;i++){
        foods[i].style.display="table-row"
    }
}
function showGift(){
    hideAll()
    foods = document.getElementsByClassName("giftBox")
    for(var i=0;i<foods.length;i++){
        foods[i].style.display="table-row"
    }
}
function showBox(){
    hideAll()
    foods = document.getElementsByClassName("mysteryBox")
    for(var i=0;i<foods.length;i++){
        foods[i].style.display="table-row"
    }
}

function changeTo4state(event){
    console.log(changeTo4state)

    this.className="o4"
    this.innerHTML=""
    this.onclick = function(){}
    
}
function changeTo3state(event){
    console.log(changeTo3state)
    this.className="o3"
    this.innerHTML="Delivery has arrieved"
    this.onclick =changeTo4state
}
window.onload = function(){
    var i
    var buttonStatus1
    var buttonStatus2
    var buttonStatus3
    var ps
    select=this.document.getElementById("sel2")
    tableBody=this.document.getElementsByTagName("tbody")
    select.onchange = function(){
        console.log(tableBody[0].children[0].className)
        console.log(this.value)
        if(this.value == "all"){
            showAll()
        }
        if(this.value=="food"){
            showFood()
        }
        if(this.value=="mail"){
            showMail()
        }
        if(this.value=="flowers"){
            showFlower()
        }
        if(this.value=="gift"){
            showGift()
        }
        if(this.value=="mysteryBox"){
            showBox()
        }
    }

    buttonStatus1 = document.getElementsByClassName("o1") 
    for (i=0;i<buttonStatus1.length;i++){
        console.log("o1 "+buttonStatus1[i].tagName+" "+i)
        buttonStatus1[i].onclick = function(event){
            
        this.className="o2"
        console.log(this.innerHTML)
        this.innerHTML="I'm on my way!"
            this.onclick = changeTo3state
                
            
        }
    }

    buttonStatus2 = document.getElementsByClassName("o2") 
    for (i=0;i<buttonStatus2.length;i++){
        
        console.log("o2 "+buttonStatus2[i].tagName+" "+i)
        buttonStatus2[i].onclick = changeTo3state
    }
    buttonStatus3 = document.getElementsByClassName("o3") 
    for (i=0;i<buttonStatus3.length;i++){
        console.log("o3  "+buttonStatus3[i].tagName+" "+i)
        buttonStatus3[i].onclick = changeTo4state
    }
    ps =document.getElementsByTagName("P")
    for(i=0;i<ps.length;i++){
        ps[i].onclick = function(){}
    }
}