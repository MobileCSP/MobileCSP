.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Artificial Intelligence and Machine Learning 
==============================================

.. raw:: html

        <div class="MCSP-lesson-content">
    <script>
      $(document).ready(function() {
        generateSummary(EKmapping['7.07']);
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
        "artificial intelligence (AI)":"A branch of computer science that works on creating machines and programs that exhibit human-like intelligence.",
        "machine learning":"Algorithms that learn intelligent behavior from lots of training data.",
         "neural network":"A computer system modeled on simple neurons in the human brain.",
        "back propagation":"Back propagation is an algorithm that repeatedly adjusts the connections (weights) between the nodes in the neural network",
        "deep learning":"A type of very successful machine learning algorithm using neural networks with many layers to learn data representations on its own from massive amounts of data.",
      };      */
    </script>
    <h3 id="est-length">Time Estimate: 90 minutes</h3>

Introduction and Goals
-----------------------

.. raw:: html

    <p><h3>Can a computer recognize your doodles?</h3>
    <p>Artificial intelligence (AI) is sometimes described as getting a computer to do complex tasks that humans find easy.  Examples would be walking, seeing, and understanding speech.  These activities, which come naturally to us, are very difficult to develop traditional step-by-step algorithms for.</p>
    <p>But AI researchers have developed an approach known as <span class="hover vocab yui-wk-div" data-id='machine learning'>machine learning</span> that enables computers to perform these complex tasks.  With <span class="hover vocab yui-wk-div" data-id='machine learning'>machine learning</span> a computer <i>learns</i> how to perform a task or solve a problem not by being given a traditional program to solve the problem, but by being given lots of examples of correct and incorrect solutions to the problem.  
	<div><b>Learning Objectives:</b>&nbspI will learn to</div>
	<ul>
	<li>explain the basics of <span class="hover vocab yui-wk-div" data-id="machine learning">machine learning</span></li>
	<li>identify aspects of every day life that use <span class="hover vocab yui-wk-div" data-id="artificial intelligence (AI)">AI</span></li>
	<li>describe how computing innovations that use <span class="hover vocab yui-wk-div" data-id="machine learning">machine learning</span> have biases</li>
	</ul>
	<div><b>Language Objectives:</b>&nbspI will be able to</div>
	<ul>
	<li>explain how computing innovations that use <span class="hover vocab yui-wk-div" data-id="artificial intelligence (AI)">AI</span> can raise ethical concerns</li>
	<li>use target vocabulary, such as <span class="hover vocab yui-wk-div" data-id="neural network">neural network</span> while describing the beneficial and harmful effects of <span class="hover vocab yui-wk-div" data-id="artificial intelligence (AI)">AI</span>, with the support of concept definitions from this lesson</li>
	</ul>


Learning Activities
--------------------

.. raw:: html
    
    </p><a href="https://quickdraw.withgoogle.com/" target="_blank"><img src="../_static/assets/img/FlagDoodle.png" style="float:left;" width="200"/></a>To give you a sense of what such a <i>trained</i> computer can do, here's an interactive Google application that has learned (and is continuing to learn) how to recognize doodles -- i.e., free-hand drawn images of typical objects. Certainly, the ability to recognize a person's doodles, is something we humans do quite easily.  But it is a skill that would be very nearly impossible to specify by means of a traditional algorithm.</p>
    <p>Give it a try yourself!  Click on the <a href="https://quickdraw.withgoogle.com/" target="_blank">flag doodle</a> to see how well the computer can recognize your doodles. 
    </p>
    <h3>Video: What is Machine Learning?</h3>
    Watch the following short <a href="https://www.youtube.com/watch?v=QghjaS0WQQU&ab_channel=GCFLearnFree.org" target="_blank">video</a> (2 minutes) introducing Machine Learning.

    
.. youtube:: QghjaS0WQQU
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <h3>Activity: Google's Teachable Machine Experiments</h3>
    
    In this activity you will use your browser to train a <span class="hover vocab yui-wk-div" data-id='neural network'>neural network</span> to associate inputs from the camera on your computer or tablet or phone camera with certain sounds and images.  Before you get started, here's a short (3:20) video demo that shows you how it works. 
    
    
.. youtube:: 3BhkeY974Rg
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <p>As you saw in the video, you can train a simple <span class="hover vocab yui-wk-div" data-id='neural network'>neural network</span> to distinguish between three classes: green, purple, and orange.  The network will associate a certain inputs from your video camera (hand up, funny face) with certain GIF images (cat, dog) or sounds (hello, hey). Once you've trained the network to make the desired associations, you have created a <i><b>model</b></i>. </p>
    <p>Now it's your turn to try it. If your computer does not have a camera, use your tablet or phone for this activity. When you click on the <a href="https://teachablemachine.withgoogle.com/v1/" target="_blank">link to the Teachable Machine Version 1</a>, you should see the following interface (note there is also a version 2 that you could try by deleting /v1 from the URL).</p>
      <br/>
    <a href="https://teachablemachine.withgoogle.com/v1/" target="_blank"><img src="../_static/assets/img/TeachableMachine.png" style="float:center;" width="400"/></a>
    <br/><br/>
      
    Here are some exercises and experiments to try:
    <ol>
    <li style="margin-bottom: 5px;">Do the tutorial by clicking on the "Let's Go!" button.  The tutorial will lead you through creating the model that you saw in the demo video (hand up, funny face).</li>
    <li style="margin-bottom: 5px;">Tweak the model by replacing the GIFs with sounds, creating your own sounds.</li>
    <li style="margin-bottom: 5px;">Customize a model with your own inputs and outputs.</li>
    <li style="margin-bottom: 5px;">Here's an experiment to try:  Does it take more training cycles to train a model to distinguish between left-hand-up/right-hand-up than a model that distinguishes between hand-up/no-hand-up? </li>
    <li style="margin-bottom: 5px;"><b>Facial recognition?</b> Pair up with one or two of your classmates and explore whether the network can be trained to distinguish between your faces.
      </li><li>Design your own experiment(s) with or without classmates.  For example, can you find two or three inputs that the machine cannot distinguish between no matter how many learning cycles you do? 
    </li></ol>
    
    <h3>Algorithmic Bias</h3>
    Can an algorithm be biased? Yes, even though computers are machines, they are not free from the intentional or unintentional bias of the people who program them and the input data generated by humans. 
    Computing innovations can reflect existing human biases because of biases written into the algorithms at all levels of software development or biases in the data used by the innovation. Machine learning and data mining have enabled innovation in medicine, business, and science, but information discovered in this way could be biased depending on the data source and the information can also be used to discriminate against groups of individuals. Programmers need to take action to reduce bias in algorithms used for computing innovations as a way of combating existing human biases.
	<br/>
    Watch the following <a href="https://www.youtube.com/watch?v=gV0_raKR2UQ&ab_channel=CrashCourse" 
    target="_blank">video</a> about algorithmic bias.

.. youtube:: gV0_raKR2UQ
        :width: 650
        :height: 415
        :align: center   

.. raw:: html
    
    <p>Algorithmic bias describes systematic errors in a computer system that create unfair outcomes, due to the algorithm design or how the data used by the program is collected or used to train the algorithm. 

    <h4>Five Types of Algorithmic Bias</h4>
    <ol>
    <li style="margin-bottom: 5px;">The data reflects an existing bias in society.  For example, an image search for nurses may return more female nurses than male nurses.
    </li>
    <li style="margin-bottom: 5px;">The training data is biased or incomplete. For example, facial recognition algorithms that are trained on photos of mostly white faces may not work as well for other skin colors.
    </li>
    <li style="margin-bottom: 5px;">The data is oversimplified into quantitative values. The data may be too complicated to measure so simpler quantitative measures are used that may cause bias, for example counting the sentence length as an oversimplified measure of good writing. 
    </li>
    <li style="margin-bottom: 5px;">Data can be affected by a feedback loop. If biased data is fed back into the algorithm that then  generates new data, it causes a feedback loop of more biased data.  For example,  predictive policing software may recommend an increased police presence in neighborhoods based on previous arrests, ignoring other neighborhoods, but this could form a feedback loop where the increased police presence leads to more arrests and more bias in the decision.
    </li>
    <li>Data can be manipulated. In 2016 Microsoft launched the virtual assistant Tay. People on Twitter bombarded Tay with racist comments and soon many of the responses were racist in nature. Microsoft pulled the plug on Tay after 24 hours.
    </li>
    </ol>
    
POGIL Activity: Analyze an App for Bias
----------------------------------------

.. raw:: html

    In this POGIL activity, you will analyze an app that determines membership in a club. 
    Break into POGIL teams of 4 and assign each team member one of the POGIL roles. 
    Open this <a href="https://docs.google.com/document/d/1c1EeKdVzbUGiBGNa8GE3zamEd9-rBIpDyvQMJB4rXsM/edit?usp=sharing" target="_blank">worksheet to complete this POGIL Activity</a>. 
    You can make a copy of it with File/Make a Copy. Discuss the results with your class.


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

    <p>There are lots of interesting videos and presentations online to help you learn more about AI and the impact it is having in the world.</p>
    <h4>Machine Learning</h4>
    <ul>
    <li style="padding-bottom:5px">In this video two Googlers, Nat and Lo, interview a couple of Google <span class="hover vocab yui-wk-div" data-id="artificial intelligence (AI)">AI</span> researchers who describe <a href="https://www.youtube.com/watch?time_continue=1&amp;v=bHvf7Tagt18" target="_blank">how <span class="hover vocab yui-wk-div" data-id='machine learning'>machine learning</span> works</a>. This video was made as part of their "20% project".  One of the cool features of working at Google and other technology companies is that employees get to spend part of their time (1 day per week in this case) working on projects that they themselves choose. </li>
    <li style="padding-bottom:5px">The <a href="https://www.youtube.com/watch?time_continue=1&amp;v=tiwVMrTLUWg" target="_blank">Google Self-Driving Car</a> is an example of the research being done by car industry researchers to create fully autonomous vehicles.  As the video points out, an autonomous vehicle is much different than the computer-assisted vehicles that are currently available today.  </li>
    <li style="padding-bottom:5px">Computer vision is a long-standing <span class="hover vocab yui-wk-div" data-id="artificial intelligence (AI)">AI</span> research area. In this TED talk, Wei-wei Li from Stanford University describes how she used <span class="hover vocab yui-wk-div" data-id='machine learning'>machine learning</span> and crowd source to to <a href="https://www.youtube.com/watch?time_continue=1&amp;v=tiwVMrTLUWg" target="_blank">teach a computer to understand pictures</a>.</li>
    <li style="padding-bottom:5px">The <a href="https://machinelearningforkids.co.uk/" target="_blank">machinelearningforkids.co.uk/</a> site uses IBM's <span class="hover vocab yui-wk-div" data-id='machine learning'>machine learning</span> processors online to train and use models in Scratch and in an App Inventor extension. Using these materials does require setting up accounts with IBM and some set up time.</li> 
    </ul>
    
    <h4>Algorithmic Bias</h4>
    <ul>
    <li style="padding-bottom:5px">Here is a Ted Talk video on <a href="https://www.youtube.com/watch?v=UG_X_7g63rY" target="_blank">Bias in Facial Recognition</a> by Joy Buolamwini and another on <a href="https://www.ted.com/talks/cathy_o_neil_the_era_of_blind_faith_in_big_data_must_end" target="_blank">Blind Faith in Big Data Must End</a> by Cathy O'Neil.</li>
    <li style="padding-bottom:5px">This <a href="https://www.youtube.com/watch?v=Fq1SEqNT-7c" target="_blank">video</a> is on the use of Facial Recognition in China and privacy concerns.</li>
    <li style="padding-bottom:5px">This is <a href="https://www.youtube.com/watch?v=7lpCWxlRFAw" target="_blank">a report on police crime prediction software and bias.</a></li>
    <li style="padding-bottom:5px"> Microsoft had to silence its new <span class="hover vocab yui-wk-div" data-id="artificial intelligence (AI)">AI</span>	 chat bot. </li>
    <li style="padding-bottom:5px"><a href="https://www.utsa.edu/today/2020/08/story/algorithm-bias-health-tweets.html" target="_blank">Bias in Health tracking</a>  </li>
    <li style="padding-bottom:5px"><a href="https://www.cnn.com/2020/08/23/tech/algorithms-bias-inequality-intl-gbr/index.html" target="_blank">Bias in college acceptance</a>  
    </ul>

    <h3>Optional: App Inventor Artificial Intelligence Tutorials</h3>
    
    Check out these <a href="http://appinventor.mit.edu/explore/ai-with-mit-app-inventor" target="_blank">AI tutorials in MIT App Inventor</a>. The Image Classifier tutorials require an <span class="hover vocab yui-wk-div" data-id="artificial intelligence (AI)">AI</span> extension that some mobile devices can use (<a href="http://appinventor.mit.edu/explore/ai-compatible-devices" target="_blank">list of compatible devices and an apk</a> that you can test on your device to see if it can use these extensions).  The Therapist Bot tutorial and the Rock-Paper-Scissors Tutorials do not require this <span class="hover vocab yui-wk-div" data-id="artificial intelligence (AI)">AI</span> extension and can be implemented on any device. They are a lot of fun! 
    
    
Self-Check
-----------

.. raw:: html

    <p>
    <p>Here is a table of the technical terms we've introduced in this lesson. Hover over the terms to review the definitions.</p>
    <table align="center">
    <tbody>
    <tr>
    <td><span class="hover vocab yui-wk-div" data-id="artificial intelligence (AI)">artificial intelligence</span>
    <br/><span class="hover vocab yui-wk-div" data-id="machine learning">machine learning</span>
    <br/><span class="hover vocab yui-wk-div" data-id="algorithmic bias">algorithmic bias</span>
    </td>
    </tr>
    </tbody>
    </table>
    
.. mchoice:: mcsp-7-7-1
    :random:
    :practice: T
    :answer_a: Computer vision
    :feedback_a: Yes that's one.
    :answer_b: Natural language understanding
    :feedback_b: That's one example but there are others.
    :answer_c: Speech recognition
    :feedback_c: That's one example but there are others.
    :answer_d: Robot navigation
    :feedback_d: That's one example but there are others.
    :answer_e: All of the above.
    :feedback_e: That's correct. All of these are examples of AI.
    :correct: e

    Which of the following application areas would be considered an example of artificial intelligence? 
 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    

Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/13P2M8j-1CfDMHwS2Oi6xzsjUlwBi8Yjwc6N6B3x1q3M/copy" target="_blank" title="">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vRoxAxWILNc_nvCafnIUm_DEvyQ8E8U4PXHMcq7pPil43FNLmfhdR4pY2ZmaEvwuACsNehbeyPgw1Hd/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    <!-- 
    &lt;p&gt;In your portfolio, create a new page named &lt;i&gt;&lt;b&gt;Artificial Intelligence&lt;/b&gt;&lt;/i&gt; under the &lt;i&gt;Reflections&lt;/i&gt; category of your portfolio (we recommend also including the lesson number. Check with your instructor) and answer the following questions:&lt;/p&gt;
      &lt;ol&gt;
        &lt;li&gt;In the Teachable Machine activity, what inputs were easy for the program to learn to distinguish and what inputs were more difficult?
        &lt;/li&gt;
        &lt;li&gt;Search online and identify another application area for AI or machine learning besides the ones described in this lesson. Is this task hard easy for humans but hard for computers to do? &lt;/li&gt;
        &lt;li&gt;In this lesson you saw some examples of &lt;i&gt;gender bias&lt;/i&gt; in a machine translation program.  Identify another form of &lt;i&gt;unconscious bias&lt;/i&gt; and give an example of how it could affect a computer program. Explain how that could be a harmful effect on society, economy, or culture. &lt;/li&gt;
      &lt;/ol&gt; -->
    </div>
    </div>