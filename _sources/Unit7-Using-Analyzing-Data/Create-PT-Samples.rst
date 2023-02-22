.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Create PT Prep and Samples 
==========================

.. raw:: html

	<!--<style>
	tr, td {
		border: 1px solid black;
		text-align: center;
	}
	</style>-->
	
	
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
	<script>
	 $(function() {
	   $( "#accordion2" ).accordion({
	     collapsible: true,
	     active: false,
	     heightStyle: "content",
	     icons: false
	   });
	 });
	</script>
	<script>
	 $(function() {
	   $( "#accordion3" ).accordion({
	     collapsible: true,
	     active: false,
	     heightStyle: "content",
	     icons: false
	   });
	 });
	</script>
	<script>
	 $(function() {
	   $( "#accordion4" ).accordion({
	     collapsible: true,
	     active: false,
	     heightStyle: "content",
	     icons: false
	   });
	 });
	</script>
	<script>
	 $(function() {
	   $( "#accordion5" ).accordion({
	     collapsible: true,
	     active: false,
	     heightStyle: "content",
	     icons: false
	   });
	 });
	</script>
	<script>
	 $(function() {
	   $( "#accordion6" ).accordion({
	     collapsible: true,
	     active: false,
	     heightStyle: "content",
	     icons: false
	   });
	 });
	</script>
	<h3>Create PT Samples</h3>
	<p>
	 Below are some Create Performance Task samples that were submitted in prior years and were selected by the College Board to be featured on the AP CSP Exam page. We have selected some of the samples that used MIT's App Inventor as the programming language. In some cases, additional explanations and commentary are provided to give you more insight into what is expected of you for this task. 
	</p>
	

	<h3>Activity</h3>
	<p>Select at least two samples from the list below and try scoring them with the <a href="https://apcentral.collegeboard.org/media/pdf/ap22-sg-computer-science-principles.pdf?course=ap-computer-science-principles" target="_blank" title="">Create Performance Task Rubric</a>. When you are done reviewing the samples, score your Quiz App from Lesson 5.6 or exchange and score your classmate's Quiz app.</p>
	
Sample 1 - 2021's Pilot Sample A
--------------------------------

.. raw:: html

	<div id="accordion" class="yui-wk-div">
	
	<h3>Row 1: Program Purpose and Function (Video and Response 3A)</h3>
	<div class="yui-wk-div">
		<h4>Student Response</h4>

.. youtube:: tQE3bkyaoes
        :width: 600
        :height: 415
        :align: center
		
.. raw:: html

		<!--<gcb-youtube videoid="https://youtu.be/tQE3bkyaoes" instanceid="X7FYxjVROXgh"></gcb-youtube>-->
		<br><p>3a.&nbsp;This program was created in MIT App Inventor to address the issue of learning new languages. Here it teaches the user how to say different colors, where the user inputs what language it wants to hear, either Spanish or French, and then taps on a color, prompting the program to output the audio for that certain color. This allows users to quickly learn how to say colors in another language through interaction and output of audio. In the video, it shows an example of the user clicking on the Spanish checkbox and playing the audio for red and blue. The user can hear what it sounds like, and thus learn how to say it correctly. If the user accidentally inputs nolanguage or both, the program will catch the error and notify the user.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>A.) The video demonstrates the running of the program including: <br>• input <br>• program functionality <br>• output </p>
			<p>AND</p> 
			<p>B.) The written response: <br>• describes the overall purpose of the program. <br>• describes what functionality of the program is demonstrated in the video. <br>• describes the input and output of the program demonstrated in the video. </p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>The response earned the point for this row, meeting all six of the criteria:
	<br>•The video demonstrates the program receiving user color selection in both French and Spanish as input and producing as output the associated audio response of that color’s pronunciation in the selected language. This satisfies the first three criteria for the video.
	<br>• The program’s purpose is to “address the issue of learning new languages.”
	<br>• The functionality demonstrated in the video is “where the user inputs what language it wants to hear, either Spanish or French, and then taps on a color, prompting the program to output the audio for that certain color.”
	<br>• The input and output demonstrated in the video are described as, “In the video, it shows an example of the user clicking on the Spanish checkbox and playing the audio for red and blue.”
	</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p></p>
	
	</div>
	
	<h3>Row 2: Data Abstraction (Response 3B)</h3>
	<div class="yui-wk-div">
	<h4>Student Response</h4>
		<p><br><img src="../_static/assets/img/APCSP2021SampleA_3b1.png" class="yui-img" title="" alt=""><br><img src="../_static/assets/img/APCSP2021SampleA_3b2.png" class="yui-img" title="" alt=""><br>3b.&nbsp;The data contained in the list Audio is the list of available color names. It represents all the colors a user can pick for the program in English. These are used to create the corresponding Spanish or French audio files based on which language is selected. When a button is pressed, it will get the English color word from the index of the color in the list. Here, the language the user has chosen does not matter. The program will then create the audio file name for the Spanish or French audio based on what language the user has check marked by manipulating the text (for example, adding“-spanish” to the end if they selected spanish) and then adding “.mp3” to the end in order to call the correct audio file. For the program to function without lists in general, each button will have to call the individual audio file, meaning we would need to have buttons for every color and language combination making the code and user interface more complex.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• includes two program code segments:
	- one that shows how data has been stored in this list (or other collection type).
	- one that shows the data in this same list being used as part of fulfilling the program’s purpose.
	<br>• identifies the name of the variable representing the list being used in this response.
	<br>• describes what the data contained in this list is representing in the program.
	</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>The response earned the point for this row, meeting all three of the criteria:
	<br>•Two distinct code segments are provided: one showing storage of data in a list named Audio; and a second one showing the use of Audio to process output audio to fulfill the program’s purpose.
	<br>• The name of the list is identified as Audio.
	<br>• The response states that the data “represents all the colors a user can pick for the program in English. These are used to create the corresponding Spanish or French audio files based on which language is selected.” 
	</p>
		</td>
	</tr>
	</tbody>
	</table>
	<h4>Additional Explanation</h4>
	<p></p>
	
	</div>
	
	<h3>Row 3: Managing Complexity (Response 3B)</h3>
	<div class="yui-wk-div">
		<h4>Student Response</h4>
		<p><img src="../_static/assets/img/APCSP2021SampleA_3b1.png" class="yui-img" title="" alt=""><br><img src="../_static/assets/img/APCSP2021SampleA_3b2.png" class="yui-img" title="" alt=""><br>3b.&nbsp;The data contained in the list Audio is the list of available color names. It represents all the colors a user can pick for the program in English. These are used to create the corresponding Spanish or French audio files based on which language is selected. When a button is pressed, it will get the English color word from the index of the color in the list. Here, the language the user has chosen does not matter. The program will then create the audio file name for the Spanish or French audio based on what language the user has check marked by manipulating the text (for example, adding“-spanish” to the end if they selected spanish) and then adding “.mp3” to the end in order to call the correct audio file. For the program to function without lists in general, each button will have to call the individual audio file, meaning we would need to have buttons for every color and language combination making the code and user interface more complex.</p>
	<table>
	<tbody>
	<tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• includes a program code segment that shows a list being used to manage complexity in the program.
	<br>• explains how the named, selected list manages complexity in the program code by explaining why the program code could not be written, or how it would be written differently, without using this list.</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td><p>The response earned the point for this row, meeting both of the criteria:
	         <br>•The response includes a program code segment that shows the audio list being used to manage complexity in the program, because the list access and index enable the correct setting of a filename for audio file output.
	<br>• The response explains how the list Audio manages complexity in the program. It states, “When a button is pressed, it will get the English color word from the index of the color in the list…. The program will then create the audio file name for the Spanish or French audio based on what language the user has check marked by manipulating the text (for example, adding ‘-spanish’ to the end if they selected spanish [sic]) and then adding ‘.mp3’ to the end in order to call the correct audio file.” The response also states that the use of lists manages complexity in the project, explaining that “without lists in general, each button will have to call the individual audio file, meaning we would need to have buttons for every color and language combination making the code and user interface more complex.
	</p>
			
		</td>
	</tr>
	</tbody>
	</table>
	<h4>Additional Explanation</h4>
	
	</div>
	   
	<h3>Row 4: Procedural Abstraction (Response 3C)</h3>
	<div class="yui-wk-div">
		<h4>Student Response</h4>
		<p><img src="../_static/assets/img/APCSP2021SampleA_3C.png" class="yui-img" title="" alt=""><br>3c.&nbsp;This procedure helps to contribute to the overall functionality of the program by selecting the correct audio file based on what language and color the user has selected. Since this algorithm is needed every time a user presses a button, the procedure helps the overall efficiency of the program by having the code located in one location that the program repeatedly calls on. When a user presses a certain color button, the button returns an index pertaining to the main audio list of colors. Then, the procedure takes the index of the color as a parameter and selects the respective list element, which is a string that contains the certain color. Then, depending on the language, the procedure will append a language identifier (for example, “-spanish”) and then add “.mp3”. It will then use this to call a certain color from the database of audio files that is named accordingly. The procedure is able to take parameters and inputs from the user and then output them as such by constructing certain audio file names and then pulling them from the database to play. This action demonstrates selection, and sequencing is when the procedure is able to order tasks accordingly and call from a list. Iteration is used when the procedure senses that there are no languages or both languages selected, and thus repeats the audio of “Select a language!” until the user does so.</p>
	<table>
	<tbody>
	<tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• includes two program code segments:
	- one showing a student-developed procedure with at least one parameter that has an effect on the functionality of the procedure.
	- one showing where the student-developed procedure is being called.
	<br>• describes what the identified procedure does and how it contributes to the overall functionality of the program. </p>
	     	</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>The response earned the point for this row, meeting both criteria: 
	          <br>• The response includes a student-developed procedure ButtonClicked that contains a parameter index. The parameter index is used in the procedure. Additionally, the response includes an example call to the procedure ButtonClicked that passes the argument “3” to the parameter.
	<br>• The response describes the purpose of ButtonClicked by stating that it selects “the correct audio file based on what language and color the user has selected.” The response describes how ButtonClicked contributes to the overall functionality of the program by stating it “helps the overall efficiency of the program by having the code located in one location that the program repeatedly calls on.”
	</p>
		</td>
	</tr>
	</tbody>
	</table>
	<h4>Additional Explanation</h4>
	<p></p>
	
	</div>
	
	<h3>Row 5: Algorithm Implementation (Response 3C)</h3>
	<div class="yui-wk-div">
		<h4>Student Response</h4>
		<p><img src="../_static/assets/img/APCSP2021SampleA_3C.png" class="yui-img" title="" alt=""><br>3c.&nbsp;This procedure helps to contribute to the overall functionality of the program by selecting the correct audio file based on what language and color the user has selected. Since this algorithm is needed every time a user presses a button, the procedure helps the overall efficiency of the program by having the code located in one location that the program repeatedly calls on. When a user presses a certain color button, the button returns an index pertaining to the main audio list of colors. Then, the procedure takes the index of the color as a parameter and selects the respective list element, which is a string that contains the certain color. Then, depending on the language, the procedure will append a language identifier (for example, “-spanish”) and then add “.mp3”. It will then use this to call a certain color from the database of audio files that is named accordingly. The procedure is able to take parameters and inputs from the user and then output them as such by constructing certain audio file names and then pulling them from the database to play. This action demonstrates selection, and sequencing is when the procedure is able to order tasks accordingly and call from a list. Iteration is used when the procedure senses that there are no languages or both languages selected, and thus repeats the audio of “Select a language!” until the user does so.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• includes a program code segment of a studentdeveloped algorithm that includes
	- sequencing
	- selection
	- iteration
	<br>• explains in detailed steps how the identified algorithm works in enough detail that someone else could recreate it.</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>The response earned the point for this row, meeting both criteria: 
	           <br>• The student-developed algorithm within procedure ButtonClicked includes sequencing, selection (if...then statement), and iteration (while test...do).
	<br>• The response explains how the algorithm works. It states that it “takes the index of the color as a parameter and selects the respective list element, which is a string that contains the certain color. Then depending on the language, the procedure will append a language identifier (for example, ‘- spanish’) and then add ‘.mp3.’” The response goes on to describe that iteration is used “when the procedure senses that there are no languages or both languages selected, and thus repeats the audio of ‘Select a language!’ until the user does.”
	</p>
		</td>
	</tr>
	</tbody>
	</table>
	<h4>Additional Explanation</h4>
	<p></p>
	
	</div>
	   
	<h3>Row 6: Testing (Response 3D and Procedure from 3C)</h3>
	<div class="yui-wk-div">
		<h4>Student Response</h4>
		<p>3D.&nbsp;The test cases are based on the conditions of what language is selected and what button for what color is pressed, which is represented by the parameter “index”. We would want to check the program for both Spanish and French. For the language Spanish, we could select one of the colors, for example Orange, and the program should give us the correct translation for
	Spanish. For the language French, we could select one of the colors, for example Orange, and the program should give us the correct translation for French. To further test the program, we should select another color, for example green, and the program should give us the correct translation for the pre-selected language. Each of these test cases executes different parts of the algorithm, going by the condition of which checkboxes are checked for which languages.<br></p>
	<table>
	<tbody>
	<tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• describe two calls to the selected procedure
	identified in written response 3c. Each call must
	pass a different argument(s) that causes a different
	segment of code in the algorithm to execute.
	<br>• describes the condition(s) being tested by each call
	to the procedure.
	<br>• identifies the result of each call. </p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>The response earned the point for this row, meeting all three criteria:        
	            <br>• The response describes two calls to the procedure: one for Spanish, with the color orange; and one for French, with the color orange.
	<br>• The response describes the conditions as being whether the user has selected Spanish or French. “For the language Spanish, we could select one of the colors, for example Orange [sic],” and “For the language French, we could select one of the colors, for example Orange [sic].”
	<br>• The response describes the results being tested as the “correct translation for Spanish” and the “correct translation for French.
	      </p>
		</td>
	</tr>
	</tbody>
	</table>
	<h4>Additional Explanation</h4>
	<p><br></p>
	
	</div>	
	</div> <!-- accordion 1-->
	
	
	
Sample 2 - 2021's Pilot Sample C
--------------------------------

.. raw:: html

	<div id="accordion2" class="yui-wk-div">
	
	<h3>Row 1: Program Purpose and Function (Video and Response 3A)</h3>
	<div class="yui-wk-div">
		<h4>Student Response</h4>

.. youtube:: YuVkNwbtRoo
        :width: 600
        :height: 415
        :align: center
		
.. raw:: html
		
		<!--<gcb-youtube videoid="YuVkNwbtRoo" instanceid="2c5AL6KcHVni"></gcb-youtube>-->
		<br><p>3a. My app is intended to lessen the effects of global warming and to decrease the amount of non recyclable waste we produce. In the video, you can see the question label that displays a random list item from “global questions list”. Once the user reads the question, they answer it using the text box. Depending on the users input, the program will produce various outputs, which it pulls from “global solutions list”. If the program decides the user spends too much time driving, using their AC, or doesn’t recycle enough, they will notify them by displaying an output on “output label” that tells them what they can do to lessen their carbon footprint. Also, a thumbs down image is displayed, unless the input indicates they are being good with their emissions. In that case, a thumbs up is displayed and “output label” tells the user they are doing good and to keep it up.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>A.) The video demonstrates the running of the program including: <br>• input <br>• program functionality <br>• output </p>
			<p>AND</p> 
			<p>B.) The written response: <br>• describes the overall purpose of the program. <br>• describes what functionality of the program is demonstrated in the video. <br>• describes the input and output of the program demonstrated in the video. </p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>The response earned the point for this row, meeting all six criteria:
	<br>• The video demonstrates the running of the program, including input (user answering questions), functionality (processing of user input), and output (statement and visual “thumbs-up” or “thumbsdown”). This satisfies the first three criteria for the video.
	<br>• The response describes the program’s overall purpose as being “to lessen the effects of global warming and to decrease the amount of non recyclable [sic] waste we produce.”
	<br>• The response describes the functionality as follows: “displays a random list item from ‘global questions list’.”
	<br>• The response describes the input and output as “Once the user reads the question, they answer it using the text box. Depending on the users [sic] input, the program will produce various outputs, which it pulls from ‘global solutions list,’” and, “Also, a thumbs down image is displayed, unless the input indicates they are being good with their emissions. In that case, a thumbs up is displayed and ‘output label’ tells the user they are doing good and to keep it up.”</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p></p>
	
	</div>
	
	<h3>Row 2: Data Abstraction (Response 3B)</h3>
	<div class="yui-wk-div">
	<h4>Student Response</h4>
		<p><img src="../_static/assets/img/2021CreateSampleC_3B.png" class="yui-img" title="" alt=""><br>3b. The data in “questions_list” are questions that the program displays for the user. The questions are then interpreted by the user and the user gives the program its input through the text box. The procedure check through “questions list” to see which element in the list matches the question that is displayed on “question label” so that it can provided the right “output label” based on the “number of hours” that was input. The use of the questions_list manages complexity in my program, because the program would be more complicated if I had to type the question into the if statements. 
	</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• includes two program code segments:
	- one that shows how data has been stored in this list (or other collection type).
	- one that shows the data in this same list being used as part of fulfilling the program’s purpose.
	<br>• identifies the name of the variable representing the list being used in this response.
	<br>• describes what the data contained in this list is representing in the program.
	</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>The response earned the point for this row, meeting all three criteria:
	<br>• The response includes program code segments for initialization of two named lists, solution_list and question_list, as well as a code segment showing how the data in both lists are processed as a part of fulfilling the program’s purpose of questioning the user and evaluating responses.
	<br>• The response identifies the list to be considered as question_list, so this is the list that was used to determine the score.
	<br>• The response describes the data in question_list to be “questions that the program displays for the user.”
	</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p></p>
	
	</div>
	
	<h3>Row 3: Managing Complexity (Response 3B)</h3>
	<div class="yui-wk-div">
		<h4>Student Response</h4>
		<p><img src="../_static/assets/img/2021CreateSampleC_3B.png" class="yui-img" title="" alt=""><br>3b. The data in “questions_list” are questions that the program displays for the user. The questions are then interpreted by the user and the user gives the program its input through the text box. The procedure check through “questions list” to see which element in the list matches the question that is displayed on “question label” so that it can provided the right “output label” based on the “number of hours” that was input. The use of the questions_list manages complexity in my program, because the program would be more complicated if I had to type the question into the if statements.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• includes a program code segment that shows a list being used to manage complexity in the program.
	<br>• explains how the named, selected list manages complexity in the program code by explaining why the program code could not be written, or how it would be written differently, without using this list.</p>
		</td>
		<td>
			<p>0</p>
		</td>
		<td><p>The response did not earn the point for this row. The response does not meet either of the two criteria:
	<br>• The procedure, interpret_response, shows the list question_list being used; however, the value of each index in the list that is being stored in item is never used, making the list irrelevant. Instead, the list access and processing have been hard-coded based on list index number and do not manage complexity in the program as written, since the code has not been made easier to maintain and changes to the size of the list would require significant modifications to the code.
	<br>• The response states, “The use of the question_list manages complexity in my program, because the program would be more complicated if I had to type the question into the if statements.” However, the code only uses lists to replace the question strings in a hard-coded manner, so the use of the list is irrelevant. Additionally, changes to the size of the list (i.e., the number of questions) would necessitate significant modifications to the code.</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>Remember that for managing complexity, the data abstraction must make the program easier to develop (alternatives would be more complex) or easier to maintain (future changes to the size of the list would otherwise require significant modifications to the program code). Consider how the code would change if they were adding/removing items from the list. In this particular sample, it might be difficult to understand why this sample did not earn a point for this row. The programmer of this sample would need to add more selection statements.  Here is an example of how the sample could be <i>modified</i> to meet the criteria for this row (note that this example  could be further modified so that the hard-coded index in the else statement is removed): 
	<br><img src="../_static/assets/img/Create2021SampleC3BModified.png" class="yui-img selected" title="" alt=""></p>
	
	</div>
	
	<h3>Row 4: Procedural Abstraction (Response 3C)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p><img src="../_static/assets/img/2021CreateSampleC_3C.png" class="yui-img" title="" alt=""><br>3c. The procedure “interpret_response” has a parameter and selects the response for the user based on the question and the user input. Without it, my program wouldn’t function at all. So, the program displays the question, the user interprets it and then feeds the program data, which is their response to the question. The data that the user inputs to the program is the text from the text
	box. That text is the parameter for procedure “interpret response”, in the procedure, the user's input iscalled “number of hours”. Procedure “interpret response” processes the “number of hours” and formulates an output that it will pull from the list “solution list” based on the question and the number of n hours.
	<br>The procedure uses a loop that checks what question is displayed to the user, so it can understand the parameter in the context of what question is being asked. After analyzing the question that is displayed and the “number of hours”, the procedure will pull different strings from a second list, “solutions list”. If the user indicates that they are harming the environment through the “number of hours”, the procedure will pull an output from the second list that notifies the user that they are doing harm to the environment, and give them ways to lessen their effects. Also, an image property is set to thumbs down. If “number of hours” indicates they are being good to the environment, the program will notify them and congratulate them on their safe living. Also, the image property is set to a thumbs up.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• includes two program code segments:
	- one showing a student-developed procedure
	with at least one parameter that has an effect
	on the functionality of the procedure.
	- one showing where the student-developed
	procedure is being called.
	<br>• describes what the identified procedure does and
	how it contributes to the overall functionality of the
	program. </p>
	     	</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>The response earned the point for this row, meeting both criteria:
	<br>• The response includes a student-developed procedure, interpret_response, which has a
	parameter, number_of_hours, that affects the functionality of the procedure. The response
	provides a code segment showing a call to interpret_response from the
	Find_Response_button.Click event.
	<br>• The response describes what the procedure does: it “processes the ‘number of hours’ and
	formulates an output that it will pull from the list ‘solution list’ based on the question and the
	number of hours,” and it “uses a loop that checks what question is displayed to the user, so it can
	understand the parameter in the context of what question is being asked.”</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p></p>
	
	</div>   
	   
	<h3>Row 5: Algorithm Implementation (Response 3C)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p><img src="../_static/assets/img/2021CreateSampleC_3C.png" class="yui-img" title="" alt=""><br>3c. The procedure “interpret_response” has a parameter and selects the response for the user based on the question and the user input. Without it, my program wouldn’t function at all. So, the program displays the question, the user interprets it and then feeds the program data, which is their response to the question. The data that the user inputs to the program is the text from the text
	box. That text is the parameter for procedure “interpret response”, in the procedure, the user's input iscalled “number of hours”. Procedure “interpret response” processes the “number of hours” and formulates an output that it will pull from the list “solution list” based on the question and the number of n hours.
	<br>The procedure uses a loop that checks what question is displayed to the user, so it can understand the parameter in the context of what question is being asked. After analyzing the question that is displayed and the “number of hours”, the procedure will pull different strings from a second list, “solutions list”. If the user indicates that they are harming the environment through the “number of hours”, the procedure will pull an output from the second list that notifies the user that they are doing harm to the environment, and give them ways to lessen their effects. Also, an image property is set to thumbs down. If “number of hours” indicates they are being good to the environment, the program will notify them and congratulate them on their safe living. Also, the image property is set to a thumbs up.
	</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• includes a program code segment of a studentdeveloped algorithm that includes
	- sequencing
	- selection
	- iteration
	<br>• explains in detailed steps how the identified
	algorithm works in enough detail that someone else
	could recreate it.</p>
		</td>
		<td>
			<p>0</p>
		</td>
		<td>
			<p>The response did not earn the point for this row. The response met only one of the two criteria:
	<br>• The response includes a program code segment of a student-developed algorithm found in the body
	of the interpret_response procedure. This algorithm appears to include sequencing, selection
	(if, then), and iteration (for each and do); however, the iteration is trivial, as the value of item is
	never used and the outcome is the same whether this code iterates one time or many times.
	<br>• The response explains how the algorithm sequence works using “a loop that checks what question is
	displayed to the user, so it can understand the parameter in the context of what question is being
	asked. After analyzing the question that is displayed and the ‘number of hours’, the procedure will
	pull different strings from a second list, ‘solutions list…. Also, an image property is set” based on the
	number of hours indicated so that the user receives a string and visual output based on processing
	of the data input.</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p></p>
	
	</div>
	   
	<h3>Row 6: Testing (Response 3D and Procedure from 3C)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p>3D. If the question label is equal to the second element in “question list” and the parameter “number of hours” (equal to the text box text) is 6, then the second element in “solutions list” will be displayed on “output label” and image property will be set to badd.png. In this scenario, the question asked to the user asks how many hours their AC was on during that day. The user inputs 6 to the text box, indicating that their AC was on for 6 hours. This is where I wanted a message to display to the user that they are using their AC too much and offer them alternatives. So, I created a list with solutions and that message is the second element in “solution list”, so that is why the program pulls the second element from “solution list” and displays it on “output label” when the user inputs 6 for the question at index 2 in “questions list.
	<br>Another scenario, if the first element in “question list” is equal to the string displayed in “question label” and the text input by the user, or “number of hours”, is 1, then the fourth element in “solution list” is pulled and displayed on the output label and the image is set to “good.png”. In the context of my program, this scenario would mean the question asks how long the user had spent driving on that day. The program recognizes this is the question being asked and since the parameter is less than 3, then the program will display element 4 from “solutions list” that notifies the user that they are doing a good job and that they aren’t emitting too many fossil fuels. The user will also be encouraged to keep it up and a thumbs up image will pop up.<br></p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• describe two calls to the selected procedure
	identified in written response 3c. Each call must
	pass a different argument(s) that causes a different
	segment of code in the algorithm to execute.
	<br>• describes the condition(s) being tested by each call
	to the procedure.
	<br>• identifies the result of each call. </p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>The response earned the point for this row, meeting all three criteria:
	<br>• The response describes two calls to the interpret_response procedure. The first call asks,
	“how many hours their AC was on,” where the “number of hours” parameter is “6.” The second calls
	asks, “the question ... how long the user had spent driving on that day,” where the “number of
	hours” parameter is “1.”
	<br>• The response describes the conditions as “[when to] display to the user that they are using their AC
	too much” or “when they aren’t emitting too many fossil fuels [sic].”
	<br>• The response states that the result of the first call will “display to the user that they are using their
	AC too much and offer them alternatives,” and that the result of the second call “will display
	element 4 from ‘solutions list’ that notifies the user that they are doing a good job and that they
	aren’t emitting too many fossil fuels [sic].”</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p><br></p>
	
	</div>	
	</div> <!-- accordion 2-->
	
	
Sample 3 - 2021's Pilot Sample E
--------------------------------

.. raw:: html

	   <div id="accordion3" class="yui-wk-div">
	
	<h3>Row 1: Program Purpose and Function (Video and Response 3A)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>

.. youtube:: Nexmm80Wu98
        :width: 600
        :height: 415
        :align: center
		
.. raw:: html

		<!--<gcb-youtube videoid="Nexmm80Wu98" instanceid="lLK2WYXPcCzm"></gcb-youtube>-->
		<br><p>3a.&nbsp;My program ultimately works to address the issue of screen addiction in society, as users who record their usage are more conscious of their own addiction. My program then tackles the issue head on, as new alternatives to screen usage can be selected with the activities button, mitigating overall screen usage. As can be seen from the illustration of my program, users are able to <b>input the amount of time</b> they spend on their screen each day. This data is collected and can be paused by the users, and resumed at whatever time they continue use of their screen. Then once the user feels that have used a sufficient amount of screen time in a day, they can <b>click the screen free challenge button to output an amount of time to go screen free</b>. They also have the activity button which outputs different activities to try that don’t involve screens.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>A.) The video demonstrates the running of the program including: <br>• input <br>• program functionality <br>• output </p>
			<p>AND</p> 
			<p>B.) The written response: <br>• describes the overall purpose of the program. <br>• describes what functionality of the program is demonstrated in the video. <br>• describes the input and output of the program demonstrated in the video. </p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>The response earned the point for this row, meeting all six of the criteria:
	<br>• The video demonstrates the running of the programming, including user input through pressing buttons; functionality of the timer; start, stop, reset, and output through the timer; random minute allotments; and activity suggestions. This satisfies the first three criteria for the video.
	<br>• The response states that the program’s overall purpose is “to address the issue of screen addiction in society, as users who record their usage are more conscious of their own addiction.”
	<br>• The response describes functionality of timing screen usage and the activity button for “new alternatives to screen usage can be selected with the activities button.”
	<br>• The response describes the program input and output as follows: “users are able to input the amount of time they spend on their screen each day,” and, “they [users] can click the screen free challenge button to output an amount of time to go screen free. They also have the activity button which outputs different activities to try that don’t involve screens.”
	</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p></p>
	
	</div>
	
	<h3>Row 2: Data Abstraction (Response 3B)</h3>
	<div class="yui-wk-div">
	<h4>Student Response</h4>
		<p><img src="../_static/assets/img/2021CreateSampleE_3B.png" class="yui-img" title="" alt="" style="width: 400px;"><br>3b.&nbsp;The list “activity” shown here is essential to my program because it contains the data that represents alternatives to screen usage and screen free challenge times. This list of data is essential to reducing screen addiction, and manage the overall complexity of my code. Instead of having several different buttons display alternative activities, the lists allow me to store all the data in one organized location. A procedure is then able to randomly select one of the strings for an index, to ensure that each string is displayed an approximately equal number of times. Without this list and another list that provides time amounts for the activities managing the complexity of the code, I would’ve had to individually enter each string into a separate button, creating redundancy in my code. I also would not have been able to ensure that each string was picked equally, because the individual buttons would not be controlled by the same procedure.</p><table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• includes two program code segments:
	- one that shows how data has been stored in
	this list (or other collection type).
	- one that shows the data in this same list being
	used as part of fulfilling the program’s purpose.
	<br>• identifies the name of the variable representing the
	list being used in this response.
	<br>• describes what the data contained in this list is
	representing in the program.
	</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>The response earned the point for this row, meeting all three of the criteria:
	<br>• The response provides two program code segments. The first one shows storage of data in a list named <i>activity</i> . The second program code segment uses <i>activity</i>  to process output from the activity list based on a random integer and works to fulfill the program’s purpose of suggesting an activity alternative to screen use.
	<br>• The response identifies the name of the list as <i>activity</i> .
	<br>• The response identifies and describes what is contained in <i>activity</i> as “the data that represents alternatives to screen usage and screen free challenge times.” 
	</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p></p>
	
	</div>
	
	<h3>Row 3: Managing Complexity (Response 3B)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p><img src="../_static/assets/img/2021CreateSampleE_3B.png" class="yui-img" title="" alt="" style="width: 500px;"><br>3b.&nbsp;The list “activity” shown here is essential to my program because it contains the data that represents alternatives to screen usage and screen free challenge times. This list of data is essential to reducing screen addiction, and manage the overall complexity of my code. Instead of having several different buttons display alternative activities, the lists allow me to store all the data in one organized location. A procedure is then able to randomly select one of the strings for an index, to ensure that each string is displayed an approximately equal number of times. Without this list and another list that provides time amounts for the activities managing the complexity of the code, I would’ve had to individually enter each string into a separate button, creating redundancy in my code. I also would not have been able to ensure that each string was picked equally, because the individual buttons would not be controlled by the same procedure.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• includes a program code segment that shows a list
	being used to manage complexity in the program.
	<br>• explains how the named, selected list manages
	complexity in the program code by explaining why
	the program code could not be written, or how it
	would be written differently, without using this list.</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td><p>The response earned the point for this row, meeting both of the criteria:
	         <br>• The response includes a program code segment that shows a list, <i>activity</i>, being used to manage complexity in the program.
	<br>• The response explains that, “Instead of having several different buttons display alternative activities, the lists allow me to store all the data in one organized location.”
	</p>
			
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	
	</div>
	   
	<h3>Row 4: Procedural Abstraction (Response 3C)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p><img src="../_static/assets/img/2021CreateSampleE_3C.png" class="yui-img" title="" alt="" style="width: 600px;"><br>3c.&nbsp;The procedure, procedurerunclock, contributes to the overall functionality of my program, as it allows the stopwatch to both run and display the changing time every millisecond. The procedures, working in accordance, use the time parameter to make sure that the time is recorded by the stopwatch, and is then displayed live, when the user clicks the start button. Without the stopwatch it would not be possible for user to record the amount of time they spend on their screen, which is a crucial function to my app. If users are unable to see how much time they spend on their screens then they will not be conscious of their addictions, and therefore not willing or likely to take screen free challenges and try alternative activities. The algorithm accomplishes this task as it utilizes the parameter “time” to get the new time as the clock runs, and then updates this time so that it is displayed in a label. The parameter for time is essential to my algorithm, as procedure run clock would not work without it, and thus procedure display clock could not update either.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• includes two program code segments:
	- one showing a student-developed procedure
	with at least one parameter that has an effect
	on the functionality of the procedure.
	- one showing where the student-developed
	procedure is being called.
	<br>• describes what the identified procedure does and
	how it contributes to the overall functionality of the
	program. </p>
	     	</td>
		<td>
			<p>0</p>
		</td>
		<td>
			<p>The response does not earn the point for this row. Because the response contains two code segments, the response must be scored based on the first procedure provided—the <i>procedurerunclock</i> procedure. The response met only one of the two criteria:
	<br>• The response includes a student-developed procedure, <i>procedurerunclock</i>, which uses the parameter time. A call to procedurerunclock is shown in a second procedure, <i>proceduredisplayclock</i>.
	<br>• The response does not provide a description for what <i>procedurerunclock</i> does. The response focuses on what <i>proceduredisplayclock</i> does and how it contributes to the program; however, <i>procedurerunclock</i> is the identified procedure that contains a parameter and should be the focus of the response. </p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p></p>
	
	</div>   
	   
	<h3>Row 5: Algorithm Implementation (Response 3C)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p><img src="../_static/assets/img/2021CreateSampleE_3C.png" class="yui-img" title="" alt="" style="width: 500px; height: 490px;"><br>3c.&nbsp;The procedure, procedurerunclock, contributes to the overall functionality of my program, as it allows the stopwatch to both run and display the changing time every millisecond. The procedures, working in accordance, use the time parameter to make sure that the time is recorded by the stopwatch, and is then displayed live, when the user clicks the start button. Without the stopwatch it would not be possible for user to record the amount of time they spend on their screen, which is a crucial function to my app. If users are unable to see how much time they spend on their screens then they will not be conscious of their addictions, and therefore not willing or likely to take screen free challenges and try alternative activities. The algorithm accomplishes this task as it utilizes the parameter “time” to get the new time as the clock runs, and then updates this time so that it is displayed in a label. The parameter for time is essential to my algorithm, as procedure run clock would not work without it, and thus procedure display clock could not update either.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• includes a program code segment of a studentdeveloped algorithm that includes
	- sequencing
	- selection
	- iteration
	<br>• explains in detailed steps how the identified
	algorithm works in enough detail that someone else
	could recreate it.</p>
		</td>
		<td>
			<p>0</p>
		</td>
		<td>
			<p>The response did not earn the point for this row. Because the response contains two code segments, the response must be scored based on the first procedure provided—the <i>procedurerunclock</i> procedure. The response does not meet either of the two criteria:
	<br>• The <i>procedurerunclock</i> procedure includes a student-developed algorithm that includes sequencing and selection (if...then...else statement); however, it does not include iteration.
	<br>• Additionally, the response does not explain how <i>procedurerunclock</i> works but rather explains how <i>proceduredisplayclock</i> works</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p></p>
	
	</div>
	   
	<h3>Row 6: Testing (Response 3D and Procedure from 3C)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p>3D.&nbsp;In the two test cases for my procedure the app user spent 30 minutes on their screen both times, before deciding to take a screen free challenge and try an alternative activity. In the first test, the user was directed to take a 60 minute screen free challenge, and try doing their homework instead. In the second test case, the user was directed to take a 120 minute screen free challenge and try visiting their friends instead. In my app the string data was programmed into the code, and each string was selected randomly, meaning that there was no expected CSP 2020 Sample E result for either of the test cases. The conditions being tested are which string will be randomly selected. Once the program selects a string it then joins “Go Screen Free For:” with an amount of time, or “Try this activity:” is joined with an activity. The procedure to do this task accomplishes this goal by selecting a random fraction between 0 and 1, and then each of the six strings corresponds with a fraction. The corresponding string closest to the fraction chosen is then selected and displayed in the label.<br></p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>The written response:
	<br>• describe two calls to the selected procedure
	identified in written response 3c. Each call must
	pass a different argument(s) that causes a different
	segment of code in the algorithm to execute.
	<br>• describes the condition(s) being tested by each call
	to the procedure.
	<br>• identifies the result of each call. </p>
		</td>
		<td>
			<p>0</p>
		</td>
		<td>
			<p>The response did not earn the point for this row. The response does not meet any of the three criteria:
	             <br>• The description includes two test cases that are related not to <i>procedurerunclock</i> but to another aspect of the program. </p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p><br></p>
	
	</div>	
	</div> <!-- accordion 3-->
	
	
Sample 4 - 2019's Sample H
--------------------------

.. raw:: html

	   <div id="accordion4" class="yui-wk-div">
	
	<h3>Row 1: Developing a Program with a Purpose (Video and Response 2A)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>

.. youtube:: FCgR0IaIVcA
        :width: 600
        :height: 415
        :align: center
		
.. raw:: html

		<!--<gcb-youtube videoid="FCgR0IaIVcA" instanceid="LSet4qsVNxwE"></gcb-youtube>-->
		<br><p>2a.The programming language I used was MIT App Inventor. The purpose of my program is a game where the user clicks pictures of comets to get points within a
	time limit. My video shows how the game works, and shows what happens when you win and when you lose. It shows how the timer counts down, and how the score increases every time a comet is clicked. If the score reaches 10, then the user wins, If it does not reach 10, the user loses.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>A.) The video demonstrates the running of at least one feature of the program submitted. </p>
			<p>AND</p> 
			<p>B.) The response (audio narration or written response) identifies the purpose of the program 
			(what the program is attempting to do).</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>A.) The video is continuously running and illustrates the running of the program.</p>
			<p>AND</p>
			<p>B.) The response states the purpose as "a game where the user clicks pictures of comets to get points within a time limit."</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>The write up does a nice job of stating, “The purpose of my program…”</p>
	
	</div>
	
	<h3>Row 2: Developing a Program with a Purpose (Response 2B)</h3>
	<div class="yui-wk-div">
	<h4>Student Response</h4>
		<p>2b. To develop this app, I had to figure out a few small things to make sure it would run as intended. One difficulty I encountered was when I was coding the comets. I had to use a random integer procedure, and I did not know which numbers to use for the comets. I had to keep using different numbers and looking at the app to make sure none of the comets ever went off the screen, and then I went between the highest and lowest numbers for both the x and the y coordinates. Another difficulty came up when I wanted to increase the speed of the comets. They were moving whenever the clock ticked, and I tried decreasing the amount of time between each tick. However, there was also a timer feature that counted down the seconds every time the clock ticked, and this was affected with the decreased intervals. To fix this, I added a second clock, and separated the timer from the comets. Both of these were independent program development.
	</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>Describes or outlines steps used in the incremental and iterative development process to create the entire program.</p>
		</td>
		<td>
			<p>0</p>
		</td>
		<td>
			<p>The response does not address the development process.</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>Focus on the process for this row of the scoring criteria.  The response to section 2b needs to cover both row 2 and row 3 on the scoring 
	     criteria. This response tries to cover row 3, but neglects to cover row 2. By keeping a journal of the process, a step-by-step description of the development of the app should be easy to put together for this requirement.</p>
	
	</div>
	
	<h3>Row 3: Developing a Program with a Purpose (Response 2B)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p>2b. To develop this app, I had to figure out a few small things to make sure it would run as intended. One difficulty I encountered was when I was coding the comets. I had to use a random integer procedure, and I did not know which numbers to use for the comets. I had to keep using different numbers and looking at the app to make sure none of the comets ever went off the screen, and then I went between the highest and lowest numbers for both the x and the y coordinates. Another difficulty came up when I wanted to increase the speed of the comets. They were moving whenever the clock ticked, and I tried decreasing the amount of time between each tick. However, there was also a timer feature that counted down the seconds every time the clock ticked, and this was affected with the decreased intervals. To fix this, I added a second clock, and separated the timer from the comets. Both of these were independent program development.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>A.) Specifically identifies at least two program development difficulties or opportunities.  </p>
			<p>AND</p> 
			<p>B.) Describes how the two identified difficulties or opportunities are resolved or incorporated.</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td><p>A.) The response describes two program development difficulties/opportunities</p><p>AND</p><p>B.) explains how each was resolved.<br><br>The response identifies a first difficulty in finding "which numbers to use for the comets ... to make sure none of the
	comets ever went off the screen,". <span style="font-style: italic;">This was resolved by&nbsp;</span><i>using "the highest and lowest numbers for both the x
	and the y coordinates." <br></i><br>The response identifies a second difficulty, in that the comets and the clock were both
	based on the same timer, and this broke when the student tried to make the comets move faster. <i>This was
	resolved by adding "a second clock, and separated the timer from the comets."</i><br></p>
			
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p></p>
	
	</div>
	   
	<h3>Row 4: Applying Algorithms (Response 2C)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p>2c.&nbsp;<img src="../_static/assets/img/CreateSample32C.png" class="yui-img" title="" alt=""><img src="../_static/assets/img/CreateSample32C.png" class="yui-img" title="" alt="" style="width: 500px;"></p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>Selected code segment implements an algorithm.</p>
			<p>Indicated by placing an oval around the specific piece of code in the entire program code section.</p> 
			<p>If using the template, a screenshot is provided directly with the response.</p>
	     	</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>By the definition of an algorithm, the selected code segment does implement an algorithm.<br> The main algorithm pictured here is the Clock1.Timer block. <br>The written response matches the selected code.</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>When selecting an algorithm, please be mindful of the definition.  It must be a formula or a set of steps in order to solve a problem.  Also be 
	     sure the selected algorithm will be sufficient to earn the points awarded for both row 5 and row 6.</p>
	
	</div>   
	   
	<h3>Row 5: Applying Algorithms (Response 2C)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p>2c. Whenever the clock ticks, the time variable decreases by one. Also, the timer
	label is changed to Timer: and the current value of the variable. This makes it so
	that the screen shows the timer label decreasing by one every second. If the time
	variable gets to zero, then another screen is opened, and the score variable
	(which changes from other events in the app) is sent to the new screen. Because
	of all of this, the time variable counts down every second, which is visible to the
	user of the app, and once it hits zero, another screen is opened to show the user
	the result of the game.
	</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>A.) Selected code segment implements an algorithm that uses mathematical or logical concepts.</p>
			<p>AND</p> 
			<p>B.) Explains how the selected algorithm functions </p>
	         	<p>AND</p> 
	           <p>C.) Describes what the selected algorithm does in relation to the overall program.</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>A.) The selected code segment in this case is the main algorithm - the Clock1.Timer block. It satisfies the math/logic requirement 
	             because it uses an If/Else statement with Boolean conditions which counts as logic. The decrementing also counts as math.</p>
			<p>AND</p>
			<p>B.)The response explains how the algorithm functions: "the time variable decreases by one ... the timer label is changed." </p>
			<p>AND</p>
	         	<p>C.)  The response also describes what
	the algorithm does in relation to the program: "the time variable counts down every second, which is visible to
	the user of the app, and once it hits zero, another screen is opened to show the user the result of the game."</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>To be sure to earn the point for row 5, students must clearly touch on all three of the “and” requirements.&nbsp;</p>
	
	</div>
	   
	<h3>Row 6: Applying Algorithms (Response 2C)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p>2c. Whenever the clock ticks, the time variable decreases by one. Also, the timer label is changed to Timer: and the current value of the variable. This makes it so that the screen shows the timer label decreasing by one every second. If the time variable gets to zero, then another screen is opened, and the score variable (which changes from other events in the app) is sent to the new screen. Because of all of this, the time variable counts down every second, which is visible to the user of the app, and once it hits zero, another screen is opened to show the user the result of the game.<br></p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>A.) Selected code segment implements an algorithm that includes at least two or more algorithms.  </p>
			<p>AND</p> 
			<p>B.) At least one of the included algorithms uses mathematical or logical concepts. </p>
			<p>AND</p> 
			<p>C.) Explains how one of the included algorithms functions independently.</p>
		</td>
		<td>
			<p>0</p>
		</td>
		<td>
			<p>The response does not identify any sub-algorithms.&nbsp;<br></p>
			<p><i>While the reader may be able to identify sub-algorithms in the main algorithm, the student’s response must clearly identify the sub-
	             algorithms and explain at least one sub-algorithm.</i></p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p><br></p>
	
	</div>
	   
	<h3>Row 7: Applying Abstraction (Response 2D)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p>2d.&nbsp;<img src="../_static/assets/img/CreateSample32D.png" class="yui-img" title="" alt=""><img src="../_static/assets/img/CreateSample32D.png" class="yui-img" title="" alt="" style="width: 500px;"></p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>Selected code segment is a student-developed abstraction.</p>
			<p><i>Indicated by placing a rectangle around the specific piece of code in the entire program code section.</i></p> 
			<p><i>If using the template, a screenshot is provided directly with the response.</i></p>
		</td>
		<td>
			<p>0</p>
		</td>
		<td>
			<p>The response identifies a variable as the abstraction. Variables are explicitly excluded as student-defined
	abstractions.<br></p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p><br></p>
	
	</div>
	   
	<h3>Row 8: Applying Abstraction (Response 2D)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p>2d. The score variable is an abstraction that changes every time a Sprite is touched. If
	a sprite is touched, the abstraction allows the number to continuously increase
	by one. At the end of the game, this variable is sent to the next screen. If the
	value of the variable is greater than 10, the user wins. If it is less than 10, the
	user loses. This abstraction allows the score to be easily tracked by the user and
	by the app. Without it, score would not be able to be easily recorded.
	</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>Explains how the selected abstraction manages the complexity of the program.</p>
		</td>
		<td>
			<p>0</p>
		</td>
		<td>
			<p>The response does not address managing program complexity</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p><br></p>
	</div>
	</div> <!-- accordion 4-->
	

Sample 5 - 2018's Sample E
--------------------------

.. raw:: html

	   <div id="accordion5" class="yui-wk-div">
	
	<h3>Row 1: Developing a Program with a Purpose (Video and Response 2A)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<a href="https://secure-media.collegeboard.org/ap/video_audio/ap18-create-sample-e-video.mp4" target="_blank" title="">Click here to watch 
	         video<br></a><p>2a.The program is a study guide app. The program was created in App Inventor 2. The purpose of this app is so that the user can 
	     put in whatever terms and definitions they desire and study off them later on flashcards. At first, the user puts in the desired term and 
	     definition in the two textboxes and then click submit allowing them to put in different terms and definitions after. When they are finally done, 
	     they click the study button which takes away the terms and definitions and just shows the term as a flashcard. Then to see what the definition is, 
	     they can click the flash card. The video shows the user plugging in values and later studying them as if there were real flashcards.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>A.) The video demonstrates the running of at least one feature of the program submitted. </p>
			<p>AND</p> 
			<p>B.) The response (audio narration or written response) identifies the purpose of the program 
			(what the program is attempting to do).</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>A.) The video is continuously running and illustrates the running of the program.</p>
			<p>AND</p>
			<p>B.) The response states the purpose as allowing the user to "put in whatever terms and definitions they desire and study off them later on 
	             flashcards."</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>While the video shows the running of the app, please be sure to take into consideration the atmosphere in which you record your video.  The 
	     background noise does not make the student lose points, but it does distract from the focus of the video.  The write up does a nice job of stating, 
	     “The purpose of the app…”</p>
	
	</div>
	
	<h3>Row 2: Developing a Program with a Purpose (Response 2B)</h3>
	<div class="yui-wk-div">
	<h4>Student Response</h4>
		<p>2b. There were many problems that arose while coding the program. One of the early problems encountered was deciding how I should set up my 
	         study guide. For example, I could have chosen to do flashcards along with doing multiple choice. However, I felt that the flash cards would be 
	         more effective and efficient way of creating this app. Furthermore, when making this study guide app, I felt that there needed to be something 
	         else that could have made the study guide more useful for the reader. Originally, there were just flashcards, but I felt there was something 
	         else that could be done. So I included another button that allowed the user to type in the definition as the word was being given. This was a 
	         major development addition as it is more effective for the user to write the information than by just looking at cards. This is also more 
	         effective for memorization.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>Describes or outlines steps used in the incremental and iterative development process to create the entire program.</p>
		</td>
		<td>
			<p>0</p>
		</td>
		<td>
			<p>The response does not describe the incremental or iterative process used in developing the entire program. The response focuses on two 
	             decisions that were made in determining what would be in the program. A good response would describe the steps taken to develop the program 
	             including information about the testing, debugging, and refinement of the program once the initial code was written.</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>Focus on the process for this row of the scoring criteria.  The response to section 2b needs to cover both row 2 and row 3 on the scoring 
	     criteria. This response tries to cover row 3, but neglects to cover row 2. By keeping a journal of the process, a step-by-step description of the development of the app should be easy to put together for this requirement.</p>
	
	</div>
	
	<h3>Row 3: Developing a Program with a Purpose (Response 2B)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p>2b. There were many problems that arose while coding the program. One of the early problems encountered was deciding how I should set up my 
	         study guide. For example, I could have chosen to do flashcards along with doing multiple choice. However, I felt that the flash cards would be 
	         more effective and efficient way of creating this app. Furthermore, when making this study guide app, I felt that there needed to be something 
	         else that could have made the study guide more useful for the reader. Originally, there were just flashcards, but I felt there was something 
	         else that could be done. So I included another button that allowed the user to type in the definition as the word was being given. This was a 
	         major development addition as it is more effective for the user to write the information than by just looking at cards. This is also more 
	         effective for memorization.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>A.) Specifically identifies at least two program development difficulties or opportunities.  </p>
			<p>AND</p> 
			<p>B.) Describes how the two identified difficulties or opportunities are resolved or incorporated.</p>
		</td>
		<td>
			<p>0</p>
		</td>
		<td>
			<p>A.) The response only describes one program development difficulty/opportunity.</p>
			<p>AND</p>
			<p>B.) explains how that one difficulty/opportunity was resolved. </p>
			<p>The response identifies an opportunity as adding functionality to allow users to enter the "definition as the word was being given." This 
	             is resolved by including "another button."</p>
			<p>The difficulty identified is the decision to use flashcards over multiple choice, which is a design choice, not a program development 
	             difficulty.</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>The lack of clarity in the response led this scorer to not award the point for this row.  “One of the early problems I encountered…” is the only 
	     part that stuck in the graders mind.  After describing that problem and its resolution, the student should have added the phrase, “Then I came 
	     across an opportunity to…”  This would have redirected the scorer’s attention to check off the requirements from the scoring criteria.</p>
	
	</div>
	   
	<h3>Row 4: Applying Algorithms (Response 2C)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p>2c.&nbsp;<img src="../_static/assets/img/CreateSample22C.png" class="yui-img" title="" alt=""></p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>Selected code segment implements an algorithm.</p>
			<p>Indicated by placing an oval around the specific piece of code in the entire program code section.</p> 
			<p>If using the template, a screenshot is provided directly with the response.</p>
	     	</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>By the definition of an algorithm, the selected code segment does implement an algorithm.<br> The main algorithm pictured here is the 
	             NextButton.Click block. <br>The written response matches the selected code.</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>When selecting an algorithm, please be mindful of the definition.  It must be a formula or a set of steps in order to solve a problem.  Also be 
	     sure the selected algorithm will be sufficient to earn the points awarded for both row 5 and row 6.</p>
	
	</div>   
	   
	<h3>Row 5: Applying Algorithms (Response 2C)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p>2c. This particular algorithm is essential to the program because it allows the user to go to the next flashcard. When the next button is 
	         clicked, it displays the label font text and then doesn't show the back text. The index also determined which flashcard that you are on, in 
	         which you keep going to the next term as the next button is clicked. Furthermore, if the index is bigger than the number of items in the list 
	         then it restarts back to 1, or the first item in the list. This is the same for the other algorithm as they both use an index. One of the 
	         independent algorithms makes so that user can type in the term as the other algorithm is displaying the definition as a flashcard. Together as 
	         a combination, this makes it so that the user has a study guide environment in which they can type in the necessary term to the definition and 
	         then be able to go to the next set of terms.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>A.) Selected code segment implements an algorithm that uses mathematical or logical concepts.</p>
			<p>AND</p> 
			<p>B.) Explains how the selected algorithm functions </p>
	         	<p>AND</p> 
	           <p>C.) Describes what the selected algorithm does in relation to the overall program.</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>A.) The selected code segment in this case is the main algorithm - the NextButton.click block. It satisfies the math/logic requirement 
	             because it uses an If/Else statement with Boolean conditions which counts as logic.</p>
			<p>AND</p>
			<p>B.)The response explains how the algorithm works: "When the next button is clicked, it displays the label font text and then doesn't show 
	             the back text. The index also determined which flashcard that you are on, in which you keep going to the next term as the next button is 
	             clicked. Furthermore, if the index is bigger than the number of items in the list then it restarts back to 1, or the first item in the 
	             list. This is the same for the other algorithm as they both use an index." </p>
			<p>AND</p>
	         	<p>C.) The response also describes what the purpose is for this algorithm in relation to the entire program: "allows the user to go to the 
	             next flashcard" and "the user has a study guide environment in which they can type in the necessary term to the definition and then be able 
	             to go to the next set of terms.</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>To be sure to earn the point for row 5, students must clearly touch on all three of the “and” requirements.  The first is to assure that the 
	     algorithm uses mathematical or logical concepts.  The if/else block is used in this example meets that requirement.  The second part should follow 
	     with the step-by-step process of the algorithm.  This example doesn’t do a good job of that, but does enough to get the point across.  The last 
	     requirement is met as it relates the algorithm to the overall program in the introductory sentence.  This explicit type of technical writing leaves 
	     nothing up to interpretation.</p>
	
	</div>
	   
	<h3>Row 6: Applying Algorithms (Response 2C)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p>2c. This particular algorithm is essential to the program because it allows the user to go to the next flashcard. When the next button is clicked, it displays the label font text and then doesn't show the back text. The index also determined which flashcard that you are on, in which you keep going to the next term as the next button is clicked. Furthermore, if the index is bigger than the number of items in the list then it restarts back to 1, or the first item in the list. This is the same for the other algorithm as they both use an index. One of the independent algorithms makes so that user can type in the term as the other algorithm is displaying the definition as a flashcard. Together as a combination, this makes it so that the user has a study guide environment in which they can type in the necessary term to the definition and then be able to go to the next set of terms.</p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>A.) Selected code segment implements an algorithm that includes at least two or more algorithms.  </p>
			<p>AND</p> 
			<p>B.) At least one of the included algorithms uses mathematical or logical concepts. </p>
			<p>AND</p> 
			<p>C.) Explains how one of the included algorithms functions independently.</p>
		</td>
		<td>
			<p>0</p>
		</td>
		<td>
			<p>A.) The selected code segment includes at least two algorithms that are integrated to create the main algorithm (NextButton). </p>
			<p>AND</p>
			<p>B.) The included algorithms all contain If/Else statements with Boolean conditions which count as logical concepts to satisfy the 
	             math/logic requirement.</p>
			<p>AND</p>
			<p>C.) The response briefly states that one algorithm "makes [it] so that user can type in the term as the other algorithm is displaying the 
	             definition as a flashcard." However, it is not clear where each of these algorithms is in the supplied code segment, so it is not clear if 
	             these algorithms are included in the identified algorithm.</p>
			<p><i>While the reader may be able to identify sub-algorithms in the main algorithm, the student’s response must clearly identify the sub-
	             algorithms and explain at least one sub-algorithm.</i></p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>Again, covering all three requirements is necessary to earn this point in the scoring criteria- 2 out of 3 did not get the job done on this 
	     example.  The two integrated algorithms from the overall algorithm are both if/else statements so that covers the first two requirements.  While 
	     the sentence starter “One of the independent algorithms…” is a great attention-getter for the reader, this example follows it up with an algorithm 
	     that is not part of the selected one.  Be sure students double-check their continuity to clean up this type of mistake.</p>
	
	</div>
	   
	<h3>Row 7: Applying Abstraction (Response 2D)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p>2d.&nbsp;<img src="../_static/assets/img/CreateSample22D.png" class="yui-img" title="" alt=""></p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>Selected code segment is a student-developed abstraction.</p>
			<p><i>Indicated by placing a rectangle around the specific piece of code in the entire program code section.</i></p> 
			<p><i>If using the template, a screenshot is provided directly with the response.</i></p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>By the definition of abstraction, the selected code segment <i>does</i> implement an abstraction. The abstraction pictured here is a 
	             student-developed procedure called procedure. </p>
			<p>The written response matches the selected code.</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>The abstraction chosen is a procedure.  This is one of the easiest types of abstractions to develop and explain.</p>
	
	</div>
	   
	<h3>Row 8: Applying Abstraction (Response 2D)</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4>
		<p>2d. This particular abstraction is used to determine if the word you type in, is correct. This abstraction uses mathematical concepts by 
	         determining if the word you type in and the actual term, are equal. If they do happen to be equal, then this will be shown in the 
	         “lblWriteWrong.” Furthermore, this abstraction uses logical concepts by determining if the word the user types in is true, then it will be 
	         displayed as correct through the Write Wrong label. However if the word the user types in is a false word, then it will show that it is 
	         incorrect through the Write Wrong label. By creating this abstraction it makes the general coding clearer and easier to read as it is already 
	         being used once. </p>
	<table>
	<tbody><tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>Explains how the selected abstraction manages the complexity of the program.</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>The response gives a reason why the abstraction (procedure) manages complexity: "By creating this abstraction it makes the general coding 
	             clearer and easier to read as it is already being used once."</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>While this explanation does a good job of telling what the procedure does, it waits until the last sentence to earn the point.  Giving the reader 
	     the reasons  “...makes the general coding clearer and easier to read…” effectively illustrates the managing of the complexity.  It also subtly 
	     points out how it reduces redundancy.</p>
	</div>
	</div> <!-- accordion 5-->
	
	

Sample 6 - 2017's Sample A
--------------------------

.. raw:: html

	   <div id="accordion6" class="yui-wk-div">
	
	<h3>Row 1: Developing a Program with a Purpose (Video and Response 2A)
	</h3>
	<div class="yui-wk-div">
	     <h4>Student Response</h4><p>2a. Narration in video Note: This video is no longer available from the College Board.</p>
		 <table>
	     <tbody><tr>
	      
	
	     </tr>
	     
	     <tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>A.) The video demonstrates the running of at least one feature of the program submitted. </p>
			<p>AND</p> 
			<p>B.) The response (audio narration or written response) identifies the purpose of the program 
			(what the program is attempting to do).</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>A.) The video is a continuous running of the program that demonstrates several features 
			(i.e. log in, review, add entries) in under a minute.</p>
			<p>AND</p>
			<p>B.) The response (in this case the audio narration) matches the video and indicates that the 
			purpose of the program is “to allow users to have an app where they can privately journal about their day”</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>The video and narration are well planned out and executed.  It is simple and yet thoroughly explains the app.
	     The two things to remember the difference between are purpose and function.  Purpose is the intended goal or 
	     objective of the program.  Function is how the program works.</p>
	</div>
	
	<h3>Row 2: Developing a Program with a Purpose (Response 2B)</h3>
	<div class="yui-wk-div">
	<h4>Student Response</h4><p>2b. Being unfamiliar with Firebase’s structure, I encountered a problem while programming when I tried to include a 3rd Firebase database.
	         Upon the addition of the component and the corresponding coding elements, my app could no longer be packaged or loaded onto a device for
	         testing. My app would always crash while loading. Unable to find a clear syntax error, I resolved the issue by debugging and deleting
	         portions of the code until the app would finally successfully load and then reprogramming the deleted portions of code. Another difficulty
	         I encountered was transferring variables across screens in order to access the correct user’s data. Opening a new screen in App Inventor
	         would clear the values of the variable on the device, which would render them unusable on the next screen. I resolved this independently
	         by assembling the contents of each screen into its own arrangement, and utilizing the .visible property of these arrangements to make
	         them appear and disappear, providing the illusion of multiple screens and allowing the accessed variable values to be consistent across
	         all “screens”.</p><table>
	<tbody>
	     <tr>
	       
	       
	       
	     </tr>
	     
	     <tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>Describes or outlines steps used in the incremental and iterative development process to create the entire program.</p>
		</td>
		<td>
			<p>0</p>
		</td>
		<td>
			<p>The response only describes the development at two specific points in time. The response lacks discussion of the overall 
	             development process of the app. A good response would describe the steps taken to develop the program including information 
	             about the testing, debugging, and refinement of the program once the initial code was written.</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>Students should focus on conveying the overall process of the app development.  Clearly defining the start and finish of the process while
	     touching on important milestones along the way is very important to this response.</p>
	
	</div>
	
	<h3>Row 3: Developing a Program with a Purpose (Response 2B)</h3>
	<div class="yui-wk-div">
	<h4>Student Response</h4><p>2b. Being unfamiliar with Firebase’s structure, I encountered a problem while programming when I tried to include a 3rd Firebase database.
	         Upon the addition of the component and the corresponding coding elements, my app could no longer be packaged or loaded onto a device for
	         testing. My app would always crash while loading. Unable to find a clear syntax error, I resolved the issue by debugging and deleting
	         portions of the code until the app would finally successfully load and then reprogramming the deleted portions of code. Another difficulty
	         I encountered was transferring variables across screens in order to access the correct user’s data. Opening a new screen in App Inventor
	         would clear the values of the variable on the device, which would render them unusable on the next screen. I resolved this independently
	         by assembling the contents of each screen into its own arrangement, and utilizing the .visible property of these arrangements to make
	         them appear and disappear, providing the illusion of multiple screens and allowing the accessed variable values to be consistent across
	         all “screens”.</p><table>
	<tbody>
	     <tr>
	       
		
	     </tr>
	     
	     <tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>A.) Specifically identifies at least two program development difficulties or opportunities.  </p>
			<p>AND</p> 
			<p>B.) Describes how the two identified difficulties or opportunities are resolved or incorporated.</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p></p><p>A.) The response describes two program development difficulties/opportunities</p>
			<p>AND</p>
			<p>B.) explains how each was resolved.</p>
			<p>The first difficulty is that when including a third Firebase database, the program could no longer be packaged or loaded onto a device
	             for testing. <i>This is resolved by deleting portions of the code until the app worked, and then adding back in the deleted
	             portions.</i></p>
			<p>The second difficulty is transferring variables across screens. <i>This is resolved by using the visible property of these 
	             arrangements to make them appear and disappear, providing the illusions of multiple screens.</i></p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>Students should explicitly label their opportunities or difficulties as done in this example.  Adding the sentence structures “the first…”
	     and “the second…” also makes it unmistakeable for the grader to identify.  The way the student points out the resolution of the difficulties is
	     spot-on by specifically using the phrase “I resolved”.</p>
	</div>
	 
	<h3>Row 4: Applying Algorithms (Response 2C)</h3>
	<div class="yui-wk-div">
	<h4>Student Response</h4><p>2c.<br>
	         <img src="../_static/assets/img/CreateSample12C.png" class="yui-img" title="" alt=""><br>
	         <img src="../_static/assets/img/CreateSample12C2.png" class="yui-img" title="" alt="">
	         <img src="../_static/assets/img/CreateSample12C3.png" class="yui-img" title="" alt=""></p><table>
	<tbody>
	     <tr>
	       
		
	     </tr>
	     
	     <tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>Selected code segment implements an algorithm.</p>
			<p>Indicated by placing an oval around the specific piece of code in the entire program code section.</p> 
			<p>If using the template, a screenshot is provided directly with the response.</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>By the definition of an algorithm, the selected code segment does implement an algorithm.<br>The main algorithm pictured here is 
	             the AccountDB.GotValue block. For easy reference, the response also includes screenshots of two sub-algorithms (algorithms included 
	             in the main algorithm). In this case, both sub-algorithms are procedures.<br>The written response matches the selected code.</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>By providing a screenshot of the algorithm, the student simplified the process of identifying the algorithm.  Students need to be very careful 
	     to select an algorithm that fills the requirements for <em>both</em> rows 5 and 6.</p>
	
	</div>
	 
	<h3>Row 5: Applying Algorithms (Response 2C)</h3>
	<div class="yui-wk-div">
	<h4>Student Response</h4><p>2c. As my program uses Firebase databases to store user data, AccountDB.GotValue is an important algorithm as it handles all data retrieved 
	         from the account database such as users and passwords. Because Firebase data requests are handled asynchronously to the program, it is 
	         necessary that when data is sent back from Firebase, the algorithm examines the tag and values sent back in order to properly redirect the 
	         program to either proceed with a login or create account procedure.&nbsp; One of the integrated algorithms is the procedure called 
	         loginProcedure (above). When called, the procedure loginProcedure will login in the user and load up the user’s diary entries if the correct 
	         password is entered. Otherwise, an error message will appear and the user will have to try again. 
		The procedure createAccount shown above is another integrated algorithm that helps create a user’s account and mark the designated locations for 
	         the user’s data in Firebase given that they had provided a valid password and an unique username. The integration of the two procedures 
	         createAccount and loginProcedure helps the overall algorithm perform and regulate the core functions of the login screen of creating accounts 
	         and logging in.</p><table>
	<tbody>
	     <tr>
	       
		
	       
	     </tr>
	     
	     <tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>A.) Selected code segment implements an algorithm that uses mathematical or logical concepts.</p>
			<p>AND</p> 
			<p>B.) Explains how the selected algorithm functions </p>
	         	<p>AND</p> 
	           <p>C.) Describes what the selected algorithm does in relation to the overall program.</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>A.) The selected code segment in this case is the main algorithm - the AccountDB.GotValue block. It satisfies the math/logic 
	             requirement because it uses an If/Else statement with Boolean conditions which counts as logic.</p>
			<p>AND</p>
			<p>B.) The response explains how the algorithm functions by stating it “examines the tag and values sent back in order to properly 
	             redirect the program to either proceed with a login or create account procedure”. </p>
			<p>AND</p>
	         	<p>C.) The response describes what the algorithm does in relation to the overall purpose of the program (stores user data).</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>Students should take the time to explicitly describe the logical or mathematical concepts used in the design of the algorithm. This statement,
	     “redirect the program to either proceed with a login or create account procedure.” talks about the selection process, but could put more emphasis
	     on it being the logical part of the algorithm.
	Great use of the phrase “the algorithm examines” points out the function of it.  To show the relation to overall program, this example uses another 
	     great sentence structure  “...is an important algorithm as it handles...”</p>
	
	</div>
	 
	<h3>Row 6: Applying Algorithms (Response 2C)</h3>
	<div class="yui-wk-div">
	<h4>Student Response</h4><p>2c. As my program uses Firebase databases to store user data, AccountDB.GotValue is an important algorithm as it handles all data retrieved 
	         from the account database such as users and passwords. Because Firebase data requests are handled asynchronously to the program, it is 
	         necessary that when data is sent back from Firebase, the algorithm examines the tag and values sent back in order to properly redirect the 
	         program to either proceed with a login or create account procedure. 
		<br>One of the integrated algorithms is the procedure called loginProcedure (above). When called, the procedure loginProcedure will login in the 
	         user and load up the user’s diary entries if the correct password is entered. Otherwise, an error message will appear and the user will have to 
	         try again. 
		<br>The procedure createAccount shown above is another integrated algorithm that helps create a user’s account and mark the designated locations 
	         for the user’s data in Firebase given that they had provided a valid password and an unique username. The integration of the two procedures 
	         createAccount and loginProcedure helps the overall algorithm perform and regulate the core functions of the login screen of creating accounts 
	         and logging in.</p><table>
	<tbody>
	     <tr>
	       
		
	     </tr>
	     <tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>• A.) Selected code segment implements an algorithm that includes at least two or more algorithms.  </p>
			<p>AND</p> 
			<p>• B.) At least one of the included algorithms uses mathematical or logical concepts. </p>
			<p>AND</p> 
			<p>• C.) Explains how one of the included algorithms functions independently.</p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>A.) The selected code segment includes two algorithms (loginProcedure and createAccount procedures) that are integrated to create a new 
	             main algorithm (account access). </p>
			<p>AND</p>
			<p>B.) Both of the included procedures contain If/Else statements with Boolean conditions which count as logical concepts to satisfy the 
	             math/logic requirement.</p>
			<p>AND</p>
			<p>C.) The response explains how the loginProcedure procedure functions (“login in the user and load up the user’s diary entries if the 
	             correct password is entered. Otherwise, an error message will appear and the user will have to try again.”)</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>The statement “One of the integrated algorithms…” is a great way to call attention to the requirements for this part of the scoring criteria.  
	     When it comes to the logical/mathematical concepts, this response leaves a lot to the imagination and only states “ load up the user’s diary 
	     entries if the correct password is entered”.  By explicitly stating “My program uses logic to determine…”, one can take the guesswork out of 
	     awarding points for the grader.
	
	     This example does a nice job of explaining how both procedures do their work independently, but then also connects what they do in the 
	     conclusion.</p>
	
	</div>
	 
	<h3>Row 7: Applying Abstraction (Response 2D)</h3>
	<div class="yui-wk-div">
	<h4>Student Response</h4>
	     <p><img src="../_static/assets/img/CreateSample12D.png" class="yui-img" title="" alt="">
	     </p>
	
	     <p>2d. One abstraction I developed to manage the complexity of my code was the procedure loadUserEntryData. loadUserEntryData helps populate a 
	         list of user’s entries and is called multiple times throughout the program using different (albeit only slightly) parameters. Implementing this 
	         abstraction improves the readability of the code by reducing redundancy and the overall line count. Instead of repeating the nine lines of code 
	         in every place, I would only need to call the procedure loadUserEntryData. In addition, this abstraction manages complexity as any future 
	         changes that need to be made to loading user entry data can be done in a single place. Overall, this abstraction was a helpful in managing 
	         redundancy, length of code, editability, and overall complexity.</p><table>
	<tbody>
	     <tr>
	      
		
	     </tr>
	     
	     <tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>Selected code segment is a student-developed abstraction.</p>
			<p><i>Indicated by placing a rectangle around the specific piece of code in the entire program code section.</i></p> 
	         <p><i>If using the template, a screenshot is provided directly with the response.</i></p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>By the definition of abstraction, the selected code segment <i>does</i> implement an abstraction. The abstraction pictured here is a 
	             student-developed procedure called loadUserEntryData. </p>
			<p>The written response matches the selected code.</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>The abstraction chosen is a procedure.  This is one of the easiest types of abstractions to develop and explain. </p>
	
	</div>
	
	<h3>Row 8: Applying Abstraction (Response 2D)</h3>
	<div class="yui-wk-div">
	<h4>Student Response</h4><p>2d. One abstraction I developed to manage the complexity of my code was the procedure loadUserEntryData. loadUserEntryData helps populate a 
	         list of user’s entries and is called multiple times throughout the program using different (albeit only slightly) parameters. Implementing this 
	         abstraction improves the readability of the code by reducing redundancy and the overall line count. Instead of repeating the nine lines of code 
	         in every place, I would only need to call the procedure loadUserEntryData. In addition, this abstraction manages complexity as any future 
	         changes that need to be made to loading user entry data can be done in a single place. Overall, this abstraction was a helpful in managing 
	         redundancy, length of code, editability, and overall complexity.</p><table>
	<tbody>
	     <tr>
	       
		
	       
	     </tr>
	     
	     <tr>
		<th>Requirements</th>
		<th>Score</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>
			<p>Explains how the selected abstraction manages the complexity of the program. </p>
		</td>
		<td>
			<p>1</p>
		</td>
		<td>
			<p>The response indicates that the abstraction (procedure loadEntryData) “manages complexity as any future changes that need to be made to 
	             loading user entry data can be done in a single place. Overall, this abstraction was helpful in managing redundancy, length of code, edit 
	             ability, and overall complexity.”</p>
		</td>
	</tr>
	</tbody></table>
	<h4>Additional Explanation</h4>
	<p>This response is very well written.  It hits on several examples that would earn the point for the scoring criteria. One simple example is 
	     “Instead of repeating the nine lines of code in every place, I would only need to call the procedure loadUserEntryData.”</p>
	
	</div>
	     
	</div> <!-- accordion 6 -->
	

