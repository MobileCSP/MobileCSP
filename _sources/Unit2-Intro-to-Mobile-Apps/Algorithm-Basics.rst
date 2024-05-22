.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Algorithm Basics
================

.. raw:: html

        <div class="MCSP-lesson-content">
    <script>
      $(function() {
        $( "#accordion" ).accordion({
          collapsible: true,
          active: false,
          heightStyle: "content",
          icons: false
        });
      });
    </script>
    <!-- can use: #self-check, #still-curious, .pogil, #portfolio -->
    <script>
      $(document).ready(function() {
        generateSummary(EKmapping['2.03']);
        generateHovers();
    
        Tipped.create('.vocab', function(element) {
        var vocab = $(element).data('id');
        return vocabulary[vocab];
          }, {
            cache: false,
              position: 'topleft'
              });
      });
    
     /* var vocabulary = { 
        "algorithm":"An algorithm is a precise sequence of instructions for processes that can be implemented by a programming language and executed by a computer.",
        "control structure": "A control structure is a block of programming statements that controls the flow or behavior of an algorithm.",
        "sequence":"A sequence control structure is the application of each step of an algorithm in the order in which the statements are given.",
        "selection":"A selection control structure uses a true or false condition to determine which of two parts of an algorithm is used.",
        "repetition":"A repetition control structure is the repetition of an algorithm for a specified number of times or until a true/false condition is met.",
        "iteration":"Iteration is another term for 'repetition'.",
        "boolean": "A Boolean condition is a true/false condition.  It is named after George Boole (1815-1864) an English mathematician.",
        "pseudocode":"Pseudocode is a notation for expressing algorithms, which is more precise that ordinary English but less formal than a programming language.",
        "flowchart":"A flowchart is a visual (i.e. graphical) notation for expressing algorithms.",
      };      */
    </script>
    <h3 id="est-length">Time Estimate: 45 minutes</h3>
    

Introduction and Goals
-----------------------

.. raw:: html

    <p>In <a href="https://runestone.academy/runestone/books/published/mobilecsp/Unit1-Getting-Started/Mazes-Algorithms-and-Programs.html" target="_blank">Lesson 1.2</a> we introduced the term <b><i><span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span></i></b> and defined it as a <u>step-by-step procedure</u> of <u>precise instructions</u> that performs some calculation or computation. Algorithms are at the heart of computer science. Algorithms, expressed in computer code and interpreted by the computer, are what make our computers such powerful and adaptable machines. An amazing fact that has been proved by computer scientists is that all algorithms can be constructed by using just these three control structures.  In other words, any <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> that you would like to write to solve a problem can be built by a combination of <span class="hover vocab yui-wk-div" data-id='sequence'>sequence</span>, <span class="hover vocab yui-wk-div" data-id='selection'>selection</span>, and <span class="hover vocab yui-wk-div" data-id='repetition'>repetition</span>.
	</p>
    
    <div><b>Learning Objectives:</b>&nbspI will learn to</div>
    <ul>
    <li>express an <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> that uses <span class="hover vocab yui-wk-div" data-id='sequence'>sequencing</span>, <span class="hover vocab yui-wk-div" data-id='selection'>selection</span> and <span class="hover vocab yui-wk-div" data-id='iteration'>iteration</span> without using a programming language</li>
    <li>create algorithms, write conditional statements, and write iteration statements</li>
    </ul>
    <div><b>Language Objectives:</b>&nbspI will be able to</div>
    <ul>
    <li>use target vocabulary, such as <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span>, <span class="hover vocab yui-wk-div" data-id='sequence'>sequence</span>, <span class="hover vocab yui-wk-div" data-id='selection'>selection</span>, <span class="hover vocab yui-wk-div" data-id='repetition'>repetition</span>, and <span class="hover vocab yui-wk-div" data-id='pseudocode'>pseudocode</span>, while describing a problem solving process, out loud and in writing, with the support of <a href="https://docs.google.com/presentation/d/1n-K4AQ_maHcXekzcfERQ9dxj91nqv9ytwJx4ZkAp8zw/copy" target="_blank" title="">vocabulary notes</a> from this lesson</li>
    <li>describe the relationship between the target vocabulary words for the POGIL activity and portfolio reflection questions with the support of concept definitions and <a href="https://docs.google.com/presentation/d/1n-K4AQ_maHcXekzcfERQ9dxj91nqv9ytwJx4ZkAp8zw/copy" target="_blank" title="">vocabulary notes</a> from this lesson</li>
    </ul>
    
Learning Activities
--------------------

.. raw:: html

	<ul align="center" style="list-style: none; margin: 0; padding: 0; background: lightgrey">
	<li style="display: inline"><a href="https://docs.google.com/presentation/d/1XfwXHnhzIxQQppKgxS6PAhc9f61LHeLcILd6feAHc8E" target="_blank" title="">slides</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://www.youtube.com/watch?v=60CzIn2FIcM" target="_blank">YouTube video</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="http://www.teachertube.com/video/359066" target="_blank" title="">TeacherTube video</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://docs.google.com/document/d/1L_TAwm91lPJjIzwmAxNvbWqZNnNGzQuwx4YEt2TlWaQ/copy" target="_blank">POGIL worksheet</a></li>
	</ul> 
	
    <p><h3>Blockly Maze Problems</h3>
	<p>Beyond visual and textual programming languages, algorithms can be expressed in a variety of ways such as natural language, diagrams, and <span class="hover vocab yui-wk-div" data-id='pseudocode'>pseudocode</span> which is a way to describe the each step of the code in English to plan it out. 
    Algorithms can be created from an idea, by combining existing algorithms, or by modifying existing algorithms. 
    Knowledge of existing algorithms can help in constructing new ones. Using existing correct algorithms as building blocks for constructing another <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> has benefits such as reducing development time, reducing testing, and simplifying the identification of errors.
    </p>
    <p>As we saw in the maze problems in Lesson 1.2, algorithms are constructed out of basic building blocks called <i>control structures</i>.  There are three basic control structures:
    </p>
    <ul>
    <li><b><i><span class="hover vocab yui-wk-div" data-id='Sequence'>Sequence</span></i></b>– a <span class="hover vocab yui-wk-div" data-id='sequence'>sequence</span> of instructions or statements.</li>
    <li><b><i><span class="hover vocab yui-wk-div" data-id='Selection'>Selection</span></i></b>– a conditional instruction that lets the program branch between two or more alternatives.</li>
    <li><b><i><span class="hover vocab yui-wk-div" data-id='Repetition'>Repetition</span> (or <span class="hover vocab yui-wk-div" data-id='Iteration'>Iteration</span>)</i></b>– a structure that repeats one or more instructions.</li>
    </ul>
    <p>If you didn't get a chance to work through the Maze problems in Unit 1 or if you want to solve a few more maze problems that use <span class="hover vocab yui-wk-div" data-id='sequence'>sequence</span>, <span class="hover vocab yui-wk-div" data-id='selection'>selection</span>, and <span class="hover vocab yui-wk-div" data-id='iteration'>iteration</span>, here's a link to 
      <a href="https://blockly-games.appspot.com/maze" target="_blank">some additional problems</a> that use the Blockly language 
      (<a href="https://docs.google.com/document/d/1q8Tqyi9DTRIGsrqQEVMdLNEEKBX-LYVl6I9n5cgZe-8" target="_blank">instructions</a>).
    </p>
    <h3>Algorithm Basics</h3>
    <p>Now that you've created algorithms to solve Maze puzzles using <span class="hover vocab yui-wk-div" data-id='sequence'>sequence</span>, <span class="hover vocab yui-wk-div" data-id='selection'>selection</span>, and <span class="hover vocab yui-wk-div" data-id='iteration'>iteration</span>, watch this video about algorithms by Dr. Ralph Morelli, one of the founders of Mobile CSP. 
    <br/>
    <span>

.. youtube:: 60CzIn2FIcM
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

	</span>
    </p>
    <br/><br/>
    <div class="pogil yui-wk-div">
    <h3>POGIL Activity for the Classroom </h3>
    <p>This course emphasizes communication and collaboration. You will do many group activities called POGIL Activities in this course, starting with the one below.   <a href="https://pogil.org/about-pogil/what-is-pogil" target="_blank">POGIL</a> stands for Process Oriented Guided Inquiry Learning. In POGIL activities, you will work in self-managed teams of 3 or 4 students where everyone has a role. You will explore an activity or solve a problem together, making sure that everyone in the team participates and learns. In order for these POGIL activities to be effective, each member must be willing to practice good interpersonal skills including communication, consensus building, conflict resolution, and negotiation.</p>
    <br/>Break into POGIL teams of 4 and assign each team member one of the following roles. Record your answers <a href="https://docs.google.com/document/d/1L_TAwm91lPJjIzwmAxNvbWqZNnNGzQuwx4YEt2TlWaQ/copy" target="_blank">using this worksheet</a>. 
       <br/>Here's more information about <a href="https://docs.google.com/document/d/1_NfNLWJxaG4qZ2Jd2x8UctDS05twn1h6p-o3XaAcRv0/edit?usp=sharing" target="_blank">POGIL roles</a>.<br/>
    <table>
    <tbody><tr><th>Role</th><th>Responsibility</th></tr>
    <tr>
    <td>Facilitator</td>
    <td>Reads the questions aloud, keeps track of time and makes sure everyone contributes appropriately and is heard.</td>
    </tr>
    <tr>
    <td>Spokesperson</td>
    <td>Talks to the instructor and other teams when the team has questions and reports team answers back to the class. </td>
    </tr>
    <tr>
    <td>Quality Control</td>
    <td>Records all answers &amp; questions, and makes sure everyone agrees on the answers.</td>
    </tr>
    <tr>
    <td>Process Analyst</td>
    <td>Considers how the team could work and learn more effectively with respect to use of time, effectiveness, contributions. Reports back to team and class.</td>
    </tr>
    </tbody></table>
    <h3>Algorithms: Solving a Maze</h3>
    <p>The problem below is similar to a type of AP CSP exam question. Consider a robot that can follow the simple <span class="hover vocab yui-wk-div" data-id='sequence'>sequence</span> commands below:
     </p><ul>
    <li style="padding-bottom:5px"> <b>MOVE_FORWARD</b>: The robot moves 1 square forward in the direction it is facing.
      </li><li style="padding-bottom:5px"><b>ROTATE_RIGHT </b>: The robot turns right 90 degrees, staying in the same square.
      </li><li style="padding-bottom:5px"><b>ROTATE_LEFT</b>: The robot turns left 90 degrees, staying in the same square.
      </li><li style="padding-bottom:5px"><b>CAN_MOVE(<em>direction</em>)</b>: This command can be used with 4 possible directions: <b>left, right, forward,</b> and <b>backward</b>. It returns true if there is an open square in the specified direction from the square that the robot is in. 
    </li></ul>
    <p>
	Let's put our robot in the maze below. The robot is represented as a black triangle and is initially facing up. It can only move forward to a white square. It cannot move onto the black squares or move beyond the edge of the grid.
	<br/>
	<img src="../_static/assets/img/Q18SquareQuestion.png" width="20%" style="display: block; margin-left: auto; margin-right: auto;"/>
	</p>
	<br/>
    Answer the following questions with your POGIL group using <a href="https://docs.google.com/document/d/1L_TAwm91lPJjIzwmAxNvbWqZNnNGzQuwx4YEt2TlWaQ/copy" target="_blank">this worksheet</a>.
	  <ol>
    <li style="margin-bottom: 5px;">For the robot in the maze above, is CAN_MOVE(forward) true? Is CAN_MOVE(right) true?
         </li><li style="margin-bottom: 5px;">(<span style="font-weight: bold;">Portfolio</span>) Write an <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> using the 4 commands above to navigate the robot through the maze to reach the gray square. You can pretend that one of you is the robot and walk through your <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> with your fingers on the maze. Are there commands that are repeated in your <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span>? Circle them.
        </li><li style="margin-bottom: 5px;">(<span style="font-weight: bold;">Portfolio</span>) Let's replace the repeated commands with a <b><span class="hover vocab yui-wk-div" data-id='repetition'>repetition</span></b> <span class="hover vocab yui-wk-div" data-id='control structure'>control structure</span>. The following command can be used to repeat a block of commands:
    <div class="yui-wk-div" id="apml">
    <bl class="dark">REPEAT n times<br/>
       <bl>commands</bl></bl>
    </div>
    <br/>Rewrite your <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> above using <em>Repeat n times</em> control structures (substituting in a number for n) instead of repeating the MOVE_FORWARD command many times. 
        </li><li style="margin-bottom: 5px;">Can you come up with a more general <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> to navigate a maze using <b>IF</b> commands and  a <b>REPEAT UNTIL GoalReached</b> command, which tests if the robot has reached the gray square goal? Try to come up with an <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> and then click on and compare to the Maze Navigation <span class="hover vocab yui-wk-div" data-id='algorithm'>Algorithm</span> below.
      <div class="yui-wk-div" id="accordion">
    <h3>Maze Navigation <span class="hover vocab yui-wk-div" data-id='Algorithm'>Algorithm</span> (click here after trying your own <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span>)</h3>
    <div class="yui-wk-div" id="APblocks">
    <bl class="dark">REPEAT UNTIL <bl> GoalReached </bl><br/>
      <bl class="dark">IF <bl>CAN_MOVE <bl>forward</bl></bl><br/>
        <bl>MOVE_FORWARD</bl> </bl><br/>
      <bl class="dark">IF <bl>CAN_MOVE <bl>left</bl></bl><br/>
          <bl> ROTATE_LEFT</bl> </bl>
    <br/>
      <bl class="dark">IF <bl>CAN_MOVE <bl>right</bl></bl><br/>
        <bl> ROTATE_RIGHT</bl></bl><br/>
    </bl>
    </div>
    </div>
    <ol>
    <li type="a"> Which part(s) of the <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> above are <span class="hover vocab yui-wk-div" data-id='selection'>selection</span> control structures?
      </li>
    <li type="a"> Which part of the <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> above is a <span class="hover vocab yui-wk-div" data-id='repetition'>repetition</span> <span class="hover vocab yui-wk-div" data-id='control structure'>control structure</span>?
     Remember a <span class="hover vocab yui-wk-div" data-id='control structure'>control structure</span>
          can consist of multiple statements.
        </li>
    <li type="a">Does the <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> solve the maze above and navigate the robot to the goal, the gray square? How many times does it need to run through the loop?</li>
    <li type="a">(<span style="font-weight: bold;">Portfolio</span>) Can you come up with a maze that this <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> will not be able to solve? Include a description or a photo of your drawing of such a maze in your portfolio.
      </li></ol>
    </li>
    <li>(<span style="font-weight: bold;">Portfolio</span>) Write an <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span>  for washing a stack of 10 items that are cups and dishes mixed together, where the rule is that the cups are washed in hot water and the dishes in cold water. Use simple commands like <b>hot_wash</b> and <b>cold_wash</b>. You may also use the control structures <b>IF</b> and <b>REPEAT n times</b>. Identify the parts of your <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> that are examples  of <span class="hover vocab yui-wk-div" data-id='sequence'>sequence</span>, <span class="hover vocab yui-wk-div" data-id='selection'>selection</span>, and
        <span class="hover vocab yui-wk-div" data-id='repetition'>repetition</span>.</li></ol>
    </div>
    

Summary
--------

.. raw:: html

    <p>
    In this lesson, you learned how to:
      <div class="yui-wk-div" id="summarylist">
    </div>
    
Still Curious?
---------------

.. raw:: html

    <p>
    <p>It may seem a bit amazing to you that the three simple control structures we used in the Maze problems are powerful enough, in combination, to build any algorithm that can be thought of. But this fact, known as the <i>structured program theorem</i>, was proved in a 1966 research paper by Corrado Boehm and Guiseppe Jacopini. You can read more about it in this <a href="http://en.wikipedia.org/wiki/Structured_program_theorem">Wikipedia article</a>.</p>
    
Self-Check
-----------

.. raw:: html

    <p>
    <h3>Vocabulary</h3>
	<p>Here is a table of the technical terms we've introduced in this lesson. Hover over the terms to review the definitions.
	</p>
    
    <table align="center">
    <tbody><tr>
    <td><span class="hover vocab yui-wk-div" data-id="algorithm">algorithm</span>
    <br/><span class="hover vocab yui-wk-div" data-id="control structure">control structure</span>
    <br/><span class="hover vocab yui-wk-div" data-id="sequence">sequence</span>
    <br/><span class="hover vocab yui-wk-div" data-id="selection">selection</span>
    <br/><span class="hover vocab yui-wk-div" data-id="repetition">repetition</span>
    </td>
    <td>
    <span class="hover vocab yui-wk-div" data-id="iteration">iteration</span>
    <br/><span class="hover vocab yui-wk-div" data-id="boolean">boolean</span>
    <br/><span class="hover vocab yui-wk-div" data-id="pseudocode">pseudocode</span>
    <br/><span class="hover vocab yui-wk-div" data-id="flowchart">flowchart</span>
    </td>
    </tr>
    </tbody></table>
	
	<h3>Check Your Understanding</h3>
    <p>Complete the following self-check exercises. 
	</p>
    
.. mchoice:: mcsp-2-3-1
    :random:
    :practice: T
    :answer_a: An algorithm is a sequence of precise instructions. 
    :feedback_a: This is challenging, but rewarding! An algorithm is indeed a sequence of precise instructions. So this is not the correct answer.
    :answer_b: Algorithms can be written to solve every problem. 
    :feedback_b: Yes, by process of elimation, this is the correct answer.  As we will learn more fully later in the course, it has been proved that there are problems for which it is impossible to write a correct algorithm.  Such problems are called <a target="_blank" href="https://en.wikipedia.org/wiki/Undecidable_problem">undecidable problems</a>.  A surpisingly simple example is the <i>halting problem</i>,  which can be stated as:  Given a description of an arbitrary computer program and a finite set of inputs to the program, determine whether the program will eventually stop or run forever.
    :answer_c: Algorithms are step-by-step procedures.
    :feedback_c: This is challenging, but rewarding! Algorithms do proceed step-by-step.  So this is not the correct answer.
    :answer_d: Algorithms consist of a combination of sequences, selections, and/or repetitions. 
    :feedback_d: This is challenging, but rewarding! Algorithms are indeed constructed by combinations of three control structures,  sequence, selection, and repetition.  So this is not the correct answer. 
    :correct: b

    Which of the following is not true about algorithms: 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-2-3-2
    :random:
    :practice: T
    :answer_a: True
    :feedback_a: OK, so you didn’t get it right this time. Let’s look at this as an opportunity to learn. Try reviewing this...The Blockly Maze language is an example of a <i>programming language</i>. It is more formal than pseudocode and its instructions can be executed (run) on a computer.
    :answer_b: False
    :feedback_b: Right.  The Blockly Maze language is an example of a <i>programming language</i>. It is more formal than pseudocode and its instructions can be executed (run) on a computer.
    :correct: b

    True or False: The Blockly Maze language is an example of pseudocode. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-2-3-3
    :random:
    :practice: T
    :answer_a: easy to read
    :feedback_a: Because it is concise, pseudocode is easy to read--easier than a natural language.
    :answer_b: not a programming language
    :feedback_b: Pseudocode may use elements from a programming language but it is not as formal as a programming language. 
    :answer_c: a mixture between a natural language and a programming language
    :feedback_c: Yes, pseudocode is more precise than, say, English, but not as formal as a programming language.
    :answer_d: an executable program
    :feedback_d: We’re in the learning zone today. Mistakes are our friends! 
    :correct: a,b,c

    Pseudocode is ___________________.


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-2-3-4
    :random:
    :practice: T
    :answer_a:  in any order the programmer chooses 
    :feedback_a: If it were easy, you wouldn’t be learning anything!
    :answer_b: all at once 
    :feedback_b: If it were easy, you wouldn’t be learning anything!
    :answer_c: two steps at a time 
    :feedback_c: If it were easy, you wouldn’t be learning anything!
    :answer_d: in the order they are given
    :feedback_d: That's right. A sequence of instructions is executed from top to bottom in the order that they are given.
    :correct: d

    Complete the following sentence: Sequencing in algorithms means that each step of the algorithm is executed ____________. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-2-3-5
    :random:
    :practice: T
    :answer_a:  <div id="APblocks" class="yui-wk-div"> <bl class="dark">REPEAT UNTIL <bl> GoalReached </bl><br>   <bl class="dark">IF <bl>CAN_MOVE <bl>forward</bl></bl><br>     &nbsp; &nbsp;<bl>MOVE_FORWARD</bl> </bl> </bl>   </div>
    :feedback_a: 
    :answer_b:  <div id="APblocks" class="yui-wk-div"> <bl class="dark">REPEAT UNTIL <bl> GoalReached </bl><br>   <bl class="dark">IF <bl>CAN_MOVE <bl>forward</bl></bl><br>    &nbsp; &nbsp; <bl>MOVE_FORWARD</bl> <br>   ELSE <br>     &nbsp; &nbsp;<bl> ROTATE_RIGHT</bl> </bl>   </bl></div>
    :feedback_b: 
    :answer_c: <div id="APblocks" class="yui-wk-div"> <bl class="dark">REPEAT UNTIL <bl> GoalReached </bl><br>    <bl class="dark">IF <bl>CAN_MOVE <bl>left</bl></bl><br>   &nbsp; &nbsp; <bl>ROTATE_RIGHT</bl> <br>   ELSE <br>     &nbsp; &nbsp;<bl> MOVE_FORWARD</bl> </bl>     </bl> </div>
    :feedback_c: 
    :answer_d:  <div id="APblocks" class="yui-wk-div"> <bl class="dark">REPEAT UNTIL <bl> GoalReached </bl><br>   <bl class="dark">IF <bl>CAN_MOVE <bl>forward</bl></bl><br>    &nbsp; &nbsp; <bl>MOVE_FORWARD</bl> <br>   ELSE <br>     &nbsp; &nbsp;<bl> ROTATE_LEFT</bl> </bl>   </bl></div>
    :feedback_d: 
    :correct: b

    Which of the following algorithms would navigate the robot below to reach its goal, the gray square? 

    .. raw:: html

        <img src="../_static/assets/img/APExamPrepQ14ChoiceA.png" width="15%"/>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1UlhiVNJlJ-hvbunnb8S6MgyxJ4RZY-Waf0Qaejaj6pI/copy" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vRMqRjCmkowOkJN212R6eltfYMPAVkipSuoGETf79UtlUs7KTHakBdHbbKSxXAjUIVnW7TSVpAkX___/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    <!--&lt;p&gt;Create a page named&amp;nbsp;&lt;i&gt;&lt;b&gt;Algorithm Basics&lt;/b&gt;&lt;/i&gt; under the &lt;i&gt;Reflections&lt;/i&gt; category of your portfolio and answer the following questions:&lt;/p&gt;
    
    &lt;ol&gt;
      &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;)  Write an algorithm using the 4 simple commands  to navigate the robot through the maze in the POGIL question above. &lt;/li&gt;
      &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;) Write an algorithm using repetition control structures  to navigate the robot through the maze in the POGIL question above.&lt;/li&gt;
      &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;) Include a description or a photo of your drawing of a maze that the general algorithm in the POGIL exercise cannot solve.&lt;/li&gt;
      &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;) Write an algorithm  for washing a stack of 10 items that are cups and dishes mixed together, where the rule is that cups are washed in hot water and dishes in cold water. Use simple commands like &lt;b&gt;hot_wash&lt;/b&gt; and &lt;b&gt;cold_wash&lt;/b&gt;. You may also use the control structures &lt;b&gt;IF&lt;/b&gt; and &lt;b&gt;REPEAT n times&lt;/b&gt;. Identify the parts of your algorithm that are examples  of &lt;i&gt;Sequence, Selection,&lt;/i&gt; and     &lt;i&gt;Repetition&lt;/i&gt;.&lt;/li&gt;
    &lt;/ol&gt;-->
    </div>
    </div>