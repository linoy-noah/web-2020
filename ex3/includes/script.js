
var changeButton = document.getElementById("change")
var returnButton = document.getElementById("back")
var firstNameLenght = "linoy".length
var lastNameLenght = "noah".length
var show //array of box elements
var counter // current round 
var firstOneShow

changeButton.onclick= function (){
    
    console.log("change background color button press")
    if(counter < lastNameLenght){
        console.log(counter+" Neq " + lastNameLenght)
        
        for(i=counter * firstNameLenght; i < (firstNameLenght * counter)+firstNameLenght ;i++){
            show[i].style.backgroundColor ="blueviolet";
            console.log("set background color to blueviolet")
        }
        counter++
        if(counter>0){
            firstOneShow=0
        }
      }
   
}
 


returnButton.onclick = function(){
    console.log("back to origin background color button press")
    if(counter>0){
        console.log(counter+" Neq " + lastNameLenght)
        for(i=counter * firstNameLenght; i > (counter * firstNameLenght)-(firstNameLenght) ;i--){
            show[i-1].style.backgroundColor = "white";
            console.log("set background color to white")
        }
        counter--
        if(counter<1){
            firstOneShow=1
        }
        
    }
}

window.onload = function(){
    this.counter=0
    console.log("firstNameLengh: "+this.firstNameLenght)
    console.log("lastNameLenght"+this.lastNameLenght)
    console.log("total amount of cards: "+this.lastNameLenght * this.firstNameLenght)
    var boxArea =this.document.getElementById("boxArea")
    for(var i=0;i<this.firstNameLenght*this.lastNameLenght;i++){
        for(var j=0;j<this.firstNameLenght;j++,i++){
             var obj = this.document.createElement("h1")
             obj.innerHTML ="LINOY"[j]
            var newObj=this.document.createElement("div")
            newObj.appendChild(obj)
            boxArea.appendChild(newObj)
            console.log("add card into boxArea")
            newObj.className="card"
            if(i===0){
                newObj.id="firstOne"
                console.log("first card been recognized")
                firstOneShow=1
            }
            
        }
        
    }
    show = document.getElementsByClassName("card")
    var firstBox=document.getElementById("firstOne")
    firstBox.addEventListener("mouseover",function(){if(firstOneShow){firstBox.style.backgroundColor="blueviolet"}})
    firstBox.addEventListener("mouseout", function(){if(firstOneShow){firstBox.style.backgroundColor="white"}});
    
}
