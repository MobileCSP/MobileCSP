.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Search Algorithms
=================

.. raw:: html

    <!-- Custom Scripts -->
    <script src="../_static/assets/lib/lessons/tipped.js" type="text/javascript"></script>
    <script src="../_static/assets/lib/lessons/Framework2020.js" type="text/javascript"></script>
    <link href="../_static/assets/lib/lessons/tipped.css" rel="stylesheet" type="text/css"></link>
    <link href="../_static/assets/lib/lessons/lessons.css" rel="stylesheet" type="text/css"></link>
    <link href="../_static/assets/css/custom.css" rel="stylesheet" type="test/css"></link>
    <script src="../_static/assets/lib/lessons/vocabulary.js" type="text/javascript"></script>
    <style>    td { text-align: left; padding: 5px;}</style>


.. raw:: html

        <div class="MCSP-lesson-content">
    <script>
        $(document).ready(function() {
            generateSummary(EKmapping['5.03']);
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
    <h3 id="est-length">Time Estimate: 45 minutes</h3>
    

Introduction and Goals
-----------------------

.. raw:: html

	<p>
    <table>
    <tbody>
      <tr>
		<td valign="top" colspan=2>Search is an important area of study in computer science. Just think of how often you search for information on the Internet using Google or some other search engine.  It's remarkable how much information Google's algorithms search through and how fast they deliver the results.</td>
      </tr>    
      <tr>
        <td valign="top"><iframe allowfullscreen="" frameborder="0" height="275" width="315" src="https://www.youtube.com/embed/0eKVizvYSUQ"></iframe>
        </td>
        <td valign="top">
			<div><b>Learning Objectives:</b>&nbspI will learn to</div>
			<ul>
			<li>identify the strengths and weaknesses of the <span class="hover vocab yui-wk-div" data-id="linear or sequential search">sequential </span> and <span class="hover vocab yui-wk-div" data-id="binary search">binary search </span> algorithms</li>
			<li>determine the number of steps required to find a value in a data set</li>
			</ul>
			<div><b>Language Objectives:</b>&nbspI will be able to</div>
			<ul>
			<li>use target vocabulary, such as <span class="hover vocab yui-wk-div" data-id="binary search">binary search </span> and <span class="hover vocab yui-wk-div" data-id="linear or sequential search">sequential search</span> while considering algorithms for finding a value in a data set, with the support of concept definitions and <a href="https://docs.google.com/presentation/d/1-IY5fs_ygKlgwUGBD9nX_tx_tFerN7pEeQvdgQIwrdw/copy" target="_blank" title="">vocabulary notes</a> from this lesson</li>
			</ul>
        </td>
      </tr>
    </tbody>
    </table>


    
Learning Activities
--------------------

.. raw:: html

	<ul align="center" style="list-style: none; margin: 0; padding: 0; background: lightgrey">
	<li style="display: inline"><a href="https://docs.google.com/document/d/1HQCHw9qhIq5M7a57xjMn-daD7BdVv7h3fjA4J8Vn160/copy" target="_blank">POGIL worksheet</a></li>
	</ul> 
	
	<p>As the video above describes, when you do a Google search, you aren't actually
			searching the Web, you're searching Google's <i>index</i> of the Web.  Google's
			<i>spider programs</i> are constantly traversing the web, collecting millions of 
			web pages and organizing them into an index.  When you do a Web search
			Google's algorithms are searching that index.
			</p>
			<p>What's the best algorithm for searching an index?  An index is an <i>ordered</i> 
			collection.  Think of the index that comes  at the back of a textbook.  It is organized 
			in alphabetical order. Each entry in the index refers to some page in the book. 
			</p>
    <div class="pogil yui-wk-div">
    <h3>POGIL Activity for the Classroom (15 minutes)</h3>
    <p>To help you think about the <b>problem of searching an index</b> we're going to play 
        a guessing game.  The objective of the game is to come up with the <b>most efficient</b>
        algorithm for guessing a number between 1 and 100, where <i>most efficient</i> means
        that it takes the fewest number of guesses. 
      </p>
    <p>To play the game you can use the widget below (<a href="https://mobile-csp.org/webapps/search/binarygame.html" target="_blank">or open in a new window</a>):
        </p><center><iframe align="center" height="360" instanceid="huHMgRJGuaCr" src="https://mobile-csp.org/webapps/search/binarygame.html" title="Binary search 2" width="550">
    </iframe>
    </center>
    <p></p>
    <p>Or, you can play the game without a computer, in which case one team member will
        think of a secret number between 1 and 100 and the other team members will 
        collaborate to try to come up with the best guess. Just as in the widget,
        after each guess, the person who knows the secret will tell the guessers
        whether the guess was too high or too low or just right.
      </p>
    <p>After figuring out a good algorithm, write it in <b>pseudocode</b>.
      </p>
    <p>Break into POGIL teams of 4.  Record your answers <a href="https://docs.google.com/document/d/1HQCHw9qhIq5M7a57xjMn-daD7BdVv7h3fjA4J8Vn160/edit" target="_blank">using this worksheet</a>. (File-Make a Copy to have a version you can edit.)
        </p><table>
    <tbody><tr><th>Role</th><th>Responsibility</th></tr>
    <tr>
    <td>Facilitator</td>
    <td>For each trial of the guessing game, the facilitator records the team's guesses 
              and the result (too high or too low or just right) and keeps track of how many
              guesses are made.
            </td>
    </tr>
    <tr>
    <td>Spokesperson</td>
    <td>Reports the team's pseudocode algorithm.</td>
    </tr>
    <tr>
    <td>Quality Control</td>
    <td>Tests the algorithm, using the widget or by playing the guessing game by hand.</td>
    </tr>
    <tr>
    <td>Process Analyst</td>
    <td>Keeps track of the teams progress and assesses its performance and records
              on the Portfolio the team's answers to the following guided inquiry questions.</td>
    </tr>
    </tbody></table>

    <p><h3>Questions</h3>
    <ol>
    <li>(<b>Portfolio</b>) Define a <i><b>pseudocode algorithm</b></i> that will efficiently play the guessing game.
        </li>
    <li>(<b>Portfolio</b>) To guess a number between 1 and 100, what's the maximum number of guesses your algorithm would take?
        </li>
    <li>(<b>Portfolio</b>) To guess a number between 1 and 500, what's the maximum number of guesses your algorithm would take?
        </li>
    </ol>
    </div>
    <h3>Guessing Game:  I'll Guess Your Secret Number</h3>
    <p> One way to look at this game is that we are searching for a number 
      in a list of numbers.  Our search made use of the fact that numbers are ordered. 
      The feedback we received – "too high" or "too low" –  was based on that order. 
      If you're still working on figuring out an efficient algorithm, maybe the following widget
      will give you some ideas.  Try to observe the algorithm that the widget  is using. (<a href="https://mobile-csp.org/webapps/search/binary.html" target="_blank">Open widget in new window.</a>)
      </p><center>
    <iframe height="360" src="https://mobile-csp.org/webapps/search/binary.html" style="border: 0;" title="Binary Search" width="550"></iframe>
    </center>
    <p></p>
    <h3>An Efficient Algorithm</h3>
    <p>There is an efficient algorithm for the guessing game problem, known as the 
    <span class="hover vocab yui-wk-div" data-id="binary search">binary search </span> algorithm. It is called
     binary search because you repeatedly divide the search space into two and eliminate one half of the search space. 
      Click <a href="https://mobile-csp.org/webapps/search/binarysearch.html" target="_blank">here</a> to see 
      the pseudocode or see the algorithm comparison section below.
    </p>
    <h3>Linear (or Sequential) Search</h3>
    <p>What if you had to search a set of data that was <b>not sorted</b>?  <span class="hover vocab yui-wk-div" data-id="binary search">Binary search </span> won't work in that case.  To illustrate this problem, let's try a variation of our
    guessing game.  This time the app will only tell you if your guess is right or wrong, not
    whether it is too high or too low.  Try it. (<a href="https://mobile-csp.org/webapps/search/sequential.html" target="_blank">Open widget in new window.</a>)
    
    </p><center>
    <iframe align="center" height="400" instanceid="tMyBr7m7BCqa" src="https://mobile-csp.org/webapps/search/sequential.html" title="Sequential guessing" width="550">
    </iframe>
    <br/>
    </center>
    <p>As you can see from this game, if you don't know the order of the items you are
    going to search, you have no choice but to search them <i><b>sequentially</b></i>
    if you definitely want to find the secret number. 
    
    </p>
    <h3>Comparing Linear vs. Binary Search Algorithms</h3>
    <p>Here is a comparison of <span class="hover vocab yui-wk-div" data-id="linear or sequential search">sequential search</span> and <span class="hover vocab yui-wk-div" data-id="binary search">binary search</span> looking for a target in a list of N items in AP style pseudocode. Don't worry about understanding the details about the <span class="hover vocab yui-wk-div" data-id="binary search">binary search</span> algorithm, but do understand the general way it works. <span class="hover vocab yui-wk-div" data-id="binary search">Binary search</span> is more complex but it is much faster. However, the list must be in a sorted order for a <span class="hover vocab yui-wk-div" data-id="binary search">binary search</span> to work. <span class="hover vocab yui-wk-div" data-id="linear or sequential search">Linear search</span> is slower but works with any list in any order.
     </p><table border="" style="border:1px solid black;">
    <thead><tr><th style="border:1px solid black;">Linear Search Pseudocode</th><th style="border:1px solid black;">Binary Search Pseudocode</th></tr>
    </thead>
    <tbody>
    <tr><td valign="top" style="border:1px solid black;"><pre>FOR EACH item in List     
    {
       IF (item = target)
           DISPLAY "Found target!"
           
    }
    </pre></td>
    <td style="border:1px solid black;"><pre>low ← 0
    high ← N
    middle ← item (low+high)/2  (compute the middle of the list, rounded down)
    REPEAT UNTIL (middle = target OR low &gt; high)    
    {
       IF (target &lt; middle) 
           high ← middle - 1    (This cuts off the top half of the list)
       IF (target &gt; middle)
           low ← middle + 1     (This cuts off the bottom half of the list)
       middle ← item (low+high)/2  (compute new middle)    
    }
    IF (middle = target)
        DISPLAY "Found target!" 
    ELSE
        DISPLAY "Target not in list"
    </pre></td>
    </tr>
    </tbody>
    </table>
    <!-- Replaced with AP pseudocode 
    &lt;p&gt;Here&#39;s a summary of the sequential (or linear) search algorithm.  Let&#39;s suppose we have 16 boxes
    numbers 1 to 16, each containing a letter, but that the words are not in any particular
    order:&lt;/p&gt;
    
    &lt;table&gt;
    &lt;tbody&gt;&lt;tr&gt;
    &lt;td&gt;
    &lt;b&gt;Problem: Find the letter &#39;F&#39;&lt;/b&gt;  
    &lt;table&gt;
    &lt;tbody&gt;&lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;6&lt;/td&gt;&lt;td&gt;7&lt;/td&gt;&lt;td&gt;8&lt;/td&gt;&lt;td&gt;9&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;U&lt;/td&gt;&lt;td&gt;E&lt;/td&gt;&lt;td&gt;Z&lt;/td&gt;&lt;td&gt;A&lt;/td&gt;&lt;td&gt;M&lt;/td&gt;&lt;td&gt;L&lt;/td&gt;&lt;td&gt;S&lt;/td&gt;&lt;td&gt;T&lt;/td&gt;&lt;td&gt;B&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
    &lt;/table&gt;
    &lt;/td&gt;
    &lt;td&gt;
    &lt;b&gt;Pseudocode of Sequential (or Linear) Search Algorithm&lt;/b&gt;
    &lt;pre&gt;Let &lt;b&gt;b&lt;/b&gt; represent the box number to search, initially 1
    Repeat until you find &#39;F&#39; or run out of boxes to search
        Look in box &lt;i&gt;b&lt;/i&gt;.
        If &#39;F&#39; is in box &lt;i&gt;b&lt;/i&gt;, stop and report &lt;i&gt;b&lt;/i&gt;&#39;s value.
        Otherwise, add 1 to &lt;i&gt;b&lt;/i&gt;
    If you don&#39;t find &#39;F&#39; in any box, report it not found.
    &lt;/pre&gt;
    &lt;/td&gt;
    &lt;/tr&gt;
    &lt;/tbody&gt;&lt;/table&gt;
    
    &lt;p&gt;So in this algorithm we are letting &lt;i&gt;b&lt;/i&gt; keep track of what box we are searching. It
    starts at 1 and increases by 1 so that we will look at every box until we find
    &#39;F&#39; or run out of boxes.  If we find &#39;F&#39; we report what box it was in by reporting &lt;i&gt;b&lt;/i&gt;&#39;s
    value.  If we don&#39;t find it, we report  that it wasn&#39;t found.
    
    &lt;/p&gt;&lt;p&gt;Searching for &#39;F&#39; in this set of boxes represents our 
    &lt;b&gt;&lt;i&gt;worst case scenario&lt;/i&gt;&lt;/b&gt;
    because our algorithm would have to look in every box to conclude that &#39;F&#39; was not in the
    boxes. 
    &lt;/p&gt;
    -->
    

Summary
--------

.. raw:: html

    <p>
    In this lesson, you learned how to:
      <div class="yui-wk-div" id="summarylist">
    </div>
    

Self-Check
-----------

.. raw:: html

    <p>
    <h3>Vocabulary</h3>
	<p>Here is a table of the technical terms we've introduced in this lesson. Hover over the terms to review the definitions.</p>
    <table align="center">
    <tbody><tr>
    <td>
    <span class="hover vocab yui-wk-div" data-id="binary search">binary search</span>
    <br/><span class="hover vocab yui-wk-div" data-id="linear or sequential search">linear or sequential search</span>
	</td>
	</tr>
    </tbody></table>
    <h3>Check Your Understanding</h3>
	
	<p>
    
.. mchoice:: mcsp-5-3-1
    :random:
    :practice: T
    :answer_a: Linear search
    :feedback_a: That's right! For searching an unordered list the linear search algorithm is the better choice.  
    :answer_b: Binary search
    :feedback_b: Sorry, a binary search is only appropriate when the collection you are searching is ordered.
    :correct: a

    For searching an unordered list, which search algorithm is the better choice? 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-5-3-2
    :random:
    :practice: T
    :answer_a: Linear search
    :feedback_a: Linear search would work, but it would be very slow. There's a better answer.
    :answer_b: Binary search
    :feedback_b: That's right! For searching a sorted list the binary search algorithm is a much more efficient algorithm. 
    :correct: b

    For searching a sorted list, which search algorithm is the better choice? 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-5-3-3
    :random:
    :practice: T
    :answer_a: Arranging a deck of cards from the lowest to the highest value cards.
    :feedback_a: Let me add new information to help you solve this question. When you arrange items or objects you are <i>sorting</i> through them. Therefore, a search algorithm is not appropriate for this problem.
    :answer_b: Looking up a phone number in the phone book given the person's full (unique) name.
    :feedback_b: True. A phone book is arranged <i> in order </i> by last name. If you know the person's full name this includes their last name and you can then perform a binary search to find their phone number.
    :answer_c: Looking up a word in a Webster's dictionary. 
    :feedback_c: True. A dictionary is arranged <i> in order </i> alphabetically. Thus, a binary search can be used to find any word in a dictionary.
    :answer_d: Looking up a person's name in the phone book given the person's phone number. 
    :feedback_d: Let me add new information to help you solve this question. A phone book is arranged in order, but it is in order <i> by last name </i>. In order to solve this problem using a binary search, the phone book would need to be in order by phone number.
    :answer_e: Finding the smallest number in a list of numbers arranged randomly. 
    :feedback_e: Let me add new information to help you solve this. A binary search is only appropriate when the collection you are searching is arranged <i>in order </i>.
    :correct: b,c

    For which of the problems would the binary search algorithm be useful? Choose all that apply.


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-5-3-4
    :random:
    :practice: T
    :answer_a: Arranging a deck of cards from the lowest to the highest value cards. 
    :feedback_a: When you arrange a collection you are <i>sorting</i>. Therefore, a search algorithm cannot be used to solve this problem.
    :answer_b: Looking up a phone number in the phone book given the person's full (unique) name.
    :feedback_b: True. A linear search can be used to look up someone's phone number in the phone book. However, a sequential search would not be the most efficient search algorithm to use. Since the phone book is arranged in order by last name, you could solve this problem more efficiently using a binary search.
    :answer_c: Looking up a word in a Webster's dictionary. 
    :feedback_c: True. A linear search can be used to look up a word in the dictionary. However, a linear search would not be the most efficient search algorithm to use. Since a dictionary is in alphabetical order, you could solve this problem more efficiently using a binary search.
    :answer_d: Looking up a person's name in the phone book given the person's phone number. 
    :feedback_d: True. A phone book is arranged in order by last name, not by phone number. Therefore, you would need to start at one end of the phone book and check each phone number individually, in order, until you find the phone number you were given and then you can find the last name associated with the phone number.
    :answer_e: Guessing a secret number between 1 and 100. 
    :feedback_e: True. A linear search can be used to guess a secret number between 1 and 100. However, a linear search would not be the most efficient search algorithm to use. Since the numbers 1 to 100 are ordered numerically, you could solve this problem more efficiently using a binary search.
    :correct: b,c,d,e

    For which of the problems could the linear search algorithm be used? Choose all that apply. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


.. mchoice:: mcsp-5-3-5
    :random:
    :practice: T
    :answer_a:  10
    :feedback_a: 
    :answer_b:  50
    :feedback_b: 
    :answer_c:  250
    :feedback_c: 
    :answer_d:  500
    :feedback_d: 
    :correct: a

    AP 2021 Sample Question:  A sorted list of numbers contains 500 elements. Which of the following is closest to the maximum number of list elements that will be examined when performing a binary search for a value in the list?


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    

Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/11C7gXeMTufJv7sffXxN9CT8_FTtV7M3DQMtk2e5HpQ4/copy" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vSOcmQ7G9RPulf0Cjit1Tx8_pQg51ZdkVTTFdVwAHLK-ljalFoERYbXBGsOrZ36eKXfwanCXkrvbfyG/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    <!--  &lt;p&gt;Create a page named &lt;i&gt;&lt;b&gt;Search Algorithms&lt;/b&gt;&lt;/i&gt; under the &lt;i&gt;Reflections&lt;/i&gt; category of your portfolio and answer the following questions:&lt;/p&gt;
      &lt;ol&gt;
        &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;) Define a &lt;i&gt;&lt;b&gt;pseudocode algorithm&lt;/b&gt;&lt;/i&gt; that will efficiently play the guessing game.&lt;/li&gt;
        &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;) To guess a number between 1 and 100, what&#39;s the maximum number of guesses your algorithm would take?    &lt;/li&gt;
        &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;) To guess a number between 1 and 500, what&#39;s the maximum number of guesses your algorithm would take?    &lt;/li&gt;  
        &lt;li&gt;Suppose you have a deck of cards and you want to find the Ace of Spades. If the deck is shuffled, which is the best search algorithm to use and why?  &lt;/li&gt;
        &lt;li&gt;Give an example of a search problem you encounter in everyday life.  Does it use linear, binary, or some other search?   &lt;/li&gt;
      &lt;/ol&gt;-->
    </div>
    </div>