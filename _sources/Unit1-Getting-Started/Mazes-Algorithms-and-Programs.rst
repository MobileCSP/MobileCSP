.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Mazes Algorithms and Programs
=============================

.. raw:: html

        <div class="MCSP-lesson-content">
    <script>
      $(document).ready(function() {
        generateSummary(EKmapping['2.02']);
        generateHovers();
        Tipped.create('.vocab', function(element) {
        var vocab = $(element).data('id');
        return vocabulary[vocab];
          }, {
            cache: false,
              position: 'topleft'
        });
      });
      
      var vocabulary = { 
        "algorithm": "An algorithm is a precise sequence of instructions for processes that can be implemented in a programming language and executed by a computer.",
        "control structure": "A control structure is one or more programming language statements that control the flow of a computer program.",
        "sequence": "The sequence control structure is simple a sequence of one or more statements in a computer program",
        "selection": "In a selection structure, a question is asked, and depending on the answer, the program takes one of two courses of action, after which the program moves on to the next event.",
        "repetition":  "A repetition structure, or loop, is used when a program needs to repeatedly process one or more instructions until some condition is met, at which time the loop ends.",
        "iteration": "Iteration is another term for repetition",
      };    
    </script>
    <h3 id="est-length">Time Estimate: 45 minutes</h3>

Introduction and Goals
-----------------------

.. raw:: html

	<p>
    <h3>Let's do some programming</h3>
    <p>MIT App Inventor  is based on a blocks platform named 
    <a href="https://blockly-demo.appspot.com/static/apps/index.html" target="_blank">Blockly</a>.  This demo
      is from <a href="http://code.org" target="_blank">Code.org</a>'s Hour of Code activity -- maybe you've 
      seen it before?   It will help you get a sense of the type of programming you will be doing in this course.  
      It lets you write small Blockly programs (called <i>scripts</i>) to solve Maze puzzles.  Can you solve all
      20 problems? 
    
	</p><h4>Click on the maze to get started!</h4>
    <a href="https://studio.code.org/hoc/1" target="_blank"><img src="../_static/assets/img/codeorgmaze.png"/></a>

Learning Activities
-----------------------

.. raw:: html

    <h3>Algorithms and Programs</h3>
    <p>As you learned in that activity, an <a href="http://en.wikipedia.org/wiki/Algorithm" target="_blank"><span class="hover vocab yui-wk-div" data-id='Algorithm'>Algorithm</span></a> 
      is a <span class="hover vocab yui-wk-div" data-id='sequence'>sequence</span> of precise instructions that solves some problem or performs some computation.   
      A <i>program</i> is an <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> that is written in a programming language that runs on a computer and is often referred to as <i>software</i>.  A program can be described by what it does and how the program statements accomplish its function.
      Each of the levels in the previous activity contained <i>code segments</i> which are collections of program statements that are part of a program. 
    
    </p><p>The scripts you created in the Maze demo contain all the essential <i><b>control
    structures</b></i> that programmers use to design algorithms:
    </p><ul>
    <li><b><span class="hover vocab yui-wk-div" data-id='Sequence'>Sequence</span></b>.  An <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> is a <span class="hover vocab yui-wk-div" data-id='sequence'>sequence</span> of precise statements (blocks).
    </li><li><b><span class="hover vocab yui-wk-div" data-id='Selection'>Selection</span> (if/else)</b>. An <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> can select between two alternative
    paths based on some condition.
    </li><li><b><span class="hover vocab yui-wk-div" data-id='Repetition'>Repetition</span> or <span class="hover vocab yui-wk-div" data-id='Iteration'>Iteration</span> (repeat)</b>. An <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> can repeat a <span class="hover vocab yui-wk-div" data-id='sequence'>sequence</span> of statements.
    </li></ul>
    <h3>Algorithms are Everywhere</h3> 
    
    Now that you've been introduced to the term <i><span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span></i> and have an initial idea of what it means, you're 
    going to discover algorithms everywhere. As you've grown up, you've learned all sorts of
    algorithms to solve everyday problems.  For example, certainly we all know how to tie our shoelaces. But can you 
    tie your shoelace in 2 seconds?   You could if you follow this <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span>:
    
    
    
    
    
    <br/><br/>
.. youtube:: _aAeI7p-Tkc
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    <p>Here's an interesting fact:  Computer scientists have 
    <a href="http://en.wikipedia.org/wiki/Structured_program_theorem" target="_blank">proved</a> that <span class="hover vocab yui-wk-div" data-id='sequence'>sequence</span>, 
    <span class="hover vocab yui-wk-div" data-id='selection'>selection</span>, and <span class="hover vocab yui-wk-div" data-id='repetition'>repetition</span> are sufficient to 
    build any <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> that can be thought of.  In other words, any <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> 
    can be expressed using only <span class="hover vocab yui-wk-div" data-id='sequence'>sequence</span>, <span class="hover vocab yui-wk-div" data-id='selection'>selection</span>, and <span class="hover vocab yui-wk-div" data-id='repetition'>repetition</span>. 
    
    </p><h3>Food for Thought</h3>
    <p>Computer scientists write algorithms to solve problems. 
    And we know now that <span class="hover vocab yui-wk-div" data-id='sequence'>sequence</span>, <span class="hover vocab yui-wk-div" data-id='selection'>selection</span>, and <span class="hover vocab yui-wk-div" data-id='repetition'>repetition</span> are sufficient to 
    express any <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span> we can think of.  
    
    </p><p>Are there algorithms we <i>can't</i> think of?  Or, to put that another
    way, are there problems that can't be solved by an <span class="hover vocab yui-wk-div" data-id='algorithm'>algorithm</span>?   What do you
    think?
    
    </p><p>That's one of the interesting questions we will take up in this course. In a few weeks, you'll know the answer.
    </p>
    

Summary
--------

.. raw:: html

    <p>
    In this lesson, you learned how to:
      <div id="summarylist">
    </div>
    <h3>Technical Terminology</h3>
    Here is a table of the technical terms that were introduced in this lesson and that will be used throughout the course. 
    You will see tables such as this in many of the lessons.  If you hover over the term, its definition or description will
    pop up.
    
    <style>    td { text-align: left; padding: 5px;}</style>
    <table align="center" width="80%">
    <tbody><tr width="80%">
    <td><span class="hover vocab yui-wk-div" data-id="algorithm">algorithm</span>
    <br/><span class="hover vocab yui-wk-div" data-id="control structure">control structure</span>
    <br/><span class="hover vocab yui-wk-div" data-id="sequence">sequence</span>
    </td>
    <td>
    <span class="hover vocab yui-wk-div" data-id="selection">selection</span>
    <br/><span class="hover vocab yui-wk-div" data-id="repetition">repetition</span>
    <br/><span class="hover vocab yui-wk-div" data-id="iteration">iteration</span>
    </td>
    </tr>
    </tbody></table>
    </div>