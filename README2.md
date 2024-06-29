### Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.


### Solution
-The code has an html file and a js file linked together.
-The html file has a simple structure with an input tag where we enter our speed value
-It also has a button tag that when clicked on,executes the code in our function in the js file.
-Finally in its last paragraph tag we have the id "print" to link the two files and it will print out the result of the code executed in the js file.

-In our js file we have the function speedDetector()
-In it we declare 'speed' as a variable whose value is that which will be entered in the input box in our document
-We then make use of nested if statement to meet the conditions given to us by the question
-The variable 'points' is initially declare as 0 and then reassigned in our if statement to equal (speed - 70) / 5 which will enable us to calculate the demerit points.