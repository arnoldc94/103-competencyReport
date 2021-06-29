let characterOneName="Hulk";
let characterOnePoints=100;

let characterTwoName="Thor";
let characterTwoPoints=100;

function displayCharacter(){
    document.getElementById("info-c1").innerHTML=`<p><b>Name:</b> ${characterOneName}</p><p><b>Points:</b> ${characterOnePoints}</p>`;

    document.getElementById("info-c2").innerHTML=`<p><b>Name:</b> ${characterTwoName}</p><p><b>Points:</b> ${characterTwoPoints}</p>`;

}

displayCharacter();

//character one
function oneAttack(){
            document.getElementById("console").innerHTML=`<p>Attacking ... </p`;
        //discount points from the character
        var newPoints=characterTwoPoints-20;
        if(newPoints<0){
             document.getElementById("console").innerHTML=`<p>Game Over...Hulk is the Winner</p>`;
             document.getElementById("btn-attack").style.display="none";
             document.getElementById("btn-attackTwo").style.display="none";
        }else{
            //update the variable
            characterTwoPoints=newPoints;
            //update the display
            displayCharacter(); 
        }
        
    }
    //character two
    function twoAttack(){
        document.getElementById("console").innerHTML=`<p>Attacking ... </p`;
    //discount points from the character
    var newPoints=characterOnePoints-20;
    if(newPoints<0){
         document.getElementById("console").innerHTML=`<p>Game Over...Thor is the Winner</p>`;
         document.getElementById("btn-attack").style.display="none";
         document.getElementById("btn-attackTwo").style.display="none";
    }else{
        //update the variable
        characterOnePoints=newPoints;
        //update the display
        displayCharacter(); 
    }
    
}