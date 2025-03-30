.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Big Data
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
            generateSummary(EKmapping['7.02']);
            generateHovers();
    
      });
    </script>
    <h3 id="est-length">Time Estimate: 45 minutes</h3>
    

Introduction and Goals
-----------------------

.. raw:: html

    <p>    
    We live in the information age with an exponential growth of data. In 2010 Eric Schmidt, the CEO of Google, said,
        "There were five exabytes of information created between the dawn of civilization through 2003, but that much
        information is now created every 2 days." In 2019, the <a href="https://www.weforum.org/agenda/2019/04/how-much-data-is-generated-each-day-cf4bddf29f/" target="_blank">World Economic Forum</a> estimated that "the entire digital universe is expected to reach 44
        zettabytes by 2020."</p>
		How much is an Exabyte or Zettabyte? Here is a visualization and a table from the same <a href="https://www.weforum.org/agenda/2019/04/how-much-data-is-generated-each-day-cf4bddf29f/" target="_blank">article</a> at the World Economic Forum. Click on each to view full-size versions.</p>
	<table>
	<tbody>
	<tr>
		<td width="42%"><a href="https://www.visualcapitalist.com/wp-content/uploads/2019/04/data-generated-each-day-full.html" target="_blank"><img alt="Big Data infographic" class="yui-img" src="https://assets.weforum.org/editor/large_EtPUkpGXyTdl9eydWTMVIhXdNquLOB8IdyieBBGARiw.jpg" title="Big Data infographic"/></a></td>
		<td width="58%"><a href="https://assets.weforum.org/editor/large_1wZFPPQxA3arZahkXNge_pYCgI7alwllw3o5S6fgqc8.png" target="_blank"><img alt="Table of bytes" class="yui-img" src="https://assets.weforum.org/editor/large_1wZFPPQxA3arZahkXNge_pYCgI7alwllw3o5S6fgqc8.png" title="Table of bytes"/></a></td>	
	</tr>
	</tbody>
	</table>
	<p>
	<div><b>Learning Objectives:</b>&nbspI will learn to</div>
	<ul>
	<li>describe what information can be extracted from data</li>
	<li>identify what qualifies as big data</li>
	<li>describe challenges associated with processing big data sets</li>
	<li>recognize both benefits and harms of using big data</li>
	</ul>
	<div><b>Language Objectives:</b>&nbspI will be able to</div>
	<ul>
	<li>discuss privacy and security concerns related to a data set</li>
	<li>use target vocabulary, such as megabyte, gigabyte, and terabyte while describing the effects of big data, with the support of concept definitions from this lesson</li>
	</ul>
    

Learning Activities
--------------------

.. raw:: html

    <p><h3>Big Data</h3>
    <p>We live in the era of Big Data which refers to data sets that are too large to fit on a normal
          computer or be processed by a standard spreadsheet or database program. Large data sets are difficult to process using a single computer and may require parallel systems (multiple computers working together to run an algorithm). Scalability of systems is an important consideration when working with large data sets, as the computational capacity of a system affects how data sets can be processed and stored.
    </p>
    <p>We will explore Big Data through a number of videos from the PBS documentary, The Human Face of Big Data. We will start with a short (2:31) video, <a href="https://wdse.pbslearningmedia.org/resource/bigdata_stem_numbers_everywhere/the-human-face-of-big-data-everything-is-quantifiable/" target="_blank" title="">Everything Is Quantifiable.</a></p>
    <div class="yui-wk-div" style="text-align: center;"><a href="https://wdse.pbslearningmedia.org/resource/bigdata_stem_numbers_everywhere/the-human-face-of-big-data-everything-is-quantifiable/" target="_blank"><img alt="Everything is Quantifiable" class="yui-img" src="../_static/assets/img/HumanFaceofBigData_1Quantifiable.png" title="Everything is Quantifiable"/><br/></a></div>
    <p><br/>
    </p>

    <p>
    
.. mchoice:: mcsp-7-2-1
    :random:
    :practice: T
    :answer_a: True
    :feedback_a: We’re in the learning zone today. Mistakes are our friends! A terabyte is actually much larger and is equivalent to 1 trillion bytes!
    :answer_b: False
    :feedback_b: That's right! A Terabyte is extremely large. One Terabyte is equivalent to 1 trillion bytes!
    :correct: b

    .. raw:: html
    
    	<p><b>True or False</b>: A Terabyte is equivalent to 1000 bytes.</p> 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

 
.. mchoice:: mcsp-7-2-2
    :random:
    :practice: T
    :answer_a: True
    :feedback_a: Big data can also refer to large complex data made up of more than just numbers, like the images, audio, video and text we share on social media.&nbsp;
    :answer_b: False
    :feedback_b: Big data can also refer to large complex data made up of more than just numbers, like the images, audio, video and text we share on social media.&nbsp;
    :correct: b

    .. raw:: html
    
    	<p><b>True or False</b>: Big data only contains numeric data, it does not include text, images or videos.</p>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

 
.. mchoice:: mcsp-7-2-3
    :random:
    :practice: T
    :answer_a: data sets that contain very large numbers 
    :feedback_a: OK, so you didn’t get it right this time. Let’s look at this as an opportunity to learn. Try reviewing this; some Big Data sets do contain very large number, such as 1,980,000,000.3021342, but <i>all</i> Big Data sets do not contain very large numbers.
    :answer_b: data sets that are owned by a big corporation 
    :feedback_b: OK, so you didn’t get it right this time. Let’s look at this as an opportunity to learn. Try reviewing this; you may find that some Big Data sets are owned by big corporations such as banks or oil companies, but you can also find Big Data sets that are owned by small corporations or even individuals.
    :answer_c: data sets that are stored in the cloud 
    :feedback_c: OK, so you didn’t get it right this time. Let’s look at this as an opportunity to learn. Try reviewing this; not all Big Data is stored in the cloud. Some companies save their Big Data in Excel spreadsheets on a hard drive in other databases.
    :answer_d: data sets that are too large and complex to download and process on a single computer
    :feedback_d: That's right! Big data sets are extremely large sets of data that are very complex.
    :correct: d

    .. raw:: html
    
    	<p>The term <b><i>Big Data</i></b> refers to _________________.</p>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <p><br/>
    </p>
    

	<h3>Data Science</h3>

    <p>
    <p>The field of Data Science deals with extracting information from and visualizing the results of manipulating large
          data sets. The size of a data set affects the amount and quality of information that can be extracted from it. From this information, further analysis may yield knowledge or even wisdom. Tables, diagrams, text, and other visual tools can be used to communicate insight and knowledge gained from data. We often think of data,
          information, knowledge and wisdom forming a pyramid.
    </p>
    <div class="yui-wk-div" style="text-align: center;"><img alt="DIKW Pyramid" class="yui-img" src="https://live.staticflickr.com/4169/34764532445_e3883bd446_b.jpg" style="width: 450px; height: 255px;" title="DIKW Pyramid"/></div>
    <p> Data provide opportunities for identifying trends, making connections, and addressing problems. Computing enables new methods of deriving information from
          data, driving monumental change across many disciplines — from art to business to science. Keep the DIKW pyramid in mind as you watch the short 3 minute video, <a href="https://wdse.pbslearningmedia.org/resource/bigdata_stem_word_births/the-human-face-of-big-data-aquiring-language/" target="_blank">Learning Revealed: Acquiring Language</a>. </p>
    <div class="yui-wk-div" style="text-align: center;"><a href="https://wdse.pbslearningmedia.org/resource/bigdata_stem_word_births/the-human-face-of-big-data-aquiring-language/" target="_blank"><img alt="Acquiring Language" class="yui-img" src="../_static/assets/img/HumanFaceofBigData_2LearningRevealed.png"/><br/>
    </a></div>
    <br/>
	
.. mchoice:: mcsp-7-2-4
    :random:
    :practice: T
    :answer_a:     <ul>       <li><b>Information: </b>The child said "water" most frequently in the         kitchen and the bathroom</li>       <li><b>Knowledge: </b>The child is likely to learn words heard in         multiple locations</li>       <li><b>Data:</b> The child said "Truck" for the first time at 11:45         on January 15, 2017</li>     </ul>
    :feedback_a: <div>Data is basic facts or figures,&nbsp;</div><div>information is data that has been organized or visualized,&nbsp;</div><div>knowledge extracts generalizations from information</div>
    :answer_b:     <ul>       <li><b>Information: </b>The child said "water" most frequently in the         kitchen and the bathroom</li>       <li><b>Data: </b>The child is likely to learn words heard in         multiple locations</li>       <li><b>Knowledge: </b> The child said "Truck" for the first time at 11:45         on January 15, 2017</li>     </ul>
    :feedback_b: Data is basic facts such as when each word was spoken, not summary information.
    :answer_c:     <ul>       <li><b>Data: </b>The child said "water" most frequently in the         kitchen and the bathroom</li>       <li><b>Knowledge: </b>The child is likely to learn words heard in         multiple locations</li>       <li><b>Information:</b> The child said "Truck" for the first time at 11:45         on January 15, 2017</li>     </ul>
    :feedback_c: Data is basic facts such as when each word was spoken, not generalize knowledge.
    :correct: a

	Which of the following best matches statements from the video to the Data-Information-Knowledge-Wisdom pyramid?


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


           
          
.. mchoice:: mcsp-7-2-5
    :random:
    :practice: T
    :answer_a: Data science refers to scientific information that is gained from scientific experiments.
    :feedback_a: Data science is more broad than just data from scientific experiments.
    :answer_b: Data science refers to manipulating large data sets to gain information from them.
    :feedback_b: 
    :answer_c: Data science refers to data published along with peer-reviewed scientific research
    :feedback_c: Data science is more broad than just data from scientific research.
    :correct: b

    What does "data science" refer to?


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <br/>
    </p>
	<h3>Impacts of Big Data</h3>
    <p>Careful analysis of data can help us solve many problems.  Watch the following 4-minute video to see how tracking data on <a href="https://wdse.pbslearningmedia.org/resource/bigdata_stem_babies_health/the-human-face-of-big-data-the-smallest-heartbeat/" target="_blank">The Smallest Heartbeat</a> can help save a child's life. </p>
    <div class="yui-wk-div" style="text-align: center;"><a href="https://wdse.pbslearningmedia.org/resource/bigdata_stem_babies_health/the-human-face-of-big-data-the-smallest-heartbeat/" target="_blank"><img alt="Acquiring Language" class="yui-img" src="../_static/assets/img/The-smallest-heartbeat.png"/><br/>
    </a></div>
    

	<h3>Bias in Data</h3>

    <p>
    <p>The path from data to information to knowledge is not always straightforward. Bias can be introduced into the
          collection and analysis of data with dangerous results. Care must be taken when collecting and analyzing data. Problems of bias are often caused by the type or source of data that is being collected. Bias is not eliminated by simply collecting more data. </p>
    <p>Joy Buolamwini from the MIT Media labs studies the impact of bias in face recognition systems. Watch the following video about her research.
      <br/>
    
.. youtube:: TWWsW1w-BVo
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <!--    &lt;p&gt;In the following TEDx talk, watch for how Tricia Wang describes why &quot;Relying on Big Data alone increases the
          chances we&#39;ll miss something, while giving us the illusion we know everything.&quot;&lt;/p&gt;
    &lt;h3&gt;The human insights missing from big data&lt;/h3&gt;&lt;gcb-youtube videoid=&quot;pk35J2u8KqY&quot; instanceid=&quot;rbgLiCfckWq7&quot;&gt;&lt;/gcb-youtube&gt;
        &lt;p&gt;While bias in data can lead to bad business decisions like Wang describes above, it can also marginalize people. The following spoken word piece, by Joy Buolamwini, highlights the ways in which artificial intelligence can misinterpret the images of iconic black women.&lt;/p&gt;&lt;p&gt;In her research Buolamwini has studied the impact of bias in current face recognition systems. In 2014, Facebook released DeepFace which significantly improved face recognition achieving a score of 97% on a standard set of faces used as a benchmark. But the faces in this benchmark turn out to be overwhelmingly white and male and DeepFace, and similar systems, performed much worse on diverse faces. Here are the results from the IBM system:&lt;/p&gt;
    &lt;br&gt;
    
    &lt;img src=&quot;assets/img/Facial_Bias_IBM_before.png&quot; class=&quot;yui-img selected&quot; title=&quot;Bias in IBM&#39;s System&quot; alt=&quot;Bias in IBM&#39;s System&quot; style=&quot;width: 465px; height: 223px; margin-left: 50px;&quot;&gt;&lt;br&gt;
    &lt;p&gt;
    Further research on commercial systems designed to predict the gender of any face has shown that these systems are bias towards white male faces. Existing face data sets give false sense of progress through poor representation of the undersampled majority-women and people of color&lt;br&gt;&lt;/p&gt; -->
    </p><p>The following spoken word piece by Joy Buolamwini highlights how computer systems based on incomplete data misinterpret the images of iconic black women.</p>
    
.. youtube:: QxuyfWoVV98
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <!-- &lt;p&gt;To learn more about the underlying research done by Buolamwini, watch &lt;a href=&quot;https://www.youtube.com/watch?v=TWWsW1w-BVo&amp;feature=youtu.be&quot; target=&quot;_blank&quot; title=&quot;&quot;&gt;Gender Shades&lt;/a&gt;, &lt;a href=&quot;https://www.youtube.com/watch?v=UG_X_7g63rY&quot; target=&quot;_blank&quot;&gt;her TED talk&lt;/a&gt;, or &lt;a href=&quot;https://www.youtube.com/watch?v=FejjAbwUqbA&amp;amp;t=723s&quot; target=&quot;_blank&quot; title=&quot;&quot;&gt;AI, Ain&#39;t I A Woman? longer version presented by Organizational Transformation&lt;/a&gt;.&lt;/p&gt;
    -->
    
    <p>
.. mchoice:: mcsp-7-2-6
    :random:
    :practice: T
    :answer_a: True
    :feedback_a: 
    :answer_b: False
    :feedback_b: 
    :correct: a

    .. raw:: html
    
    	<p><b>True or False</b>: When Joy Buolamwini says that current face recognition systems are "pale and male" she means that since the data used to train these systems consisted largely of white, male faces, these systems perform poorly for other faces.</p>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


.. mchoice:: mcsp-7-2-7
    :random:
    :practice: T
    :answer_a: Retraining did not improve the system.
    :feedback_a: 
    :answer_b: The bias in the system was nearly entirely removed by retraining.
    :feedback_b: 
    :answer_c: Retraining the system made the bias worse.
    :feedback_c: 
    :correct: b

    Based on the Joy Buolamwini's research, IBM retrained its system using a more diverse set of faces. How would you interpret the new results?

    .. raw:: html

        <img alt="Retrained IBM's System" class="yui-img selected" src="../_static/assets/img/Facial_Bias_IBM_after.png" style="width: 465px; height: 223px; margin-left: 50px;" title="Retrained IBM's System"/>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

	<h3>Big Data Activity: Exploring Data Sets</h3>
	Explore some of examples of big data and find at least two data sets that interest you. Some ideas of where to find data sets are below. Then, answer the following reflection questions in your portfolio.
    <ol>
    <li style="margin-bottom: 5px;">What specifically were the types of data (text, sounds, transactions, etc.) included in the data set you chose?
        </li><li style="margin-bottom: 5px;">What new facts did you learn when exploring the data set? List at least 3 facts.
     </li><li style="margin-bottom: 5px;">Write a question you have about the data set you chose. Now, convert that question into a hypothesis (a statement) with your prediction about the data.
     </li><li style="margin-bottom: 5px;">Identify at least one security and/or privacy concern that is associated with the data in the data set you chose.
     </li><li>If your data set included a visualization, explain the purpose of the visualization. How would you change or improve the visualization? If it did not include a visualization, describe one that you think would be useful in understanding the data.</li></ol>
    
	Here are some websites where you can explore big data sets.
	<ul>
    <li><a href="http://en.wikipedia.org/wiki/Big_data" target="blank">Wikipedia Article on Big Data</a> </li>
    <li>Reddit maintains a <a href="http://www.reddit.com/r/dataisbeautiful/top/" target="blank">Data is Beautiful</a>
            site that has lots of visualizations of interesting data sets. Browse through that collection. </li>
    <li>These <a href="https://corgis-edu.github.io/corgis/" target="_blank">CORGIS data sets</a> allow you
            to create visualizations with different types of graphs to explore the data.</li>
    <li>Here's a nice visualization of <a href="http://www.nytimes.com/interactive/2012/05/13/business/student-debt-at-colleges-and-universities.html?ref=tuition&amp;_r=2&amp;" target="blank">student debt</a> that was put together by the New York Times. </li>
    <!--<li>This is a nice <a href="http://evolutionofweb.appspot.com/#/growth/day" target="_blank">interactive
              visualization</a> of how the Internet has grown and when various technologies have been introduced. </li>-->
    <li>NY Times <a href="https://www.nytimes.com/interactive/2017/01/18/world/how-much-warmer-was-your-city-in-2016.html#hfd" target="_blank"> How much warmer was your city in 2016? visualization</a></li>
    <li>NY Times <a href=" https://www.nytimes.com/interactive/2019/12/02/climate/air-pollution-compare-ar-ul.html" target="_blank"> Air Pollution in Cities visualization</a></li>
    </ul>
    

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
    <h3>Sample AP CSP Exam Question</h3>
    
.. mchoice:: mcsp-7-2-8
    :random:
    :practice: T
    :answer_a:  Backing up data   
    :feedback_a: Not quite - According to the table, backing up data for a company with 100,000 would take over 2,000 hours (200 x 10). Even though that's a long time, there is another task that would take even longer.
    :answer_b:  Deleting entries from data
    :feedback_b: Nice try, but according to this table deleting entries for a company with approximately 100,000 customers would only take 400 hours.
    :answer_c:  Searching through data
    :feedback_c: Nice try, but the question is asking about 100,000 customers.
    :answer_d:  Sorting data
    :feedback_d: That is correct!
    :correct: d

    

    .. raw:: html

        <img class="yui-img" src="../_static/assets/img/SampleExamQuestion10EfficiencyAlgorithms.png"/>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    

Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also
            available in this <a href="https://docs.google.com/document/d/1Hnd8591DpPpiBPp6tP4Rc5fMnpEqHoRK8wakDDhbvUQ/copy" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vRlTvjzGh-w4NxfeBcIA5qslLEpCNiTHCbOxDtQzexS3yK0-HOzsB2s9lKEoCLGtRtsiwxVIJBz-ZfU/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    <!--  Create a page named &lt;i&gt;Data and Information&lt;/i&gt; under the &lt;i&gt;Reflections&lt;/i&gt; category of your 
      portfolio and answer the following questions about the data set you choose for this activity.  &lt;ol&gt;    &lt;li&gt;Choose one of the data sets listed above in the &lt;i&gt;Activity&lt;/i&gt; section or one that you find on your own and give          a brief description of it. What specifically were the types of data (text, sounds,      transactions, etc.) included in the data set you chose?    &lt;/li&gt;    &lt;li&gt;What new facts did you learn when exploring the data set? List at least 3 facts.    &lt;/li&gt;    &lt;li&gt;Write a question you have about the data set you chose. Now, convert that question into a hypothesis           (a statement)   with your prediction about the data.&lt;br&gt;       (Hypotheses take the form of &quot;If __________, then _________.&quot; For example, a hypothesis about        the student debt data could be, &quot;If the tuition costs are higher at an institution, the student debt will be higher.&quot;    &lt;/li&gt;    &lt;li&gt;Identify at least one security and/or privacy concern that is associated with the data in the data set you chose?    &lt;/li&gt;    &lt;li&gt;If your data set included a visualization, explain the purpose of the visualization. How would you change or           improve the visualization? If it did not include a visualization, describe one that you think would be useful in understanding the data.&lt;/li&gt;  &lt;/ol&gt;-->
    </div>
    </div>