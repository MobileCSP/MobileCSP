.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>
    <style>    td { text-align: left; padding: 5px;}</style>


Binary Numbers
======================

.. raw:: html

        <div class="MCSP-lesson-content">
    <script>
      $(document).ready(function() {
        generateSummary(EKmapping['2.09']);
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
        "binary sequence":"A binary sequence is a sequence of 0s and 1s.",
        "bit":"A bit is a single binary digit, either 0 or 1. It is the smallest unit of data in a computer.",
        "binary number system":"The binary number system is a number system in which all numbers are represented in terms of the 2 binary digits, 0 and 1.",
        "base":"The base of a number system refers to the number of distinct digits or symbols used to represent numbers in that system. Our decimal system is base-10 because it uses 10 digits, 0 through 9.", 
        "positional number system":"In a positional number system, such as our decimal system, the value of a digit in a number depends on its place.  For example, in the decimal number 545, the leftmost '5' represents 500 because it occurs in the hundreds place, but the rightmost '5' represents 5 because it occurs in the ones place.",
        "octal number system":"The octal number system is a base-8 system, consisting of the symbols 0 through 7.",
        "decimal number system":"The decimal number system is a base-10 system that we use every day, consisting of the symbols 0 through 9.",
        "hexadecimal number system":"The hexadecimal number system is a base-16 system, consisting of the 16 symbols 0 through 9 and A through F.",
      };      */
    </script>
    <h3 id="est-length">Time Estimate: 90 minutes</h3>
    

Introduction and Goals
-----------------------

.. raw:: html

    <p>
	<p>Binary numbers are used to represent all computer data. That is, everything is in 0s and 1s. In this lesson, we'll explore the <span class="hover vocab yui-wk-div" data-id='binary number system'>binary number system</span> and learn how to count in binary.
	</p>
       <div><b>Learning Objectives:</b>&nbspI will learn to</div>
       <ul>
          <li>explain how data can be represented in <span class="hover vocab yui-wk-div" data-id='bit'>bits</span></li>
          <li>explain the consequences of using <span class="hover vocab yui-wk-div" data-id='bit'>bits</span> to store data</li>
          <li>calculate the <span class="hover vocab yui-wk-div" data-id='binary number system'>binary</span> (<span class="hover vocab yui-wk-div" data-id='base'>base</span> 2) equivalent of a positive integer (<span class="hover vocab yui-wk-div" data-id='base'>base</span> 10) and vice versa</li>
          <li>compare and order <span class="hover vocab yui-wk-div" data-id='binary number system'>binary</span> numbers</li>
       </ul>
       <div><b>Language Objectives:</b>&nbspI will be able to</div>
       <ul>
          <li>describe the reasons why computers use the <span class="hover vocab yui-wk-div" data-id='binary number system'>binary number system</span> using target vocabulary, supporting details and examples</li>
          <li>explain the steps for converting between the decimal and <span class="hover vocab yui-wk-div" data-id='binary number system'>binary number systems</span> using key vocabulary such as <span class="hover vocab yui-wk-div" data-id='binary number system'>binary</span>, and <span class="hover vocab yui-wk-div" data-id='positional number system'>positional number system</span> out loud and in writing, with the support of <a href="https://docs.google.com/presentation/d/1n-K4AQ_maHcXekzcfERQ9dxj91nqv9ytwJx4ZkAp8zw/copy" target="_blank" title="">vocabulary notes</a> from this lesson</li>
       </ul>
    </p>
    
Learning Activities
--------------------

.. raw:: html

    <h3><font color="blue">There are only 10 types of people in the world. Those who understand binary and those who don't!</font><img align="right" src="../_static/assets/img/smiley.jpg" width="32"/></h3>
	
	<ul align="center" style="list-style: none; margin: 0; padding: 0; background: lightgrey">
	<li style="display: inline"><a href="https://docs.google.com/presentation/d/1LUi8jpatprooXl5QVUhB3JHwAn7v5WOlzGmdrtm9Z0A" target="_blank" title="">slides</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://www.youtube.com/watch?v=3PULJnSP74Y" target="_blank">YouTube video Part 1</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="http://www.teachertube.com/video/binaryintrol-348081" target="_blank" title="">TeacherTube video Part 1</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://www.youtube.com/watch?v=jfExJPwdg7k" target="_blank">YouTube video Part 2</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="http://www.teachertube.com/video/binarytodecimal-348082" target="_blank" title="">TeacherTube video Part 2</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://www.youtube.com/watch?v=cSCWnI7JMSU" target="_blank">YouTube video Part 3</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="http://www.teachertube.com/video/decimaltobinary-348085" target="_blank" title="">TeacherTube video Part 3</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://docs.google.com/document/d/1okQhwTYVLcXN13QioAH71VUhw5e88vxYZ4sVXvSPANY/edit?usp=sharing" target="_blank" title="">Binary Dot Cards</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://docs.google.com/document/d/10aNql-sT9f8-mKXAEBwA6vhpseB6WIzskWYFiRQYXy0/copy" target="_blank" title="">worksheet</a></li>
	
	</ul>
	
    <h3>Lecture</h3>
.. youtube:: 3PULJnSP74Y
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    <div>(<a href="http://www.teachertube.com/video/binaryintrol-348081" target="_blank">Teacher Tube version</a>)</div>
	
	<p><h3>Video: Counting in Binary</h3>
    <p>Do you get the joke at the beginning this lesson?  If not, you'll certainly get it
    after watching this video from the <a href="http://csunplugged.org/" target="_blank">Computer Science 
    Unplugged</a>, which illustrates how the <span class="hover vocab yui-wk-div" data-id='binary number system'>binary number system</span> works. </p>
    
.. youtube:: b6vHZ95XDwU
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <h3>Activities: Decimal and Binary Odometers</h3> 
    
    Your teacher may choose to have you do some or all of the activities below:
    <ol>
    <li> Your class can act out the video above by printing and using the following <a href="https://docs.google.com/document/d/1okQhwTYVLcXN13QioAH71VUhw5e88vxYZ4sVXvSPANY/edit?usp=sharing" target="_blank">Binary Dot Cards</a>. Have 5 students volunteer to hold the 5 cards at the front of the class. Have them flip the cards randomly and see if the class can figure out the <span class="hover vocab yui-wk-div" data-id='binary number system'>binary</span> and the corresponding decimal number they make by counting the dots. See if the 5 volunteers can count up from 0 to 11111.   What's the largest number that you can make with the 5 <span class="hover vocab yui-wk-div" data-id='binary number system'>binary</span> digits? You may want to return to this activity when you get to the converting <span class="hover vocab yui-wk-div" data-id='binary number system'>binary</span> to decimal and converting decimal to <span class="hover vocab yui-wk-div" data-id='binary number system'>binary</span> sections below.</li>
    <li>As you saw in the video, the children together were simulating a <b>binary odometer</b> to count in <span class="hover vocab yui-wk-div" data-id='base'>base</span> 2. Humans  use the <b>decimal</b> number system, counting in <span class="hover vocab yui-wk-div" data-id='base'>base</span> 10, probably because we have 10 fingers, but computer circuits only have 2 states, on and off, and so use the binary (<span class="hover vocab yui-wk-div" data-id='base'>base</span> 2) number system. A binary odometer is similar to a decimal (<span class="hover vocab yui-wk-div" data-id='base'>base</span> 10) odometer, like the one we have in our
    cars, except it only has two digits.  And the rightmost digit is the <b>1s</b> place.  The
    digit to its left is the <b>2s</b> place and then comes the <b>4s</b> place and so on.   
    
    <p>To try this yourself, use a piece of paper or the first table in this <a href="https://docs.google.com/document/d/10aNql-sT9f8-mKXAEBwA6vhpseB6WIzskWYFiRQYXy0/copy" target="_blank">binary/decimal worksheet</a> and the odometer approach to write out the values of the first 16 binary numbers. Remember you can only use 0's and 1's. <b>HINT: </b>  You'll need 4 digits (<span class="hover vocab yui-wk-div" data-id='bit'>bits</span>) to represent the numbers 0 through 15 in binary, so write the value 0 as  0000.  If you get stuck or to check your answer, use this binary odometer app for
    help or to check your answer:<br/>   
    <iframe height="250" instanceid="wGiqDDS5kGEU" src="https://mobile-csp.org/webapps/numbers/binaryodometer.html" title="" width="650"></iframe></p>
    </li>
    </ol>
    
    <p>
    
.. mchoice:: mcsp-2-9-1
    :random:
    :practice: T
    :answer_a: 5
    :feedback_a: This will be a challenging concept to learn, but we can all reach this goal. The number 8 in binary is represented as 1000.  Additional numbers can be represented by turning some of the 0s into 1s.  For example, the number 9 would be represented as 1001. 
    :answer_b: 12
    :feedback_b: This will be a challenging concept to learn, but we can all reach this goal. The number 12 in binary is represented as 1100.  Additional numbers can be represented by turning some of the 0s into 1s.  For example, the number 13 would be represented as 1101.
    :answer_c: 15
    :feedback_c: Yes. The largest number that can be represented in 4 bits would be 1111, which is 1 + 2 + 4 + 8, which equals 15. 
    :answer_d: 16
    :feedback_d: This will be a challenging concept to learn, but we can all reach this goal. To represent 16 in binary, you would need 5 bits.  It's representation is 10000.  
    :correct: c

    What's the largest number that can be represented in 4 bits?  


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-2-9-2
    :random:
    :practice: T
    :answer_a: Trying to represent 15 in 4 bits. 
    :feedback_a: This is challenging, but rewarding! This would not cause an overflow.  15 is represented as 1111 in 4 bits. 
    :answer_b: Trying to represent 16 in 4 bits.
    :feedback_b: Yes.  The largest number that can be represented in 4 bits is 15, which is 1111.  To represent 16 you would need an additional <span class="hover vocab yui-wk-div" data-id='bit'>bit</span>, 1 0000.
    :answer_c: Trying to represent 31 in 5 bits. 
    :feedback_c: This is challenging, but rewarding! This would not cause an overflow.  31 is represented as 1 1111 in 5 bits. 
    :answer_d: Trying to represent 32 in 5 bits 
    :feedback_d: Yes.  The largest number that can be represented in 5 bits is 31, which is 1 1111.  To represent 32 you would need a 6th <span class="hover vocab yui-wk-div" data-id='bit'>bit</span>,  10 0000.
    :correct: b,d

    An overflow error occurs when there aren't enough bits to represent a given number.  
    Which of following would cause an overflow error to occur. (Choose all that apply.)


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-2-9-3
    :random:
    :practice: T
    :answer_a: True.
    :feedback_a: Yes, to think of a simple example, if you were using 4 bits to represent numbers you wouldn't be able to represent the number 17, so you wouldn't be able to add 17 + 8.   Modern computers use 32 or 64 bits to represent whole numbers, which are called <i>integers</i>.  With 32 bits, you can represent 2<sup>32</sup> different values. That's 4,294,967,296, more than 4 billion values.  But, of course, there are still numbers that would cause overflow errors -- e.g., 4,300,000,000 could not be represented using 32 bits.  This potential for <span class="hover vocab yui-wk-div" data-id='overflow error'>overflow error</span> is a necessary implication of using a <i><b>finite</b></i> representation to model the <i><b>infinite</b></i> concept of number. 
    :answer_b: False
    :feedback_b: This is challenging, but rewarding! Using a fixed number of bits to represent numbers does limit the range of problems you can solve.  For example, if you were using 4 bits to represent numbers you wouldn't be able to represent the number 17, so you wouldn't be able to add 17 + 8.  Modern computers use 32 or 64 bits to represent whole numbers, which are called <i>integers</i>.  With 32 bits, you can represent 2<sup>32</sup> different values. That's 4,294,967,296, more than 4 billion values.  But, of course, there are still numbers that would cause overflow errors -- e.g., 4,300,000,000 could not be represented using 32 bits.  This potential for <span class="hover vocab yui-wk-div" data-id='overflow error'>overflow error</span> is a necessary implication of using a <i><b>finite</b></i> representation to model the <i><b>infinite</b></i> concept of number. 
    :correct: a

    True or False. Using a fixed number of bits to represent numbers limits the range of values and hence limits the range of problems that can be solved with that representation. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

	<h3>Video: Converting Binary to Decimal</h3>

    <p>
    <p>As you saw in the video, the <span class="hover vocab yui-wk-div" data-id='binary number system'>binary number system</span> is a <span class="hover vocab yui-wk-div" data-id='positional number system'>positional number system</span>. 
    The value of a particular digit depends on its <i><b>place</b></i>. After you've watched the video, there's an activity to give you some 
    practice at converting binary (<span class="hover vocab yui-wk-div" data-id='base'>base</span> 2) to decimal (<span class="hover vocab yui-wk-div" data-id='base'>base</span> 10). </p>
    <p>In this next short video, you'll learn a simple algorithm for converting a binary number into a decimal.</p>
    
.. youtube:: jfExJPwdg7k
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <div>(<a href="http://www.teachertube.com/video/binarytodecimal-348082" target="_blank">Teacher Tube version</a>)</div>
    

	<h3>Activities: Converting Binary to Decimal</h3>

    <p>
    Your teacher may choose to have you do some or all of the activities below:
    <ol>
    <li>Your class can act out binary conversion using the <a href="https://docs.google.com/document/d/1okQhwTYVLcXN13QioAH71VUhw5e88vxYZ4sVXvSPANY/edit?usp=sharing" target="_blank">Binary Dot Cards</a>. Have the 5 students flip the dot cards randomly to make a binary number, and have the class figure out what decimal number it is.
      </li>
    <li>Try the following Binary Converter. In pairs, have one partner click on the binary digits below to create a binary number, and have the other partner figure out the number as a decimal number (click on the ? button to check your the answer). You can also use the paper binary converter tool at the bottom of the <a href="https://docs.google.com/document/d/10aNql-sT9f8-mKXAEBwA6vhpseB6WIzskWYFiRQYXy0/copy" target="_blank">binary/decimal worksheet</a> that you may have printed out in the last activity. Make sure it is printed double-sided and cut the 1's into tabs that can be flipped over to cover the 0's.
        <iframe height="400" instanceid="wGiqDDS5BAH1" src="https://mobile-csp.org/webapps/numbers/binaryConverter.html" title="" width="650"></iframe>
    </li>
    <li>Use the algorithm described in the video with this interactive Khan Academy component to convert binary to decimal.<br/> 
    </li>
    </ol>
    
.. khanex:: khanex1

   :exercise: binary-to-decimal
 
.. raw:: html

	<h3>Video: Converting Decimal to Binary</h3>
    <p>
    <p>You can  a similar algorithm to convert decimal numbers into binary. This next short video shows you how.</p>
    
.. youtube:: cSCWnI7JMSU
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <div>(<a href="http://www.teachertube.com/video/decimaltobinary-348085" target="_blank">Teacher Tube version</a>)</div>
    
	<h3>Activities: Converting Decimal to Binary</h3>

    <p>
    Your teacher may choose to have you do some or all of the activities below:
    <ol>
    <li>Your class can act out binary conversion using the <a href="https://docs.google.com/document/d/1okQhwTYVLcXN13QioAH71VUhw5e88vxYZ4sVXvSPANY/edit?usp=sharing" target="_blank">Binary Dot Cards</a>. Have the class call out a decimal number and have the 5 students with the binary dot cards figure out the equivalent binary number to show.</li>
    <li>Try the  Binary Converter in reverse. In pairs, have one partner call out a number in <span class="hover vocab yui-wk-div" data-id='base'>base</span> 10 from 0 to 255 (remember that the highest number that you can make with x <span class="hover vocab yui-wk-div" data-id='bit'>bits</span> is 2<sup>x</sup> - 1), and have the other partner click on the binary digits below to figure out that number in binary. <br/>
    <iframe height="400" src="https://mobile-csp.org/webapps/numbers/binaryConverter.html" style="border: 0;" title="" width="650"></iframe></li>
    <li>Complete the first two columns in the second page of the  <a href="https://docs.google.com/document/d/10aNql-sT9f8-mKXAEBwA6vhpseB6WIzskWYFiRQYXy0/copy" target="_blank">binary/decimal worksheet</a> that you may have printed out in the last activity. (Skip over rows that do not have anything written in the decimal or binary columns. You will finish the hex column of this worksheet in the next section). If you print this out double-sided, you can cut the 1's into tabs and flip them over to create a paper binary converter tool to help you with your calculations.
        
    </li><li>Use the algorithm described in the video with this interactive Khan Academy component to convert decimal to binary.<br/>
    </li>
    </ol>
    
.. khanex:: khanex2

   :exercise: decimal-to-binary


.. raw:: html
    
    <p>
    Everything in a computer is represented with sequences of <span class="hover vocab yui-wk-div" data-id='bit'>bits</span>, 0’s and 1’s. There are some consequences of using of using <span class="hover vocab yui-wk-div" data-id='bit'>bits</span> to represent data though. How do you think repeating decimal (real) numbers like 3.33333333… are stored in a computer’s memory? Would it fit in memory if it was an infinitely repeating decimal? Since the memory would not be able to hold an infinitely repeating number like this, computers round off repeating decimals after a fixed number of <span class="hover vocab yui-wk-div" data-id='bit'>bits</span> and only hold their approximate values in memory.  Even with integer numbers, the memory will limit the size of the integer. The fixed number of <span class="hover vocab yui-wk-div" data-id='bit'>bits</span> used to represent numbers limits the range of values and mathematical operations on those values, and can even cause errors such as overflow or rounding off errors. An <span class="hover vocab yui-wk-div" data-id='overflow error'>overflow error</span> occurs when a computer attempts to handle a number that is larger than the memory it has available. Even modern computers can occasionally have an <span class="hover vocab yui-wk-div" data-id='overflow error'>overflow error</span> when the computer attempts to handle a very large number that is outside of the defined range of values can be represented. In many programming languages, integer numbers are limited to a size of 4 bytes (32 <span class="hover vocab yui-wk-div" data-id='bit'>bits</span> where each byte is 8 <span class="hover vocab yui-wk-div" data-id='bit'>bits</span>) in memory and real numbers with decimal points to 8 bytes. Languages like MIT App Inventor and the AP pseudocode only limit the size of the data by the size of the computer’s memory. 
    
    </p>
    <!-- &lt;h1&gt;Hexadecimal Numbers&lt;/h1&gt;
    
    
    
    
    &lt;p&gt;One problem with binary  numbers is that it takes lots of digits to represent relatively small numbers. For example,  a number like 1 million would require 20 binary digits: 11110100001001000000. So, we often use the &lt;b&gt;hexadecimal (<span class="hover vocab yui-wk-div" data-id='base'>base</span> 16)&lt;/b&gt; number system, which uses the digits 0-9 as well as the letters A-F to represent the decimal numbers 0-15. Each 4 binary bits can be replaced by 1 hex digit. &lt;/p&gt;
    &lt;gcb-youtube videoid=&quot;qfgSLHxlJQs&quot; instanceid=&quot;YjCDRfhdZoZN&quot;&gt;&lt;/gcb-youtube&gt;
    (&lt;a target=&quot;_blank&quot; href=&quot;http://www.teachertube.com/video/hexoctal-348088&quot;&gt;Teacher Tube version&lt;/a&gt;)
    
    
    &lt;h2&gt;Activities: Hexadecimal Odometer and Converting Binary to Hex&lt;/h2&gt;
    Your teacher may choose to have you do some or all of the activities below:
      &lt;ol&gt;
    &lt;li&gt;Write down the hexadecimal numbers from 1 to 20. Two hex digits should be enough. If you get stuck or to check your answer, use this hexadecimal odometer app for help or to check your answer:&lt;br&gt;
    &lt;iframe src=&quot;https://mobile-csp.org/webapps/numbers/hexodometer.html&quot; title=&quot;&quot; height=&quot;250&quot; width=&quot;650&quot; instanceid=&quot;G8hZNNjzqJCU&quot;&gt;&lt;/iframe&gt;
      &lt;/li&gt;
        &lt;li&gt;Complete the second page of the following &lt;a href=&quot;https://docs.google.com/document/d/10aNql-sT9f8-mKXAEBwA6vhpseB6WIzskWYFiRQYXy0/edit?usp=sharing&quot; target=&quot;_blank&quot;&gt;binary/decimal worksheet&lt;/a&gt; that you started in the last activity. Remember that each hex digit can be easily written as 4 bits.  
    &lt;/li&gt;&lt;li&gt;Use this interactive Khan Academy component to convert binary to hex.&lt;br&gt;
    &lt;khanex name=&quot;binary-to-hex&quot; instanceid=&quot;ZCFDqyOyUO7C&quot;&gt;&lt;/khanex&gt;
    &lt;/li&gt;
        
    &lt;/ol&gt;
    -->
    
.. raw:: html
	
	<h3>Other Number Systems</h3>
    <p>
    <p>One problem with binary numbers is that it takes lots of digits to represent relatively small numbers. For example,  a number like 1 million would require 20 binary digits: 11110100001001000000. In computer science, we also use the <span class="hover vocab yui-wk-div" data-id='octal number system'>octal</span> (<span class="hover vocab yui-wk-div" data-id='base'>base</span> 8) and <span class="hover vocab yui-wk-div" data-id='hexadecimal number system'>hexadecimal</span> (<span class="hover vocab yui-wk-div" data-id='base'>base</span> 16) number system, which uses the digits 0-9 as well as the letters A-F to represent the decimal numbers 0-15. Each 4 binary <span class="hover vocab yui-wk-div" data-id='bit'>bits</span> can be replaced by 1 hex digit. The AP CSP exam no longer covers the <span class="hover vocab yui-wk-div" data-id='hexadecimal number system'>hexadecimal number system</span>, but if you're curious, you can learn more about octal and hex in the links provided in the Still Curious section below.
      
    </p><table border>
    <tbody><tr><th>Decimal</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr>
    <tr><th>Hexadecimal</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td></tr>
    <tr><th>Binary</th><td>0</td><td>1</td><td>10</td><td>11</td>
    <td>100</td><td>101</td><td>110</td><td>111</td>
    <td>1000</td> <td>1001</td><td>1010</td> <td>1011</td>
    <td>1100</td> <td>1101</td><td>1110</td> <td>1111</td></tr>
    </tbody></table>
    <div><p>Did you know that the Ancient Maya Civilization used a <span class="hover vocab yui-wk-div" data-id='base'>base</span> 20 number system with just 3 symbols for 0, 1, and 5? Try the <a href="https://maya.nmai.si.edu/maya-sun/maya-math-game?game=practice-1" target="_blank">Maya Math Game</a>. </p></div>
    <a href="https://maya.nmai.si.edu/maya-sun/maya-math-game?game=practice-1" target="_blank"> <img src="https://mayaarchaeologist.co.uk/wp-content/uploads/2016/12/Maya-Numbers-Codex-dresden44b.jpg" style="width:300px;margin-left:100px"/> </a>
    
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
    <p>
    </p><ul>
    <li>Learn about <span class="hover vocab yui-wk-div" data-id='octal number system'>Octal</span> (<span class="hover vocab yui-wk-div" data-id='base'>base</span> 8) and <span class="hover vocab yui-wk-div" data-id='hexadecimal number system'>Hexadecimal</span> (<span class="hover vocab yui-wk-div" data-id='base'>base</span> 16) number systems which are also used in computer science: <a href="https://www.youtube.com/watch?v=qfgSLHxlJQs" target="_blank">video</a>
    (<a href="http://www.teachertube.com/video/hexoctal-348088" target="_blank">Teacher Tube version</a>), <a href="https://docs.google.com/presentation/d/1JIfA9xltl36VtOq641Dw2-TcKXQ30sBTyH6BW2YP-WQ" target="_blank">slides</a>, <a href="https://mobile-csp.org/webapps/numbers/hexodometer.html" target="_blank">hexodometer</a>, <a href="https://docs.google.com/document/d/1a0BwOKTgmv00ywzwfjwgVNDQvsy2pdsyDcWNSvzODiI/edit" target="_blank">binary/decimal worksheet</a>.
    </li><li>Play the  <a href="http://2048game.com/" target="_blank">2048 game</a> to practice the powers of 2.</li>
    <li>Play the  <a href="https://studio.code.org/projects/applab/iukLbcDnzqgoxuu810unLw" target="_blank">Binary Tetris game</a> to practice binary/decimal conversions.</li>
    <li>Will YouTube ever run out of Video IDs? Every YouTube video has a unique ID that looks something like <b><i>IWV2e8KDQwTM</i></b>.   What you may not have realized is that the ID is a number is some <span class="hover vocab yui-wk-div" data-id='base'>base</span>.  It's not <span class="hover vocab yui-wk-div" data-id='base'>base</span>-2 or <span class="hover vocab yui-wk-div" data-id='base'>base</span>-10 or even <span class="hover vocab yui-wk-div" data-id='base'>base</span>-16.  To find out what <span class="hover vocab yui-wk-div" data-id='base'>base</span> YouTube uses, check out this interesting <a href="https://youtu.be/gocwRvLhDf8" target="_blank">video</a>.</li>
    <li>More Fun With Odometers: Here's a <a href="http://mobile-csp.org/webapps/numbers/multiodometer.html" target="_blank">multiple number systems odometer app</a> that will let you experiment with number systems in any <span class="hover vocab yui-wk-div" data-id='base'>base</span> from 2 to 32. </li>
    <!-- &lt;gcb-iframe src=&quot;https://mobile-csp.org/webapps/numbers/multiodometer.html&quot; title=&quot;&quot; height=&quot;400&quot; width=&quot;650&quot; instanceid=&quot;tOwWb20u0Mpb&quot;&gt;&lt;/gcb-iframe&gt; -->
    </ul>

Self-Check
-----------

.. raw:: html

    <p>
    <h3>Vocabulary</h3>
	<p>Here is a table of the technical terms we've introduced in this lesson. Hover over the terms to review the definitions.
	</p>
    <table align="center">
    <tbody>
    <tr>
    <td><span class="hover vocab yui-wk-div" data-id="binary sequence">binary sequence</span>
    <br/><span class="hover vocab yui-wk-div" data-id="bit">bit</span>
    <br/><span class="hover vocab yui-wk-div" data-id="base">base</span>
    <br/><span class="hover vocab yui-wk-div" data-id="positional number system">positional number system</span>
    </td>
    <td><span class="hover vocab yui-wk-div" data-id="decimal number system">decimal number system</span><br/>
    <span class="hover vocab yui-wk-div" data-id="binary number system">binary number system</span>
    <br/><span class="hover vocab yui-wk-div" data-id="octal number system">octal number system</span>
    <br/><span class="hover vocab yui-wk-div" data-id="hexadecimal number system">hexadecimal number system</span>
    <br/><span class="hover vocab yui-wk-div" data-id="overflow error">overflow error</span>
    </td>
    </tr>
    </tbody>
    </table>
    
	<h3>Check Your Understanding</h3>
    <p>Complete the following self-check exercises. 
	</p>
.. mchoice:: mcsp-2-9-4
    :random:
    :practice: T
    :answer_a:  1001 0100
    :feedback_a: 
    :answer_b:  1001 0111
    :feedback_b: 
    :answer_c:  1101 0100
    :feedback_c: 
    :answer_d:  1101 0111
    :feedback_d: 
    :correct: a

    AP 2021 Sample Question: Each student that enrolls at a school is assigned a unique ID number, which is stored as a binary number. The ID numbers increase sequentially by 1 with each newly enrolled student. If the ID number assigned to the last student who enrolled was the binary number 1001 0011, what binary number will be assigned to the next student who enrolls?


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    <!--
    &lt;question instanceid=&quot;6CfVDBYD9eg6&quot; weight=&quot;1&quot; quid=&quot;5150886206636032&quot;&gt;&lt;/question&gt;-->
    <h2><br/>Reflection: For Your Portfolio</h2><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1IQJIz--ZW9FIAGbne5y2jKRMm0Frjz9GrJKfLig08Tc/copy" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vQ837rHORRkxC_BT8rOjZXFTtgS6ep7Nrov4xbA8rXG276W8aALOCsaX9HkS1AKH7dpYd30kd1eYUyV/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    <!--&lt;p&gt;In your portfolio, create a new page named &lt;i&gt;&lt;b&gt;Binary Numbers&lt;/b&gt;&lt;/i&gt; under the &lt;i&gt;Reflections&lt;/i&gt; category of your portfolio (we recommend also including the lesson number. Check with your instructor) and answer the following questions:&lt;/p&gt;
      &lt;ol&gt;
        &lt;li&gt;Figure out what decimal value is represented by the following binary number &lt;tt&gt;0011 1010 0011&lt;/tt&gt;&lt;/li&gt;
        &lt;li&gt;Represent the decimal value 517 as a binary number.&lt;/li&gt;
        &lt;li&gt;The binary number system is &lt;i&gt;base 2&lt;/i&gt; and has 2 digits.  The decimal number system is &lt;i&gt;base 10&lt;/i&gt; and has 10 digits.  The &lt;i&gt;octal
    system&lt;/i&gt; is &lt;i&gt;base 8&lt;/i&gt;. How many digits does it have?  What are they, starting at 0?&lt;/li&gt;
        &lt;li&gt;Suppose the number 523 is a base-8 octal number. What would its value be in decimal?  In binary?&lt;/li&gt;
        &lt;li&gt;&lt;b&gt;Challenging (optional):&lt;/b&gt; Convert the &lt;b&gt; base-5 &lt;/b&gt; number 243 into decimal.&lt;/li&gt;
      &lt;/ol&gt;-->
    </div>
    </div>