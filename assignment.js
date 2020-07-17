  //feetToMile
  function feetToMlie(feet){
    var mile = feet / 5280;
    return mile;
   }
var roadMile = feetToMlie(100);
var roadMile = roadMile.toFixed(6)
console.log(roadMile);


 //woodCalculator
  function woodCalculator(chair, table, bed){
    var chairWood = chair * 14;
    var tableWood = table * 2;
    var bedWood  =  bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
    }
    var woodNeed =  woodCalculator( 14, 2, 5);
     console.log(woodNeed);

     // brickCalculator

       var h = 21;
       if (h<=10)
        console.log("i is 10");
        else if (11<= h && h<= 20)
         console.log("i is 15");
         else if (h>20)
         console.log("i is 20");
          else 
          console.log("i is not present")




         
     // tinyFriend
     
    //var name = ('eva','ov');
    //console.log(name.length);
   
    functon (name)
       var tinyName = name[0].length;
       for (var i = 0; i<name.length; i++);{
          var currentNumber = name[i];
          if (tinyFriend.length < currentName.length){
             currentName = tinyName;
          }
          return currentName;
       }
     
    
    var smallestName = tinyFriend(['eva','ov']);
    console.log(smallestName);
    
    

        