.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Limits of Algorithms
====================

.. raw:: html

        <div class="MCSP-lesson-content">
    <script>
      $(document).ready(function() {
        generateSummary(EKmapping['5.08']);
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
        "reasonable time" : "polynomial time",
        "unreasonable time" : "exponential time",
        "brute force" : "solve by trial and error; trying every possible option",
        "decidable problems" : "problems in which an algorithm can be constructed to answer 'yes' or 'no' for all inputs (e.g., 'is the number even?').",
        "intractable problems" : "problems that is practically impossible to solve in a <b>reasonable</b> time — i.e., there are known algorithmic solutions, but the algorithms are too inefficient to solve the problem when the number of inputs grows large",
        "heuristic" : "a technique that may allow us to find an approximate solution when typical methods fail to find an exact solution; helpful for finding a solution in a reasonable amount of time",
        "The Halting Problem" : "The theoretical problem of determining whether a computer program will halt (produce an answer) or loop forever on a given input",
        "The Traveling Salesman Problem" : "Given a list of cities and the distances between them find the shortest path visiting each city once and returning to the start.",
        "undecidable problems" : "have no algorithm that can be constructed that always leads to a correct yes-or-no answer",
        
       };       */
    
    </script>
    <!-- can use: #self-check, #still-curious, .pogil, #portfolio -->
    <h3 id="est-length">Time Estimate: 45 minutes</h3>

Introduction and Goals
-----------------------

.. raw:: html

    <p>
    <p>We've been using algorithms to build our apps and we've learned about algorithms for solving certain types of problems, such as searching and sorting problems.</p>
    <p>It may seem that no matter what the problem, we can find an algorithm to solve it.  But that is not true.  And in this lesson we want to look at some problems that algorithms cannot solve or cannot solve efficiently.</p>
	<div><b>Learning Objectives:</b>&nbspI will learn to</div>
	<ul>
	<li>differentiate between problems that have <span class="hover vocab yui-wk-div" data-id="reasonable time">reasonable</span> solutions and those that do not </li>
	<li>discuss <span class="hover vocab yui-wk-div" data-id="heuristic algorithm">heuristic</span> solutions when an optimal solution is not possible</li>
	<li>explain how <span class="hover vocab yui-wk-div" data-id="intractable problems">intractability</span> can be used to solve problems such as password security</li>
	</ul>
	<div><b>Language Objectives:</b>&nbspI will be able to</div>
	<ul>
	<li>use target vocabulary, such as <span class="hover vocab yui-wk-div" data-id="reasonable time">reasonable time</span>, <span class="hover vocab yui-wk-div" data-id="unreasonable time">unreasonable time</span>, <span class="hover vocab yui-wk-div" data-id="decidable problems">decidable problems</span>, <span class="hover vocab yui-wk-div" data-id="intractable problems">intractable problems</span> and <span class="hover vocab yui-wk-div" data-id="intractable problems">intractable problem</span> while discussing algorithms, with the support of concept definitions and <a href="https://docs.google.com/presentation/d/1-IY5fs_ygKlgwUGBD9nX_tx_tFerN7pEeQvdgQIwrdw/copy" target="_blank" title="">vocabulary notes</a> from this lesson</li>
	</ul>

Learning Activities
--------------------

.. raw:: html
	
    <ul align="center" style="list-style: none; margin: 0; padding: 0; background: lightgrey">
	<li style="display: inline"><a href="https://docs.google.com/presentation/d/1HBFf1Lkz3BMj3UstCPf7aF4LSBI_XusxYFyja1kP-hk" target="_blank" title="">slides</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://youtu.be/6uErSfQdIc0" target="_blank">YouTube video Part I</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://youtu.be/-S3q68v5vts" target="_blank">YouTube video Part II</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://docs.google.com/document/d/1DdGDkxPEo0fHh6D2-aVxzqYs0Ao6IuQXR2gnYq9LXnU/copy" target="_blank" title="">POGIL Worksheet</a></li>
	</ul> 
	
	<p> There are two categories of problems that an algorithm cannot solve.
	</p>
    <ol>
    <li style="margin-bottom: 5px"><span class="hover vocab yui-wk-div" data-id='undecidable problems'>Undecidable Problems</span>.  These problems
          are the theoretically impossible to solve — by any algorithm. The <span class="hover vocab yui-wk-div" data-id="The Halting Problem">halting problem</span> is a <span class="hover vocab yui-wk-div" data-id='decision problem'>decision problem</span> (with a yes or no answer) that is <span class="hover vocab yui-wk-div" data-id="undecidable problems">undecidable</span>. A computer cannot tell if it is in an infinite loop or it will at some point stop!
        </li>
    <li><span class="hover vocab yui-wk-div" data-id='intractable problems'>Intractable Problems</span>.  These problems are
          theoretically impossible to solve in a <span class="hover vocab yui-wk-div" data-id='reasonable time'>reasonable time</span> — i.e., there are known algorithmic
          solutions, but the algorithms are too inefficient/slow to solve the 
          problem when the number of inputs grows large.
        </li>
    </ol>
    <p>
      The following video will give us an overview of these types of limits to algorithms and will illustrate how we can use the fact that certain problems are <span class="hover vocab yui-wk-div" data-id='intractable problems'>intractable</span> to protect our passwords and other information.
    </p>
    
.. youtube:: 6uErSfQdIc0
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <br/>
	<div class="pogil yui-wk-div">
    <h3>POGIL Activity for the Classroom: Creating a Strong Password (15 minutes)</h3>
    <p>To give us a better sense of what it takes to create a strong password -- i.e., one that can
        withstand a <span class="hover vocab yui-wk-div" data-id='brute force'>brute force</span> attack --  we're going to use the Password Strength Calculator
        to test the strength of various password schemes. (<a href="https://mobile-csp.org/webapps/passwords/index.html" target="_blank" title="">Open widget in a separate window</a>)
        <iframe height="700" src="https://mobile-csp.org/webapps/passwords/index.html" style="border: 0;" title="Password Strength Calculator" width="100%"></iframe>
    </p>
    <p>According to <a href="https://en.wikipedia.org/wiki/Password_cracking" target="_blank">Wikipedia</a>, an ordinary desktop computer 
        equipped with special password cracking software can test more
        than 100 million passwords per second.  
        The goal of this activity is to come up with the <b><i>optimal password scheme</i></b> that would take
        an ordinary PC, equipped with password-cracking software, more than 10 years to crack. 
      </p>
    <p>Break into 4-person POGIL teams. Record your answers <a href="https://docs.google.com/document/d/1DdGDkxPEo0fHh6D2-aVxzqYs0Ao6IuQXR2gnYq9LXnU/edit" target="_blank" title="">using this worksheet</a>. (File-Make a Copy to have a version you can edit.) 
        </p><table>
    <tbody><tr><th>Role</th><th>Responsibility</th></tr>
    <tr>
    <td>Facilitator</td>
    <td>The facilitator records the details of the team's optimal password scheme. 
            </td>
    </tr>
    <tr>
    <td>Spokesperson</td>
    <td>Reports the team's results.</td>
    </tr>
    <tr>
    <td>Quality Control</td>
    <td>Uses the online calculator to test the team's ideas for creating secure passwords.</td>
    </tr>
    <tr>
    <td>Process Analyst</td>
    <td>Assesses the team's performance and records
              on the Portfolio the team's answers to the following guided inquiry questions.</td>
    </tr>
    </tbody></table>

    <p><h3>Questions</h3>
    <ol>
    <li style="margin-bottom: 5px;">(<b>Portfolio</b>) A <b><i>password scheme</i></b> consists of a minimum password length and 
          the different types of symbols  (i.e., letters, numbers, specials) that can be used in the password.
          Using the Password Strength Calculator, determine the <b><i>optimal scheme</i></b> for withstanding a <span class="hover vocab yui-wk-div" data-id='brute force'>brute force</span>
          attack of at least 10 years by an ordinary PC performing 100 million tests per second. 
        </li>
    <li style="margin-bottom: 5px;">(<b>Portfolio</b>) According to <a href="https://www.extremetech.com/extreme/316266-the-nvidia-rtx-3090-gpu-can-probably-crack-your-passwords" target="_blank">this 
          2020 article</a>, a password-cracking computer can try 669 billion passwords per second. How would you have to modify your scheme to withstand a 10-year attack by this specially designed computer?
        </li>
    <li>(<b>Portfolio</b>) After you’ve calculated the estimated number of passwords that can be checked per second for the next year, use the Password Strength Calculator to determine an optimal password scheme. 
		<br/> a. How long should the password be? 
		<br/> b. What combination of characters should it include?
        </li>
    </ol>
    </div>
    <h3>Heuristic Solutions to Intractable Problems</h3>
    <p>For some <span class="hover vocab yui-wk-div" data-id='intractable problems'>intractable problems</span>, we need to have practical 
      solutions.  One such example is the <span class="hover vocab yui-wk-div" data-id='The Traveling Salesman Problem'>Traveling Salesman Problem (TSP)</span>:
      Construct the most efficient route, <b>the optimal route</b>, that visits <i>N</i> cities. This is an <span class="hover vocab yui-wk-div" data-id='optimization problem'>optimization problem</span> where the goal is to find the "best" (most optimal) solution among many.
    </p>
    <p>This is a problem we would like to be able to solve.  Variations
      of this problem are the kinds of problems that Google maps and other apps solve for us
      when we ask for driving directions.
    </p>
    <p>Fortunately, there are so-called heuristic algorithms that computer
      scientists use to solve such problems. A <span class="hover vocab yui-wk-div" data-id='heuristic algorithm'>heuristic algorithm</span> is one
      that provides a solution to a problem, although in many cases the solution may not be
      the best possible solution -- i.e., it may not be an optimal solution.
    </p>
    <p>
      The following video will give us an overview of the <span class="hover vocab yui-wk-div" data-id='The Traveling Salesman Problem'>Traveling Salesman Problem</span>.
    </p>
    
.. youtube:: -S3q68v5vts
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <br/>
    <div class="pogil yui-wk-div">
    <h3>POGIL Activity for the Classroom: Traveling Salesman Problem (15 minutes)</h3>
    <p>Using the same POGIL teams as above, let's give the <i><b>nearest neighbor heuristic</b></i>  a try on this problem.
        </p><blockquote>
        A Trinity College student needs to visit some of the <a href="https://www.mobilecsp.org/about/our-schools-and-teachers" target="_blank">Mobile CSP Schools</a>
        in Hartford, Connecticut.  The following map shows the schools that need to be visited and gives the
        distances between each pair of schools.  The student needs a good route, starting and ending at Trinity College,
        that will visit all of the schools.
      </blockquote>
    <center>
    <img src="../_static/assets/img/TSPMap.png" width="400"/>.
      </center>
    <br/>
        Use the map to answer the following questions. 
    
    
      <h3>Questions</h3>
    <ol>
    <li style="margin-bottom: 5px;">Starting and ending at Trinity College, what route would the <i>nearest neighbor <span class="hover vocab yui-wk-div" data-id='heuristic algorithm'>heuristic</span></i>
          produce for the proposed visits? 
        </li>
    <li style="margin-bottom: 5px;">Starting and ending at Trinity College, find the optimal route that visits all schools. (HINT: To prove that
          your route is optimal, you'll have to compare it to all possible routes starting and ending at Trinity.) 
        </li>
    <li>(<b>Portfolio</b>) For routes starting and ending at Trinity College, you have identified the nearest neighbor route and
          the optimal route.  What does this show you about the nearest neighbor <span class="hover vocab yui-wk-div" data-id='heuristic algorithm'>heuristic</span>?
        </li>
    </ol>
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
    <ul>
   <li>Try the <a href="https://www.security.org/how-secure-is-my-password/" target="_blank">How secure is my password site.</a></li>
   <li>Check out the article <i><a href="https://www.wired.com/story/why-so-many-people-make-their-password-dragon/" target="_blank">Why So Many People Make Dragon Their Password</a></i> from Wired magazine.</li>
	<li>Check out the article <i><a href="https://www.betterbuys.com/estimating-password-cracking-times/" target="_blank">Estimating Password Cracking Times</a></i> from Better Buys.</li>
    <li>Do some online research to explore alternatives to  passwords schemes -- for example, two-factor authentication, biometrics, virtual tokens.   What are their relative advantages and disadvantages?</li>
    <li>Here's an interactive shortest <a href="http://www.math.uwaterloo.ca/tsp/college/index.html" target="_blank">TSP tour to visit the top 647 colleges in the U.S.</a>.</li>
    <li>Here's a neat <a href="https://algorithms.discrete.ma.tum.de/graph-games/tsp-game/index_en.html">TSP Game</a> that uses maps in Europe and Africa.  You can use it to test the nearest neighbor heuristic, or to try to  come up with your own heuristic for finding good routes through the cities.</li>
    <li>One field of computer science that makes extensive use of heuristics is <i><b>Artificial Intelligence (AI)</b></i>. You've probably heard of it. The field of AI traditionally tackles problems that humans are good at but computers are not (yet) good at -- for example, vision, speech recognition, natural language understanding, planning, driving, and so on. However, great progress is being made in these various areas -- just think for a moment about how well Siri and similar  intelligent digital assistants work today. In fact, try asking Siri "Hey Siri, how do you solve the traveling salesman problem?".   AI is a vast field. And, as for many topics, a good way to start learning more about <a href="https://en.wikipedia.org/wiki/Heuristic_(computer_science)" target="_blank">Heuristics</a> and AI would be to start with <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank">Wikipedia</a>. </li>
    </ul>
    
Self-Check
-----------

.. raw:: html

    <p>
    Here is a table of some of the technical terms discussed in this lesson. Hover over the terms to review the definitions.
    
    <table align="center">
    <tbody>
    <tr>
    <td>
    <span class="hover vocab yui-wk-div" data-id="brute force">brute force</span>
    <br/><span class="hover vocab yui-wk-div" data-id="decidable problems">decidable problems</span>
    <br/><span class="hover vocab yui-wk-div" data-id="undecidable problems">undecidable problems</span>
    <br/><span class="hover vocab yui-wk-div" data-id="intractable problems">intractable problems</span>
    <br/><span class="hover vocab yui-wk-div" data-id="reasonable time">reasonable Time</span>
    <br/><span class="hover vocab yui-wk-div" data-id="unreasonable time">unreasonable Time</span>
    
    </td>
    <td>
    <br/><span class="hover vocab yui-wk-div" data-id="The Halting Problem">The Halting Problem</span>
    <br/><span class="hover vocab yui-wk-div" data-id="The Traveling Salesman Problem">The Traveling Salesman Problem</span>
    <br/><span class="hover vocab yui-wk-div" data-id="heuristic algorithm">heuristic algorithm</span>
    <br/><span class="hover vocab yui-wk-div" data-id="decision problem">decision problem</span>
    <br/><span class="hover vocab yui-wk-div" data-id="optimization problem">optimization problem</span>
    </td>
    </tr>
    </tbody>
    </table>
    <br/>
    <br/>
.. mchoice:: mcsp-5-8-1
    :random:
    :practice: T
    :answer_a: Tractable
    :feedback_a: Let me add new information to help you solve this question. There are 26 possible 1-letter words, 26 × 26 2 letter words, 26 × 26 × 26 3-letter words, and so on.  So there would be 26<sup>N</sup> N-letter words.  This is <i>exponential</i>. 
    :answer_b: Intractable
    :feedback_b: Yes. If the string has <i>N</i> letters 'a' to 'z', then there are 26<sup>N</sup> possible strings, which is <i>exponential</i>.  This is similar to trying to crack a long password made up of lowercase letters. In this case, each letter in the password can be one of 26 possible letters.   If you made such a password long enough (e.g., more than 15 letters), it would be fairly secure from brute force attack. 
    :correct: b

    Is the following problem tractable (solvable in a reasonable amount of time) or intractable (cannot be solved in a reasonable amount of time)?   For any length string of letters using any combination of the letters 'a' through 'z', write down all possible strings.


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-5-8-2
    :random:
    :practice: T
    :answer_a: True
    :feedback_a: This is challenging, but rewarding! The <i>Halting Problem</i> is an example of an unsolvable problem. 
    :answer_b: False
    :feedback_b: Yes. The <i>Halting Problem</i> is an example of an undecidable problem, as Turing proved.
    :correct: b

    True or False:  An algorithm can be found for any computational problem whatsoever.


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-5-8-3
    :random:
    :practice: T
    :answer_a: an intractable problem.
    :feedback_a: This is challenging, but rewarding! Intractable problems are those for which there are known algorithms but the algorithms are exponential and therefore too inefficient to solve the problem for large N.
    :answer_b: an exponential problem.
    :feedback_b: This is challenging, but rewarding! Exponential  problems are those for which there are only exponential algorithms available.  But the Halting Problem is not such a problem.
    :answer_c: an undecidable problem.
    :feedback_c: Yes.  As Turing proved, it is impossible to solve the Halting Problem.
    :answer_d: a difficult problem.
    :feedback_d: This is challenging, but rewarding! The Halting Problem is an undecidable problem.
    :correct: c

    The Halting Problemis an example of 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-5-8-4
    :random:
    :practice: T
    :answer_a: True
    :feedback_a: Let me add new information to help you solve this...Some intractable problems, such as the problem of breaking cryptographic keys, are helpful.  In that case the intractability of the problem protects the security of our networks. There are many similar uses of such intractable problems in computing, many of which are used to make the Internet more secure.  
    :answer_b: False
    :feedback_b: Some intractable problems, such as the problem of breaking cryptographic keys, are helpful.  In that case the intractability of the problem protects the security of our networks. There are many similar uses of such intractable problems in computing, many of which are used to make the Internet more secure. 
    :correct: b

    True or false:  All intractable problems (that cannot be solved in a reasonable time) are bad.


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    

Sample AP CSP Exam Question
----------------------------

.. raw:: html

    <p>
    
.. mchoice:: mcsp-5-8-5
    :random:
    :practice: T
    :answer_a:  When the problem can be solved in a reasonable time and an approximate solution is acceptable.
    :feedback_a: 
    :answer_b:  When the problem can be solved in a reasonable time and an exact solution is needed.
    :feedback_b: 
    :answer_c:  When the problem cannot be solved in a reasonable time and an approximate solution is acceptable.
    :feedback_c: 
    :answer_d:  When the problem cannot be solved in a reasonable time and an exact solution is needed.
    :feedback_d: 
    :correct: c

    Under which of the following conditions is it most beneficial to use a heuristic approach to solve a problem?


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    

Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1Xd5HurRpuYcvdpAY5t1mo2TjP8QtI-AQi4P6VuUpHwA/copy" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vQWkxEPFsCesHcbCPCsC1Vng3RlZmj0IVvwnKmOP-sTS3QxDQoQn_M-gnkq3KJ-zi32rYIqAdXmHcKx/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    <!--Create a page named &lt;i&gt;&lt;b&gt;Limits to Algorithms&lt;/b&gt;&lt;/i&gt; under the &lt;i&gt;Reflections&lt;/i&gt; 
    category of your portfolio and answer the following questions:
    
      &lt;ol&gt;
        &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;) A &lt;b&gt;&lt;i&gt;password scheme&lt;/i&gt;&lt;/b&gt; consists of a minimum password length and 
          the different types of symbols  (i.e., letters, numbers, specials) that can be used in the password.
          Using the Password Strength Calculator, determine the &lt;b&gt;&lt;i&gt;optimal scheme&lt;/i&gt;&lt;/b&gt; for withstanding a brute force
          attack of at least 10 years by an ordinary PC performing 100 million tests per second. 
        &lt;/li&gt;
        &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;) According to &lt;a target=&quot;_blank&quot; href=&quot;http://arstechnica.com/security/2012/12/25-gpu-cluster-cracks-every-standard-windows-password-in-6-hours/&quot;&gt;this 
          2012 article&lt;/a&gt;, a password-cracking computer can try 350 billion passwords per second.  How would you have
          to modify your scheme to withstand a 10-year attack by this specially designed computer? 
        &lt;/li&gt;
        &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;) That article was written in 2012, almost 5 years ago. Password cracking technology has
          probably gotten a lot better.  Suppose the number of passwords that can be checked per second doubles every 
          year,  use the Password Strength Calculator to determine an optimal password scheme for the year 2020?
        &lt;/li&gt;  
        &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;) For routes starting and ending at Trinity College, identify the nearest neighbor route and
          the optimal route.  What does this show you about the nearest neighbor heuristic?
        &lt;/li&gt;  
    &lt;/ol&gt;-->
    </div>
    </div>