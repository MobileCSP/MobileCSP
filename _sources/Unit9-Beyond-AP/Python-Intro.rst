.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Introduction to Python
==============================================

.. figure:: ../../_static/assets/img/python-logo.png
    :width: 200px
    :align: left

Python is a very popular text-based programming language used in software development, web development, cybersecurity, data analysis, artificial intelligence, etc. Python is a great language for beginners to learn because it is easy to read and understand. Let's try some Python!

Python Output
-------------------

Python has a built-in function called ``print`` that can be used for output to display text on the screen. The following code will display the text "Hello World!" on the screen. Try it out by clicking the "Run" button. Then, change "World" to your name and run the code again.

Notice that every Python command to the computer must be on a separate line.

.. activecode:: py-hello
    :language: python
    :autograde: unittest

    Run the following code. Then, change "World" to your name and run the code again.
    ~~~~
    print("Hello World!")
    print("Good bye!")
    
.. hparsons:: py-hparsons-print1
    :language: python
    :randomize:
    :blockanswer: 0 1 2 3

    Put the blocks in order to create a print statement. There are extra blocks that you don't need.
    ~~~~
    --blocks--
    print
    (
    "Hello World!"
    )
    ;


Debugging
-----------

**Syntax errors** are bugs or mistakes in the way the code is written. For example, the following code has a syntax error because the quotes and parenthesis are not closed. Try running the code and see what happens. Try fixing the errors to debug the code.

.. activecode:: py-bugs1
    :language: python

    Run the following code. Fix the errors and run again.
    ~~~~
    print("Hello World!

Python Variables
----------------

**Variables** are names for memory locations to store values. In Python, a variable is created when a value is assigned to it. For example, the following code creates a variable named ``name`` and assigns it the value ``"Rain"``. Then, it creates a variable named ``age`` and assigns it the value ``16``. Multiple values can be printed out separated by commas. The variables, name and age, are never put inside quotes because we do not want to print the variable names; we want to print the values stored in the variables.

.. code-block:: python

   name = "Rain"
   age = 16
   print(name, "is", age, "years old.")

Try changing the variable values in the code below and run it to see what happens.

.. activecode:: py-variables
    :language: python

    Try changing "Rain" to your name and 16 to your age in the code below and run it to see what happens.
    ~~~~
    name = "Rain"
    age = 16
    print(name, "is", age, "years old.")

.. hparsons:: py-hparsons-print2
    :language: python
    :randomize:
    :blockanswer: 0 1 2 3 4 5 6 7 

    Put the blocks in order to create a print statement with a variable ``name``. For example, if ``name = "Alex"``, it will print "Hello Alex!". There are extra blocks that you don't need.
    ~~~~
    --blocks--
    print
    (
    "Hello ",
    name
    ,
    "!"
    )
    "name"
    !

Python Input
------------

Python has an input function that can be used to get input from the user. The following code will ask the user for their name and then print out a greeting. Try it out by clicking the "Run" button.

.. activecode:: py-input
    :language: python

    Run the following code. Enter your name in the pop up input box and then scroll down to see the output.
    ~~~~
    name = input("What is your name? ")
    print("Hello", name)

.. hparsons:: py-hparsons-input1
    :language: python
    :randomize:
    :blockanswer: 0 1 2 3 4 5 

    Put the blocks in order to create an input statement. 
    ~~~~
    --blocks--
    age 
    = 
    input
    (
    "What is your age?"
    )
    

Story Project
--------------

Let's make a poem or a story using input and variables. Ask the user to input different nouns and verbs, and weave together a story.

.. activecode:: py-story
    :language: python

    Finish the input statements below to ask the user for 2 colors and a food item. Run to see the silly poem. Then, ask the user for more input words and create your own poem or story using the variables in print statements.
    ~~~~
    # Get user input
    pluralnoun1 = input("Enter a plural noun: ")
    pluralnoun2 = input("Enter another plural noun: ")
    # Complete 3 input statements below 
    color1 = input(            )
    color2 = 
    food = 
    # create 2 more variables and input statements

    # Run to see the silly poem
    print("Here's my silly poem!")
    print("Roses are " + color1)
    print(pluralnoun1 + " are " + color2)
    print("I like " + food)
    print("Do " + pluralnoun2 + " like them too?")
    # Add at least 2 more lines to the poem
    # using print and your last 2 variables

If statements
--------------

**If statements** are used to make decisions in a program. In Python, the ``:`` is used after ``if`` and ``else`` conditions. The statements under the if clause must all be indented and lined up under the if. 

.. code-block:: python

   if condition:
       # do something
   else:
       # do something else

The condition in an if statement usually tests a variable with a relation operator such as ``==`` to see if it is equal to a value or expression, or ``<`` less than, ``>``, etc. 

The following code will ask the user for their age and then print out a message depending on whether they are old enough to drive. Note that the input is converted to a number using the ``int`` function which stands for an integer number. Try it out by clicking the "Run" button.

.. activecode:: py-if
    :language: python

    Run the following code twice trying an age under 16 and one over 16. Try adding extra print statements under the if or else blocks. Make sure you indent and line them up!
    ~~~~
    age = int(input("How old are you? "))
    if age >= 16:
        print("You are old enough to drive.")
    else:
        print("You are not old enough to drive.")


.. parsonsprob:: py-parsons-if
   :numbered: left
   :practice: T
   :adaptive:

   The following program could be used at a movie theater to ask for your age to determine whether you are old enough to watch a PG-13 rated movie. The blocks have been mixed up and include extra blocks that aren't needed in the solution (choose between a and b blocks).  Drag the needed blocks from the left and put them in the correct order on the right.  Make sure you indent correctly! Click the *Check* button to check your solution. Click on *Help* if you get stuck.
   -----
   age = input("Please enter your age:")
   =====
   if age >= 13:
   =====
   if age <= 13: #paired
   =====
       print("Enjoy the film!")
   =====
   else: 
   =====
   else #paired
   =====
       print("You must be 13 years old to watch this film")


Adventure Game Project
----------------------

Let's create an adventure game with nested if-else statements.

.. activecode:: py-adventure
    :language: python

    Create an adventure game with nested if-else statements. Fill in the ...'s in the print statements and add more if statements for different choices in the adventure.
    ~~~~
    action = input ("You are in .... What do you want to do? Type left or right. Then click OK or press enter.")
    if action == "left":
        action = input ("You turn left and see a .... What do you want to do? Type: run or stay. Then click OK or press enter")
        if action == "run":
            print("You choose to run.")
            print("...")
        else:
            print("You choose to stay.")
            print("...")
    # First level
    if action == "right":
        action = input ("You turn right and see a .... What do you want to do?")
        # continue the game with another if statement here
        

    print("End of Game. Click on Run to try the adventure again.")

Python Turtles and Functions
-----------------------------

Python has a ``Turtle`` library where turtle objects can move around on the screen and draw pictures. We can import the library and set up the drawing space and the turtle with the following code:

.. code-block:: python

   from turtle import *        # use the turtle library
   space = Screen()            # create a turtle space
   yertle = Turtle()           # create a turtle named yertle

The Turtle object ``yertle`` can be used to call **functions** to move the turtle around the screen. For example, the following code will move the turtle forward 100 pixels, turn it left 90 degrees, and move it forward 100 pixels again. The amount of movement or turning is put in parentheses after the function name. These are called **arguments** in the function call. 

.. code-block:: python

   yertle.forward(100)         # move forward 100 pixels
   yertle.left(90)             # turn left 90 degrees
   yertle.forward(100)         # move forward 100 pixels

Try running the following code to see what happens. Then, try to make the turtle complete the square.

.. activecode:: py-turtle1
    :language: python

    Run the following code. Can you make the turtle complete the square?
    ~~~~
    from turtle import *      
    space = Screen()          
    tina = Turtle() 
    tina.shape("turtle") 
    tina.forward(100)         
    tina.right(90)          
    tina.forward(100)       


Turtle Project
--------------

.. activecode:: py-turtle-project
    :language: python

    Change the code below to draw something with the turtle. The code below also shows how to change colors, fill in colors, lift up the pen, and draw dots. You could draw a flower, a house for the turtle, a smiley face, or anything you want.
    ~~~~
    from turtle import *      
    space = Screen()          
    tina = Turtle() 
    tina.shape("turtle") 
    tina.color("blue")       # set pen color to blue    
    tina.fillcolor("green")  # set fill color to green     
    tina.begin_fill()        # start filling in the shape 
    # draw a closed shape
    tina.forward(100)         
    tina.right(90)
    tina.forward(100)
    tina.right(90)
    tina.forward(100)
    tina.right(90)
    tina.forward(100)
    tina.end_fill()         # end filling in the shape 

    tina.penup()            # put pen up so it doesn't draw
    tina.forward(150)       # move without drawing
    tina.pendown()          # put pen down so it draws

    tina.dot(20, "red")   # draw a red dot of size 20

