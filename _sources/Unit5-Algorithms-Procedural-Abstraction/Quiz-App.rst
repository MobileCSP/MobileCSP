.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Quiz App
========

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
            generateSummary(EKmapping['5.05']);
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
		<td valign="top" colspan=2>The Quiz App presents a quiz about pioneers in computer science. The questions, answers, and images are in <b>parallel lists</b> where the first question in the question list corresponds to the first answer in the answer list and the first image in the image list, and so on for each element in the lists.</td>
      </tr>	
    <tr>
	<tr>
        <td valign="top"><iframe allowfullscreen="" frameborder="0" height="275" src="https://www.youtube.com/embed/G_BrTzwHcoU" width="300"></iframe>
		<!-- (&lt;a target=&quot;_blank&quot; href=&quot;&quot;&gt;Teacher Tube version&lt;/a&gt;)-->
        </td>
        <td valign="top">
			<div><b>Learning Objectives:</b>&nbspI will learn to</div>
			<ul>
			<li>navigate a list using an index variable</li>
			<li>perform operations on a list, such as selecting items and checking for the end</li>
			<li>use parallel lists to organize data</li>
			</ul>
			<div><b>Language Objectives:</b>&nbspI will be able to</div>
			<ul>
			<li>explain how items in parallel lists are related to each other</li>
			<li>use target vocabulary, such as <span class="hover vocab yui-wk-div" data-id="index">index </span> and <span class="hover vocab yui-wk-div" data-id="parallel lists">parallel list </span>, while describing app features and User Interface with the support of concept definitions and <a href="https://docs.google.com/presentation/d/1-IY5fs_ygKlgwUGBD9nX_tx_tFerN7pEeQvdgQIwrdw/copy" target="_blank" title="">vocabulary notes</a> from this lesson</li>
			</ul>
        </td>
    </tr>
    </tbody>
    </table>
    

Learning Activities
--------------------

.. raw:: html

    <ul align="center" style="list-style: none; margin: 0; padding: 0; background: lightgrey">
	<li style="display: inline"><a href="https://docs.google.com/document/d/1RPxUXIbluNl4RBjEsBojSzQTvBZqWm3eO5Y9Fci_-0k/edit?usp=sharing" target="_blank" title="">text-version</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://docs.google.com/document/d/1esBQ08ydu6a-ZpNjQ9FPk-qMuHmg6gjSRtnLPaOLo60/edit?usp=sharing" target="_blank">short handout</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://youtu.be/y7epbJbCZOI" target="_blank">YouTube video</a></li>
	</ul> 
	
	<p><h3>Tutorial</h3>
    <p>
      To get started, open App Inventor with the 
      <a href="http://ai2.appinventor.mit.edu/?repo=templates.appinventor.mit.edu/trincoll/csp/unit6/templates/QuizApp/QuizAppTemplate.asc" target="_blank">Quiz App template</a> 
      in a separate tab and follow along with the video tutorial, read the text tutorial, or for an extra challenge use just the short handout.
    </p>
    
.. youtube:: y7epbJbCZOI
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <h3>Quiz Questions</h3>
    <p>In the app you will construct three separate lists for the questions, answers, and the names of image files. The first question in the question list corresponds to the first answer in answer list and the first image in the image list. This is known as a <b><i>parallel list construction</i></b>.  
		This parallel setup allows you to use an <i><b>index</b></i> variable to associate each question with its corresponding answer and image. For example, when the index variable has the value 2, it is referring to the second question, second answer, and second image.	

	<p>You will be typing in the quiz questions, answers, and image names (the image jpg files are provided in the Quiz App template).</p>
      
    The questions are:
    <ol>
    <li>Which computer science pioneer broke the German Enigma Code during the World War II?
      </li>
    <li>Which NASA engineer was the first black female engineer at NASA and a human computer featured in the movie Hidden Figures?  </li>
    <li>Which Navy admiral led the creation of COBOL, one of the first high level programming languages?
      </li>
    </ol>
    The corresponding answers are:
    <ol>
    <li>Alan Turing</li>
    <li>Mary Jackson</li>
    <li>Grace Hopper</li>
    </ol>   
    The corresponding images are:
    <ol>
    <li>AlanTuring.jpg</li>
    <li>MaryJackson.jpg</li>
    <li>GraceHopper.jpg</li>
    </ol> 
    
    </p><h3>Enhancements and Extensions</h3>
    <p>Here are some programming problems that will let you enhance and extend the Quiz App. 
      </p><ol>
    <li style="margin-bottom: 5px;">As you might have noticed, if the answer is “Alan Turing” and the user types in “alan turing”, 
          the answer will be marked incorrect.  That’s not very nice for the user.  To remedy this 
          problem you will want to convert both the user’s answer and the stored answer to upper case 
          “ALAN TURING”.  (HINT: use the <b><i>upcase</i></b> block in the <i>Text</i> drawer to convert both strings.)
        </li>
    <li style="margin-bottom: 5px;">When the user gets an incorrect answer, instead of just reporting “incorrect”, use a <i><b>join</i></b> 
          block to also display the correct answer. For example, “Sorry, that is incorrect. The correct answer is Grace Hopper.” 
        </li>
    <li style="margin-bottom: 5px;">  Add <i>RandomButton</i> to the app that when clicked will display a random 
          question from the quiz.  (HINT:  You could use some new blocks from the <a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#pickrandomitem" target="_blank">List drawer</a> such as a <em>pick a random item</em> block fed into an <em>index in list thing</em> block to set the index randomly.)
        </li>
    <li>Add a fourth question (and answer and image) to the quiz.  If you like, you can research 
          famous computer scientists on the Web to discover a fourth person.  Or, if you wish, you can 
          create a question about <a href="http://news.mit.edu/2011/abelson-sigcse-award" target="_blank">Hal Abelson</a>, 
          the creator of our App Inventor programming language. (HINT: You should only have to modify the 3 lists 
          and upload an image file. The code should work with any number of questions as long as you used 
          the length of list block instead of hard coding in the number 3 for the number of questions.)
        </li>
    </ol>
    

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

    <p>More information about these computer science pioneers can be found below:
      </p><ul>
    <li> Alan Turing:   <a href="https://en.wikipedia.org/wiki/Alan_Turing" target="_blank">wikipedia</a>,<a href="http://www.imdb.com/title/tt2084970/" target="_blank"> the movie "Imitation Game"</a></li>
    <li> Hidden Figures:  <a href="https://www.nasa.gov/modernfigures" target="_blank">NASA Biographies</a>, <a href="http://www.imdb.com/title/tt4846340/" target="_blank">the Hidden Figures movie</a>, <a href="https://www.amazon.com/Hidden-Figures-American-Untold-Mathematicians/dp/0062363603/ref=sr_1_1?s=books&amp;ie=UTF8&amp;qid=1497143974&amp;sr=1-1&amp;keywords=Margot+Lee+Shetterly" target="_blank">the Hidden Figures book</a>,   
      <a href="https://en.wikipedia.org/wiki/Katherine_Johnson" target="_blank">Katherine Johnson</a>, <a href="https://en.wikipedia.org/wiki/Mary_Jackson_(engineer)" target="_blank">Mary Jackson</a>,
      <a href="https://en.wikipedia.org/wiki/Dorothy_Vaughan" target="_blank">Dorothy Vaughan</a>, <a href="http://www.biography.com/news/hidden-figures-movie-real-women" target="_blank">more hidden figures</a></li>
    <li> <a href="https://en.wikipedia.org/wiki/Grace_Hopper" target="_blank">Admiral Grace Hopper</a></li>
    </ul>


Self-Check
-----------

.. raw:: html

    <p>
    <h3>Vocabulary</h3>
	<p>Here is a table of the technical terms we've introduced in this lesson. Hover over the terms to review the definitions.</p>
    <table align="center">
    <tbody><tr>
    <td>
    <span class="hover vocab yui-wk-div" data-id="index">index</span>
    <br/><span class="hover vocab yui-wk-div" data-id="parallel lists">parallel lists</span>
	</td>
	</tr>
    </tbody></table>
    <h3>Check Your Understanding</h3>
	
	<p>
    
.. fillintheblank:: mcsp-5-5-1
    :casei:

    What name occurs at index 3 in the following list? Type your answer into the textbox. Spelling counts. 

    .. raw:: html

        <img class="yui-img selected" src="../_static/assets/img/namesList1.png"> |blank|

    - :Barack: That's right! A list is indexed from 1 to N, where N is the number of items in the list.
      :x: A list is indexed from 1 to N, where N is the number of items in the list. Therefore, the item at index 3 is Barack.


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. fillintheblank:: mcsp-5-5-2

    What is the length of the following list? Type your answer into the textbox. 

    .. raw:: html

        <img class="yui-img selected" src="../_static/assets/img/namesList1.png"/> |blank|

    - :5: That's right! This list has 5 elements or items. 
      :x: This list has 5 elements or items. Therefore, the length of this list is 5.


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. fillintheblank:: mcsp-5-5-3
    :casei:

    What value will the global variable name have after Button1 is clicked? Type your answer into the textbox. Spelling counts. 

    .. raw:: html

        <img class="yui-img selected" src="../_static/assets/img/namesListIndex5.png"/> |blank|

    - :Teddy: That's right! When Button1 is clicked, the item at index 5 (Teddy) will be selected from the list and assigned to the global variable name.
      :x: When Button1 is clicked, the item at index 5 (Teddy) will be selected from the list and assigned to the global variable name. Hopefully, you weren't confused by the initialization block which assigns the initial value "Barack" to the variable.


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. fillintheblank:: mcsp-5-5-4
    :casei:

    What value will the global variable name have after Button1 is clicked? Type your answer into the textbox. Spelling counts.

    .. raw:: html

        <img class="yui-img selected" src="../_static/assets/img/namesListIndexX.png"/> |blank|

    - :Abe: That's right! When Button1 is clicked, the item at index X, which has the value 1, will be selected from the list and assigned to the global variable name. So the name Abe will be selected from the list. 
      :x: When Button1 is clicked, the item at index X, which has the value 1, will be selected from the list and assigned to the global variable name. So the name Abe will be selected from the list. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-5-5-5
    :random:
    :practice: T
    :answer_a: The list is not properly set up. 
    :feedback_a: Let me add new information to help you solve this; the list is set up properly because it is initialized.
    :answer_b: The displayName procedure is not being called when the button is clicked.
    :feedback_b: That's right. Although displayName is defined correctly, it was never being called in Button1.Click. Here's the corrected code:<br><img src="assets/img/buttonClickDisplayNameProcedureCorrected.png" class="yui-img"><br>
    :answer_c: The displayName procedure has a bug in it. 
    :feedback_c: Let me add new information to help you solve this; the displayName procedure is defined correctly and does not contain any bugs.
    :answer_d: The displayName procedure was never defined. 
    :feedback_d: Let me add new information to help you solve this; the displayName procedure is defined as set Label1.Text to the item at index X of the names list.
    :answer_e: Maybe Label1 is not enabled. 
    :feedback_e: Let me add new information to help you solve this; labels do not have an enabled property or feature. Labels are used just to display text.
    :correct: b

    Find the bug. When Button1 is clicked, Label1 is supposed to be set to a name that is selectedfrom the names list by the displayName procedure. But the label's Text never changes. Why? 

    .. raw:: html

        <img class="yui-img" src="../_static/assets/img/buttonClickDisplayNameProcedure.png"/>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-5-5-6
    :random:
    :practice: T
    :answer_a: The quiz will stop at the last question and not allow the user to return to earlier questions.
    :feedback_a: If it were easy, you wouldn’t be learning anything! This is not an issue as the quiz will indeed loop back to the first question
    :answer_b: The app will stop running and an error message will appear.
    :feedback_b: If it were easy, you wouldn’t be learning anything! This is not an issue as the index never gets too big so the select list item always selects a valid item.
    :answer_c: The last question in the quiz will never be reached.
    :feedback_c: Because of the ">=" in the if-test, the quiz jumps to the first question before the last is displayed. Replacing ">=" with ">" would provide the correct behavior. 
    :correct: c

    The following blocks specify what happens when the user clicks "Next" in a quiz app:There is a subtle error in the code such that the quiz won't work as desired. What is the problem?

    .. raw:: html

        <img class="yui-img" src="../_static/assets/img/quizLoopError.png" width="70%"/>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <br/>
   

Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1O6g_AucozjL0gV2twWDOPEca0YnMZGOKdSwX77_N_4g/copy" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vQbKXShMbs6ZqZgB9DVrU4TYeddnNr6lUWKZMMJGXfDQSTaEdp1pHFx8JgEFhWGYDaupuO3HOoM7a6v/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    <!--  &lt;p&gt;Create a page named &lt;b&gt;&lt;i&gt;Quiz App&lt;/i&gt;&lt;/b&gt; under the &lt;i&gt;Reflections&lt;/i&gt; category of your 
        portfolio and answer the following questions.
      &lt;/p&gt;
      &lt;ol&gt;
          &lt;li&gt;Describe the significance of the global variable index. How is indexing used with lists in this app? 
        &lt;/li&gt;
        &lt;li&gt;Describe how parallel lists were used in this app. Why was the parallel structure of the lists necessary?&lt;/li&gt;
        &lt;li&gt;Include screenshots of your code for exercises 2 and 3 from the &lt;i&gt;Enhancements&lt;/i&gt; section.&lt;/li&gt;
        &lt;li&gt;Include a screenshot of the code that added your extra question (exercise 4). Explain why the 
          code for the buttons worked without any changes after the addition of the extra question. 
      
      &lt;/li&gt;&lt;/ol&gt;-->
    </div>
    </div>