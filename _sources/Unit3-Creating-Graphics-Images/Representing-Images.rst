.. raw:: html 

    <a href="../index.html"><img class="align-center" src="../_static/MobileCSPLogo.png" width="250px"/></a>

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
    
    In this lesson we continue the exploration of <i><b>bits</b></i> and  
    <i><b>binary numbers</b></i> that we began
    in unit 2.  In this case we learn how to use bits, 1s and 0s,  to represent images. 
    The objectives of this lesson are:
    <p></p><ul>
    <li>to understand that all digital data, including electronic documents, are 
    composed of bits,
    </li>
    <li>to understand that representing an image digitally is another example of 
    abstraction at work.
    </li>
    </ul><div class="yui-wk-div">The image representation technique demonstrated in the video below is known as <i><b>run-length encoding (RLE)</b></i> and it is an <a href="http://en.wikipedia.org/wiki/Image_compression" target="_blank">image compression</a> technique. Image compression is a type of <i>data compression</i> which can reduce the size (number of bits) of transmitted or stored data.<br/></div>
    <p></p>
    
.. youtube:: uaV2RuAJTjQ
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

Learning Activities
--------------------

.. raw:: html

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
    <p>Try drawing in the following RLE compression and see if you get something you recognize. Remember the first number in each row is the number of white pixels.
      </p><pre>  0, 6
      4, 1, 1
      3, 1, 2
      2, 1, 3
      1, 1, 4
      0, 6
      </pre>
    Continue with the rest of the exercises in the <a href="https://docs.google.com/document/d/1AkIwOQLTU4_TonpRh3LEqoLMXWiVdZ4AiYf1y-qWIEI/copy" target="_blank">Image Representation Activity Worksheet</a>.<br/>
    </div>
    
    <p><h3>Run-Length Encoding</h3><p style="font-family: arial, helvetica, clean, sans-serif; white-space: normal;">The following video presentation explores some of the details of RLE image compression (an example of <b><i><span class="hover vocab yui-wk-div" data-id='lossless compression'>lossless compression</span></i></b>) and illustrates some of the ways that images and other data are represented with binary numbers.</p>
.. youtube:: xn3-BAiaJ1k
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    <ul><li>Fewer bits does not necessarily mean less information.</li>
    <li>The amount of size reduction from compression depends on both the amount of redundancy in the original data representation and the compression algorithm applied.</li><li>The amount of compression can vary depending on how many bits are used to represent each <span class="hover vocab yui-wk-div" data-id='pixel'>pixel</span> in the image. </li>
    <li>The amount of compression also depends on the number of different colors used in the actual image.  For our black and white spaceship there were only 2 colors, so there were relatively few color changes and therefore lots of long runs. If it were a colored spaceship, there would be many color changes and therefore fewer long runs. So we would get much less compression. </li>
    <li>A <span class="hover vocab yui-wk-div" data-id='lossless compression'>lossless compression</span> algorithm is one in which no data are lost; the original data can be completely recovered. An example of <span class="hover vocab yui-wk-div" data-id='lossless compression'>lossless compression</span> is RLE.</li>
    <li>A <span class="hover vocab yui-wk-div" data-id='lossy compression'>lossy compression</span> algorithm is one in which some data are lost; the original data cannot be completely restored. An example of <span class="hover vocab yui-wk-div" data-id='lossy compression'>lossy compression</span> is JPEG.</li>
    <li>Lossy data compression algorithms can usually reduce the number of bits stored or transmitted more than <span class="hover vocab yui-wk-div" data-id='lossless compression'>lossless compression</span> algorithms.</li>
    </ul>
    <div class="pogil yui-wk-div">
    <h3>Other Activities</h3>
    <p>Your teacher may ask you to do some of the following activities in POGIL teams or pairs.
    </p><ol>
    <li>
    American Standard Code for Information Interchange (<span class="hover vocab yui-wk-div" data-id='ASCII'>ASCII</span>) is character code that includes 128 characters.
    Write your own message in binary that someone else could decode using an <a href="http://sticksandstones.kstrom.com/appen.html" target="_blank"><span class="hover vocab yui-wk-div" data-id='ASCII'>ASCII</span> to Binary table</a>. Trade messages in class and decode each others.
    </li>
    <li> 
    In web pages and in App Inventor, colors are represented using hexcode for Red, Green, and Blue values.
    Here’s <a href="http://www.w3schools.com/colors/colors_mixer.asp" target="_blank" title="">a color mixer app</a> 
    that lets you explore the different colors that are used in Web pages.  You can also try making a Custom Color in App Inventor by changing the Screen's BackgroundColor property to Custom. How many bits are used to 
    represent the colors in Hex Code?   Figure out  the Hex code for pure red?  pure green? pure blue?
    </li>
    <li>Research another image type (e.g. 
    <a href="http://en.wikipedia.org/wiki/Graphics_Interchange_Format" target="_blank">GIF</a>, 
    <a href="http://en.wikipedia.org/wiki/Portable_Network_Graphics" target="_blank">PNG</a>, 
    <a href="http://en.wikipedia.org/wiki/BMP_file_format" target="_blank">BMP</a>, 
    <a href="http://en.wikipedia.org/wiki/TIFF" target="_blank">TIFF</a>, etc.) 
    and compare and contrast the data needed to 
    store information about the images. Include what type of compression is used. 
    </li>
    <li>If you have a digital camera or a smartphone or tablet, find out what image representation scheme 
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


    <p><b>How does JPEG encoding work?</b> <br/>JPEG is an example of a <i><b><span class="hover vocab yui-wk-div" data-id='lossy compression'>lossy compression</span> algorithm</b></i>.  JPEG, 
      which uses the file extension .jpg or .jpeg, is the most common format used today to represent images.The JPEG algorithm was created by the Joint Photographic Experts Group (JPEG), hence its name.  The fact that JPEG is a lossy technique means that some of the information present 
      in the image is lost during compression and cannot be recovered. Here is a <a href="https://www.youtube.com/watch?v=mKxlrWcvyJs" target="_blank">video lecture on the JPEG compression algorithm</a> (<a href="http://www.teachertube.com/video/mobile-csp-jpeg-lossy-compression-438227" target="_blank" title="">Teacher Tube version</a>). The compression
      algorithm involves some math, but the video describes just enough of the math so 
      that you can see how JPEG works. The video is a summary of an excellent, more detailed 
      <a href="https://www.youtube.com/watch?v=f2odrCGjOFY" target="_blank">presentation by Randell Heyman</a> -- you should really
      check out the Heyman video if you are interested in more of the mathematical details.
      
    <!-- &lt;br&gt;&lt;gcb-youtube videoid=&quot;mKxlrWcvyJs&quot; instanceid=&quot;FPUwcC36eOm9&quot;&gt;&lt;/gcb-youtube&gt;&amp;nbsp;-->
    </p>
    <p><b>How are audio files digitized?</b>
    <br/>
    What about audio files? How are they digitized and converted to bits? Watch the following <a href="https://www.youtube.com/watch?v=ALFXrlrnAcI" target="_blank">video</a> for a summary of how audio files are converted from <b><span class="hover vocab yui-wk-div" data-id='analog'>analog</span></b> to digital format.  <b><span class="hover vocab yui-wk-div" data-id='Analog'>Analog</span></b> refers to data with values that change continuously, or smoothly, over time, like sound or music files.  
    <span class="hover vocab yui-wk-div" data-id='Analog'>Analog</span> data is converted to a digital forms, 0s and 1s in binary, using a <span class="hover vocab yui-wk-div" data-id='sampling'>sampling</span> technique, which means measuring values of the <span class="hover vocab yui-wk-div" data-id='analog'>analog</span> signal at regular intervals (usually in time or space) called samples. The samples are measured to figure out the exact bits required to store each sample. The use of digital data to approximate real-world <span class="hover vocab yui-wk-div" data-id='analog'>analog</span> data is a great example of abstraction!
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
    
    
    Here is a table of the technical terms introduced in this lesson. Hover over the terms to review the definitions.
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
    
.. fillintheblank:: mcsp-3-3-1
    :casei:

    In the video, you learned how black and white images can be represented using bits and numbers. What letter of the alphabet would be represented by the following set of numbers representing its RLE compression? You can use the interactive pixel grid above under Practice or in another tab to work this out.1, 4, 21, 1, 3, 1, 11, 1, 3, 1, 11, 5, 11, 1, 4, 11, 1, 4, 11, 1, 4, 11, 5, 1 |blank|

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
    :answer_a: 1, 1, 1<br>0, 3<br>0, 3<br>1, 1, 1<br>1, 1, 1<br>1, 1, 1<br>1, 1, 1<br>1, 1, 1<br>1, 1, 1<br>
    :feedback_a: We’re in the learning zone today. Mistakes are our friends!
    :answer_b: 1, 3, 1<br>0, 1, 3, 1<br>0, 1, 4<br>0, 1, 4<br>0, 1, 3, 1<br>1, 3, 1
    :feedback_b: 
    :answer_c: 1, 3<br>0, 1, 3<br>0, 2, 2<br>2, 2<br>3, 1<br>0, 3, 1
    :feedback_c: We’re in the learning zone today. Mistakes are our friends!
    :correct: b

    Which set of numbers would encode the letter "c"? You can use the interactive pixel grid above under Practice or in another tab to work this out. 


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
    :answer_a: (A) Data compression is only useful for files being transmitted over the Internet.
    :feedback_a: 
    :answer_b: (B) No matter what compression technique is used, once a data file is compressed, it cannot be restored to its original state.
    :feedback_b: 
    :answer_c: (C) Sending a compressed version of a file ensures that the contents of the file cannot be intercepted by an unauthorized user.
    :feedback_c: 
    :answer_d: (D) There are trade-offs involved in choosing a compression technique for storing and transmitting data.
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
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1WeSqrKah7ywfqUDAr2rN2L6UsvJIcp5DGV-Q1uqdZy4/edit?usp=sharing" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
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