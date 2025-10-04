.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

I Have a Dream and Soundboard Projects
======================================

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
        generateSummary(EKmapping['2.07']);
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
    <h3 id="est-length">Time Estimate: 90 minutes including the <i>Create Your Own Soundboard</i> project</h3>
    
Introduction and Goals
-----------------------

.. raw:: html
  
    
    <table>
    <tbody>
    <tr><td  colspan=2><b><i>Be Creative!</i></b> In this lesson you will complete several small programming projects that add enhancements to the I Have a Dream app.  Hints and suggestions are provided.</td>
    </tr>
    <tr valign="top">
       <td>
         <iframe allowfullscreen="" frameborder="0" height="300" src="https://www.youtube.com/embed/vGrqqz-IFtY" width="250"></iframe><br/>
         (<a href="http://www.teachertube.com/video/358487" target="_blank">Teacher Tube version</a>)
       </td>
       <td>
          <div><b>Learning Objectives:</b>&nbspI will learn to</div>
          <ul>
          <li>better navigate the MIT App Inventor programming platform</li>
          <li>deepen my understanding of event-driven programming</li>
          <li>describe the functionality of a computing innovation</li>
          <li>use pair programming to improve an app</li>
          </ul>
		  <div><b>Language Objectives:</b>&nbspI will be able to</div>
           <ul>
           <li>describe the functionality of an app using key vocabulary such as component, event, sensor, if/else, theme, out loud and in writing, with the support of <a href="https://docs.google.com/presentation/d/1n-K4AQ_maHcXekzcfERQ9dxj91nqv9ytwJx4ZkAp8zw/copy" target="_blank" title="">vocabulary notes</a> from previous lessons</li>
           <li>explain the advantages of collaboration when developing and improving computing innovations using supporting details and examples</li>
           </ul>
       </td>
    </tr>
    </tbody>
    </table>
    
Learning Activities
---------------------------------

.. raw:: html

	<ul align="center" style="list-style: none; margin: 0; padding: 0; background: lightgrey">
	<li style="display: inline"><a href="https://docs.google.com/document/d/1zbf8peBObd8GOewfa0oSjnQ6bAb1h1CjTg_tCrnA9qU" target="_blank" title="">text-version</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://docs.google.com/document/d/1-4oA9bdqDRse1nYpV2wxHnOIwFNas01TbeRnVSBKQ6I/view" target="_blank">How To: Create an App Video</a></li>
	</ul>

    <h3>Enhancing the I Have a Dream App</h3>
    <p>To get started, <a href="http://ai2.appinventor.mit.edu/" target="_blank">open MIT App Inventor</a>
     in a separate tab and open your I Have a Dream app from the previous lesson.
      Complete the programming exercises described below and in the preview video.  Then, design your own sound board project below.
      
     </p><ol>
    <li>Give the app its own custom icon that will appear in the device's app launcher when the app is packaged (built). (Hint: Click on the <b>Project Properties</b> button at the top for the Icon property);</li>
    <li>Use MIT App Inventor's <a href="http://ai2.appinventor.mit.edu/reference/components/media.html#TextToSpeech" target="_blank">
         Text-to-Speech</a> component (Media drawer) to get the app to speak some words
         instead of playing a speech when the Malcolm X button is pressed.
       </li>
    <li>Have the app vibrate the phone as well as play a speech when the MLK button is
         pressed (Hint: the Sound component has a Vibrate block.  <font color="red">NOTE:</font> 
         Not all Android devices have a vibrate mode, which is usually a Sound setting.  
         For example, Nexus 7 tablets can not vibrate.)
       </li>
    <li>Use MIT App Inventor's <a href="http://ai2.appinventor.mit.edu/reference/components/sensors.html#AccelerometerSensor" target="_blank">
         Accelerometer Sensor</a> (Sensor drawer) to trigger Malcolm X's Text-to-Speech when the device is shaken. 
       </li>
    </ol>
    <p>Need some help with the Text-to-Speech and Accelerometer? Try watching <a href="http://www.appinventor.org/content/howDoYou/eventHandling/shaking" target="_blank">this video</a> and then debugging your code.</p>
    

	<h3>A Sound Board Project</h3>
    
    Use <a href="https://www.youtube.com/watch?v=vgkahOzFH2Q" target="_blank">Pair Programming</a> for this project. You and your partner will:
    <ol>
    <li style="margin-bottom: 5px;">Create your own <i>Soundboard</i> app with at least three pictures and  three sound files that are played 
      when you click the pictures.  Make sure that your app doesn't allow the sounds to overlap each other.  That is,
      when you click a button to play a sound, the app should pause any sound that is already playing.  This will
      require the use of an <b>if/else</b> block.</li>
    <li style="margin-bottom: 5px;"><span class="yui-non"><b>(Portfolio)</b> Create a short video in .mp4, .wmv, .avi, or .mov format that demonstrates your app. The video must not exceed 1 minute in length and must not exceed 30MB in size. See <a href="https://docs.google.com/document/d/1-4oA9bdqDRse1nYpV2wxHnOIwFNas01TbeRnVSBKQ6I/view" target="_blank" title="">How To: Create an App Video</a> for help with creating a video. Be sure to post your video to your portfolio.</span></li> 
    <li><b>(Portfolio)</b> Reflect with your partner on a difficulty you had with coding this app. How did collaboration help you overcome the challenge?</li>
    </ol>
    <p><b>Optional:</b> Create your own icons, images, and sound files for your app using programs such as 
      Paint and Audacity.
    </p>
    <h3>Finding Copyright-free Image and Sound Files</h3>
    <p>Many sounds and images online are copyrighted and it is a <b><i>violation
      of copyright</i></b> to include such images in your app.  So, you should be
      careful about the images and sounds you put into your apps.  If you want to use
      a copyrighted image or sound in your app, you will have to get permission from 
      the holder of the copyright.  It might be easier just to search for free media.
    </p>
    <p>There are sites that offer free audio and image files, including the following:</p>
    <ul>
     <li><a href="https://pexels.com/" target="_blank">Pexels</a> (free shared images)</li>
    <li><a href="https://pixabay.com/" target="_blank">Pixabay</a> (free shared images)</li>
    <li><a href="http://images.google.com" target="_blank">Google Image Search</a>: search for an image, then on the results page, select Tools. Under the Usage Rights drop-down, select Creative Commons Licenses.</li>
    <li><a href="http://soundbible.com/royalty-free-sounds-1.html" target="_blank">Sound Bible</a> (free sound files)</li>
    <li><a href=" https://www.youtube.com/c/AudioLibrarySoundEffects" target="_blank">Youtube Sound Effects</a> (free sound files)</li>
    <li><a href="http://www.freesound.org/">Freesound.org</a> (requires registration) </li>
    <li><a href="http://www.freesfx.co.uk/">Freesfx.co.uk</a> (requires registration)</li>
    </ul>
    <h3>Resizing Images and Sound Files</h3>
    <p>MIT App Inventor apps have a <b>5 Mb size limit</b>.  Therefore not all images and
      sounds you upload will work in your app.  Here are some tools that can
      be used to resize images and sounds:
    </p>
    <ul>
    <li>On MacOS, the <i>Preview</i> application can be used to resize images.  Just
        open the image in Preview and use the <i>Tools</i> menu to resize it.
      </li>
    <li>On Windows machines, the <i>Paint</i> application can be used to resize
        images.  Just open the image and use the <i>Resize</i> tool.
      </li>
    <li>For editing sound files,  <a href="http://audacity.sourceforge.net/" target="_blank">
        Audacity</a> is a free and open source sound file editor for all platforms.
      </li>
    <li>You can also downsize sound files using the free online web app <a href="http://cutmp3.net/" target="_blank">CutMp3.net</a>
    </li>
    <li>If your video mp4 file is too big, try uploading to a youtube channel and then click Manage to download as a much smaller mp4 file. </li>
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
    
.. mchoice:: repl-mcsp-2-7-1
    :random:
    :practice: T
    :answer_a: a thousand seconds
    :feedback_a: Don’t worry, it’s hard! Let’s go back and try it again.
    :answer_b: 1/0 of a second
    :feedback_b: Don’t worry, it’s hard! Let’s go back and try it again.
    :answer_c: 1/100 of a second
    :feedback_c: Don’t worry, it’s hard! Let’s go back and try it again.
    :answer_d: 1/1000 of a second
    :feedback_d: 
    :correct: d

    How long is a millisecond?


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: repl-mcsp-2-7-2
    :random:
    :practice: T
    :answer_a: event
    :feedback_a: An event is something the app can react to, often an action performed by the user.
    :answer_b: parameter
    :feedback_b: Let me add new information to help you solve this; a parameter is information a function needs to do its job, like the number of milliseconds to vibrate the phone.
    :answer_c: function call
    :feedback_c: Let me add new information to help you solve this; a function is a block you place within an event handler. It is something the app does.
    :correct: a

    In an MIT App Inventor app, shaking the phone is a:


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: repl-mcsp-2-7-3
    :random:
    :practice: T
    :answer_a: A picture that shows up on the app's user interface
    :feedback_a: If it were easy, you wouldn’t be learning anything!
    :answer_b: The person the app is about.
    :feedback_b: If it were easy, you wouldn’t be learning anything!
    :answer_c: The picture that appears on the device when you install the app.
    :feedback_c: 
    :answer_d: The title that appears above the screen
    :feedback_d: If it were easy, you wouldn’t be learning anything!
    :correct: c

    What is the app's icon?


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    

Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1uMOURzGkcW4qsm_Ykm3LqeZPvUxmw-wvizN9U9oJxFg/copy" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vQlI61IBBWDi4Yx--fK24zCu-lrUZ2dfz3BMeSmDLVsIOH2Ki4oim3kYtYWdVnHzhZ-xMO1lsC1Ylno/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    <!--&lt;p&gt;In your portfolio, create a new page named &lt;b&gt;&lt;i&gt;I Have a Dream Projects&lt;/i&gt;&lt;/b&gt; under the &lt;i&gt;Creative Projects&amp;nbsp;&lt;/i&gt;category of your portfolio (If you are using the Mobile CSP Student portfolio template, this page has already been created for you) and  answer the following questions:&lt;/p&gt;
      &lt;ol&gt;
        &lt;li&gt;In this lesson, you created your own &lt;i&gt;sound board app&lt;/i&gt;.  Give a brief description of it here.  Describe its theme, if it has one, and what particular sounds (music or speeches) it plays. Include the 1 minute video that you made for your app.&lt;/li&gt;
        &lt;li&gt;Describe how you designed your app&#39;s UI. What components does it use?&lt;/li&gt;
        &lt;li&gt;Now that you&#39;ve had some experience building apps in MIT App Inventor, what do you think about &lt;i&gt;&lt;b&gt;programming&lt;/b&gt;&lt;/i&gt;.  Is it a creative activity?  In what ways does it allow you to express yourself?&lt;/li&gt;
      &lt;/ol&gt;-->
    </div>
    </div>