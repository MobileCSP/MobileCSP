.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Python Loops and Lists
==============================================

.. figure:: ../../_static/assets/img/python-logo.png
    :width: 200px
    :align: left

Python Loops
-------------

**Loops** are used to repeat a block of code. In Python, the ``:`` is used after ``for`` and ``while`` loops. The ``for`` uses a counter variable, often ``i`` for index that is incremented every time in the loop within a ``range`` of values including the initial value in the range and up to but not including the last value in the range.  The statements under the loop must all be indented and lined up under the ``for``.

.. code-block:: python

   # loop 10 times from 0 to 9
   for i in range(10):
       # do something
    
   # loop from initial value up to final value
   for i in range(initial, final):
       # do something
       # do something


The following code will print out the numbers 1 to 10. Try it out by clicking the "Run" button. Click on the CodeLens button and then next to step through the code line by line and see the ``i`` variable change.

.. activecode:: py-for-loop
    :language: python

    Run the following code. Then, change the range to print out the numbers 1 to 20. CLick on the *Show CodeLens* button and then click repeatedly on the *Next* button to see the value of the variable ``i`` change as the loop runs.
    ~~~~
    for i in range(1, 11):
        print(i)

.. hparsons:: py-hparsons-for-loop
    :language: python
    :randomize:
    :blockanswer: 0 1 2 3 4 5 6 7 8

    Put the blocks in order to create the for loop header to print from 2 to 5. There are extra blocks that you don't need.
    ~~~~
    --blocks--
    for
    number
    in
    range
    (
    2
    ,
    6
    )
    0
    5

.. parsonsprob:: py-parsons-loop
   :numbered: left
   :practice: T
   :adaptive:

   The following program should print out 5 \*'s using a for loop. Drag the needed blocks from the left and put them in the correct order and indentation on the right. Choose between the a and b blocks. The extra blocks are not needed in the solution. Click the *Check* button to check your solution. Click on *Help* if you get stuck.
   -----
   for i in range(5):
   =====
   for i in range(1,5): #paired
   =====
       print("*")
   =====
   print(*) #paired


Let's use a loop with a turtle to draw a square.

.. activecode:: py-turtle-loop
    :language: python

    Run this code to have the turtle draw a square using a loop. Can you make the turtle draw a hexagon? How many times does the loop need to run to draw each side? What should the angle be for each turn? Try different values until you get it to work.
    ~~~~
    from turtle import *      
    space = Screen()          
    tina = Turtle() 
    tina.shape("turtle") 

    for i in range(4):
        tina.forward(100)         
        tina.right(90)


Python Lists
---------------

**Lists** in Python are indicated with square brackets: [].

.. code-block:: python

   # create a list of numbers
   numbers = [1, 2, 3, 4, 5]
   # create a list of strings
   animals = ["cat", "dog", "bird", "fish"]
   print(animals)

Lists in Python are numbered starting from 0. The list name can be followed by the square brackets with an index number in it to retrieve the element at that index. For example ``animals[0]`` will return the first element in the list. Change the index variable below to see what is printed out. 

.. activecode:: py-list-index
    :language: python

    Run the following code. Change the index i to another number and run again.
    ~~~~
    animals = ["cat", "dog", "bird", "fish"]
    print( animals[0] )
    i = 2
    print( animals[i] )

Loops are often used to go through a list of items. In fact, the ``range`` function we used in the ``for`` loops above actually creates a list of numbers. Instead of ``range``, we can simply use the list name in a ``for`` loop to visit each item in the list. 

.. code-block:: python

   # loop through a list of numbers
   for number in numbers:
       # do something
   # loop through a list of strings
   for animal in animals:
       # do something

The following code will print out each item in the list on a separate line.

.. activecode:: py-list-loop
    :language: python

    Run the following code. Add more animals to the list and run it again. 
    ~~~~
    animals = ["cat", "dog", "bird", "fish"]
    for animal in animals:
        print(animal)


.. parsonsprob:: py-parsons-list
   :numbered: left
   :practice: T
   :adaptive:

   The following program should calculate and print the average of a list of numbers using a for loop. Start by initializing the variable ``sum`` and then create the list of numbers.  The blocks have been mixed up and include extra blocks that are not needed in the solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   sum = 0
   =====
   numbers = [90, 94, 85, 78, 87, 98]
   =====
   for number in numbers:
   =====
   for sum in numbers #paired
   =====
       sum = sum + number
   =====
       sum = sum * number #paired
   =====
   print(sum / 6)
   =====
   print(sum / 5) #paired

Picture Project
----------------

.. figure:: ../../_static/assets/img/student.jpg
    :width: 200px
    :align: left

Photographs and images are made up of **pixels** which are tiny picture elements that color in the image. The color of a pixel is represented using the RGB (Red, Green, Blue) color model, which stores values for red, green, and blue, each ranging from 0 to 255. You can make any color by mixing these values!  

Try the following Color Chooser by moving the sliders to see the RGB values for each color. What is the RGB value for black? What is the RGB value for white? What is the RGB value for purple?

.. raw:: html

    <iframe height="600px" width="100%" style="margin-left:10%;max-width:80%" src="https://www.cssscript.com/demo/rgb-color-picker-slider/"></iframe>


The following code will create a picture from a file and then loop through all the pixels in the picture. It will then change the color of any pixel that is close to white to cyan. This code and project are based on the *Picture Lab* by Dr. Barbara Ericson.

.. activecode:: py-picture-project
    :language: python
    :datafile: kitten.jpg, puppies.jpg, student.jpg

    Run the following code to see how it changes the white background of the image. The original image is above. Can you change the color of the student's hair which is close to black? Can you change the red t-shirt to another color? You can also experiment with the files kitten.jpg and puppies.jpg.
    ~~~~
    from image import *
    
    # CREATE AN IMAGE FROM A FILE
    img = Image("student.jpg")

    # LOOP THROUGH ALL PIXELS
    pixelList = img.getPixels()
    for p in pixelList:
        r = p.getRed()
        g = p.getGreen()
        b = p.getBlue()
          
        # RGB values close to (0,0,0) are black and close to (255,255,255) for white
        if r > 230 and g > 230 and b > 230:
           # CHANGE THE IMAGE
           p.setBlue(255) 
           p.setRed(255)
           p.setGreen(0) 
           img.updatePixel(p)
            
    # SHOW THE CHANGED IMAGE
    window = ImageWin(img.getWidth(),img.getHeight())
    img.draw(window)


You can use the images below to try out your code.

.. datafile:: student.jpg
   :image:
   :fromfile: ../../_static/assets/img/student.jpg

.. datafile:: kitten.jpg
   :image:
   :fromfile: ../../_static/assets/img/kitten.jpg

.. datafile:: puppies.jpg
   :image:
   :fromfile: ../../_static/assets/img/puppies.jpg

