.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Analyzing Algorithms
====================

.. raw:: html

        <div class="MCSP-lesson-content">
    <script>
      $(document).ready(function() {
        generateSummary(EKmapping['5.07']);
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
        "efficiency" : "how well an algorithm uses time and memory/space resources, CPU and RAM.",
        "more efficient" : "this usually means it runs faster or uses less space.",
        "linear or sequential search" : "a search algorithm that checks ever element in a list from the start to the end of the list to find an item.",
        "binary search" : "a search algorithm that repeatedly divides a sorted list to narrow in on the searched-for item",
        "sorting algorithm" : "an algorithm that puts a list into alphabetic or numeric order."
        
       };       */
    
    </script>
    <!-- can use: #self-check, #still-curious, .pogil, #portfolio -->
    <h3 id="est-length">Time Estimate: 90 minutes</h3>
    

Introduction and Goals
-----------------------

.. raw:: html

    <p>
    <table><tbody>
	<tr><td colspan=2>
		<p><i>Searching and Sorting Experiments.</i></b>In this lesson we are going to use an App Inventor app to analyze the algorithms we have been studying. You will be running two different apps, one to test the search algorithms and one to test the sorting algorithms.</p>
		<p>This activity will resemble that of a scientific investigation.  You'll run the apps repeatedly on different lists of data, record the running times of the algorithms, tabulate and graph your data, and then analyze the results.  Can you figure out from the results, which algorithm is which?</p>
		<p>Another way to look at this activity is as <i>quality assurance (QA)</i>.  Many careers in the computing field start with assignments in QA.  This is where you help software developers test and debug their apps. 
		</td>
	</tr>
    <tr>
		<td valign="top"><iframe allowfullscreen="" frameborder="0" height="340" src="https://www.youtube.com/embed/t9PVjJDXWTk" width="250"></iframe>
		(<a href="http://www.teachertube.com/video/359065" target="_blank">Teacher Tube version</a>)
		</td>
		<td valign="top">
			<div><b>Learning Objectives:</b>&nbspI will learn to</div>
			<ul>
			<li>conduct an empirical (experimental) investigation of basic search and sort algorithms</li>
			<li>determine the <span class="hover vocab yui-wk-div" data-id='efficiency'>efficiency</span> for basic search and sort algorithms depending on input size</li>
			<li>deepen my understanding of search and sort algorithms</li>
			</ul>
			<div><b>Language Objectives:</b>&nbspI will be able to</div>
			<ul>
			<li>represent data in a graph then analyze and make conclusions about the algorithms being run based on my data</li>
			<li>use target vocabulary, such as <span class="hover vocab yui-wk-div" data-id=efficiency>efficiency</span> and <span class="hover vocab yui-wk-div" data-id="instance of a problem">instance of a problem</span> while experimenting with search and sort algorithms with the support of concept definitions and <a href="https://docs.google.com/presentation/d/1-IY5fs_ygKlgwUGBD9nX_tx_tFerN7pEeQvdgQIwrdw/copy" target="_blank" title="">vocabulary notes</a> from this lesson</li>
			</ul>	
		</td>
	</tr>
    </tbody></table>
    

Learning Activities
--------------------

.. raw:: html

    <ul align="center" style="list-style: none; margin: 0; padding: 0; background: lightgrey">
	<li style="display: inline"><a href="https://docs.google.com/presentation/d/1AT_6rYL4T-n0j39eSWxVpteGa1d59SUoXjt_iIlDqc0/" target="_blank" title="">Slides Part 1</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://docs.google.com/presentation/d/11zhzSU677gmWQdiSYCajgtRUuAUgizcOLTBHbeyvR4E" target="_blank">Slides Part 2</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://youtu.be/Omh4VtutCdQ" target="_blank">YouTube Video Analyzing Search</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://youtu.be/YmCzraw7IcA" target="_blank" title="">YouTube Video Analyzing Sort</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://docs.google.com/spreadsheets/d/1HR0hn2x8Lpc-KJRBJ_pE_auOYx-q2Ifi6YTplonijY4/copy" target="_blank" title="">Analysis Spreadsheet</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://drive.google.com/file/d/0B5ZVxaK8f0u9NjNuaTZ5S0Z4OUE/view?usp=sharing&resourcekey=0-dS_emJBX6wRgqg1pQ-y2TA" target="_blank" title="">Graph Paper</a></li>
	
	</ul> 
	
	<p><h3>Analyzing Search Algorithms</h3>
    
    Watch the following presentation on analyzing search algorithms to learn how to determine how fast linear search and <span class="hover vocab yui-wk-div" data-id='binary search'>binary search</span> are.
    <br/>
    
.. youtube:: Omh4VtutCdQ
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <h3>Search Experiment</h3>
    <table><tbody>
    <tr>
    <td valign="top">
    <img src="../_static/assets/img/searchappscreen.png" width="750"/>
    </td>
    <td>
    <b><i>Empirical Search Analysis.</i></b>
    
    In this activity you are going to use an App Inventor app to experiment with and analyze the binary and sequential search algorithms.  
    
    <ol>
    <li style="margin-bottom: 5px;">Create a portfolio page named <i>Search Experiment</i>.
    </li>
    <li style="margin-bottom: 5px;">On an Android device, use the AI Companion app to scan and install
    the
      <!-- &lt;a target=&quot;_blank&quot; href=&quot;https://drive.google.com/open?id=0B86iRIPU8oQlZnZXdG5ycDdpU2M&quot; title=&quot;&quot;&gt;Search Experiment app (APK)&lt;/a&gt;
    -->
    <a href="https://mobile-csp.org/SearchExperiment.apk" target="_blank" title="">Search Experiment app (APK)</a>
    from the QR code.
    <br/>
    <img align="right" alt="" src="../_static/assets/img/SearchAppQR.png" style="width: 200px; height: 200px;" title=""/>
    <br/>
    If you are using the emulator or an iOS device, you can download the <a href="../_static/assets/img/SearchExperiment.aia" target="_blank" title="">aia file</a> and import it into App Inventor and then Connect.
     <p> <font color="red">NOTE: When you run this app it may initially display a blank screen while it is initializing
        some data.  This may take a minute. Please wait.</font>
    </p></li>
	</ol>
	</td></tr>
	<tr><td colspan=2>
    <ol start="3">
	<li style="margin-bottom: 5px;">You will be performing a <b>worst case</b> analysis of the algorithms.  Whenever
    you press the search button, the app will search for a number that is <i>not</i> in the
    list.
    </li>
    <li style="margin-bottom: 5px;">Test each search algorithm on lists of size 1000, 2000, ..., 10,000 numbers. 
    <b>NOTE: </b> Because these algorithms involve loops, you may see an ANR
    (App Not Responding) popup informing you that the app is not responding and
    giving you the option to "wait" or stop the app.  Choose "wait". It takes awhile to generate all the numbers.
    </li>
    <li style="margin-bottom: 5px;"> Use  this <a href="https://docs.google.com/spreadsheets/d/1HR0hn2x8Lpc-KJRBJ_pE_auOYx-q2Ifi6YTplonijY4/copy" target="_blank">spreadsheet</a>  to enter the data and graph your results or <a href="https://drive.google.com/file/d/0B5ZVxaK8f0u9NjNuaTZ5S0Z4OUE/view?usp=sharing&resourcekey=0-dS_emJBX6wRgqg1pQ-y2TA" target="_blank">empty graph paper</a>.  Put the data results and your graph in your portfolio.
    </li>
    <li>Analyze your results to determine which algorithm is which. Which is the
    <i>binary</i> and which is the <i>sequential</i> search?  Provide a clear
    description, referring to your graph and your tabulated data, to explain how 
    you arrived at your conclusion.
    </li>
    </ol>
    <p></p>
    </td>
    </tr>
    </tbody></table>
    <h3>Analyzing Sort Algorithms</h3>
    
    Watch the following presentation on analyzing sort algorithms to learn how  fast bubble sort, merge sort, and bucket sort are.
    (<a href="https://docs.google.com/presentation/d/11zhzSU677gmWQdiSYCajgtRUuAUgizcOLTBHbeyvR4E" target="_blank" title="">slides</a>)
    <br/>
    
.. youtube:: YmCzraw7IcA
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <h3>Sort Experiment</h3>
    <table><tbody>
    <tr>
    <td valign="top">
    <img src="../_static/assets/img/sortappscreen.png" width="700"/>
    </td>
    <td>
    <b><i>Empirical Sort Analysis.</i></b>
    
    In this activity you are going to use an App Inventor app to experiment with and
    analyze the bubble, merge, and bucket sort algorithms.  
    
    <ol>
    <li style="margin-bottom: 5px;">Create a portfolio page named <i>Sort Experiment</i>.
    </li>
    <li style="margin-bottom: 5px;">Use the Barcode Scanner app -- you can download it from the Play Store
    if you don't have it -- to download the 
    <a href="https://mobile-csp.org/SortExperiment.apk" target="_blank">
    SortExperiment app (APK)</a>
    from the QR code.
    <br/>
    <img align="right" alt="" src="../_static/assets/img/SortAppQR.png" style="width: 200px; height: 200px;" title=""/>
    If you are using the emulator or an iOS device, you can download the <a href="../_static/assets/img/SortExperiment.aia" target="_blank">aia file</a> and import it into App Inventor.
    </li>
	</ol>
	</tr></tr>
	<tr><td colspan="2">
    <ol start="3">
	<li style="margin-bottom: 5px;">Test each sort algorithm on lists of size 10, 20, ..., 100 numbers. These are called <b>instances of the problem</b>. An <span class="hover vocab yui-wk-div" data-id='instance of a problem'>instance of a problem</span> also includes specific input. For example, sorting is a problem, sorting the list (2,3,1,7) is an instance of the problem.
    <br/>
    <b>NOTE: </b> Because these algorithms involve loops, you may see an ANR
    (App Not Responding) popup informing you that the app is not responding and
    giving you the option to "wait" or stop the app.  Choose "wait". It takes a while to generate all the numbers. 
    </li>
    <li style="margin-bottom: 5px;"> Use  this <a href="https://docs.google.com/spreadsheets/d/1HR0hn2x8Lpc-KJRBJ_pE_auOYx-q2Ifi6YTplonijY4/copy" target="_blank">spreadsheet</a>  to enter the data and graph your results or use <a href="https://drive.google.com/file/d/0B5ZVxaK8f0u9NjNuaTZ5S0Z4OUE/edit?usp=sharing" target="_blank">empty graph paper</a>.  Put the data results and your graph in your portfolio.
    </li>
    <li>Analyze your results to determine which algorithm is which. Which is the
    <i>bubble</i>, and which is the <i>merge</i>, and which is the
    <i>bucket</i> sort? Provide a clear
    description, referring to your graph and your tabulated data, to explain how 
    you arrived at your conclusion.
    </li>
    </ol>
    <p></p>
    </td>
    </tr>
    </tbody></table>
    

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

    <p>Here is a table of some of the technical terms discussed in this lesson. Hover over the terms to review the definitions.
    <table>
    <tbody>
    <tr>
    <td>
    <span class="hover vocab yui-wk-div" data-id="efficiency">efficiency</span>
    <br/>
    <span class="hover vocab yui-wk-div" data-id="more efficient">more efficient</span>
    <br/>
    <span class="hover vocab yui-wk-div" data-id="instance of a problem">instance of a problem</span>
    <br/>
    </td>
    <td>
    <span class="hover vocab yui-wk-div" data-id="linear or sequential search">linear or sequential search</span>
    <br/>
    <span class="hover vocab yui-wk-div" data-id="binary search">binary search</span>
    <br/>
    <span class="hover vocab yui-wk-div" data-id="sorting algorithm">sorting algorithm</span>
    <br/>
    </td>
    </tr>
    </tbody>
    </table>
	<br/>
    
.. fillintheblank:: mcsp-5-7-1

    According to the following table, how many lookups would be required in the worst case to find a number in list of 10000 elements using linear search? Type your answer in the text box. 

    .. raw:: html

        <img class="yui-img" src="../_static/assets/img/searchlookups.png"/> |blank|

    - :10000: That's right! Linear search would require 10000 lookups in the worst case because it would have to search through each element in the list.
      :x: Linear search would require 10000 lookups in the worst case because it would have to search through each element in the list.


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. fillintheblank:: mcsp-5-7-2
    :casei:

    According to the following table, how many lookups would be required in the worst case to find a number in a sorted list of 10000 elements using binary search? Type your answer in the text box. 

    .. raw:: html

        <img class="yui-img selected" src="../_static/assets/img/searchlookups.png"/> |blank|

    - :14: That's right! Binary search would require 14 lookups in the worst case because a sorted list of 10000 elements could be divided in half at most 14 times.
      :x: Binary search would require 14 lookups in the worst case because a sorted list of 10000 elements could be divided in half at most 14 times.


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

 
.. mchoice:: mcsp-5-7-3
    :random:
    :practice: T
    :answer_a: 2
    :feedback_a: No, try again. Pretend you are trying to guess a number from 1-15 using binary search. Always guess the middle element and see if it is higher or lower than your correct number 14. See how many times you need to guess.&nbsp;
    :answer_b: 3
    :feedback_b: Yes, the first time through the loop, 14 is compared with the middle element 8 and is higher, so you narrow down to items 9-15. Then, 14 is compared with 12, the middle element of the 9-15 range, and you narrow down to 13-15. Then, 14 is compared to 14 and you find the element in 3 iterations.&nbsp;
    :answer_c: 4
    :feedback_c: This is the worst case runtime if the item was the last one you checked or was not on the list, but we can find the number 14 quicker. Pretend you are trying to guess a number from 1-15 using binary search. Always guess the middle element and see if it is higher or lower than your correct number 14. See how many times you need to guess.&nbsp;
    :answer_d: 14
    :feedback_d: This would be true if you were using linear search, but you are using binary search here and can find 14 quicker!
    :correct: b

    If you were using binary search to find the number 14 in the following list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], how many iterations would be required to find 14 in the list?


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


.. fillintheblank:: mcsp-5-7-4

    For a list of 500 numbers, at most how many iterations would the loop in binary search run to find a number? For example, if this was a guessing game, at most how many guesses would it take using binary search to guess a secret number from 1-500, if after each guess you were told whether your guess was too high or too low or just right? Type your answer into the text box.  |blank|

    - :9: That's right! It would take at most 9 guesses because 2^9 equals 512, which is greater than 500. So you can divide the range 1 to 500 in half at most 9 times before running out of numbers.
      :x: 500 numbers would take at most 9 guesses.  That's because you can divide that range of numbers 9 times before getting down to 1 number.  For example, if we use whole number division and round up, we would get: 250, 125, 63, 32, 16, 8, 4, 2, 1.


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-5-7-5
    :random:
    :practice: T
    :answer_a: Sequential search
    :feedback_a: If it were easy, you wouldn’t be learning anything!
    :answer_b: Binary search
    :feedback_b: That's right! Binary search behaves like the logarithm function. That is, as the number of elements to be search grows bigger, the number of lookups required to find an element grows too, but grows very slowly. That is what makes binary search a very efficient algorithm. 
    :correct: b

    The function shown in this graph is known as the base-2 logarithm function, y = log2(x). Which search algorithm behaves like this function? 

    .. raw:: html

        <img class="yui-img" src="../_static/assets/img/logcurve.png"/>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-5-7-6
    :random:
    :practice: T
    :answer_a: how many comparisons are needed to sort the values. 
    :feedback_a: This is challenging, but rewarding! Remember that not all sorting algorithms involve comparisons of values.  For example, in bucket sort it is not necessary to compare items to each other in order to sort a list.  A nice analogy for bucket sort is the task of sorting laundry.  When you come to a T-shirt in the unsorted pile, you don't need to compare it to other items in the unsorted pile in order to place it into T-shirt pile. 
    :answer_b: whether the algorithm correctly arranges the values in order. 
    :feedback_b: This is challenging, but rewarding! Not all algorithms involve arranging values in order, for example, the bucket sort does not involve comparing or swapping to put values in order.
    :answer_c: whether or not the algorithm contains a bug. 
    :feedback_c: This is challenging, but rewarding! The efficiency of an algorithm does not focus on whether the algorithm contains a bug. 
    :answer_d: how long it takes to arrange the values in order. 
    :feedback_d: That's right! Efficiency in terms of sorting means how long the algorithm takes. Remember that not all sorting algorithms involve comparisons of values. And not all sort algorithms involve swapping values. Although bubble sort involves both comparing and swapping elements, bucket sort is an algorithm that involves neither comparing nor swapping.  A nice analogy for bucket sort is the task of sorting laundry.  When you come to a T-shirt in the unsorted pile, you don't need to compare it to other items in the unsorted pile in order to place it into T-shirt pile. 
    :answer_e: how many swaps are needed to sort the values. 
    :feedback_e: This is challenging, but rewarding! Not all sort algorithms involve swapping values.  For example, bubble sort does involve swapping values but the merge sort that we studied does not involve swapping. 
    :correct: d

    In talking about sorting algorithms in general, a sort algorithm's efficiency refers to ______________________. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-5-7-7
    :random:
    :practice: T
    :answer_a: for any size list, bucket sort will always be faster than bubble sort. 
    :feedback_a: Try asking a classmate for advice—s/he may be able to explain/suggest some ideas or recommend some strategies. 
    :answer_b: as the size of the list grows, bucket sort will be faster than bubble sort. 
    :feedback_b: That's right! Bucket sort is the more efficient algorithm in the sense that as the size of the list grows, the time it takes to sort the values will not increase as fast as for bubble sort. Bubble sort may actually be faster for very small list. Remember the number of comparisons and swaps cannot be used here because bucket sort does not compare values in the way the bubble sort does. 
    :answer_c: bucket sort requires fewer comparisons than bubble sort. 
    :feedback_c: Try asking a classmate for advice—s/he may be able to explain/suggest some ideas or recommend some strategies. 
    :answer_d: bucket sort requires fewer swaps than bubble sort. 
    :feedback_d: Try asking a classmate for advice—s/he may be able to explain/suggest some ideas or recommend some strategies. 
    :correct: b

    To say that bucket sort is more efficient than bubble sort means that _________________. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-5-7-8
    :random:
    :practice: T
    :answer_a: A comparison-based algorithm. 
    :feedback_a: True. Bubble sort is a comparison-based sorting algorithm, meaning that it is based on comparing pairs of values.
    :answer_b: Useful only for sorting numbers. 
    :feedback_b: Of course it’s tough – school is here to makes our brains stronger! A bubble sort can also be used to sort items other than numbers, including cards and money.
    :answer_c: An N<sup>2</sup> algorithm. 
    :feedback_c: True. Bubble sort is a quadratic algorithm, which means that the amount of time it takes to sort a data set grows like a quadratic (x2) curve as the number of items to be sorted grows. 
    :answer_d: More efficient than bucket sort. 
    :feedback_d: Of course it’s tough – school is here to makes our brains stronger! This isn't always true. Depending on the number of items being sorted, the bucket sort may actually be faster.
    :answer_e: Widely used to sort large data sets. 
    :feedback_e: Of course it’s tough – school is here to makes our brains stronger! For sorting large data sets, a bucket sort is faster and therefore more widely used for sorting large data sets.
    :correct: a,c

    Which of the following characteristics is true of bubble sort? Choose all that apply. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-5-7-9
    :random:
    :practice: T
    :answer_a: A comparison-based algorithm. 
    :feedback_a: This will be a challenging concept to learn, but we can all reach this goal. A bucket sort  is not a comparison-based sorting algorithm because it does not compare pairs of values. A nice analogy for bucket sort is the task of sorting laundry.  When you pick up a T-shirt from the unsorted pile, you don't need to compare it with other items from the unsorted pile in order to place it into the T-shirt pile. 
    :answer_b: Useful only for sorting numbers. 
    :feedback_b: This will be a challenging concept to learn, but we can all reach this goal. A bucket sort can be used to sort many items, including laundry and groceries.
    :answer_c: An N<sup>2</sup> algorithm. 
    :feedback_c: This will be a challenging concept to learn, but we can all reach this goal. The bucket sort is not a quadratic algorithm. The time it takes to do a bucket sort does not grow like a quadratic (x2) curve as the number of items to be sorted grows. 
    :answer_d: More efficient than bubble sort. 
    :feedback_d: True. Most often, unless you are sorting a really small set of items, a bucket sort is more efficient than a bubble sort.
    :answer_e: A linear algorithm 
    :feedback_e: True. Bucket sort is a linear algorithm, which means that the amount of time it takes to sort a data set grows like a linear (x) curve as the number of items to be sorted grows. 
    :correct: d,e

    Which of the following characteristics is true of bucket sort? Choose all that apply. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    

Sample AP CSP Exam Question
----------------------------

.. raw:: html

    <p>
    
.. mchoice:: mcsp-5-7-10
    :random:
    :practice: T
    :answer_a:  Algorithm A always calculates the correct average, but Algorithm B does not.
    :feedback_a: 
    :answer_b:  Algorithm B always calculates the correct average, but Algorithm A does not.
    :feedback_b: 
    :answer_c:  Both Algorithm A and Algorithm B always calculate the correct average.
    :feedback_c: 
    :answer_d:  Neither Algorithm A nor Algorithm B calculates the correct average.
    :feedback_d: 
    :correct: c

    There are 32 students standing in a classroom. Two different algorithms are given for findingthe average height of the students.
    
    .. raw:: html
    	
    	<b>Algorithm A</b><br />
    	Step 1: All students stand.<br />
    	Step 2: A randomly selected student writes his or her height on a card and is seated. <br />
    	Step 3: A randomly selected standing student adds his or her height to the value on the card,records the new value on the card, and is seated. The previous value on the card is erased.<br />
    	Step 4: Repeat step 3 until no students remain standing.<br />
    	Step 5: The sum on the card is divided by 32. The result is given to the teacher.<br /><br />
    	<b>Algorithm B</b><br />
    	Step 1: All students stand.<br />
    	Step 2: Each student is given a card. Each student writes his or her height on the card.<br />
    	Step 3: Standing students form random pairs at the same time. Each pair adds the numberswritten on their cards and writes the result on one student’s card; the other student isseated. The previous value on the card is erased.<br />
    	Step 4: Repeat step 3 until one student remains standing.<br />
    	Step 5: The sum on the last student’s card is divided by 32. The result is given to the teacher.<br /><br />
    	Which of the following statements is true?


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    

Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1AwZHOhQ4--5aibVoTJSiD0FXdroJ26Admf0vCQeXyGM/copy" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vQVaF_H0cJHCZuTg3lju5swgdcxrnGV7-1GW07wr2uLRxAzdp0gvfaQ0DHBqa1JPQ9U1GJtqs8yBsa3/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    <!--&lt;p&gt;Create a page named &lt;i&gt;&lt;b&gt;Analyzing Algorithms&lt;/b&gt;&lt;/i&gt; under the &lt;i&gt;Reflections&lt;/i&gt; 
      category of your portfolio and answer the following questions:&lt;/p&gt;
    
    &lt;ol&gt;
       &lt;li&gt;
         Present the results and the analysis you did for each of the experiments in this lesson, 
         -- i.e., the table of running times you observed, the graphs you created, and the conclusions 
         you reached regarding the searching algorithms and sorting algorithms. Provide a clear description, 
         referring to your graphs and your tabulated data, to explain how you arrived at your conclusions.
      &lt;/li&gt;
         
         &lt;!--  RM: DELETED, College Board will not require this kind of analysis. 
         Consider the following App Inventor block, which implements an algorithm to
    find the largest factor of &lt;i&gt;N&lt;/i&gt;. A factor of N would be a number that evenly divides
    N.  For example, the largest factor of 22 would be 11 and the largest factor of 100 would
    be 50.  The largest factor of 17 would be 1 because 17 is a prime number -- i.e., only 
    divisible by 1. 
    
    &lt;br&gt;Analyze this algorithm&#39;s run time efficiency.  Is it &lt;i&gt;logarithmic&lt;/i&gt;, &lt;i&gt;linear&lt;/i&gt;, &lt;i&gt;N log N&lt;/i&gt;, or &lt;i&gt;quadratic&lt;/i&gt;? 
    &lt;br&gt;
    &lt;img src=&quot;assets/img/LargestFactorAlgorithm.png&quot; width=&quot;400&quot;&gt;
    &lt;/li&gt;
      &lt;li&gt;Examine the 
    &lt;a href=&quot;http://www.sorting-algorithms.com/quick-sort&quot; target=&quot;_blank&quot;&gt;
    Quick Sort visualization&lt;/a&gt;. Do you think quick sort has a similar efficiency to 
    bubble, merge, or bucket sort? Why? Which of the scenarios presented 
    (random, nearly sorted, reversed, few unique) is closest to a worst 
    case scenario for merege sort?
    &lt;/li&gt;
    
    &lt;/ol&gt;-->
    </div>
    </div>