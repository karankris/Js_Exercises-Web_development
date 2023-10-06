 function validateLoginForm(){
      //array concept //push
      // index of and includes
      // To find weather cow is a domestic or a wild animal
    // var wild=[];
    // var domestic=[];
    //  var animals =["lepord","cow","lion","tiger"];
    //  console.log( animals.indexOf("cow") );
    //  console.log(animals.includes("elephant"));
    //  for(var i=0;i<animals.length;i++)
    //  {
    //   if(animals[i]!="cow"){
    //   wild.push(animals[i]);  //It separates the wild animalsv from cow
    //   console.log("Wild animals",animals[i]); //prints all animals expect cow
    //   }
    //   else{
    //     domestic.push(animals[i]); // cow is seperated from the entire array
    //     console.log("Domestic animals",animals[i]); //prints only cow
    //   }
      
    //  }
  
   // indexOF()  in-built function
    var starr = ["karan","varun","karan","maran","maran","kamal","kamal"];
    var dup =[];
    var org=[];
    for(var i=0 ;i<starr.length;i++)
    {
    if(org.indexOf(starr[i])==-1)
    {
       org.push(starr[i]);
    }
    else{
      dup.push(starr[i]);
    }
   }
  console.log("Array of orginal values",org);
  console.log("Array which has the value that is repeated",dup);


  //   // includes()  in-built function
  //   var starr = ["karan","varun","karan","maran","maran","kamal","kamal"];
  //   var dup =[];
  //   var org=[];
  //   for(var i=0 ;i<starr.length;i++)
  //   {
  //   if(org.includes(starr[i])==false)
  //   {
  //      org.push(starr[i]);
  //   }
  //   else{
  //     dup.push(starr[i]);
  //   }
  //  }
  // console.log("Array of orginal values",org);
  // console.log("Array which has the value that is repeated",dup);


          // looping concepts 
          // Similar Problem
          //Given array contains regional languages when user gives a language expect the regional language it must print it is a non-regional language else Regional Language

      // var n = "tamil";
      //  var languages = ["tamil","english","hindi","telugu","malayalam"];
      // for(var i=0 ;i<languages.length; i++)
      // {
        
      //   if(n==languages[i])
      //   {
      //     console.log(" It a  regional language->",n);
      //    break; 
      // }
      // }
      //   if(n!=languages[i]){
      //     console.log(" it is a non regional language",n);
      //   }

// Odd, Even number Program
    // var num=21;
    //  var c=0,ec=0;
   
    // for(i=0;i<=21;i++)
    // {
    //   if(i%2==0)
    //   {
    //     c++;
    //    console.log("even",i);
    //    console.log("even count",c);
    //   }
    //   else{
    //      ec++;
    //     console.log("odd num",i); 
    //      console.log("odd count",ec);
    //   }
    // }
  
 
      // operators, builtin-functions and conditional statements
      // var file = 'karan.jpk';
      // var imgtxt = file.split('.');
      // console.log(imgtxt);
      //     var check = imgtxt[1];
      //     console.log("The returned extension is",check)
      //     if(check == 'png' || check =='jpg')
      //     {
      //       console.log("valid format");
      //     }
      //     else{
      //       console.log("Invalid format");
      //     }

    }
// <!-- //Notes for javascript -->
// <!-- // console.log(" email and password",document.getElementById("email").value); -->
// <!-- // function getCountry(){
//   //     console.log(" country");
//   // }
//   // function trigger()
//   // {
//   //     console.log(" username");
//   // }
//   // onclick
//   // onchange
//   // onkeydown
//   // onkeyup
//   // onmouseover
//   // onkeypress
//   // onblur
// // declerations
// // var let const -->
