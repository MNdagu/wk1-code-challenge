### Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

### Student grade generator
-The code includes an html file linked to a js file.
-The html file has a basic structure including a body with a simple header,a small paraghraph and a button that is used to prompt the user to input a mark and is linked to the function gradeGenerator() in the js file. Once clicked it executes the function.
-The last paragraph in the html file has an id="grade" that is linked to the js file and this is where the grade will be printed.

-In the js file we start by declaring a function gradeGenerator where we declare a variable 'mark' that prompts the user to enter a mark
-If the mark entered is not a number or is greater than 100 it sends an alert to the user 'Please enter a valid number for your mark.'.
-What follows is the if else statement for the grading system. A phrase is outputted according to the mark entered
-   A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.