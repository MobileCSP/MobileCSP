.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Error Detection
===============

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
        generateSummary(EKmapping['3.06']);
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
	<p>As we have learned from <a href="http://www.bitsbook.com/wp-content/uploads/2008/12/B2B_3.pdf#page=23" target="_blank">Blown to Bits</a>, "everything is bits" -- i.e., all data are
      represented as binary 0s and 1s.
    </p>
    <p>Suppose your bank is doing an electronic funds transfer and one of the bits involved switches from 0 to 1 or vice versa? This is known as a <i><b>flipped bit</i></b>. It could 
      happen because of an error during transmission or while the data is being written to a disk drive. 
      And the error could make a significant difference.  For example, if we use only 8 bits then flipping
      the leftmost bit 00000001 to 10000001  changes the value from $1.00 to $129.00.  But if
      we used 16 bits, then flipping the leftmost bit of 0000000000000001 to 1000000000000001 changes the
      value from $1.00 to $32,769.00.
    </p>
    <p>When something like this happens would it be possible to detect the error?  In this video based on this <a href="http://csunplugged.org/">Computer Science Unplugged</a> project,  you'll see a card trick 
      that shows that it is <i>possible</i> to detect when a bit is flipped.  In the video, the 
      face-up and face-down cards are analogous to 1s and 0s.</p>
    Watch carefully to see if you can figure out how the flipped card is detected!
	<table>
    <tbody>
      <tr>
		<td valign="top" colspan=2>
		</td>
      </tr>    
      <tr>
        <td valign="top"><iframe allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/PVJO-a2W0BM" width="315"></iframe>
		(<a href="http://www.teachertube.com/video/mobile-csp-error-detection-card-trick-437874" target="_blank" title="">Teacher Tube version</a>)
        </td>
        <td valign="top">
		<div><b>Learning Objectives:</b>&nbspI will learn to</div>
          <ul>
          <li>execute an algorithm to determine if, in a given binary sequence, a bit has been flipped</li>
          <li>understand the conditions under which a flipped bit can be detected and corrected</li>
          <li>explain the consequences of using bits to represent data</li>
          </ul>
          <div><b>Language Objectives:</b>&nbspI will be able to</div>
          <ul>
          <li>use target vocabulary, such as <span class="hover vocab yui-wk-div" data-id="parity">parity</span> and <span class="hover vocab yui-wk-div" data-id="parity bit">parity bit</span> while describing how errors in data can be detected, with the support of concept definitions and <a href="https://docs.google.com/presentation/d/1Pfrv_g1AGKNFPmgir1uGApfHtkhB783Te5kzVz5FZ8c/copy" target="_blank" title="">vocabulary notes</a> from this lesson</li>
        </ul>
        </td>
      </tr>
    </tbody>
    </table>


Learning Activities
--------------------
 
.. raw:: html
   
   <ul align="center" style="list-style: none; margin: 0; padding: 0; background: lightgrey">
	<li style="display: inline"><a href="https://www.youtube.com/watch?v=PVJO-a2W0BM" target="_blank">YouTube video</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="http://www.teachertube.com/video/mobile-csp-error-detection-card-trick-437874" target="_blank" title="">TeacherTube video</a></li
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://docs.google.com/document/d/1G7IQDERipCeZPFf4NheSPOMYmWM0f7wAFgPVnNzPvnE/copy" target="_blank" title="">POGIL worksheet</a></li>
	</ul>
	
    <table><tbody>
	<tr>
		<td colspan=2><h3>What's the Algorithm?</h3></td>
    </tr>
	<tr>
		<td colspan=2>Here's a bit more explanation about the card trick. </td>
	</tr>
	<tr>
		<td valign=top><iframe height="530" src="https://mobile-csp.org/webapps/parity/ParityMagic.html" style="border: 0;" title="Parity App" width="450"></iframe>
    </td>
    <td style="padding-left: 5px;">
	   The widget on the left was created by Mobile CSP student Richard Zheng of Westhill High School in Stamford, CT, to help figure out how the card trick works. 
	   <br/><br/>
	   To follow up on the hint given in the video, after the demonstrator has added an extra row and column to a 5x5 array of cards (or Androids in this case) -- supposedly to make the problem more difficult  -- the Androids will appear as they do 
	   in the widget.   Try shuffling and then flipping one of the cards and to see if you can figure out the trick.  Examine the rows and columns.  What changes for the 6x6 array when a robot if flipped? 
    </td>
	</tr>
		<tr><td colspan=2>  Try to figure out the algorithm that is used to identify the flipped Android.<br/></td>
    </tr>
    </tbody></table>
	<br/>
    <div class="pogil yui-wk-div">
    <h3>POGIL Activity for the Classroom (30 minutes)</h3> 
      Break into POGIL teams of 4 and assign each team member one of the following roles. Record your answers <a href="https://docs.google.com/document/d/1G7IQDERipCeZPFf4NheSPOMYmWM0f7wAFgPVnNzPvnE/copy" target="_blank">using this worksheet</a>.
        <table>
    <tbody><tr><th>Role</th><th>Responsibility</th></tr>
    <tr>
    <td>Facilitator</td>
    <td>Manages interaction with the Parity Magic widget to help test the team's algorithms.</td>
    </tr>
    <tr>
    <td>Spokesperson</td>
    <td>Reports the teams results to the teacher and other teams.</td>
    </tr>
    <tr>
    <td>Quality Control</td>
    <td>Records all answers &amp; questions, and provides the team's reflection to team and instructor.</td>
    </tr>
    <tr>
    <td>Process Analyst</td>
    <td>Considers how the team could work and learn more effectively.</td>
    </tr>
    </tbody></table>
    
    <h3>Error Detection:  Critical Thinking Questions</h3>
    <p>For this activity, each group should have 36 playing cards (or 25 for a smaller square) or use this <a href="https://deck-of-cards.js.org/" target="_blank">virtual deck</a> or use the widget above.  For a regular card deck you can use 
        face-up/face-down to represent 0/1.  A satisfactory outcome for this activity is that the team
        can successfully demonstrate the trick to the class. That means, someone will lay out
        a 5x5 array of cards randomly.  Then a member of the team will layout the 6th row and column and
        will successfully identify the flipped card when some from the class secretly flips a single card.
      </p>
    <ol>
    <li style="margin-bottom: 5px;">In the video, are the 6th row and 6th column being laid out in a truly random way or
          is some kind of rule or algorithm being used? If so, what's the rule?</li>
    <li style="margin-bottom: 5px;">HINT:  Count the number of face cards in each row and column?  What pattern or
            rule do you see if you do that? </li>
    <li style="margin-bottom: 5px;">Practice: Everyone on the team should practice the "trick" using the widgets or the deck of
          cards.
        
        </li>
	<li style="margin-bottom: 5px;">(<b>Portfolio</b>) What is the "trick"?  Of course, it's not really a trick. It's an algorithm. 
          So, describe an algorithm in pseudocode that solves the problem of identifying the flipped card.
        </li>
    <li style="margin-bottom: 5px;">(<b>Portfolio</b>)The card "trick" shows that it is always possible to identify the card 
          that was flipped as long as only one card was flipped. Would it be possible always to determine if an 
          error occurred if two cards were flipped?  Experiment with the cards or widgets to help
          answer this question.</li>
    <li style="margin-bottom: 5px;">In this case, the 25 original cards (bits) are data and the 11 additional bits are for 
          error detection, meaning that 25/36 = 69% of the bits are data and 31% are redundant bits
          used for error detection.  Suppose the original array was 3x3.  How many error detection 
          bits would you need in that case and what percentage of the total bits would now be data bits? 
      </li></ol>
    </div>
    <!-- 
    &lt;h3&gt;Figure it out&lt;/h3&gt;
    &lt;p&gt;Before reading about how this works, try to figure it out yourself or with a classmate. 
    Look at these two tables. The 5 x 5 table on the left is similar to the cards before the 
    extra column and row are added.  The 6 x 6 table on the right is similar to the cards after the
    extra column and row are added.  Can you see anything interesting about the 6 x 6 table?
    &lt;/p&gt;&lt;table&gt;
    &lt;tbody&gt;&lt;tr&gt;
    &lt;td&gt;
    The 5 by 5 table 
    &lt;table border=&quot;0&quot;&gt;
    &lt;tbody&gt;&lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;&lt;/table&gt;
    &lt;/td&gt;
    &lt;td&gt;
    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;
    &lt;/td&gt;
    &lt;td&gt;
    The 6 by 6 table 
    &lt;table border=&quot;0&quot;&gt;
    &lt;tbody&gt;&lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;0&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;&lt;/table&gt;
    &lt;/td&gt;
    &lt;/tr&gt;
    &lt;/tbody&gt;&lt;/table&gt;
    
    &lt;h3&gt;Some Hints&lt;/h3&gt;
    &lt;ul&gt;
    &lt;li&gt;Count the number of 0s and 1s in each row and column of the 5 x 5 table.
    &lt;/li&gt;&lt;li&gt;Count the number of 0s and 1s in each row and column of the 6 x 6 table.
    &lt;/li&gt;&lt;li&gt;What difference do you notice and why is it significant?
    &lt;/li&gt;&lt;/ul&gt;
    
    -->
    <!-- &lt;p&gt;Answers and explanation at the bottom of the page.&lt;/p&gt; -->
    <h3>Parity Bit Error Detection</h3>
    
    As you learned in the POGIL activity, the card "trick" is really not a magic trick at all. It is a very precise algorithm of error checking based on the concept of <span class="hover vocab yui-wk-div" data-id="parity">parity</span>. In mathematics, <span class="hover vocab yui-wk-div" data-id="parity">parity</span> refers to the evenness or oddness of a number. In the card trick, a <span class="hover vocab yui-wk-div" data-id="parity bit">parity bit</span> - which is a bit that is added as the leftmost bit of
    a bit string to ensure that the number of bits that are 1 in the bit string are <i>even</i> or <i>odd</i> - was added to each row and column such that the additional bit would make the row or column have an even number of 1 bits. It's important to realize that the <span class="hover vocab yui-wk-div" data-id="parity">parity</span> bit is not part of the data.  It is <i><b>redundant</b></i>, an extra bit, added to the data to allow us to detect if one of the data bits has been flipped from its original value.

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
    
    This lesson has shown that it is possible to detect certain kinds of error in digital
    documents.  The technique used here, called <i><b>parity checking</b></i>, uses
    <i><b>redundancy</b></i>.  That is, extra bits are added to the data to enable us
    to detect the error. 
    
    <p>What about detecting errors that involve more than 1 bit?  Is it possible to
    not only <i>detect</i> an error but to automatically <i>correct</i> it?  The 
    answers to these questions is 'Yes' and 'Yes.'
    
    </p><p>If you want to learn more about this topic, here are a couple of 
    reading suggestions:</p>
    <ul>
    <li><a href="https://runestone.academy/runestone/books/published/mobilecsp/Unit3-Creating-Graphics-Images/Parity-Error-Checking-optional.html target="_blank">Mobile CSP Lesson 3.7 Parity Error Checking</a>
    </li><li><a href="http://en.wikipedia.org/wiki/Parity_bit" target="_blank">Parity bit</a>.
      </li><li><a href="https://www.youtube.com/watch?v=cBBTWcHkVVY" target="_blank">Nice video demonstration of error correction</a>.
      </li><li><a href="http://en.wikipedia.org/wiki/Error_detection_and_correction" target="_blank">Error detection and correction</a>.
      </li>
    </ul>


Self-Check
-----------

.. raw:: html

    <p>
	<h3>Vocabulary</h3>
	<p>
	Here is a table of some of the technical terms we've introduced in this lesson. Hover over the terms to review the definitions.
	</p>
    <table align="center">
    <tbody><tr>
    <td>
    <span class="hover vocab yui-wk-div" data-id="parity">parity</span><br/>
    <span class="hover vocab yui-wk-div" data-id="parity bit">parity bit</span>
    </td>
    </tr>
    </tbody>
    </table>
    <p>
    <h3>Check Your Understanding</h3>
    <p>Complete the following self-check exercises. 
	</p>
.. mchoice:: mcsp-3-6-1
    :random:
    :practice: T
    :answer_a: The bit in row 4 column 4.
    :feedback_a: 
    :answer_b: The bit in row 4 column 3.
    :feedback_b: Don’t worry, it’s hard! Let’s go back and try it again.
    :answer_c: The bit in row 1 column 2.
    :feedback_c: Don’t worry, it’s hard! Let’s go back and try it again.
    :answer_d: The bit in row 2 column 2.
    :feedback_d: Don’t worry, it’s hard! Let’s go back and try it again.
    :correct: a

    .. raw:: html
    
    	<table><tbody>
    	<tr>
    		<td valign="top"><b>Find the flipped bit.</b><br />For this table, identify the bit that was flipped.</td>
    		<td>
	    		<table border="1"><tbody>
	    		<tr>
	    			<td>1</td>
	    			<td>0</td>
	    			<td>0</td>
	    			<td>1</td>
	    		</tr>
	    		<tr>
	    			<td>1</td>
	    			<td>1</td>
	    			<td>1</td>
	    			<td>1</td>
	    		</tr>
	    		<tr>
	    			<td>0</td>
	    			<td>0</td>
	    			<td>1</td>
	    			<td>1</td>
	    		</tr>
	    		<tr>
	    			<td>0</td>
	    			<td>1</td>
	    			<td>0</td>
	    			<td>0</td>
	    		</tr>
	    		</tbody></table>	
    		</td>
    	</tr>
    	</tbody>
    	</table>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <br/>
    
.. mchoice:: mcsp-3-6-2
    :random:
    :practice: T
    :answer_a: <table> <tr><td>1</td><td>0</td><td>0</td><td>1</td></tr> <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr> <tr><td>0</td><td>0</td><td>1</td><td>1</td></tr> <tr><td>0</td><td>1</td><td>0</td><td>0</td></tr> </table> 
    :feedback_a: Try asking a classmate for advice—s/he may be able to explain/suggest some ideas or recommend some strategies.
    :answer_b: <table> <tr><td>1</td><td>0</td><td>0</td><td>1</td></tr> <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr> <tr><td>0</td><td>0</td><td>1</td><td>1</td></tr> <tr><td>0</td><td>1</td><td>1</td><td>1</td></tr> </table> 
    :feedback_b: Try asking a classmate for advice—s/he may be able to explain/suggest some ideas or recommend some strategies.
    :answer_c: <table> <tr><td>1</td><td>0</td><td>0</td><td>1</td></tr> <tr><td>1</td><td>1</td><td>1</td><td>0</td></tr> <tr><td>0</td><td>0</td><td>1</td><td>1</td></tr> <tr><td>0</td><td>1</td><td>0</td><td>1</td></tr> </table> 
    :feedback_c: Try asking a classmate for advice—s/he may be able to explain/suggest some ideas or recommend some strategies.
    :answer_d: <table> <tr><td>1</td><td>0</td><td>0</td><td>1</td></tr> <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr> <tr><td>0</td><td>0</td><td>1</td><td>1</td></tr> <tr><td>0</td><td>1</td><td>0</td><td>1</td></tr> </table> 
    :feedback_d: 
    :correct: d
    
    .. raw:: html
    
    	<table><tbody>
    	<tr>
    		<td valign="top"><p><b>Complete the trick.</b></p><p>For this 3 x 3 table of bits, which of the choices below would be the correct 4 x 4 table for being able to detect when bit is flipped.</p></td>
    		<td>
    			<table border="1"><tbody>
    			<tr>
    				<td>1</td>
    				<td>0</td>
    				<td>0</td>
    			</tr>
    			<tr>
    				<td>1</td>
    				<td>1</td>
    				<td>1</td>
    			</tr>
    			<tr>
    				<td>0</td>
    				<td>0</td>
    				<td>1</td>
    			</tr>
    			</tbody></table>
    		</td>
    	</tr>
    	</tbody>
    	</table>

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1JgyEpjRXafWqUHzJElPoYok0EQlAE5JvG9aK5nShJfc/copy" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vTs3sizmlqLgvhANWrZ1AXjpVIh1QP-XyNQQ1-L6emekdfqqNXO-A4x49Q1av9NSmpIuyU7IlXfRVdt/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    <!--  &lt;p&gt;Create a page named &lt;i&gt;&lt;b&gt;Error Detection&lt;/b&gt;&lt;/i&gt; under the &lt;i&gt;Reflections&lt;/i&gt; category of your portfolio and answer the following questions:&lt;/p&gt;
    
      &lt;ol&gt;
        &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;) Describe an algorithm for identifying the card that was flipped?&lt;/li&gt;
        
        &lt;li&gt;(&lt;b&gt;POGIL&lt;/b&gt;)The card &quot;trick&quot; shows that it is always possible to identify the card 
          that was flipped as long as only one card was flipped. Would it be possible always to determine if an 
          error occurred if two cards were flipped?  Explain.&lt;/li&gt;
      &lt;/ol&gt;-->
    </div>
    </div>