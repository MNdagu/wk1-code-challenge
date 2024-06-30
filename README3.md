### Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

### Solution
-The code consists of an html file and a js file
-The htnl file has a basic structure
he html file has a simple structure with an input tag where we enter our basic salary and benefits amount. These values are linked to the js file using the id names specified.
-It also has a button tag that when clicked on,executes the code in our function in the js file.
-Finally in its last paragraph tag we have the id "result" to link the two files and it will print out the result of the code executed in the js file.

-In the js file we have the function calculator()
-The variables gross,paye,nhif,nssf and net are declared and assigned their respective variables.
-Finally we print out the results using the innerHTML property,