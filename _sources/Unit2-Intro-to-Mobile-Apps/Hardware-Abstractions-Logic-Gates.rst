.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>
    <style>    td { text-align: left; padding: 5px;}</style>

Hardware Abstractions  Logic Gates
==================================

.. raw:: html

        <div class="MCSP-lesson-content">
    <script>
      $(document).ready(function() {
        generateSummary(EKmapping['2.10']);
        generateHovers();
        Tipped.create('.vocab', function(element) {
        var vocab = $(element).data('id');
        return vocabulary[vocab];
          }, {
            cache: false,
              position: 'topleft'
              });
      });
    
    /*  var vocabulary = { 
        "transistor":"A transistor is a semiconductor device used to amplify or switch electronic signals and electrical power. Transistors are the fundamental building blocks of electronic devices.",
        "logic gate":"A logic gate is an elementary building block of a digital circuit. Examples would be AND, OR, and NOT gates that perform basic digital operations.",
        "integrated circuit":"An integrated circuit (IC) or, informally, a chip, is an electronic circuit formed on a small piece of semiconducting material, that integrates billions of tiny transistors and logic gates.",
        "AND gate":"An AND gate is a circuit with two inputs and one output defined such that its output is TRUE (or ON) only when both of its inputs are TRUE (or ON).",
        "OR gate":"An OR gate is a circuit with two inputs and one output defined such that its output is TRUE (or ON) when either or both of its inputs are TRUE (or ON).",
        "NOT gate":"A NOT gate is a circuit with one input and one output defined such that its output is TRUE (or ON) when its input is FALSE (or OFF) and vice versa.",
        "flip flop":"A flip flop (or latch) is a digital circuit that has two states, ON or OFF, that can be used to store a 1 or a 0. It is the fundamental unit of computer memory.",
        "RAM":"RAM is short for Random Access Memory. RAM is implemented by one or more integrated circuite that comprise the computer's main memory where all data and programs are stored while the computer is on.",
        "CPU": "CPU is short for Central Processing Unit.  The CPU is implemented by a single integrated circuit and is the functional computer that handles all of the computer's processing of instructions.",
      };      */
    </script>
    <h3 id="est-length">Time Estimate: 45 minutes</h3>
    

Introduction and Goals
-----------------------

.. raw:: html

    <p>In this lesson we will look at some additional examples of how  the Big Idea of
      <i>abstraction</i> is used in computing. We will focus on low-level hardware abstractions,
      in particular, on <span class="hover vocab yui-wk-div" data-id='logic gate'>logic gates</span>, the fundamental computational building blocks of 
      electronic circuits.  We'll tak a first look "under the hood," so to speak, to see how computers 
      process binary information.
     </p>
     <div><b>Learning Objectives:</b>&nbspI will learn to</div>
     <ul>
        <li>write expressions using logical operators</li>
        <li>evaluate expressions that use logic operators</li>
     </ul>
     <div><b>Language Objectives:</b>&nbspI will be able to</div>
     <ul>
        <li>describe varying levels of abstractions in hardware, including <span class="hover vocab yui-wk-div" data-id='logic gate'>logic gates</span> and <span class="hover vocab yui-wk-div" data-id='flip flop'>flip-flops</span> using target vocabulary, supporting details and examples</li>
        <li>explain <span class="hover vocab yui-wk-div" data-id='logic gate'>logic gates</span> using key vocabulary such as <span class="hover vocab yui-wk-div" data-id='OR gate'>OR gate</span>, <span class="hover vocab yui-wk-div" data-id='AND gate'>AND gate</span>, <span class="hover vocab yui-wk-div" data-id='NOT gate'>NOT gate</span>, <span class="hover vocab yui-wk-div" data-id='boolean'>Boolean</span>, and <span class="hover vocab yui-wk-div" data-id='flip flop'>flip flop</span>, out loud and in writing, with the support of <a href="https://docs.google.com/presentation/d/1n-K4AQ_maHcXekzcfERQ9dxj91nqv9ytwJx4ZkAp8zw/copy" target="_blank" title="">vocabulary notes</a> from this lesson</li>
     </ul>
    

Learning Activities
--------------------

.. raw:: html

	<ul align="center" style="list-style: none; margin: 0; padding: 0; background: lightgrey">
	<li style="display: inline"><a href="https://docs.google.com/presentation/d/1yHx42yEaUzLurEuBOzQWvb0KS3oBsM7xhDh2lETod3M/" target="_blank" title="">slides</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://www.youtube.com/watch?v=JGMtLwfxozU" target="_blank">YouTube video</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://docs.google.com/document/d/1W_6XvtYe5uWi5_ySrKcAv3UBr6Wbop1B7rPyR7UhVLM/copy" target="_blank" title="">POGIL worksheet</a></li>
	
	</ul>
	
    <p><h3>Lecture</h3>
    <!-- Need to upload the revised video to teacher tube --------
    (&lt;a target=&quot;_blank&quot; href=&quot;http://www.teachertube.com/video/hardwaresecondlook-348091&quot;&gt;Teacher Tube version&lt;/a&gt;)
    -->
    
.. youtube:: JGMtLwfxozU
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    <h3>Logicly Activity</h3>
    <p><a href="http://logic.ly/demo" target="_blank">Logicly</a> provides an 
      engaging, hands-on learning environment for teaching logic gates and circuits.  It
      provides some free online-demos of simple logic gates.  To help solidify your
      <img align="right" src="../_static/assets/img/LogiclyLiveExample.png" width="200"/>
      understanding of the basic gates, click on the links below. 
      In each case, review the truth table definitions and then play with the <i>Live Example</i>
      circuit to verify that it behaves as defined by the truth table.
      <br/>
      NOTE: To create your own circuits you need go into Edit mode by clicking on the 
      little widget on the bottom left of the Live Example frame, as shown in the picture.
      Then you can drag together components and put them together. If you do not see the Live Example, first click on the   Adobe Flash Player link and then click on allow Run Flash. 
          
      
    </p><ul>
    <li>In an <a href="http://logic.ly/lessons/and-gate/" target="_blank"><span class="hover vocab yui-wk-div" data-id='AND gate'>AND gate</span></a>
     the output is TRUE (the light is ON) when both of its inputs are TRUE (or ON).
    </li>
    <li>In an <a href="http://logic.ly/lessons/or-gate/" target="_blank"><span class="hover vocab yui-wk-div" data-id='OR gate'>OR gate</span></a>
     the output is TRUE (the light is ON) when either or both of its inputs are TRUE (or ON).
    </li>
    <li>In a <a href="http://logic.ly/lessons/not-gate/" target="_blank"><span class="hover vocab yui-wk-div" data-id='NOT gate'>NOT gate</span></a>
     the output is is TRUE (or ON) when its single input is FALSE (or OFF).</li>
    </ul>
    <div class="pogil yui-wk-div">
    <h3>POGIL Activity for the Classroom (20 minutes)</h3> 
      Break into POGIL teams of 4 and assign each team member one of the following roles. Record your answers <a href="https://docs.google.com/document/d/1W_6XvtYe5uWi5_ySrKcAv3UBr6Wbop1B7rPyR7UhVLM/copy" target="_blank">using this worksheet</a>.
        <table>
    <tbody><tr><th>Role</th><th>Responsibility</th></tr>
    <tr>
    <td>Facilitator</td>
    <td>Uses the <a href="http://logic.ly/demo" target="_blank">Logicly</a> tool
            to implement the solutions agreed on by the team.</td>
    </tr>
    <tr>
    <td>Spokesperson</td>
    <td>Reports the teams results. </td>
    </tr>
    <tr>
    <td>Quality Control</td>
    <td>Records the teams solutions.</td>
    </tr>
    <tr>
    <td>Process Analyst</td>
    <td>Keeps track of the teams progress and assesses its performance.</td>
    </tr>
    </tbody></table>
    <h3>Designing a Computational Circuit:  Critical Thinking Exercises</h3>
    <ol>
    <li style="margin-bottom: 5px;">The word <b>OR</b> has different meaning in the following two sentences; which meaning corresponds to the Boolean <span class="hover vocab yui-wk-div" data-id='OR gate'>OR gate</span>?
          <ul>
    <li>Choose either soup <b>OR</b> salad with your entree.</li>
    <li>Insurance benefits will be paid in case of accident <b>OR</b> illness.</li>
    </ul>
    </li>
    <li style="margin-bottom: 5px;">Define 2 truth tables, one for each of the two meanings of OR that you discussed above.  Your truth table should
          consist of 4 rows that together provide all possible values for inputs A and B and what the result Z would be. For example, A is "soup" and B is "salad" and Z is "soup or salad" for one of the meanings of or above. 
          
	<table style="width:200px; border: 1px solid black; margin-left: auto; margin-right: auto;">
    <tbody>
	<tr><th style="border: 1px solid black; text-align:center;width:75px;">A</th><th style="border: 1px solid black; text-align:center;width:75px;">B</th><th style="border: 1px solid black; text-align:center;width:75px;">Z</th></tr>
	<tr><td>False</td><td>False</td><td></td></tr>
    <tr><td>False</td><td>True</td><td> </td></tr>
    <tr><td>True</td><td>False</td><td> </td></tr>
    <tr><td>True</td><td>True</td><td> </td></tr>
    </tbody></table>
	<br/>
    </li>
    <li style="margin-bottom: 5px;">(<b>Portfolio</b>) The first sense of <b>OR</b> (soup or salad) is known as <b>Exclusive OR</b> and
          the second sense (accident or illness) is known as <b>Inclusive-OR</b>.  Inclusive-OR
          is the same as Boolean OR.  Exclusive-OR can
          be defined as:
          <br/>
    <center style="font-size:large">(Either A <font color="red">OR</font> B) <font color="red">AND</font>  (<font color="red">NOT</font> 
            (both A <font color="red"> AND </font> B)).</center>
    <br/> Use  <a href="http://logic.ly/demo" target="_blank">Logicly edit mode</a> to construct the Exclusive-OR
          circuit. As suggested in the definition, you'll need to combine AND, OR, and NOT gates.  The
          circuit should have 2 inputs and 1 output.  Make sure your circuit behaves as defined by the
          truth table you created in part #2. (Hint:  For this circuit you'll need 2 AND gates, 1 <span class="hover vocab yui-wk-div" data-id='OR gate'>OR gate</span>,
          and 1 <span class="hover vocab yui-wk-div" data-id='NOT gate'>NOT gate</span>.  Also, you should use switches, not buttons, for the 2 inputs.)
        </li>
    <li style="margin-bottom: 5px;">(<b>Portfolio</b>) Consider these three things: The <span class="hover vocab yui-wk-div" data-id='OR gate'>OR gate</span> (i.e., the physical circuit), 
        the <i>Boolean OR function</i> (as defined by its truth table), and the <i>OR symbol</i>.  How
        would arrange them from <b>most abstract to least abstract</b>?  And what criterion would you
        use to determine their order?</li>
    <li style="margin-bottom: 5px;">Pictured here is a
          Logicly version of the flip-flop discussed in the lecture.  A flip-flop is a basic 
          memory circuit that stores a single bit -- either a 0 or 1.  Implement this circuit in
           <a href="http://logic.ly/demo" target="_blank">Logicly edit mode</a>. NOTE that NOR gates (not <span class="hover vocab yui-wk-div" data-id='OR` gate'>OR gates</span>) are being used in this circuit and that
          the inputs are Push Buttons (not switches). The light should turn on when you click the bottom button
          and turn off when you click the top button.  Which <b><i>memory state</i></b> (a 0 or a 1) is represented 
          by clicking the bottom button as seen in the image below?
          <br/>
    <img src="../_static/assets/img/LogiclyFlipFlop.png" width="40%"/>
    <br/>
    <br/>
    </li>
    </ol>
    </div>
    <h3>AP CSP Pseudocode Logical Operators</h3>
    
    In MIT App Inventor and in the AP CSP pseudocode, the logical operators AND, OR, and NOT can be used to combine boolean expressions in programming, and they behave in the same way that the AND, OR, and NOT logic gates behave in computer hardware. The exam reference sheet provides the definitions for the following logical operators where the condition can be a single boolean value or a boolean expression made up of other values and operators.
    <ul>
    <li> <b> NOT condition</b>: evaluates to true if condition is false; otherwise it evaluates to false.</li>
    <li> <b>condition1 AND condition2</b>:  evaluates to true if both condition1 and condition2 are true; otherwise it evaluates to false. </li>
    <li><b> condition1 OR condition2</b>:  evaluates to true if condition1 is true or if condition2 is true or if both condition1 and condition2 are true; otherwise it evaluates to false.
    </li></ul>
    

Summary
--------

.. raw:: html

    <p>
    In this lesson, you learned how to:
      <div id="summarylist">
    </div>
    
Still Curious?
---------------

.. raw:: html

    <p>
    <p>Still curious about logic gates?  There is much written about logic gates and lots of material available online.</p>
    <ul>
    <li>A good place to start might be with this <a href="http://www.i-programmer.info/babbages-bag/235-logic-logic-everything-is-logic.html" target="_blank">I-Programmer discussion</a> of Boolean logic and its importance in computing. </li>
    <li>Here is a description of <a href="http://www.cs.bu.edu/~best/courses/modules/Transistors2Gates/" target="_blank">how transistors are used to build logic gates</a>, <a href="https://www.youtube.com/watch?v=IcrBqCFLHIY" target="_blank">a video about how transistors are made</a>, and <a href="https://www.youtube.com/watch?v=Knd-U-avG0c" target="_blank">a video zooming into a chip</a>.</li>
    </ul>

Self-Check
-----------

.. raw:: html

    <p>
    <h3>Vocabulary</h3>
	<p>Here is a table of the technical terms we've introduced in this lesson. Hover over the terms to review the definitions.
	</p>
    <table align="center">
    <tbody>
    <tr>
    <td><span class="hover vocab yui-wk-div" data-id="transistor">transistor</span>
    <br/><span class="hover vocab yui-wk-div" data-id="logic gate">logic gate</span>
    <br/><span class="hover vocab yui-wk-div" data-id="integrated circuit">integrated circuit</span>
    <br/><span class="hover vocab yui-wk-div" data-id="AND gate">AND gate</span>
    <br/><span class="hover vocab yui-wk-div" data-id="OR gate">OR gate</span>
    </td>
    <td><span class="hover vocab yui-wk-div" data-id="NOT gate">NOT gate</span>
    <br/><span class="hover vocab yui-wk-div" data-id="flip flop">flip flop</span>
    <br/><span class="hover vocab yui-wk-div" data-id="RAM">RAM</span>
    <br/><span class="hover vocab yui-wk-div" data-id="CPU">CPU</span>
    </td>
    </tr>
    </tbody>
    </table>
    
	<h3>Check Your Understanding</h3>
    <p>Complete the following self-check exercises. 
	</p>
.. mchoice:: mcsp-2-10-1
    :random:
    :practice: T
    :answer_a: the gate will be TRUE (or ON) when either A or B is TRUE (or ON).
    :feedback_a: OK, so you didn’t get it right this time. Let’s look at this as an opportunity to learn. An OR gate would be TRUE (or ON) when either A or B is TRUE (or ON).
    :answer_b: the gate will be TRUE (or ON) when both A and B are TRUE (or ON).
    :feedback_b: 
    :answer_c: the gate will be TRUE (or ON) when A is TRUE (or ON).
    :feedback_c: OK, so you didn’t get it right this time. Let’s look at this as an opportunity to learn. For the AND gate to be TRUE (or ON) B would also have to be TRUE (or ON).
    :answer_d: the gate will be TRUE (or ON) when B is TRUE (or ON).
    :feedback_d: OK, so you didn’t get it right this time. Let’s look at this as an opportunity to learn. For the AND gate to be TRUE (or ON) A would also have to be TRUE (or ON).
    :correct: b

    An AND gate is an electronic component that takes two inputs, A and B, such that


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <br/>
    
.. mchoice:: mcsp-2-10-2
    :random:
    :practice: T
    :answer_a: both inputs must always have the same value for the gate to be TRUE (or ON).
    :feedback_a: Try asking a classmate for advice—s/he may be able to explain/suggest some ideas or recommend some strategies.
    :answer_b: both inputs must always be TRUE (or ON) for the gate to be TRUE (or ON).
    :feedback_b: Try asking a classmate for advice—s/he may be able to explain/suggest some ideas or recommend some strategies.
    :answer_c: the gate would be TRUE (or ON) when either or both A and B are TRUE (or ON).
    :feedback_c: 
    :answer_d: both inputs must be FALSE (or OFF) for it to be TRUE (or ON).
    :feedback_d: Try asking a classmate for advice—s/he may be able to explain/suggest some ideas or recommend some strategies.
    :correct: c

    An OR gate is an electronic component with two inputs, A and B, such that


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <br/>
    
.. mchoice:: mcsp-2-10-3
    :random:
    :practice: T
    :answer_a: RAM chip, motherboard, logic gate, physical circuit 
    :feedback_a: Let me add new information to help you solve this; a physical circuit is a low-level component.
    :answer_b: Physical circuit, motherboard, logic gate, RAM chip 
    :feedback_b: Let me add new information to help you solve this; a motherboard would contain RAM chips which would contain low-level logic gates.
    :answer_c: Physical circuit, logic gate,  RAM chip, motherboard,
    :feedback_c: Yes, that is correct. 
    :answer_d: RAM chip, logic gate, physical circuit, motherboard.
    :feedback_d: Let me add new information to help you solve this; a logic gate is made up of physical circuits. 
    :correct: c

    Which of the following lists arranges hardware components from the lowest to the highest abstraction level? 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <br/>
    
.. mchoice:: mcsp-2-10-4
    :random:
    :practice: T
    :answer_a: True
    :feedback_a: This is challenging, but rewarding! The circuit diagram contains more details about the OR gate's behavior, so it is <b><i>less abstract</i></b> than the OR-gate symbol.
    :answer_b: False
    :feedback_b: Right. This is false because the circuit diagram contains more details about the OR gate's behavior, so it is <b><i>less abstract</i></b> than the OR-gate symbol.
    :correct: b

    True or False.  The symbol for an OR gate is less abstract than the circuit diagram that defines its behavior. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <br/>
    
.. mchoice:: mcsp-2-10-5
    :random:
    :practice: T
    :answer_a: True
    :feedback_a: Yes. Because the symbol contains fewer details than the truth table it is <i><b>more abstract</b></i>.
    :answer_b: False
    :feedback_b: Mistakes are welcome here! Try reviewing this; the symbol contains fewer details than the truth table so it is <i><b>more abstract</b></i>.
    :correct: a

    True or False.  The symbol for an AND gate is more abstract than the truth table that defines its behavior. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <br/>
    
.. mchoice:: mcsp-2-10-6
    :random:
    :practice: T
    :answer_a: The dictionary definition of the word 'chair'.
    :feedback_a: Let me add new information to help you solve this. The definition contains details about chairs, so is not as abstract as the word 'chair' itself.
    :answer_b: The word 'chair' itself.
    :feedback_b: That's correct.  Good.
    :answer_c: A picture of a chair.
    :feedback_c: Let me add new information to help you solve this. The picture contains details about a chair, so it is not as abstract as the word 'chair' itself.
    :answer_d: The chair itself.
    :feedback_d: Let me add new information to help you solve this. The physical chair itself is very detailed and concrete.  It's the very opposite of abstract.
    :correct: b

    In general, which of the following is the most abstract when it comes to talking about chairs?


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <h3>Sample AP CSP Exam Questions</h3>
    
.. mchoice:: mcsp-2-10-7
    :random:
    :practice: T
    :answer_a:  Input A must be true.
    :feedback_a: This is correct!
    :answer_b:  Input A must be false.
    :feedback_b: 
    :answer_c:  Input A can be either true or false.
    :feedback_c: 
    :answer_d:  There is no possible value of Input A that will cause the circuit to have the output true.
    :feedback_d: 
    :correct: a

    Refer to the figure below.

 	.. raw:: html
 		
 		<img class="yui-img" src="../_static/assets/img/SampleExamQuestion6LogicGates.png"/>
        

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    
.. mchoice:: mcsp-2-10-8
    :random:
    :practice: T
    :answer_a:  (onFloor1 AND callTo2) AND (onFloor2 AND callTo1)
    :feedback_a: 
    :answer_b:  (onFloor1 AND callTo2) OR (onFloor2 AND callTo1)
    :feedback_b: That's correct!
    :answer_c:  (onFloor1 OR callTo2) AND (onFloor2 OR callTo1)
    :feedback_c: 
    :answer_d:  (onFloor1 OR callTo2) OR (onFloor2 OR callTo1)
    :feedback_d: 
    :correct: b

    An office building has two floors. A computer program is used to control an elevator that travels between the two floors. Physical sensors are used to set the following Boolean variables.

    .. raw:: html

        <img alt="" class="yui-img" src="../_static/assets/img/Q21Table.png" style="line-height: 1.22;" title=""/>
        <br />
		<p>The elevator moves when the door is closed and the elevator is called to the floor that it is not currently on. Which of the following Boolean expressions can be used in a selection statement to cause the elevator to move?</p>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>
    

Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1NlnlbU4_SkwJF_8YOiDqwsH8Z1CAyPQx75JLPobBzO4/copy" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vTTuTp4f9CECwmo88cYvqzbgcbTqOedgHTvV8_ojlRH9DENjyATXw9T4wYdZItjj9dBktvwledfAi-u/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    <!--  &lt;p&gt;In your portfolio, create a new page named &lt;i style=&quot;font-weight: bold;&quot;&gt;Hardware Abstractions&lt;/i&gt; in your portfolio and&amp;nbsp;provide thoughtful answers to  the following questions:&lt;/p&gt;
      &lt;ol&gt;
        &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;) Include a screenshot of your Logicly diagram for the Exclusive-OR circuit.&lt;/li&gt;
        &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;) Consider these three things: The &lt;i&gt;OR gate&lt;/i&gt; (i.e., the physical circuit),     the &lt;i&gt;Boolean OR function&lt;/i&gt; (as defined by its truth table), and the &lt;i&gt;OR symbol&lt;/i&gt;.  How would arrange them from &lt;b&gt;most abstract to least abstract&lt;/b&gt;?  And what criterion would you use to determine their order?    &lt;/li&gt;
        &lt;li&gt;Consider these three things:  A binary digit (e.g., 1 or 0),  the flip-flop circuit diagram (&lt;img src=&quot;assets/img/LogiclyFlipFlop.png&quot; width=&quot;50&quot; align=&quot;inline&quot;&gt;), and the flip-flop circuit (i.e., the physical circuit).  How would you arrange them from &lt;b&gt;most abstract to least abstract&lt;/b&gt; and what criterion would you use to determine their order?  &lt;/li&gt;
      &lt;/ol&gt;-->
    </div>
    </div>