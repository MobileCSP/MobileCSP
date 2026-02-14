.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Tracing Pseudocode Exercises
============================
       
.. raw:: html
    
     <div class="MCSP-lesson-content">	
	<h3 id="est-length">Time Estimate: 45 minutes</h3>

Introduction and Goals
------------------------

.. raw:: html	
	
	<p><b>Tracing</b> is a technique used to simulate a dry run through the code or pseudocode line by line by hand  as if you are the computer executing the code. Tracing can be used for debugging or proving that your program runs correctly or for figuring out what the code actually does.  <b>Trace tables</b> can be used  to track the values of variables as they change throughout a program. To trace through code, write down a variable in each column of the trace table and keep track of its value throughout the program. Some trace tables also keep track of the output and the line number you are currently tracing.


Learning Activities
--------------------

.. raw:: html
	 
	 </p><p>For example, here is a simple algorithm that adds x to the total every time through the loop which is executed 3 times. 
	</p><pre>x ← 2
	total ← 0
	REPEAT 3 TIMES 
	{
	 total ← total + x
	}
	DISPLAY(total)
	</pre>
	<p>Try tracing through the code and see if your results match the trace table below:</p>
	<table border="">
	 <tbody><tr><th><u>x</u></th><th><u>total</u></th><th><u>Output</u></th></tr>
	 <tr><td>2</td><td>0</td></tr>
	 <tr><td></td><td>2</td></tr>
	 <tr><td></td><td>4</td></tr>
	 <tr><td></td><td>6</td><td>6</td></tr>
	</tbody></table>
	<br>
	
	<div class="pogil yui-wk-div">
	 <h3>POGIL Activity for the Classroom </h3> 
	 <p>Break into POGIL teams of 4 and assign each team member one of the following roles. Record your answers <a href="https://docs.google.com/document/d/1YG1aKf7XP2gMxEhKSxQ8w6zqZNlYd1QRILuOT1Uqq8Q/edit" target="_blank">using this worksheet</a>. (File-Make a Copy to have a version you can edit.)</p>
	   <table>
	     <tbody><tr><th>Role</th><th>Responsibility</th></tr>
	     <tr>
	       <td>Facilitator</td>
	       <td>Reads the questions aloud, keeps track of time and makes sure everyone contributes appropriately.</td>
	     </tr>
	     <tr>
	       <td>Spokesperson</td>
	       <td>Talks to the instructor and other teams. </td>
	     </tr>  
	     <tr>
	       <td>Quality Control</td>
	       <td>Records all answers &amp; questions, and provides team reflection to team and instructor.</td>
	     </tr>
	     <tr>
	       <td>Process Analyst</td>
	       <td>Considers how the team could work and learn more effectively.</td>
	     </tr>
	 </tbody></table>
	 
	 <b>Writing and Tracing Pseudocode:  Critical Thinking Questions</b>

	 <p>Suppose we have a list of numbers -- e.g.,  5,  10, -2,  -3, 7,  8,  12
	 Here's an algorithm that uses sequence, selection, and iteration (repetition) to add all 
	 the <b><i>even numbers</i></b> in the list and print out their sum.
	 
	 Notice how indentation and curly brackets are used to clarify the different parts of the algorithm.</p>
	 <pre> 
	1  total ← 0      (Set total to 0)
	2  FOR EACH number IN list  
	3  {
	4     IF (EVEN(number)) 
	5     {
	6        total ← total + number    (Set total to the current total + number)
	7     }
	8  }
	9  DISPLAY(total)
	 </pre>
	
	 <p>This algorithm contains  examples of all three types of control structures, sequence, selection, and repetition.  The lines are numbered for convenience.</p>
	 <ol>
	   <li>Which line(s) of the algorithm contain a repetition control structure? Remember a control structure
	     can consist of multiple statements.
	   </li>
	   <li>Which line(s) of the algorithm contain a selection control structure?       
	   </li>
	   <li>(<b>Portfolio</b>) If you ran this algorithm on the list of numbers, 5,  10, -2,  -3, 7,  8,  12, what would it print? When tracing through an algorithm, write down the variables (total and number) and pretend you are the computer executing each line of code and change the values of the variables on your paper as needed.</li>
	   <li>(<b>Portfolio</b>) Suppose you had a list of positive numbers such as 
	     5, 10, 12, 13, 6, 7, 1, 3, 2, 1.  And suppose  for each of the numbers in the list 
	     you added the number to a running total if it is even and subtracted it if it is odd, starting the total at 0. 
	     What result would you get for this list of numbers?
	   </li>
	   <li>(<b>Portfolio</b>) Write a pseudocode algorithm that implements the algorithm you 
	     used to calculate this total. Make sure that you use AP CSP text-style pseudocode.
	   </li>
	 </ol>
	 
	</div>
	<br>
	
Summary
-------

In this lesson, you learned how to trace through code.
	 
	
Self-Check
----------
    
.. mchoice:: mcsp-8-5-1
    :random:
    :practice: T
    :answer_a: Displays all the odd numbers between 1 and 100.
    :feedback_a: 
    :answer_b: Displays all the even numbers between 1 and 100.
    :feedback_b: 
    :answer_c: Displays all the numbers between 1 and 100.
    :feedback_c: 
    :answer_d: Displays 1.
    :feedback_d: 
    :correct: a

	What does the following code do?
	
	.. raw:: html
	
		<pre>
		i ← 1
		REPEAT UNTIL i >= 100
		DISPLAY i
		i ← i + 2
		</pre>

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

.. fillintheblank:: repl-mcsp-8-5-2
    :casei:

	Consider the following pseudocode algorithm:
    
	.. raw:: html
    
		<pre>
		P ← 1  (Set P to 1)
		N ← 4  (Set N to 4)
		REPEAT UNTIL (N = 0)
		{   
			P ← P * N  (Set P to the result of multiplying P by N)
			N ← N - 1  (Subtract 1 from N)
		}
		DISPLAY(P)
		</pre>

    What result would be printed by this algorithm? |blank|

    - :24: Correct.  This is an algorithm that will calculate the factorial.  The factorial of 4 is 4 x 3 x 2 x 1 which equals 24.
      :x: Correct.  This is an algorithm that will calculate the factorial.  The factorial of 4 is 4 x 3 x 2 x 1 which equals 24.

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>
    
.. quizly:: mscp-8-5-3
    
    :quizname: quiz_convert_list_to_string
     <br/>
     
.. quizly:: mcp-8-5-4

	:quizname: quiz_count_nonzeros_in_list_procedure
	<br />
	

	
	
	
Sample AP CSP Exam Question
---------------------------


.. mchoice:: mcsp-8-5-5
	:random:
    :practice: T
    :answer_a: The number 0 is displayed.   
    :feedback_a: 
    :answer_b: The number 6 is displayed.
    :feedback_b: 
    :answer_c: The number 10 is displayed.
    :feedback_c: 
    :answer_d: Nothing is displayed; the program results in an infinite loop.
    :feedback_d: 
    :correct: d

	Consider the following program code. Which of the following best describes the result of running the program code?

	.. raw:: html

		<img alt="" class="yui-img" src="../_static/assets/img/Q20Code.png" style="line-height: 1.22;" title=""/>
	
	
	
	

Reflection: For Your Portfolio
------------------------------

.. raw:: html
	
	<div id="portfolio" class="yui-wk-div">
    <p>
	 Create a page named&nbsp;<i><b>Tracing Pseudocode</b></i> in your portfolio and answer the following questions:</p>
	
	<ol>
	  <li>(<b>POGIL</b>) If you ran the algorithm in the POGIL on the list of numbers, 5,  10, -2,  -3, 7,  8,  12, what would it print? </li>
	 <li>(<b>POGIL</b>) Suppose you had a list of positive numbers such as 
	     5, 10, 12, 13, 6, 7, 1, 3, 2, 1.  And suppose  for each of the numbers in the list 
	     you added the number to a running total if it is even and subtracted it if it is odd.  
	     What result would you get for this list of numbers?
	 </li>
	 <li>(<b>POGIL</b>) Write a pseudocode algorithm that implements the algorithm you 
	     used to calculate this total. Make sure that you use AP CSP text-style pseudocode.
	 </li>
	
	
	
	</ol>
	</div>
	</div>
