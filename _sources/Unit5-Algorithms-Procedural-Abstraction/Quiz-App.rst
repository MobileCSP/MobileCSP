.. raw:: html 

    <a href="../index.html"><img class="align-center" src="../_static/MobileCSPLogo.png" width="250px"/></a>

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
    <td>
    <iframe allowfullscreen="" frameborder="0" height="420" src="https://www.youtube.com/embed/G_BrTzwHcoU" width="315">
    </iframe>
    <!-- (&lt;a target=&quot;_blank&quot; href=&quot;&quot;&gt;Teacher Tube version&lt;/a&gt;)-->
    </td>
    <td>The Quiz App presents a quiz about pioneers in computer science.The quiz uses lists, labels, images, and a button to create a simple question and answer quiz that displays ‘Correct!’ or ‘Incorrect!’ depending on the user’s answer. An index variable is used to keep track of the current question and access its  correct answer and corresponding image. The questions, answers, and corresponding images are in <b>parallel lists</b> where the first question in the question list matches with the first answer in the answer list and the first picture in the picture list, etc.
    
          
            <p><b>Objectives:</b> In this lesson you will learn to:</p>
    <ul>
    <li>navigate through a list using an index variable;</li>
    <li>select items from a list;</li>
    <li>check for the end of the list;</li>
    <li>work with parallel lists.</li>
    </ul>
    </td>
    </tr>
    </tbody>
    </table>
    

Learning Activities
--------------------

.. raw:: html

    <p><h3>Video Tutorial</h3>
    <p>
      To get started, open App Inventor with the 
      <a href="http://ai2.appinventor.mit.edu/?repo=templates.appinventor.mit.edu/trincoll/csp/unit6/templates/QuizApp/QuizAppTemplate.asc" target="_blank">Quiz App template</a> 
      in a separate tab and follow along with the following video tutorials or the <a href="https://docs.google.com/document/d/1RPxUXIbluNl4RBjEsBojSzQTvBZqWm3eO5Y9Fci_-0k/edit?usp=sharing" target="_blank">text tutorial</a> or for an extra challenge use just the  <a href="https://docs.google.com/document/d/1esBQ08ydu6a-ZpNjQ9FPk-qMuHmg6gjSRtnLPaOLo60/edit?usp=sharing" target="_blank">short handout</a>.
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
    <p>The template contains the images used in this quiz, however you will be typing in the quiz questions and answers:
      
    <br/>The questions are:
    </p><ol>
    <li>Which computer science pioneer broke the German Enigma Code during the World War II?
      </li>
    <li>Which recent movie showcases the first African-American women who worked as human “computers” for NASA?
      </li>
    <li>Which Navy admiral led the creation of COBOL, one of the first high level programming languages?
      </li>
    </ol>
    The matching answers are:
    <ol>
    <li>Alan Turing</li>
    <li>Hidden Figures</li>
    <li>Grace Hopper</li>
    </ol>
    <p>In the app you will construct separate lists for the questions and answers (and picture files) in which
      the first question in the question list goes with the first answer in answer list.  This is known as a 
      <b><i>parallel list construction</i></b>.  This parallel setup allows you to easily keep track of questions, 
      their answers, and their pictures using an <i><b>index</b></i> variable. 
    
    
    </p><h3>Enhancements and Extensions</h3>
    <p>Here are some programming problems that will let you enhance and extend the Quiz App. 
      </p><ol>
    <li>As you might have noticed, if the answer is “Alan Turing” and the user types in “alan turing”, 
          the answer will be marked incorrect.  That’s not very nice for the user.  To remedy this 
          problem you will want to convert both the user’s answer and the stored answer to upper case 
          “ALAN TURING”.  (HINT: use the <b><i>upcase block</i></b> in the Text drawer to convert both strings.)
        </li>
    <li>When the user gets an incorrect answer, instead of just reporting “incorrect”, use a join 
          block to also display the correct answer.  “Sorry, that is incorrect. The correct answer is Grace Hopper.” 
        </li>
    <li>  Add <i>RandomButton</i> to the app that when clicked will display a random 
          question from the quiz.  (HINT:  You could use some new blocks from the <a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#pickrandomitem" target="_blank">List drawer</a> such as a <em>pick a random  item</em> block fed into a <em>index in list thing</em> block to set the index randomly.)
        </li>
    <li>Add a fourth question (and answer and picture) to the quiz.  If you like, you can research 
          "famous computer scientists" on the Web to discover a fourth person.  Or, if you wish, you can 
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
    

Self-Check
-----------

.. raw:: html

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
    <h2 id="still-curious"><br/>Still Curious?</h2>
    <p>More information about these computer science pioneers can be found below:
      </p><ul>
    <li> Alan Turing:   <a href="https://en.wikipedia.org/wiki/Alan_Turing" target="_blank">wikipedia</a>,<a href="http://www.imdb.com/title/tt2084970/" target="_blank"> the movie "Imitation Game"</a></li>
    <li> Hidden Figures:  <a href="https://www.nasa.gov/modernfigures" target="_blank">NASA Biographies</a>, <a href="http://www.imdb.com/title/tt4846340/" target="_blank">the Hidden Figures movie</a>, <a href="https://www.amazon.com/Hidden-Figures-American-Untold-Mathematicians/dp/0062363603/ref=sr_1_1?s=books&amp;ie=UTF8&amp;qid=1497143974&amp;sr=1-1&amp;keywords=Margot+Lee+Shetterly" target="_blank">the Hidden Figures book</a>,   
      <a href="https://en.wikipedia.org/wiki/Katherine_Johnson" target="_blank">Katherine Johnson</a>, <a href="https://en.wikipedia.org/wiki/Mary_Jackson_(engineer)" target="_blank">Mary Jackson</a>,
      <a href="https://en.wikipedia.org/wiki/Dorothy_Vaughan" target="_blank">Dorothy Vaughan</a>, <a href="http://www.biography.com/news/hidden-figures-movie-real-women" target="_blank">more hidden figures</a></li>
    <li> <a href="https://en.wikipedia.org/wiki/Grace_Hopper" target="_blank">Admiral Grace Hopper</a></li>
    </ul>
    

Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1O6g_AucozjL0gV2twWDOPEca0YnMZGOKdSwX77_N_4g/edit?usp=sharing" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
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