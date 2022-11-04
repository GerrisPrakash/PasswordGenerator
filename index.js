let characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// tocheck the commit
function generatePassword(){
    let pass1=document.getElementById("pass1")
    let pass2=document.getElementById("pass2")
    let ans1=""
    let ans2=""
    for(let i=0;i<15;i++){
        ans1+=characters[Math.floor(Math.random()*characters.length)]
    }
    for(let i=0;i<15;i++){
        ans2+=characters[Math.floor(Math.random()*characters.length)]
    }
    
    pass1.textContent=ans1
    pass2.textContent=ans2
}




