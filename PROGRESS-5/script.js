function validateLoginForm(){
      
    //<<------------------ Data type conversion parseInt() simple addition ---------------->>
                // var a='10',b=20;
                // var c= parseInt(a)+b;
                // console.log(c)
    
         // with using using array
              var num=["10","20",30]; 
              var tot=0;   
              for(var i=0; i<num.length;i++)
              {
               tot +=parseInt(num[i]);
                  
              }
              console.log("The total value after addition is: ",tot);
    
    //<<-------------------- substring() is used to print a string till the user-defined length ---------------->>
    
              var content ="Karan is studing in IFET college of engineering and he is living in villupuram";
              console.log(content.substr(0,25),".........");
          
    //<<--------------------- shift() and unshfit() ----------------------------->>
    
       // shift() removes the element from the starting index of an array
              var arr1=[1,2,3];
              arr1.shift();
                console.log("Array after shifting: ",arr1)
    
        // unshift() add the element at the starting index of an array
                var arr=[1,2,3];
                 arr.unshift(-1,0); // User can add more than one element in unshifting function
                console.log("Array after unshifting: ",arr)
           }