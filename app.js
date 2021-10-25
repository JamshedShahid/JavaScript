// alert("Hello World");


// var firstName = "Jamshed";
// var age = "18";
// var lastName = "Shahid";


// alert(lastName);

// var firstName = "Jamshed";
// var age = "18";
// var lastName = "Shahid";


// alert(firstName);



// var firstName = "Jamshed";
// var age = "18";
// var lastName = "Shahid";


// alert(age);


// god ways
// name11
// Name
// first_Name
// lastName
// $name

// bad ways
// 11name
// *name
// @name 


//  + - * / %
//   var num1 = 200;
//   var num2 = 3000;

//   var total = num1 + num2;

//   alert(total);


//   var num1 = 200;
//   var num2 = 3000;

//   var sum = num1 - num2;

//   alert(sum);

// var num1 = 200;
// var num2 = 3000;

// var mul = num1 * num2;

// alert(mul);



// var num1 = 200;
// var num2 = 3000;

// var div = num1 / num2;

// alert(div);



// var num1 = 2;
// var num2 = 30;

// var mul = 10 % 3;

// alert(mul);



// var result = 2 - 3 + 4 * 5 (10 - 5);
// // var result1 = 2 * 6 - 30 + (10 * 10);

// alert("result");



// var names = "Muhammad";
// var names = "Jamshed";

// alert(names);


// var names = "Muhammad";
// alert(names);
// var names = "Jamshed";

//   alert(names);


// var firstName = "jamshed";
// var num = 10;
// var sum = firstName + num;
 
// alert(sum);


// var num1 = "20";
// var num2 = 10;
// alert(num1 * num2);



// var a =10;
// var b= ++a;
// alert(b);


// var a =10;
// var b= a++;
// // alert(b);
// var c = a;
// alert(c);



// var a = 10;
// var b = ++a + a++ - --a;
//         //11 + 11 - 11
// alert(b);




// var a = 10;
// alert(++a);


// var c = 19;
// var e = c + 20;
// alert(e);



// var j = 10;
// var m = ++j + --j - j++ - --j + j++;
//        //11 + 10 - 10  -  10  +  10  
// alert(m);


// var j = 19;
// var m = ++j + --j - j++ - --j + j++ - j-- + 10 -20;
//        //11 + 10 - 10  -  10  +  10  
// alert(m);



// var name = "jaffar"
// var name = "sir"
// alert(name);



// var  e = 12;
// var re = e++ - ++e - --e + --e + --e;
//          12  -  14 - 13  + 12  +  11
// alert(re); 


// var  t = 18;
// var re = t++ - ++t - --t + --t + --t + --t;
        
// alert(re); 




// var  u = 15;
// var re = u++ - ++u - --u + --u + --u;
         
// alert(re); 



// var userName = prompt("enter Your Name");
// document.write(userName)



// var firstName = prompt("FirtsName");
// var lastName = prompt("lastName");

// document.write(firstName + lastName);



// var firstName = prompt("FirtsName");
// var lastName = prompt("lastName");

// document.write(firstName + "" +lastName);



// var firstName = prompt("FirtsName");
// var lastName = prompt("lastName");

// document.write(firstName + "<br>" + lastName);


var firstName = prompt("Enter  Your Fisrt Name");

var lastName   = prompt("Enter Your Last Name");

var rollNumber = prompt("Enter Roll Number");

var schoolName =prompt("SchoolName");


var engMarks =prompt(" Enter EnglishMarks");


var urduMarks =prompt(" Enter UrduMarks");


var mathMarks =prompt(" Enter MathMarks");


var islMarks =prompt(" Enter IslamiatMarks");


var PhyMarks =prompt(" Enter PhysicsMarks");

var obtaindMarked = parseInt( mathMarks) +  parseInt(urduMarks) +
 parseInt(engMarks) +
  parseInt(islMarks) + 
 parseInt(urduMarks );

 var Percantage = obtaindMarked * 100 / 500;




document.write("First_Name"   +" " + firstName +  "<br>");
document.write( "Last_Name"  +" " + lastName +  "<br> <br>"  )
document.write("roll_Number"  +" " + rollNumber +  "<br> <br>" );

document.write("school_Name"   +" " + schoolName + "<br> <br>" );
document.write("eng_Marks"   +" " +engMarks +  "<br> <br>" );
document.write("urdu_Marks"  +" " + urduMarks + "<br> <br>" );
document.write("math_Marks"  +" " + mathMarks +  "<br> <br>" );
document.write("isl_Marks "  + " "   +islMarks +"<br> <br>" );
document.write("PhyMarks"  +" "   + PhyMarks + "<br> <br>" );
document.write("obtaind_Marked"  +" " +obtaindMarked+ "" + "<br> <br>");
document.write("Percantage"  +" " +Percantage+ "" + "<br> <br>");


