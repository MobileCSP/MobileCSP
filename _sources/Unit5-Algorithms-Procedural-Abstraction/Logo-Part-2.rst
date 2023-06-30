.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Logo Part 2
===========

.. raw:: html

        <div class="MCSP-lesson-content">
    <script>
      $(document).ready(function() {
        generateSummary(EKmapping['5.02']);
        generateHovers();
        Tipped.create('.vocab', function(element) {
        var vocab = $(element).data('id');
        return vocabulary[vocab];
          }, {
            cache: false,
              position: 'topleft'
              });
      });
    </script>
    <!-- can use: #self-check, #still-curious, .pogil, #portfolio -->
    <h3 id="est-length">Time Estimate: 45 minutes</h3>

Introduction and Goals
-----------------------

.. raw:: html

    <p>
    <!-- &lt;img src=&quot;assets/img/circleflower.png&quot; width=&quot;150&quot; vspace=&quot;10&quot; hspace=&quot;10&quot; align=&quot;left&quot;&gt;-->

    <table>
    <tbody>
	<tr>
		<td colspan=2>
		 In this lesson you will design, implement, and test algorithms to draw complex shapes using Logo commands. For example, you will write an algorithm to draw shapes and flowers as shown in the video below.     
		</td>
	</tr>
	<tr>
		<td colspan=2>
			For this set of exercises we will be using a more powerful set of abstractions for forward and turn:<br/>
			<ul>
			<li>The <b>forward(N)</b> command moves the Android <b>forward by N pixels</b>.</li>
			<li>The <b>turn(D)</b> command causes the Android to <b>turn right by D degrees</b>.</li>
			</ul>
		</td>
	</tr>
    <tr>
		<td valign="top"><iframe allowfullscreen="" frameborder="0" height="315" src="https://www.youtube-nocookie.com/embed/gopOXnrTUHE" width="275"></iframe></td>
		<td valign="top">
			<div><b>Learning Objectives:</b>&nbspI will learn to</div>
			<ul>
			<li>use Logo commands to draw shapes</li>
			<li>incorporate <span class="hover vocab yui-wk-div" data-id="parameters">parameters</span> into my procedures</li>
			<li>define my own procedures - my own abstractions - to draw more complex shapes</li>
			</ul>
			<div><b>Language Objectives:</b>&nbspI will be able to</div>
			<ul>
			<li>explain how writing procedures manages the complexity of my program</li>
			<li>explain why adding well-defined <span class="hover vocab yui-wk-div" data-id="parameters">parameters</span> makes procedures more abstract</li>
			<li>use target vocabulary, such as <span class="hover vocab yui-wk-div" data-id="parameters">parameters</span> <span class="hover vocab yui-wk-div" data-id="arguments">arguments</span> while describing app features and User Interface with the support of concept definitions and <a href="https://docs.google.com/presentation/d/1-IY5fs_ygKlgwUGBD9nX_tx_tFerN7pEeQvdgQIwrdw/copy" target="_blank" title="">vocabulary notes</a> from this lesson</li>
			</ul>
		</td>
    </tbody>
    </table>
    
Learning Activities
--------------------

.. raw:: html

    <ul align="center" style="list-style: none; margin: 0; padding: 0; background: lightgrey">
	<li style="display: inline"><a href="https://docs.google.com/document/d/1_iNgovLKL7ZCu8ZV2wDb6v5NZ9A7qXA_bNQ76gG3KQ8/edit?usp=sharing" target="_blank" title="">text-version</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://docs.google.com/document/d/1tZeVSg6MijkG6hA6_irNuAGbd7jsvnmoLS428teCwvY/edit?usp=sharing" target="_blank">short handout</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://youtu.be/QwduDhVjPK4" target="_blank">YouTube video</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://drive.google.com/file/d/0B5ZVxaK8f0u9NjNuaTZ5S0Z4OUE/view?usp=sharing&resourcekey=0-dS_emJBX6wRgqg1pQ-y2TA" target="_blank" title="">graph paper</a></li>
	</ul> 
	
	<h3>Introduction</h3>
    In the <a href="./unit?unit=23&amp;lesson=166" target="_blank">previous Logo lesson</a> 
    you developed algorithms for drawing simple shapes. 
    Drawing the shapes, especially the face shape, was difficult because the <i>abstraction</i>
    we were using – the set of Logo commands – was very weak and
    inflexible.  
    
    <p>
      For example, the <i><b>forward</b></i> command could only be used to move the Android 
      forward by 10 pixels. The <b><i>turn</i></b> command could only turn the Android by 90 degrees.  
      With those commands drawing a square with sides of 100 pixels was very tedious. And
      even though we were able to use a <i><b>loop</b></i> to make some of the algorithms less 
      tedious, it was impossible to draw a simple triangle with that set of commands.
    </p>
    <p>
      In this lesson we’ve improved our <i>Logo abstraction</i>, our set of Logo commands by 
      making them more general. The primary improvements are in the <i><b>forward(N)</b></i>
      and <b><i>turn(D)</i></b> commands:
    </p>
    <ul>
    <li>The <b>forward(N)</b> command moves the Android <b>forward by N pixels</b>.  
      </li>
    <li>The <b>turn(D)</b> command causes the Android to <b>turn right by D degrees</b>. 
      </li>
    </ul>
    <p>
      The N and D here are called <span class="hover vocab yui-wk-div" data-id='parameters'>parameters</span> which are input variables for a procedure. They are given values called <span class="hover vocab yui-wk-div" data-id='arguments'>arguments</span> when you call the procedure to do its job.
       A simple example will illustrate the
      advantage of using <span class="hover vocab yui-wk-div" data-id='parameters'>parameters</span>. 
    </p>
    <p>
      In our previous version of Logo, to move forward by 40 pixels would require 4 statements, each of which 
      moved the Android forward by 10 pixels:
    </p>
    <table border="1">
    <tbody>
    <tr>
    <td>
    <pre>        forward
            forward
            forward
            forward 
            </pre>
    </td>
    <td>
    <img src="../_static/assets/img/forward40noparams.png"/>
    </td>
    </tr>
    </tbody>
    </table>
    <p>
      With this new set of commands to move forward by 40 pixels we can pass
      the value 40 to the procedure through its <span class="hover vocab yui-wk-div" data-id="parameters">parameter</span>.  So going foward
       by 40 pixels requires only one command:
    </p>
    <table border="1">
    <tbody>
    <tr>
    <td>
    <pre>        forward(40)
            </pre>
    </td>
    <td>
    <img src="../_static/assets/img/forward40.png"/>
    </td>
    </tr>
    </tbody>
    </table>
    <p>
      The earlier version of <i>forward()</i> was very specific whereas the new 
      <i>parameterized</i> version is more general, and it is the inclusion of the <span class="hover vocab yui-wk-div" data-id="parameters">parameter</span> 
      that gives it its generality.  Instead of always going forward by 10 pixels, we can 
      now go forward by any number of pixels with one procedure call by simply passing the
      distance we want to travel as the <span class="hover vocab yui-wk-div" data-id="arguments">argument</span> value which will be assigned to the <span class="hover vocab yui-wk-div" data-id="parameters">parameter</span> variable.
    </p>
    <p>
      The same observations would apply to the <i>turn()</i> procedure.  
      The earlier abstraction was too specific, allowing us only to turn by 90 degrees.  
      The new one, because it involves a <span class="hover vocab yui-wk-div" data-id="parameters">parameter</span>, lets us turn by any number of degrees.
      The old version and the new version of Logo procedures are both abstractions. 
      But clearly, the new set of abstractions are much more powerful.  
    </p>
    <p>
      As a rule of thumb, 
      <b><font color="magenta">the more general a procedure (or abstraction) the better</font></b>.  
    </p>
    <h3>Defining Procedures with Parameters</span></h3>
    
    A <b>procedure</b> is a named group of programming instructions that may have <span class="hover vocab yui-wk-div" data-id='parameters'>parameters</span> and return values. Procedures are referred to by different names, such as method or function, depending on the programming language. A procedure call interrupts the sequential execution of statements, causing the program to execute the statements within the procedure before continuing. Once the last statement in the procedure (or a return statement) has executed, flow of control is returned to the point immediately following where the procedure was called.
    
    In this lesson, you will learn to define procedures with <span class="hover vocab yui-wk-div" data-id='parameters'>parameters</span>, which are variables that hold data sent to the procedure to help it do its job. To do this, you will need get a procedure block from the Procedures drawer. As always, you should give your procedure an appropriate name. To add a <span class="hover vocab yui-wk-div" data-id="parameters">parameter</span> to the procedure, click the blue mutator button on the procedure block  and drag an input block from the left into the inputs block on the right. Click the blue button when you have finished adding the <span class="hover vocab yui-wk-div" data-id='parameters'>parameters</span> needed for the procedure.  Replace x in input x with a useful and helpful <span class="hover vocab yui-wk-div" data-id="parameters">parameter</span> name such as L or Length for the drawSquare procedure. After you've defined the procedure, look in the Procedures drawer to find the newly generated call block for that procedure which you can use to call the procedure to do its job.<p>
    <img height="200px" src="../_static/assets/img/procedureParamAnimated.gif"/>
    </p><p>  In the AP exam, the following pseudocode is used for procedures with and without <span class="hover vocab yui-wk-div" data-id='parameters'>parameters</span> compared to App Inventor blocks. Notice that parentheses () are  used after a procedure name in the AP text pseudocode; they can be empty or hold the <span class="hover vocab yui-wk-div" data-id='parameters'>parameters</span>. There is also a special kind of procedure, often called a <b>function</b>, that can return a result. The  RETURN(result) statement can be used inside these procedures to return a calculated result or expression which can be assigned to a variable. For example, result ← procName(arg1, arg2, …) to assign to result the “value of the procedure” being returned by calling PROCEDURE procName(parameter1, parameter2, …).  The AP pseudocode provides a procedure DISPLAY(expression)  to display the value of expression, followed by a space, and a procedure INPUT(), which accepts a value from the user and returns the input value often assigned to a variable. <br/>
    </p>
    
    <img src="../_static/assets/img/AP_Procedures.png" />
    
    <!-- Old Table Format
    <table border="">
    <tbody>
    <tr><td width="10%"></td><td width="25%">AP Text Pseudocode</td><td width="30%">AP Block Pseudocode</td><td width="30%">App Inventor Block</td></tr>
    <tr><td>Procedures</td><td>
    <pre>PROCEDURE name()
    {
     <em>instructions</em>
    }
    </pre>
    </td><td><div class="yui-wk-div" id="APblocks">
    <bl class="dark">PROCEDURE name <br/>
    <bl>instructions</bl>
    </bl></div></td>
    <td><img src="../_static/assets/img/procedure.png" width="70%"/></td></tr>
    <tr><td>Procedures with <span class="hover vocab yui-wk-div" data-id='parameters'>Parameters</span></td><td>
    <pre>PROCEDURE name(param1,param2,...)
    {
     <em>instructions</em>
    }
    </pre>
    </td><td><div class="yui-wk-div" id="APblocks">
    <bl class="dark">PROCEDURE name <bl>param1,param2,...</bl><br/>
    <bl>instructions</bl>
    </bl></div></td>
    <td><img src="../_static/assets/img/procedurewparams.png" width="100%"/></td></tr>
    <tr><td>Procedures with Return Value</td><td>
    <pre>PROCEDURE name(param1,param2,...)
    {
     <em>instructions</em>
     RETURN (expression)
    }
    </pre>
    </td><td><div class="yui-wk-div" id="APblocks">
    <bl class="dark">PROCEDURE name <bl>param1,param2,...</bl><br/>
    <bl>instructions</bl><br/>
    <bl>RETURN <bl>expression</bl></bl>
    </bl></div></td>
    <td><img src="../_static/assets/img/procedurewresult.png" width="100%"/></td></tr>
    </tbody></table>
    
    -->
    <p>The following example uses <span class="hover vocab yui-wk-div" data-id='procedural abstraction'>procedural abstraction</span> and <span class="hover vocab yui-wk-div" data-id='parameters'>parameters</span> to write a procedure <i>welcome(name)</i> that will work for any name. We can call  the procedure welcome with different <span class="hover vocab yui-wk-div" data-id='arguments'>arguments</span> "Ali" and "Skyler". The <span class="hover vocab yui-wk-div" data-id="arguments">argument</span> value gets assigned to the <span class="hover vocab yui-wk-div" data-id="parameters">parameter</span> name when the procedure is called so that it can display hello to whichever name it is given. When you call the procedure welcome with a name, the program  jumps to the procedure and executes those statements. Once the last statement in the procedure (or a return statement) has executed, flow of control is returned to the point immediately following where the procedure was called.<br/>
    <img src="../_static/assets/img/procedureCall.png" width="350"/>
    </p><h3>Tutorial: DrawSquare(L)</h3>
    <p>
      To get started, <a href="http://ai2.appinventor.mit.edu/?repo=templates.appinventor.mit.edu/trincoll/csp/unit5/templates/Logo2/Logo2Template.asc" target="_blank">open App Inventor with the Logo 2 Template</a> 
      in a separate tab and follow along with these tutorials. If you are using iOS Companion, please change the Height property of the Canvas to Fill Parent so that it does not cover up the buttons. The following video previews the coding exercises 
      you'll be doing. You can also <a href="https://docs.google.com/document/d/1_iNgovLKL7ZCu8ZV2wDb6v5NZ9A7qXA_bNQ76gG3KQ8/edit?usp=sharing" target="_blank">click here</a> 
      to read the tutorial or for an additional challenge, use the <a href="https://docs.google.com/document/d/1tZeVSg6MijkG6hA6_irNuAGbd7jsvnmoLS428teCwvY/edit?usp=sharing" target="_blank">Short Handout</a>.
    
     <br/><br/>
    
.. youtube:: QwduDhVjPK4
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <br/>
    </p>
    <h3>Exercises</h3>
    <p>For these exercises, before coding your algorithms and procedures into App Inventor, design the algorithm and 
      express it in pseudocode and test it mentally, working with your partner. You may download and print 
      <a href="https://drive.google.com/file/d/0B5ZVxaK8f0u9NjNuaTZ5S0Z4OUE/view?usp=sharing&resourcekey=0-dS_emJBX6wRgqg1pQ-y2TA">this graph paper</a> to use 
      when designing your algorithms. To test your algorithms, place your algorithm or procedure calls in the ButtonDraw.Click handler.
    </p>
    <p>
    <b>1.</b> Following the tutorial in the video above or in the text tutorial,  define a procedure called <i>drawSquare(L)</i> that will 
      draw an L x L square where L is the length of the side using a for each loop.  <b> To test your algorithm, you have to call it from the <i>ButtonDraw.Click</i> handler.</b>
    </p>
    <p>
      NOTE and HINT:  <i><font color="magenta">In App Inventor and other programming languages the name of the <span class="hover vocab yui-wk-div" data-id="parameters">parameter</span> 
      doesn’t matter so you can use names that are descriptive of the <span class="hover vocab yui-wk-div" data-id="parameters">parameter</span>’s purpose.</font></i>  For example, either 
      of these  procedure definition blocks could be used as the basis of your drawSquare procedure.  The key is to use 
      <span class="hover vocab yui-wk-div" data-id="parameters">parameter</span> names that are meaningful to you and other programmers.
      <br/>
    <img src="../_static/assets/img/TwoDrawSquareProcs.png" width="500px"/>
    </p>
    <p>
    <b>2.</b> Design an algorithm for drawing an equilateral triangle -- i.e., a triangle with equal sides and equal angles.  
      First design it by hand.  Because this is another example of a repetition, you 
      can use the for-each block in your algorithm. How many repetitions are necessary?   
      
      <img align="left" src="../_static/assets/img/Triangle.png" width="100px"/>
    </p><p>You also need to figure out what angle to use for the turns. You could  use trial and error, or notice that you need the exterior angles of a triangle. To close a shape, you need to rotate 360 degrees. For the square, which has 4 sides, we need 360/4 = 90 degree angles (here the exterior and interior angles are the same). For the triangle, the interior and exterior angles are different, and you need the exterior angle to close the shape.</p>
    <p>  Once you’ve got the algorithm figured out, implement it in App Inventor and test it.  Because you might want to 
      use your triangle algorithm again, define it into a procedure with a <span class="hover vocab yui-wk-div" data-id="parameters">parameter</span>.  What should the <span class="hover vocab yui-wk-div" data-id="parameters">parameter</span> represent?
    </p>
    <p>
    <b>3.</b> Draw a pentagon -- i.e., a 5-sided figure with equal sides and angles.  Again, first design it by 
      hand -- how much does the Android have to turn to draw a pentagon?  Since this is another example of a repetition, 
      use the for-each block in your algorithm. How many repetitions are necessary? 
      
      <img align="left" src="../_static/assets/img/Pentagon.png" width="100px"/>
    <br/>
      HINT: To draw a square the Android had to turn by 90 degrees 4 times meaning it turned a total of 360 degrees. How might
      this translate to a pentagon?
      <br/>
      Once you have figured out the algorithm, implement it in App Inventor and test it.   Because you might want 
      to use your pentagon algorithm again, define it into a procedure with a <span class="hover vocab yui-wk-div" data-id="parameters">parameter</span>.  
      What should the <span class="hover vocab yui-wk-div" data-id="parameters">parameter</span> represent?
    </p>
    <p>
    <b>4.</b> (Advanced) Squares and pentagons are both examples of a more general shape, a polygon. A polygon is 
      a multi-sided figure. So a square is a polygon with 4 sides and a pentagon is a polygon with 5 sides.  
      If you could design a polygon(N) procedure, then you could use it to draw a square or a pentagon or hexagon 
      (6 sides) or octagon (8 sides) or even approximate a circle (36 sides?).   So give it a try. There’s quite a 
      payoff if you can do it.
      <img align="left" src="../_static/assets/img/Hexagon.png" width="100px"/>
    </p>
    <p>HINT:  Your procedure will need 2 <span class="hover vocab yui-wk-div" data-id='parameters'>parameters</span>, N, and L, where N is the number of sides (e.g., 4, 5, 6, etc.) 
      and L is the length of each side. 
        <img align="right" src="../_static/assets/img/Octagon.png" width="100px"/>
    </p>
    <p>
      HINT: A 4-sided figure has 4 sides and turns by 360/4 degrees.  A 5-sided figure has 5 sides and turns by 360/5 degrees.
    </p>
    <p>
      Test your polygon() procedure by using it to draw a hexagon (6 sides)  and a octagon (8 sides). Again, 
      you will have to call your procedures from the <i>ButtonDraw.Click</i> handler.
    </p>
    <p>
    <b>5.</b> Use your <i>drawPolygon()</i> procedure to draw a circle -- i.e., define a <b><i>drawCircle</i></b> procedure 
      and call <i>drawPolygon(N,L)</i> with appropriate values for the <span class="hover vocab yui-wk-div" data-id='parameters'>parameters</span>.  This exercise will require some trial 
      
      <img align="right" src="../_static/assets/img/Circle.png" width="100px"/>
      
      and error to get the the number of sides and the length of the sides right.  Does the 36-sided polygon shown here 
      look like a circle?  (NOTE: if you want your shape to appear within the visible part of the canvas, you’ll have to 
      decrease the length of the sides as you increase the number of sides.
    </p>
    <p>
    <b>6.</b> Draw a flower by repeatedly drawing a square and turning right by some number of degrees.  
      (NOTE: To change the color of the drawing pen you need to set the <i>Canvas.PaintColor</i> property. If you 
      want a random color you can use the <i>getRandomColor()</i> block that is provided in the Procedures drawer. Setting the global 
      penColor variable won’t have any effect on the Canvas.)
      <br/>
    <img src="../_static/assets/img/Flower1.png" width="200px"/>
    </p>
    <p>
    <b>7.</b> Draw a flower with some missing petals.  HINT:  Use an <i>if/else</i> statement and some randomness 
      to draw the square only some percentage of times in the loop.
      <br/>
    <img src="../_static/assets/img/Flower2.png" width="200px"/>
    </p>
    <p>
    <b>8.</b> Design and draw your own shapes, including flowers, spirals, stars.  For example, 
      here’s an interesting flower-like shape that was made by rotating a circle:
      <br/>
    <img src="../_static/assets/img/RotatingCircle.png" width="200px"/>
    </p>
    <!--
    
    &lt;h2&gt;Solutions&lt;/h2&gt;
    
    Click &lt;a target=&quot;_blank&quot; href=&quot;https://ram8647.appspot.com/mobileCSP/assets/img/Logo2Solutions.png&quot;&gt;here&lt;/a&gt; to see solutions for some of the exercises.
    
    &lt;br&gt;&lt;br&gt;
    &lt;gcb-youtube videoid=&quot;EzNg4T80Yik&quot; instanceid=&quot;Er15D5JAx1Rd&quot;&gt;&lt;/gcb-youtube&gt;
    &lt;br&gt;
    
    -->
    

Summary
--------

.. raw:: html

    <p>
    In this lesson, you learned how to:
      <div id="summarylist">
    </div>
    

Self-Check
-----------

.. raw:: html

    <p>
    
    Hover over the vocabulary below to review the definitions.
    <table align="center">
    <tbody>
    <tr>
    <td><span class="hover vocab yui-wk-div" data-id="procedural abstraction">procedural abstraction</span>
    <br/><span class="hover vocab yui-wk-div" data-id="parameters">parameters</span>
    <br/><span class="hover vocab yui-wk-div" data-id="arguments">arguments</span>
    </td>
    </tr>
    </tbody>
    </table>
    
.. mchoice:: mcsp-5-2-1
    :random:
    :practice: T
    :answer_a: A square with sides of length 100 pixels 
    :feedback_a: This is challenging, but rewarding! Notice that the <i>for range statement</i> will repeat from 1 to 5 or 5 times and on each iteration in moves forward by 100 pixels.  So this would draw a pentagon with sides of length 100.
    :answer_b: A triangle with sides of length 72 pixels 
    :feedback_b: This is challenging, but rewarding! Notice that the <i>for range statement</i> will repeat from 1 to 5 or 5 times and on each iteration in moves forward by 100 pixels.  So this would draw a pentagon with sides of length 100.
    :answer_c: A pentagon with sides of length 72 pixels 
    :feedback_c: This is challenging, but rewarding! This draws a pentagon but the sides are not 100 pixels. So this answer is not correct. 
    :answer_d: A pentagon with sides of length 100 pixels 
    :feedback_d: Good. You noticed that the <i>for range statement</i> will repeat from 1 to 5 or 5 times and on each iteration it moves forward by 100 pixels.  So this would draw a pentagon with sides of length 100.
    :correct: d

    What shape would be drawn by this algorithm?

    .. raw:: html

        <img class="yui-img" src="../_static/assets/img/forEachPentagon.png"/>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-5-2-2
    :random:
    :practice: T
    :answer_a: The procedure draws a pentagon not a square
    :feedback_a: We’re in the learning zone today. Mistakes are our friends!
    :answer_b: The procedure draws a triangle not a square
    :feedback_b: We’re in the learning zone today. Mistakes are our friends!
    :answer_c: The procedure always draws a square with sides of size 50. The parameter L is ignored,
    :feedback_c: Even if you call drawSqure(30), a square of size 50 will be drawn. You can replace the 50 with L to get the right behavior.
    :answer_d: The procedure parameter isn't specified correctly
    :feedback_d: We’re in the learning zone today. Mistakes are our friends!
    :correct: c

    You should be able to draw a square of any size with this procedure by calling it and specifying the parameter L. However, this procedure has a bug. What is the bug?

    .. raw:: html

        <img class="yui-img selected" src="../_static/assets/img/squareBug.png" width="300px"/>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
    
.. quizly:: mscp-5-2-4
    
    
    :quizname: quiz_loop_sum_numbers
    
    
    
.. quizly:: mscp-5-2-5
    
    
    :quizname: quiz_procedure_with_parameter
    
    
    
.. quizly:: mscp-5-2-6
    
    
    :quizname: quiz_proc_two_params
    
    

Sample AP CSP Exam Question
----------------------------

.. raw:: html

    <p>
     
.. mchoice:: mcsp-5-2-3
    :random:
    :practice: T
    :answer_a: &nbsp;<br><div style="text-align: left;" class="yui-wk-div"><img src="../_static/assets/img/Q18A1.png" class="yui-img selected" title="" alt="" style="line-height: 1.22;"></div>
    :feedback_a: 
    :answer_b: &nbsp;<br><img src="../_static/assets/img/Q18A2.png" class="yui-img selected" title="" alt=""><br>
    :feedback_b: 
    :answer_c:  <br><img src="../_static/assets/img/Q18A3.png" class="yui-img selected" title="" alt=""><br>
    :feedback_c: 
    :answer_d:  <br><img src="../_static/assets/img/Q18A4.png" class="yui-img selected" title="" alt=""><br>
    :feedback_d: 
    :correct: c

    The figure below shows a robot in a grid of squares. The robot is represented as a triangle, which is initially facing upward. The robot can move into a white or gray square but cannot move into a black region.   Consider the procedure MoveAndTurn below.Which of the following code segments will move the robot to the gray square?

    .. raw:: html

        <img alt="" class="yui-img" src="../_static/assets/img/Q18SquareQuestion.png" style="line-height: 1.22;" title=""/>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    

Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1MiQgVqW-ZZXlHvmlatbsWVJFdz0Z2DLG0IW4nzL9fPA/copy" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vTgUbmd-aje7_CSE-9kpTvu4TDjfNO88G8yCnAaTml88Zi-Kpxw64eYpSjTc3XvIl7Jx25A7uQN-CTO/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    <!--Create a new page named 
    &lt;i&gt;&lt;b&gt;Logo 2&lt;/b&gt;&lt;/i&gt; under the &lt;i&gt;Reflections&lt;/i&gt; category of your 
    portfolio and write
    brief answers to the following questions.
    
    &lt;ol&gt;
    &lt;li&gt;Include a screenshot of an interesting design that your Logo app made and a screenshot of the code that created it in your portfolio. You can take a screenshot on most Android tablets by pressing the power button and the volume down button at the same time. &amp;nbsp;&lt;/li&gt;&lt;li&gt;The lesson here is that our choice of abstractions, in this case the use 
    of parameters in our Logo commands, affects the kinds of problems 
    we can solve and how we solve them. Our choice of abstractions 
    have an enormous impact on our algorithms. In addition, procedural 
    abstraction (both with and without parameters) makes algorithms easier 
    by raising the level of abstraction.
    
    &lt;p&gt;Describe in your own words, with a specific example from Logo,
     how our choice of abstractions (commands) in this lesson provides
    us with the ability to solve problems that couldn&#39;t be solved with the
    abstractions (commands) used in Logo Part 1.&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;-->
    </div>
    </div>