.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Representing Images
===================

.. raw:: html

        <div class="MCSP-lesson-content">
    <script>
      $(document).ready(function() {
        generateSummary(EKmapping['3.03']);
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
        "ASCII":"ASCII is short for American Standard Code for Information Interchange is a character encoding scheme in which each character is represented by a 7-bit (originally) or 8-bit binary sequence. For example, the ASCII sequence 01000001 represents the letter 'A'.",
        "bit":"A bit is short for 'binary digit'",
        "bitmap":"A bitmap is a type of memory organization or image file format used to store digital images.",
        "byte":"One byte is 8 bits.",
        "lossless compression":"A lossless compression algorithm is one in which no data are lost; the original data can be completely recovered.",
        "lossy compression":"A lossy compression algorithm is one in which some data are lost; the original data cannot be completely restored.",
        "pixel":"A pixel, short for 'picture element', is a single physical point in a raster image.",
        "run length encoding":"A compression algorithm that represents an image in terms of the length of runs of identical pixels",
      };      */
    </script>
    <h3 id="est-length">Time Estimate: 90 minutes</h3>
    

Introduction and Goals
-----------------------

.. raw:: html

    <p>
    <table>
    <tbody>
      <tr>
		<td valign="top" colspan=2>
			<p>In this lesson we continue the exploration of <span class="hover vocab yui-wk-div" data-id='bit'>bits</span> and binary numbers that we began in Unit 2. In this case we learn how to use bits, 1s and 0s, to represent images.</p>
			<p>The image representation technique demonstrated in the video below is known as <span class="hover vocab yui-wk-div" data-id='run length encoding'>run-length encoding (RLE)</span> and it is an <a href="http://en.wikipedia.org/wiki/Image_compression" target="_blank">image compression</a> technique. Image compression is a type of <i>data compression</i> which can reduce the size (number of bits) of transmitted or stored data.</p>
		</td>
      </tr>    
      <tr>
        <td valign="top"><iframe allowfullscreen="" frameborder="0" width="265" height="320" src="https://www.youtube.com/embed/uaV2RuAJTjQ"></iframe>
        </td>
        <td valign="top">
		<div><b>Learning Objectives:</b>&nbspI will learn to</div>
          <ul>
          <li>convert images to bits using <span class="hover vocab yui-wk-div" data-id='run length encoding'>run length encoding</span> and text to bits using <span class="hover vocab yui-wk-div" data-id='ASCII'>ASCII</span></li>
		  <li>describe how <span class="hover vocab yui-wk-div" data-id='bit'>bits</span> can be used to represent digital data, including images, documents, and sounds</li>
		  <li>understand that digital representations are an example of abstraction</li>
          </ul>
          <div><b>Language Objectives:</b>&nbspI will be able to</div>
          <ul>
		  <li>compare and contrast <span class="hover vocab yui-wk-div" data-id='lossless compression'>lossless</span> and <span class="hover vocab yui-wk-div" data-id='lossy compression'>lossy</span> compression techniques</li>
          <li>use target vocabulary, such as <span class="hover vocab yui-wk-div" data-id='pixel'>pixel</span>, <span class="hover vocab yui-wk-div" data-id='ASCII'>ASCII</span>, and <span class="hover vocab yui-wk-div" data-id='run length encoding'>run length encoding</span> while describing how images and text are stored in memory, with the support of concept definitions and <a href="https://docs.google.com/presentation/d/1Pfrv_g1AGKNFPmgir1uGApfHtkhB783Te5kzVz5FZ8c/copy" target="_blank" title="">vocabulary notes</a> from this lesson</li>
        </ul>
        </td>
      </tr>
    </tbody>
    </table>



Learning Activities
--------------------

.. raw:: html

	<ul align="center" style="list-style: none; margin: 0; padding: 0; background: lightgrey">
	<li style="display: inline"><a href="https://docs.google.com/document/d/1Q4NinpY_-BLSjh9RVO1bD4apZYs4W93WbpX_nbas1Ec" target="_blank" title="">text-version</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://docs.google.com/presentation/d/1MmKmh7fJKCCfwGzA238VPXZYLkCZvIIUQZ9L-RIDEYQ/" target="_blank">slides</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://docs.google.com/document/d/1AkIwOQLTU4_TonpRh3LEqoLMXWiVdZ4AiYf1y-qWIEI/copy" target="_blank">worksheet</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://www.youtube.com/watch?v=xn3-BAiaJ1k" target="_blank">YouTube video</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="" target="_blank" title="">TeacherTube video - coming soon</a></li>
	</ul> 
	
	<div id="bogus-div">
    <p></p>
    </div>
	
    <div class="pogil yui-wk-div">
    <h3>POGIL Activity for the Classroom (30 minutes)</h3> 
      After watching the video above, work in POGIL teams or pairs to try your own hand at representing images using the <a href="https://docs.google.com/document/d/1AkIwOQLTU4_TonpRh3LEqoLMXWiVdZ4AiYf1y-qWIEI/copy" target="_blank">Image Representation Activity Worksheet</a>. <br/><br/>You can click on the <span class="hover vocab yui-wk-div" data-id='pixel'>pixel</span> buttons below to draw simple images or do the exercises on paper. <br/><p>
    Rows:    <input id="rows" name="rows" size="2" type="text" value="6"/> 
    Columns:    <input id="cols" name="cols" size="2" type="text" value="6"/>
    <input onclick="setupTable();" type="button" value="Reset"/>
    </p><table cellpadding="0" cellspacing="0" id="grid" style="padding:0">
    </table>
    <script>
    setupTable();
    // sets up a rows x cols table of buttons
    function setupTable() {
        var rows = parseInt(document.getElementById("rows").value);
        var cols = parseInt(document.getElementById("cols").value);
        var table = document.getElementById('grid');
        table.innerHTML = ""; //erase everything
        table.cellPadding = 0;
        table.cellSpacing = 0;
        for(r = 0; r < rows; r++) {
            var row = table.insertRow(r);
            for(c=0; c < cols; c++) {
                var cell = row.insertCell(c);
                cell.padding = 0;
                cell.style.padding = 0;
                cell.innerHTML = "<input type=button size=5 onClick='toggleButton(this)' style='background-color:white;width:100%'/>"; 
           }
        }
    }
        
    function toggleButton(btn) {
        if (btn.style.backgroundColor == "green")
            btn.style.backgroundColor = "white";
        else 
            btn.style.backgroundColor = "green";
    }
    </script>
    <p>Try drawing in the following <span class="hover vocab yui-wk-div" data-id='run length encoding'>RLE compression</span> and see if you get something you recognize. Remember the first number in each row is the number of white pixels.
      </p><pre>  0, 6
      4, 1, 1
      3, 1, 2
      2, 1, 3
      1, 1, 4
      0, 6
      </pre>
    Continue with the rest of the exercises in the <a href="https://docs.google.com/document/d/1AkIwOQLTU4_TonpRh3LEqoLMXWiVdZ4AiYf1y-qWIEI/copy" target="_blank">Image Representation Activity Worksheet</a>.<br/>
    </div>
    
    <p><h3>Run-Length Encoding</h3><p style="font-family: arial, helvetica, clean, sans-serif; white-space: normal;">The following video presentation explores some of the details of <span class="hover vocab yui-wk-div" data-id='run length encoding'>RLE image compression</span> (an example of <span class="hover vocab yui-wk-div" data-id='lossless compression'>lossless compression</span>) and illustrates some of the ways that images and other data are represented with binary numbers.</p>
.. youtube:: xn3-BAiaJ1k
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    <ul><li style="margin-bottom: 5px;">Fewer bits does not necessarily mean less information.</li>
    <li style="margin-bottom: 5px;">The amount of size reduction from compression depends on both the amount of redundancy in the original data representation and the compression algorithm applied.</li><li>The amount of compression can vary depending on how many bits are used to represent each <span class="hover vocab yui-wk-div" data-id='pixel'>pixel</span> in the image. </li>
    <li style="margin-bottom: 5px;">The amount of compression also depends on the number of different colors used in the actual image.  For our black and white spaceship there were only 2 colors, so there were relatively few color changes and therefore lots of long runs. If it were a colored spaceship, there would be many color changes and therefore fewer long runs. So we would get much less compression. </li>
    <li style="margin-bottom: 5px;">A <span class="hover vocab yui-wk-div" data-id='lossless compression'>lossless compression</span> algorithm is one in which no data are lost; the original data can be completely recovered. An example of <span class="hover vocab yui-wk-div" data-id='lossless compression'>lossless compression</span> is <span class="hover vocab yui-wk-div" data-id='run length encoding'>RLE</span>.</li>
    <li style="margin-bottom: 5px;">A <span class="hover vocab yui-wk-div" data-id='lossy compression'>lossy compression</span> algorithm is one in which some data are lost; the original data cannot be completely restored. An example of <span class="hover vocab yui-wk-div" data-id='lossy compression'>lossy compression</span> is JPEG.</li>
    <li><span class="hover vocab yui-wk-div" data-id='lossy compression'>Lossy data compression</span> algorithms can usually reduce the number of bits stored or transmitted more than <span class="hover vocab yui-wk-div" data-id='lossless compression'>lossless compression</span> algorithms.</li>
    </ul>
    <div class="pogil yui-wk-div">
    <h3>Other Activities</h3>
    <p>Your teacher may ask you to do some of the following activities in POGIL teams or pairs.
    </p><ol>
    <li style="margin-bottom: 5px;">
    American Standard Code for Information Interchange (<span class="hover vocab yui-wk-div" data-id='ASCII'>ASCII</span>) is character code that includes 128 characters.
    Write your own message in binary that someone else could decode using an <a href="http://sticksandstones.kstrom.com/appen.html" target="_blank"><span class="hover vocab yui-wk-div" data-id='ASCII'>ASCII</span> to Binary table</a>. Trade messages in class and decode each others.
    </li>
    <li style="margin-bottom: 5px;"> 
    In web pages and in App Inventor, colors are represented using hexcode for Red, Green, and Blue values.
    Here’s <a href="http://www.w3schools.com/colors/colors_mixer.asp" target="_blank" title="">a color mixer app</a> 
    that lets you explore the different colors that are used in Web pages.  You can also try making a Custom Color in App Inventor by changing the Screen's BackgroundColor property to Custom. How many bits are used to 
    represent the colors in Hex Code?   Figure out  the Hex code for pure red?  pure green? pure blue?
    </li>
    <li style="margin-bottom: 5px;">Research another image type (e.g. 
    <a href="http://en.wikipedia.org/wiki/Graphics_Interchange_Format" target="_blank">GIF</a>, 
    <a href="http://en.wikipedia.org/wiki/Portable_Network_Graphics" target="_blank">PNG</a>, 
    <a href="http://en.wikipedia.org/wiki/BMP_file_format" target="_blank">BMP</a>, 
    <a href="http://en.wikipedia.org/wiki/TIFF" target="_blank">TIFF</a>, etc.) 
    and compare and contrast the data needed to 
    store information about the images. Include what type of compression is used. 
    </li>
    <li style="margin-bottom: 5px;">If you have a digital camera or a smartphone or tablet, find out what image representation scheme 
    it uses?  How come all images are not the same size?
    </li>
    <li><span class="hover vocab yui-wk-div" data-id='ASCII'>ASCII</span> is one type of character code, but 128 characters is not enough for today’s computers, 
      which can represent Chinese, Hindi, and scripts from many other languages.  Today’s computers 
      use a system called Unicode, which has more than 100,000 different characters and covers 
      more than 100 different scripts (languages).  Use this 
    <a href="http://pages.ucsd.edu/~dkjordan/resources/unicodemaker.html" target="_blank">Unicode converter</a> to convert these Chinese characters to their hexadecimal Unicode values and to 
      their corresponding decimal values:  国话.  Convert these Greek letters: οι.  Convert these 
      Russian letters: Я ю.  
    </li>
    </ol>
    </div>
    
Summary
--------

.. raw:: html

    <p>
    In this lesson, you learned how to:
      <div class="yui-wk-div" id="summarylist">
    </div>
    <p></p>
    
Still Curious?
---------------

.. raw:: html

    <p>
    <p><b>How do Snapchat filters work?</b>
    <br/>
    If you or someone you know uses the social media app Snapchat, they have probably used one of those cool filters. But, how exactly do those filters work? Watch the video below to learn more about the algorithm and <span class="hover vocab yui-wk-div" data-id='pixel'>pixel</span> data behind Snapchat filters.
    </p>
    
.. youtube:: Pc2aJxnmzh0
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <p><b>How does JPEG encoding work?</b> <br/>JPEG is an example of a <span class="hover vocab yui-wk-div" data-id='lossy compression'>lossy compression</span> algorithm.  JPEG, 
      which uses the file extension .jpg or .jpeg, is the most common format used today to represent images.The JPEG algorithm was created by the Joint Photographic Experts Group (JPEG), hence its name.  The fact that JPEG is a <span class="hover vocab yui-wk-div" data-id='lossy compression'>lossy</span> technique means that some of the information present 
      in the image is lost during compression and cannot be recovered. Here is a <a href="https://www.youtube.com/watch?v=mKxlrWcvyJs" target="_blank">video lecture on the JPEG compression algorithm</a> (<a href="http://www.teachertube.com/video/mobile-csp-jpeg-lossy-compression-438227" target="_blank" title="">Teacher Tube version</a>). The compression
      algorithm involves some math, but the video describes just enough of the math so 
      that you can see how JPEG works. The video is a summary of an excellent, more detailed 
      <a href="https://www.youtube.com/watch?v=f2odrCGjOFY" target="_blank">presentation by Randell Heyman</a> -- you should really
      check out the Heyman video if you are interested in more of the mathematical details.
      
    <!-- &lt;br&gt;&lt;gcb-youtube videoid=&quot;mKxlrWcvyJs&quot; instanceid=&quot;FPUwcC36eOm9&quot;&gt;&lt;/gcb-youtube&gt;&amp;nbsp;-->
    </p>
    <p><b>How are audio files digitized?</b>
    <br/>
    What about audio files? How are they digitized and converted to bits? Watch the following <a href="https://www.youtube.com/watch?v=ALFXrlrnAcI" target="_blank">video</a> for a summary of how audio files are converted from <span class="hover vocab yui-wk-div" data-id='analog'>analog</span> to digital format. <span class="hover vocab yui-wk-div" data-id='analog'>Analog</span> refers to data with values that change continuously, or smoothly, over time, like sound or music files.  
    <span class="hover vocab yui-wk-div" data-id='analog'>Analog</span> data is converted to a digital forms, 0s and 1s in binary, using a <span class="hover vocab yui-wk-div" data-id='sampling'>sampling</span> technique, which means measuring values of the <span class="hover vocab yui-wk-div" data-id='analog'>analog</span> signal at regular intervals (usually in time or space) called samples. The samples are measured to figure out the exact bits required to store each sample. The use of digital data to approximate real-world <span class="hover vocab yui-wk-div" data-id='analog'>analog</span> data is a great example of abstraction!
    <br/>
.. youtube:: ALFXrlrnAcI
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>
      
      Here's a fun activity if you have a computer or tablet with a microphone. Go to <a href="https://academo.org/demos/virtual-oscilloscope/" target="_blank">https://academo.org/demos/virtual-oscilloscope/</a> or a different audio recorder and see the sound waves that your voice can produce. Think about how they would be represented in 0s and 1s.</p><p>
    
    Different audio file extensions compress the audio data in different ways. WAV files are huge because they just store snapshots of digitized values at different points of time with no compression. MP3 formatting compresses audio files by removing parts of the audio signal which the human ear cannot easily hear. They save on space while preserving good audio quality.
    
    </p>


Self-Check
-----------

.. raw:: html

    <p>
    
    <h3>Vocabulary</h3>
    <p>Here is a table of some of the technical terms we've introduced in this lesson. Hover over the terms to review the definitions.
    </p>
    <table align="center">
    <tbody>
    <tr>
    <td><span class="hover vocab yui-wk-div" data-id="ASCII">ASCII</span>
    <br/><span class="hover vocab yui-wk-div" data-id="bit">bit</span>
    <br/><span class="hover vocab yui-wk-div" data-id="bitmap">bitmap</span>
    <br/><span class="hover vocab yui-wk-div" data-id="byte">byte</span>
    <br/><span class="hover vocab yui-wk-div" data-id="pixel">pixel</span>
    </td>
    <td><span class="hover vocab yui-wk-div" data-id="lossless compression">lossless compression</span>
    <br/><span class="hover vocab yui-wk-div" data-id="lossy compression">lossy compression</span>
    <br/><span class="hover vocab yui-wk-div" data-id="run length encoding">run length encoding</span>
    <br/><span class="hover vocab yui-wk-div" data-id="analog">analog</span>
    <br/><span class="hover vocab yui-wk-div" data-id="sampling">sampling</span>
    </td>
    </tr>
    </tbody>
    </table>
    
	<h3>Check Your Understanding</h3>
    <p>Complete the following self-check exercises. 
	</p>
	
.. fillintheblank:: mcsp-3-3-1
    :casei:

    In the video, you learned how black and white images can be represented using bits and numbers. What letter of the alphabet would be represented by the following set of numbers representing its RLE compression? You can use the interactive pixel grid above or in another tab to work this out.
	
	.. raw:: html
	
		1, 4, 2<br />
		1, 1, 3, 1, 1<br />
		1, 1, 3, 1, 1<br />
		1, 5, 1<br />
		1, 1, 4, 1<br />
		1, 1, 4, 1<br />
		1, 1, 4, 1<br />
		1, 5, 1

    - :B: 
      :x: 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <br/>
    
.. mchoice:: mcsp-3-3-2
    :random:
    :practice: T
    :answer_a: <br>1, 1, 1<br>0, 3<br>0, 3<br>1, 1, 1<br>1, 1, 1<br>1, 1, 1<br>1, 1, 1<br>1, 1, 1<br>1, 1, 1<br>
    :feedback_a: We’re in the learning zone today. Mistakes are our friends!
    :answer_b: <br>1, 3, 1<br>0, 1, 3, 1<br>0, 1, 4<br>0, 1, 4<br>0, 1, 3, 1<br>1, 3, 1
    :feedback_b: 
    :answer_c: <br>1, 3<br>0, 1, 3<br>0, 2, 2<br>2, 2<br>3, 1<br>0, 3, 1
    :feedback_c: We’re in the learning zone today. Mistakes are our friends!
    :correct: b

    Which set of numbers would encode the letter "c"? You can use the interactive pixel grid above or in another tab to work this out. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    

Sample AP CSP Exam Question
----------------------------

.. raw:: html

    <p>
.. mchoice:: mcsp-3-3-3
    :random:
    :practice: T
    :answer_a:  Data compression is only useful for files being transmitted over the Internet.
    :feedback_a: 
    :answer_b:  No matter what compression technique is used, once a data file is compressed, it cannot be restored to its original state.
    :feedback_b: 
    :answer_c:  Sending a compressed version of a file ensures that the contents of the file cannot be intercepted by an unauthorized user.
    :feedback_c: 
    :answer_d:  There are trade-offs involved in choosing a compression technique for storing and transmitting data.
    :feedback_d: That's correct!
    :correct: d

    Which of the following is a true statement about data compression?


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>



Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1WeSqrKah7ywfqUDAr2rN2L6UsvJIcp5DGV-Q1uqdZy4/copy" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vShXtl_zeTRB7z6gTRyk80XuF5LwpwgZrXgBgXL-lq9XrgZSevDgrbuBY_hrtTU22ON7yzIkukufmV6/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    <!--
    Create a new page named &lt;i&gt;Representing Images&lt;/i&gt; under the &lt;i&gt;Reflections&lt;/i&gt;
     category of your portfolio and answer the following questions:
    
    &lt;ol&gt;
    &lt;li&gt;Decode this message by converting it from binary to ASCII:
    1000001  1110000  1110000  0100000  1001001  1101110  1110110  1100101  1101110
    1110100  1101111  1110010  0100000  1010010  1001111  1000011  1001011  1010011
    0100001
    &lt;br&gt;
    You can use this chart to help you: &lt;a href=&quot;https://docs.google.com/document/d/1Q4NinpY_-BLSjh9RVO1bD4apZYs4W93WbpX_nbas1Ec/edit#heading=h.6e2ngjbac86z&quot;&gt;ASCII Conversion Chart&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
    Describe what it means to say that &lt;a href=&quot;http://en.wikipedia.org/wiki/JPEG&quot;&gt;JPEG&lt;/a&gt;
    is  a lossy 
    compression technique and  whether or not it affects the quality of camera pictures.
    &lt;/li&gt;
    &lt;li&gt;Give a specific example of a binary sequence that can represent more 
    than one type of data -- 
    e.g., a number, a color, a character -- and describe how to interpret its 
    different values. 
    &lt;/li&gt;
    
    &lt;/ol&gt;-->
    </div>
    </div>