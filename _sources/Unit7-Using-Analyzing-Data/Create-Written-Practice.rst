.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Create PT Written Response Practice
===================================

.. raw:: html

    <div class="MCSP-lesson-content">
	<script>
	  $(document).ready(function() {
	    generateSummary(EKmapping['8.11']);
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
	
	
	<h3 id="est-length">Time Estimate: 180 minutes</h3>
	
	<img src="../_static/assets/img/introandgoalsicon.png" width="25" height="25" style="float:left">
	                                                                                                       
Introduction and Goals
----------------------

.. raw:: html
	
	<p></p>
	<table><tbody>
	  <tr><td><iframe src="https://drive.google.com/file/d/1fWruRmW7ldAgJFPNhNC1Nog5DHLMAuUN/preview" allowfullscreen="" width="315" height="420" frameborder="0"></iframe>
	  <br><br></td>
	<td>
	  <p><b><i>The Language Learning Game</i></b>&nbsp;is an educational memory app that allows users to practice learning a different language. The game's code contains all of the programming requirements to satifsy the College Board's Create Performance Task scoring guidelines.</p>
	  <p><b>Objective:</b> In this lesson you will practice answering the Create Performance Task prompts.</p>
	    </td></tr>
	  </tbody></table>
	

Learning Activities
-------------------

.. raw:: html

	<h3>Enhancements </h3>
	<p>Before you can respond to the prompts in the Create Performance Task, you will need to understand how the game works and examine the code that has been provided for you. Complete the enhancement activities to help you get familiar with the code. Remember to work incrementally: implement, test, review, and repeat. You may use <a href="https://docs.google.com/document/d/1RCGzd0OSohNxA5Y5bDARUmUXIAJ-4Uit9UJfwi49NF0/copy" target="_blank" title="">this document</a> to track your progress as you work.
	<br></p>
	
	<ol>
	<li>Download the <a href="https://drive.google.com/file/d/1DasxGOn3N8BFOM7VJ9p-Dwbk7xpGAH5z/view?usp=sharing" target="_blank">.aia file</a> for The Learning Game.</li>
	<li>Import the file into MIT's App Inventor</li>
	<li>Try playing the game on your device and explore the code.</li><li>Try making these three enhancements:</li>
		<ul>
		<li>Change the app's language to a different language so your app helps you learn to count in that language</li>
		<li>Change the initial count of numbers that are spoken to initiate the game.</li>
		<li>Try adding a few more numbers to the game</li>
		</ul>
	</ol>
	  
	<h3>Create Performance Task Write-up Activity </h3>
	<p>Once you have tried the game and understand the code, answer the AP CSP Create Performance Task prompts.<br></p><ol><li>Review the Create Performance Task prompts in the <a href="https://apcentral.collegeboard.org/pdf/ap-csp-student-task-directions.pdf" target="_blank" title="AP CSP Student Create PT Directions">AP CSP Student Directions</a>.</li><li><span class="yui-non">Review the Create Performance Task <a href="https://apcentral.collegeboard.org/media/pdf/ap23-sg-computer-science-principles.pdf?course=ap-computer-science-principles" target="_blank" title="scoring guidelines">scoring guidelines</a>.</span></li><li>Make a copy of the <a href="https://docs.google.com/document/d/1pgZntXjhm-IO9iHmNA1lMJE7MBDv-sAJOuSaX9LIFsk/copy" target="_blank" title="submission document">submission document</a> and record your responses.</li></ol><p></p>
	
Summary
-------

.. raw:: html

	<p>In this lesson, you learned more about the College Board's requirements for the Create Performance task and practiced answering the prompts.</p>

Self-Check
----------

.. raw:: html

	<h3>Vocabulary</h3>
	
	<p>Here is a table of some of the technical terms you've reviewed in this lesson. Hover over the terms to review the definitions. </p>
	    
	<table align="center">
	<tbody><tr>
	  <td>
	    <span class="hover vocab yui-wk-div" data-id="Input">Input</span>
	    <br><span class="hover vocab yui-wk-div" data-id="Output">Output</span>
	    <br><span class="hover vocab yui-wk-div" data-id="program">Program</span>
	    <br><span class="hover vocab yui-wk-div" data-id="algorithm">Algorithm</span>  
	  </td>
	  
	  <td>
	    <span class="hover vocab yui-wk-div" data-id="comment">Comment</span>
	   <br><span class="hover vocab yui-wk-div" data-id="sequence">Sequence</span>
	  <br><span class="hover vocab yui-wk-div" data-id="selection">Selection</span>
	    <br><span class="hover vocab yui-wk-div" data-id="iteration">Iteration</span>
	  </td>
	  
	  <td>
	   <span class="hover vocab yui-wk-div" data-id="procedural abstraction">Procedural Abstraction</span>
	    <br> <span class="hover vocab yui-wk-div" data-id="parameter">Parameter</span>
	    <br> <span class="hover vocab yui-wk-div" data-id="arguments">Arguments</span>
	    <br> <span class="hover vocab yui-wk-div" data-id="list">List</span>
	  </td>
	  </tr>
	</tbody></table>
	
	<h3>Check Your Understanding</h3>
	
.. mchoice:: mcsp-7-11-1
    :random:
    :practice: T
    :answer_a: It could be written without a list, but we would need 9 global variables each with the number in them and then a random number generator to call these numbers. Now we have a built in system to generate a random sequence. It puts all the data in one location that can be accessed with an index number. 
    :feedback_a: This response does not provide enough detail regarding the random number generation for someone else to be able to recreate the program code.
    :answer_b: The ButtonItems list manages the complexity of my program since it gives a set of numbers the text-to-speech can say that can be sorted or ordered randomly, and easily changed if I wanted to expand the app to include a language other than French. Without this list the program would need to individually call the numbers and set them in a random order manually, which would be more difficult than using a list where the values can be easily called by the program and ordered randomly by selecting a random list item; likewise, I’d have to manually go into the procedures that start the game and other rounds without a list and adjust the values individually to expand the program. 
    :feedback_b: Correct! This response identifies a list that is being used to manage complexity in the program and also explains how the list manages complexity in the program code by explaining how it would be written without using the list.
    :answer_c: This list manages complexity in the program because without the lists there would not be a purpose or way for the app to function. Without this list and how it is looped through for each item so the global speakListAsText variable will give the user random numbers, an if, then, else, statement will have to be repeated for each of the numbers so the speakListAsText variable to work.
    :feedback_c: This response does not explain how the selected list manages complexity. Saying “there would not be a purpose or way for the app to function” is inaccurate.
    :answer_d: This list is very important for the development of the app because it is the main structure. This list represents the input that appears on the spreen when the buttons are pressed which allows the user to know what buttons that they have already pressed. It also is the main items that are used for the game for the speech and the names of the buttons. The code would have to be written differently because you would have to list out all of the items in the button list each time you would normally put the procedure. 
    :feedback_d: Try again.
    :correct: b

    Which of the following responses about the Learning App would earn a point for Row 3 of the scoring guidelines (managing complexity)?


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


.. mchoice:: mcsp-7-11-2
    :random:
    :practice: T
    :answer_a: False 
    :feedback_a: Consider: Does this response discuss a list that manages complexity in the app? Does the response explain how the program would be written differently without the list?
    :answer_b: True 
    :feedback_b: That's right!
    :correct: b

        True or False: The following response about the Learning App earns a point for Row 3 of the scoring guidelines (managing complexity)?

        “The list speakList helps to manage complexity in the program because it is used in many different locations for similar and different reasons and is added to every round.  Without this list the program would no longer be able to be infinite, within computational boundaries, because there would need to be infinite variables for an infinite game with the list it is just added to.”


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


.. mchoice:: mcsp-7-11-3
    :random:
    :practice: T
    :answer_a: False
    :feedback_a: That's right!
    :answer_b: True
    :feedback_b: For each call the parameter startOver (i.e. startOver = true or startOver = false.) should be discussed, not the text to speech component. For each result the response should discuss the result of the procedure based on the parameter, not the text to speech component. 
    :correct: a

        True or False: The following response about the Learning App earns a point for Row 6 of the scoring guidelines (testing)?

        “TextToSpeech1.Speak was in the nextRound procedure, passing in the global speakListAsText variable. The second call of the nextRound function is ChangeListToTextString and determines what to turn into speech. The call, TextToSpeech1.Speak is asking for a variable to speak for the passed parameter. The second call of the nextRound function gets the SpeakListAsText variable. The result of the first call is what to turn into speech.The result of the second call of the nextRound function is updating the list to speak.”


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


Reflection: For Your Portfolio
------------------------------

.. raw:: html

	<p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1pgZntXjhm-IO9iHmNA1lMJE7MBDv-sAJOuSaX9LIFsk/copy" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/1pgZntXjhm-IO9iHmNA1lMJE7MBDv-sAJOuSaX9LIFsk/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    </div>
    </img></div>
    </div>