.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

App Inventor Setup
==================

.. raw:: html

     <div class="MCSP-lesson-content">
     <h3 id="est-length">Time Estimate: 15-45 minutes</h3>

Introduction and Goals
-----------------------

.. raw:: html

     <img  src="http://appinventor.mit.edu/images/logo.png"><br>

     <p>This course uses <a href="http://appinventor.mit.edu/explore/" target="_blank">MIT's App Inventor</a>, a visual drag and drop programming environment that can be used to quickly build mobile apps. Here's a fun introduction video about App Inventor. <br>
       <iframe width="100%" height="400" src="https://www.youtube.com/embed/sNjGAiOrX-o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


       <br>

     <p>In this lesson, you will try an already-built App Inventor project and make sure that it runs with your mobile device or computers. The setup requires that you already have a gmail account. If you do not, you should go back to the previous lesson before moving on.</p>

Learning Activities
-----------------------

.. raw:: html

     <p>App Inventor is an example of an <a target="_blank" href="https://en.wikipedia.org/wiki/Integrated_development_environment">Integrated Development Environment (IDE)</a>, which means that all of the software tools needed to design, develop, and test a mobile app are integrated within the App Inventor platform.  IDEs are part of the standard toolkit that programmers use to develop programs.</p>

     <p>App Inventor is a <a href="http://en.wikipedia.org/wiki/Cloud_computing" target="_blank">cloud application</a>. It runs completely within a browser. Chrome, Firefox and Safari are the recommended browsers. <b>App Inventor is not supported on Internet Explorer!</b> Make sure your computer has the latest version of your preferred browser. </p>

     <p>The Setup instructions describe four options for developing apps with App Inventor.  The following links will bring you to App Inventor's site for the setup instructions. We recommend that you set yourself up with at least a couple options. </p>

     <ul>
     <li><a href="http://appinventor.mit.edu/explore/ai2/setup-device-wifi.html">Wifi: Connecting an Android or iOS (iPhone, iPad, iPod) mobile device (tablet or smart phone) via a Wifi link.</a></li>
     <li><a href="http://appinventor.mit.edu/explore/ai2/setup-device-usb.html">USB: Connecting a mobile device via a USB cable.</a></li>
     <li><a href="http://appinventor.mit.edu/explore/ai2/setup-emulator.html">Android emulator: Using emulator software running on your computer to test your apps.</a></li>
     <li><a href="https://docs.google.com/document/d/1XBRVe9Rb8bIauJohaf-Bb-GJ-D9hVHOjoongpMu_vyA/edit" target="_blank" title="">Other emulators</a></li>
     </ul>

     <p>This course is best experienced with an Android or iOS mobile device, either a tablet or smartphone. App Inventor now works on iPhones too! Most lessons will work with the emulator too. If you are using a Chromebook, install the MIT AI2 Companion App from the play store and use Connect/Companion from App Inventor to connect to it in a different window by typing in the 6 character code. For best results on the Chromebook companion, change the Screen property <b>Sizing</b> to <b>responsive</b> instead of fixed in App Inventor before connecting. </p>


     <p>Follow the directions in the Welcome App below to complete your setup. </p>


	<h3>Testing Your Setup: Welcome App</h3>

     <p>Click on the following <a href="http://ai2.appinventor.mit.edu/?repo=templates.appinventor.mit.edu/trincoll/csp/tutorials/aias/WelcomeApp.asc" target="_blank">App Inventor Template Welcome App</a> (we recommend using Chrome browser for this). This will open up in App Inventor. You will need to log in with your Google (or App Inventor) account that you will use for this course. An embedded tutorial on the left of this app will guide you through the setup directions. 
     

     <p>When the project opens, you will be viewing the <i>App Inventor Designer</i>. The Designer is where you will design your app's <i>User Interface</i>.  The app you are testing has a button with an image (which displays on start up), a couple of labels that display text and a <i>Player</i> component that will play an applause sound.
       <p><img src="../_static/assets/img/DesignTab.png" width="100%"></p>

     <p>If English is not your first language, you can switch App Inventor to a different language by clicking on English at the top right of the screen<p>
     <p><img src="../_static/assets/img/AppInventorLanguages.png" width=150></p>

     <p> Now, switch to the Blocks Editor by clicking on Blocks in the top right-hand corner of your window. </p>

     <p><img src="../_static/assets/img/testappdesigner.png"></p>


     <p>The Blocks Editor is where all the coding happens. There are built-in blocks as well as blocks for any component that you add in the Designer window.

       <p><img src="../_static/assets/img/BlocksTab.png" width="100%"></p>

       <p>Notice that App Inventor blocks connect together like puzzle pieces.  The blocks for this app will cause it to display a congratulatory message on your screen and play an applause sound on start up. When the button with the logo is clicked, the app will change the background color and say hello.  </p>


     <h3>Running the App on your Device via Wifi Companion</h3>

     <p>In the next unit, you will be programming your own app. For now, we just want to make sure everything is set up properly. Follow these
     instructions to test your set up. </p>

     <ol>
     <li>Make sure that both your computer and your phone or tablet are connected to the same wifi.</li>
     <li>Install the <a target="_blank" href="https://play.google.com/store/apps/details?id=edu.mit.appinventor.aicompanion3">Android MIT AI2 Companion app</a> or <a target="_blank" href="https://apps.apple.com/us/app/mit-app-inventor/id1422709355?uo=4&itscg=30200&itsct=apps_box&mt=8">iOS MIT App Inventor Companion</a> from the Play Store (or for Android <a href="http://appinv.us/companion" target="_blank">here</a> if you can't use the Play Store) on your mobile device and start it.</li>
     <li>In App Inventor on your computer, click Connect and then select <i>AI Companion</i>. This will display a 6-letter code both as a barcode and as plain text. (Note: The 6-letter code will be a unique code and different from the one shown below)<p><img src="../_static/assets/img/testappselect.png">
     <p><img src="../_static/assets/img/testappcompanion.png"></p></li>
     <li>On the companion app, either type in the 6-letter code and click the “Connect to App Inventor” button or scan the barcode. You should see the app on your device!</li>
     </ol>

     <h3>Running the App on your Device via USB Connection</h3>

     <p>For set up instructions to use a USB connection instead of WiFi, please go <a target="_blank" href="http://appinventor.mit.edu/explore/ai2/setup-device-usb.html" style="line-height: 1.22;">here</a>&nbsp;and follow steps 1-6.</p>

     <h3>Running the App on the Emulator</h3>

     <p>If you are using the <i>Emulator</i>, the steps are as follows:</p>

     <ol>
     <li>Make sure the emulator software is installed on your computer following the <a href="http://appinventor.mit.edu/explore/ai2/setup-emulator.html" target="_blank">instructions here</a>.
     <li>In App Inventor, click Connect and then select <i>Emulator</i>. </li>
     <li>This will automatically connect to the app to the the Emulator. There is no need to scan a barcode or type in a 6-digit code. The connection will happen automatically.</li>
     </ol>

     <h3>Troubleshooting</h3>

     <p>If everything is configured properly, you should see the Welcome app on your device or emulator. You should see a message and the Mobile CSP logo. You should also hear a round of applause for your great work! Try clicking on the logo too and changing some things like the notifier message or the background color as described in the embedded tutorial. </p>

     <p>If the app is not running correctly, you may need to retrace your setup steps to make sure you performed all of the necessary steps. Make sure your mobile device and your computer are on the same WiFi or other network. If the app seems frozen, try Connect/Reset Connection and then try Connect/AI Companion again. See the <a href="http://appinventor.mit.edu/explore/ai2/support/troubleshooting.html" target="_blank">Troubleshooting</a> page or try another method of connecting your device such as <a href="http://appinventor.mit.edu/explore/ai2/setup-device-usb.html" target="_blank">USB</a> or using the <a href="http://appinventor.mit.edu/explore/ai2/setup-emulator.html" target="_blank">emulator</a>.</p>
     </div>