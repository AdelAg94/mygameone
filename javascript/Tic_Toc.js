var rows = document.querySelectorAll("td")
var next = document.querySelector("#next")
var Xs = 0
var Os = 0
var eyes = []
var eyesn = 0
var rowsl = [0,1,2,3,4,5,6,7,8]
// Here are Rows calculations
//X in First Row
var XinFR = 0
var XinFRa = []
//X in Second Row
var XinSR = 0
var XinSRa = []
//X in Third Row
var XinTR = 0
var XinTRa = []
//O in First Row
var OinFR = 0
var OinFRa = []
//O in Second Row
var OinSR = 0
var OinSRa = []
//O in Third Row
var OinTR = 0
var OinTRa = []

// Here are Columns calculations
//X in First Column
var XinFC = 0
var XinFCa = []
//X in Second Column
var XinSC = 0
var XinSCa = []
//X in Third Column
var XinTC = 0
var XinTCa = []
//O in First Column
var OinFC = 0
var OinFCa = []
//O in Second Column
var OinSC = 0
var OinSCa = []
//O in Third Column
var OinTC = 0
var OinTCa = []
var Xwin = [XinFRa, XinSRa, XinTRa, XinFCa, XinSCa, XinTCa]
var Owin = [OinFRa, OinSRa, OinTRa, OinFCa, OinSCa, OinTCa]
var counter = 0
var minutes = 0
// This for restart button
var rest = document.querySelector("a")
// These for rows
var FR = document.querySelectorAll("#FR > td")
var SR = document.querySelectorAll("#SR > td")
var TR = document.querySelectorAll("#TR > td")
// These for columns
var FC = document.querySelectorAll("#FC")
var SC = document.querySelectorAll("#SC")
var TC = document.querySelectorAll("#TC")
// These for cross win box like back slash \
var FRFC = document.querySelector("#FR > #FC")
var SRSC = document.querySelector("#SR > #SC")
var TRTC = document.querySelector("#TR > #TC")
// These for cross win box like fore slash /
var FRTC = document.querySelector("#FR > #TC")
var TRFC = document.querySelector("#TR > #FC")
// This to count time on screen
var mycount = document.querySelector("h2")
// This for table border when win
var mytab = document.querySelector("table")
// To change backgroud color
var bgcolcount = 0
var bgcolor = document.querySelector("#bgcolor")
var mybott = document.querySelector("#mybott")
var mytop = document.querySelector("#mytop")
bgcolor.addEventListener("click",function(){

    if(bgcolcount == 2){
        mybott.setAttribute("style" , "background-color: rgba(51, 173, 45,0.4);")
        mytop.setAttribute("style" , "background-color: rgba(51, 173, 45,0.4);")
        bgcolcount+=1;
    }
    else if(bgcolcount == 1){
        mybott.setAttribute("style" , "background-color: rgba(35, 84, 196,0.4);")
        mytop.setAttribute("style" , "background-color: rgba(35, 84, 196,0.4);")
        bgcolcount+=1;
    }
    else if( bgcolcount == 0){
    mybott.setAttribute("style" , "background-color: rgba(196, 63, 63,0.4);")
    mytop.setAttribute("style" , "background-color: rgba(196, 63, 63,0.4);")
        bgcolcount+=1;
    }
    else{
        mybott.setAttribute("style" , "background-color: rgba(142, 93, 194,0.4);")
        mytop.setAttribute("style" , "background-color: rgba(142, 93, 194,0.4);")
        bgcolcount=0;
    }
    

})

function tablewin(){
    if(mytab.getAttribute("style") =="border: 3px solid orange;" ){
        mytab.setAttribute("style", "border: 3px solid black;")
    }
    else{
    mytab.setAttribute("style", "border: 3px solid orange;")
    }
    
}
function mycou(){
    counter+=1
    
    if(counter == 60){
        counter = 0
        minutes+=1
    }
    if(minutes == 0 && counter > 9){
    mycount.textContent = "00 : " + counter
    }
    else if(minutes == 0 && counter < 10){
        mycount.textContent = "00 : 0" + counter
        }
    else if(minutes < 10)
    {
        if(counter > 9){
            mycount.textContent = "0" + minutes + " : "+ counter
            }
        else if(counter < 10){
                mycount.textContent = "0" + minutes + " : 0" + counter
                }
    
    }
    else if(minutes > 9)
    {
        if(counter > 9){
            mycount.textContent =  minutes + " : "+ counter
            }
        else if(counter < 10){
                mycount.textContent =  minutes + " : 0" + counter
                }
    }
}
function winbyrow(){
    for(i of FR){
        if(i.textContent === "X" && !(i == XinFRa[0] || i == XinFRa[1] || i == XinFRa[2])){
        XinFR+=1
        XinFRa.push(i)  
        }
        else if (i.textContent === "O" && !(i == OinFRa[0] || i == OinFRa[1] || i == OinFRa[2])){
            OinFR+=1
            OinFRa.push(i)
         }
    }
    for(i of SR){
        if(i.textContent === "X" && !(i == XinSRa[0] || i == XinSRa[1] || i == XinSRa[2])){
        XinSR+=1
        XinSRa.push(i)
        }
        else if (i.textContent === "O" && !(i == OinSRa[0] || i == OinSRa[1] || i == OinSRa[2])){
            OinSR+=1
            OinSRa.push(i)
         }
    }
    for(i of TR){
        if(i.textContent === "X" && !(i == XinTRa[0] || i == XinTRa[1] || i == XinTRa[2])){
        XinTR+=1
        XinTRa.push(i)
        }
        else if (i.textContent === "O" && !(i == OinTRa[0] || i == OinTRa[1] || i == OinTRa[2])){
            OinTR+=1
            OinTRa.push(i)
         }
    }
    
}
function winbycol(){
    for(i of FC){
        if(i.textContent === "X" && !(i == XinFCa[0] || i == XinFCa[1] || i == XinFCa[2])){
        XinFC+=1
        XinFCa.push(i)
        }
        else if (i.textContent === "O" && !(i == OinFCa[0] || i == OinFCa[1] || i == OinFCa[2])){
            OinFC+=1
            OinFCa.push(i)
         }
    }
    for(i of SC){
        if(i.textContent === "X" && !(i == XinSCa[0] || i == XinSCa[1] || i == XinSCa[2])){
        XinSC+=1
        XinSCa.push(i)
        }
        else if (i.textContent === "O" && !(i == OinSCa[0] || i == OinSCa[1] || i == OinSCa[2])){
            OinSC+=1
            OinSCa.push(i)
         }
    }
    for(i of TC){
        if(i.textContent === "X" && !(i == XinTCa[0] || i == XinTCa[1] || i == XinTCa[2])){
        XinTC+=1
        XinTCa.push(i)
        }
        else if (i.textContent === "O" && !(i == OinTCa[0] || i == OinTCa[1] || i == OinTCa[2])){
            OinTC+=1
            OinTCa.push(i)
         }
    }
   
}
function winbycrs(X_or_O){
    if(FRFC.textContent == X_or_O && SRSC.textContent == X_or_O && TRTC.textContent == X_or_O)
    {   tablewin()
        FRFC.setAttribute("style","background-color: green;")
        SRSC.setAttribute("style","background-color: green;")
        TRTC.setAttribute("style","background-color: green;")
        if(X_or_O == "X"){
        
        setTimeout(goalertx, 1000)
        }
        if(X_or_O == "O"){
        setTimeout(goalerto, 1000)
        }
        setTimeout(unfil, 1000)
        
    }
    else  if(FRTC.textContent == X_or_O && SRSC.textContent == X_or_O && TRFC.textContent == X_or_O)
    {   tablewin()
        TRFC.setAttribute("style","background-color: green;")
        SRSC.setAttribute("style","background-color: green;")
        FRTC.setAttribute("style","background-color: green;")
         if(X_or_O == "X"){
        setTimeout(goalertx, 1000)
        }
        if(X_or_O == "O"){
        setTimeout(goalerto, 1000)
        }
        setTimeout(unfil, 1000)
        
    }
}
function changecolor(){
    for(r of Xwin){
        console.log(r.length)
    if(r.length == 3)
    { console.log(r)
        for(w of r)
        {
            w.setAttribute("style" , "background-color : green;")
        }
    }
    for(r of Owin){
        console.log(r.length)
    if(r.length == 3)
    { console.log(r)
        for(w of r)
        {
            w.setAttribute("style" , "background-color : green;")
        }
    }
}
}
}
function goalertx(){
    alert("مبروك ! ! ! \n فاز اكس ")
}
function goalerto(){
    alert("مبروك ! ! ! \n فاز او ")
}
function unfil(){
    for(i of rowsl){
        rows[i].setAttribute("style" , "background-color : white;")
        rows[i].textContent = " "
        Xs = 0
        Os = 0
        eyes = []
        eyesn = 0
        XinFR = 0
        XinFRa = []
        //X in Second Row
         XinSR = 0
         XinSRa = []
        //X in Third Row
         XinTR = 0
         XinTRa = []
        //O in First Row
         OinFR = 0
         OinFRa = []
        //O in Second Row
         OinSR = 0
         OinSRa = []
        //O in Third Row
         OinTR = 0
         OinTRa = []
        
        // Here are Columns calculations
        //X in First Column
         XinFC = 0
         XinFCa = []
        //X in Second Column
         XinSC = 0
         XinSCa = []
        //X in Third Column
         XinTC = 0
         XinTCa = []
        //O in First Column
         OinFC = 0
         OinFCa = []
        //O in Second Column
         OinSC = 0
         OinSCa = []
        //O in Third Column
         OinTC = 0
         OinTCa = []
         counter = 0
         minutes = 0
         Xwin = [XinFRa, XinSRa, XinTRa, XinFCa, XinSCa, XinTCa]
         Owin = [OinFRa, OinSRa, OinTRa, OinFCa, OinSCa, OinTCa]
         // To clear table orange border
         mytab.setAttribute("style", "border: 1px solid black")
    }
}
function checkrow(row){
    var newrows = []
    for (i of rowsl){
        if(row != rows[i] && !(i == eyes[0] || i == eyes[1] || i == eyes[2] || i == eyes[3] || i == eyes[4] || i == eyes[5] || i == eyes[6] || i == eyes[7] || i == eyes[8])){
            newrows.push(rows[i])
        }
        
    }
    for (i of newrows){
        i.textContent = " "
    }
    console.log("These are the empty boxes: " + newrows)
}
function tick(row){

 var submitted = "No"
 for (i of eyes)
    {
        if (row == rows[i])
        {
            submitted = "Yes"
        }
    }
 if (submitted === "Yes")
    {
    
    }
 else{
    checkrow(row)

    
    if (Xs === Os)
    {
        if (row.textContent === "X"){
            row.textContent = "O";
        }
        else if( row.textContent === "O"){
            row.textContent = " " 
        }
        else if(row.textContent === null || row.textContent === "" || row.textContent === " "){
        row.textContent = "X"
        }
    }
    else if (Xs > Os)
    {
        if(row.textContent === null || row.textContent === "" || row.textContent === " "){
            row.textContent = "O"
            }
        else{
            row.textContent = " " 
        }
    }
    else if (Xs < Os)
    {
        if(row.textContent === null || row.textContent === "" || row.textContent === " "){
            row.textContent = "X"
            }
        else{
            row.textContent = " " 
        }
    }
    
    }
}

next.addEventListener("click", function(){
    
    // This for will add Xs and Os values and hold filled rows
    for(i of rowsl){
        if (rows[i].textContent === "X" && !(i == eyes[0] || i == eyes[1] || i == eyes[2] || i == eyes[3] || i == eyes[4] || i == eyes[5] || i == eyes[6] || i == eyes[7] || i == eyes[8]) && Xs < 4 ){
            
            Xs+=1
            eyes.push(i)
            eyesn+=1
                
            
        
        }
        else if (rows[i].textContent === "O" && !(i == eyes[0] || i == eyes[1] || i == eyes[2] || i == eyes[3] || i == eyes[4] || i == eyes[5] || i == eyes[6] || i == eyes[7] || i == eyes[8])  && Os < 4){
            
            Os+=1
            eyes.push(i)
            eyesn+=1
                
            
           
        }
        else if (Xs > 3 && rows[i].textContent === "X" && !(i == eyes[0] || i == eyes[1] || i == eyes[2] || i == eyes[3] || i == eyes[4] || i == eyes[5] || i == eyes[6] || i == eyes[7] || i == eyes[8]))  {
            
            alert("No way to add X now")
            rows[i].textContent = " "
        }  
        else if (Os > 3 && rows[i].textContent === "O" && !(i == eyes[0] || i == eyes[1] || i == eyes[2] || i == eyes[3] || i == eyes[4] || i == eyes[5] || i == eyes[6] || i == eyes[7] || i == eyes[8])) {
            alert("No way to add O now")
            rows[i].textContent = " "
        }
        else{

        }
  
    }
    // This will check if the game won by rows
    winbyrow()
    // This will check if the game won by columns
    winbycol()
    if (XinFR == 3 || XinSR == 3 || XinTR == 3 || XinFC == 3 || XinSC == 3 || XinTC == 3 )
    {   tablewin()
        changecolor()
        setTimeout(goalertx, 1000)
        setTimeout(unfil, 1000)
        
        
        
    }
    if (OinFR == 3 || OinSR == 3 || OinTR == 3 || OinFC == 3 || OinSC == 3 || OinTC == 3 )
    {
        tablewin()
        changecolor()
        setTimeout(goalerto, 1000)
        setTimeout(unfil, 1000)
        
    }
    // This to check cross wins by backslash \
    winbycrs("X")
    winbycrs("O")
    console.log("There are number of X: " + Xs)
    console.log("There are number of O: " + Os)
    console.log("Number of I s: " + eyesn)
    console.log("Filled I s are : " + eyes)
})
rest.addEventListener("click",function(){unfil()})
rows[0].addEventListener("click",function(){ tick(rows[0]);})
rows[1].addEventListener("click",function(){ tick(rows[1]);})
rows[2].addEventListener("click",function(){ tick(rows[2]);})
rows[3].addEventListener("click",function(){ tick(rows[3]);})
rows[4].addEventListener("click",function(){ tick(rows[4]);})
rows[5].addEventListener("click",function(){ tick(rows[5]);})
rows[6].addEventListener("click",function(){ tick(rows[6]);})
rows[7].addEventListener("click",function(){ tick(rows[7]);})
rows[8].addEventListener("click",function(){ tick(rows[8]);})
setInterval(mycou, 1000)
