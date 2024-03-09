.. raw:: html 

   <div class="logo-header"  id="student-logo"  > <img class="align-center" src="../_static/Mobile_CSP_Logo_White_transparent.png" width="250px"/> </div>

Cybersecurity
=================

.. raw:: html

        <div class="MCSP-lesson-content">
    <script>
      $(document).ready(function() {
        generateSummary(EKmapping['6.09']);
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
       "strong password" :  "a password that is easy for a user to remember but would be difficult for someone else to guess based on knowledge of that user.",  
    "multi-factor authentication (MFA)" : "users are asked to present several separate pieces of evidence involving knowledge (something they know like a password), possession (something they have like a texted code), and/or inherence (something they are like biometrics).", 
    "biometrics" : "using unique physical characteristics such as finger prints, face recognition, etc. for identification",
    "malware"  : "software intended to damage a computing system or to take partial control over its operation.", 
    "virus" :  "a malicious program that can copy itself and gain access to a computer in an unauthorized way.", 
    "worm"  : "a malicious program that spreads by itself through networks of computers.",
    "Trojan horse" : "a malicious program that disguises itself as a useful program that unsuspecting users download.",
    "ransomware" : "malware that encrypts and locks computer systems until a ransom is paid.",
    "malware scanning software" : "software that helps to protect a computing system against malware infections.",
    "phishing" : "a technique that is used to trick a user into providing personal information usually through email.",
    "keylogger" : "a program to record every keystroke made by a computer user.",
    "rogue access point" : "a wireless access point that gives unauthorized access to secure networks.", 
    "firewalls" : "barriers that protect a network from unauthorized access"
      };      */
    </script>
    <h3 id="est-length">Time Estimate: 45 minutes</h3>

Introduction and Goals
-----------------------

.. raw:: html

    <p>
    <img src="../_static/assets/img/security.png" style="float:left;width:150px;padding-right:10px"/>
    Cybersecurity is one of the fastest growing IT fields. It is essential to every organization to keep their computer systems and data safe.</p>
    
    <p>Passwords are currently the primary way to protect devices and information from unauthorized access. A <span class="hover vocab yui-wk-div" data-id='strong password'>strong password</span> is something that is easy for a user to remember but would be difficult for someone else to guess based on knowledge of that user.  In Unit 5, we saw that it is very difficult to guess a long complex password (which can be tested in sites such as  <a href="https://www.security.org/how-secure-is-my-password/" target="_blank">https://www.security.org/how-secure-is-my-password/</a>). Luckily, brute-force password cracking algorithms take exponential time. However, passwords can also be compromised (stolen) through <span class="hover vocab yui-wk-div" data-id='phishing'>phishing</span> attacks and data breaches. </p>
    
	<div><b>Learning Objectives:</b>&nbspI will learn to</div>
	<ul>
	<li>describe various threats to cybersecurity</li>
	<li>explain the shortcomings of relying on passwords to protect devices and digital information</li>
	<li>describe ways to combat <span class="hover vocab yui-wk-div" data-id="malware">malware</span> and other cybersecurity attacks</li>
	</ul>
	<div><b>Language Objectives:</b>&nbspI will be able to</div>
	<ul>
	<li>use target vocabulary, such as <span class="hover vocab yui-wk-div" data-id="virus">virus</span>, <span class="hover vocab yui-wk-div" data-id="worm">worm</span>, <span class="hover vocab yui-wk-div" data-id="Trojan horse">Trojan horse</span>, and <span class="hover vocab yui-wk-div" data-id="phishing">phishing</span> while describing app features and User Interface with the support of concept definitions and <a href="https://docs.google.com/presentation/d/1qwoJ0sNiiLFbv1KN_xW7yLpXUQLfYD8lxxZWPYjqdIY/copy" target="_blank" title="">vocabulary notes</a> from this lesson</li>
	</ul>


Learning Activities
--------------------

.. raw:: html

    <ul align="center" style="list-style: none; margin: 0; padding: 0; background: lightgrey">
	<li style="display: inline"><a href="https://docs.google.com/document/d/1PMUkn5jzjrVwURuA2smeqRkA5KyG_Zu9FF6OYliboaY/edit?usp=sharing" target="_blank" title="">text-version</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://youtu.be/0mvCeNsTa1g" target="_blank">YouTube Video Part 1</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://youtu.be/88Rjg8gM_DI" target="_blank">YouTube Video Part 2</a></li>
	<br/>
	<li style="display: inline"><a href="https://youtu.be/XU8PHihT_P4" target="_blank" title="">YouTube Video Part 3</a></li>
	<li style="display: inline"> | </li>
	<li style="display: inline"><a href="https://youtu.be/qkzAveeAuts" target="_blank" title="">YouTube Video Part 4</a></li>
	</ul> 
	
	<h3>MultiFactor Authentication</h3>
	<p>Many organizations now use <b>two-factor authentication (2FA)</b> or <span class="hover vocab yui-wk-div" data-id="multi-factor authentication (MFA)">multi-factor authentication (MFA)</span> which asks for additional authentication in addition to the password, just in case the password gets compromised. Users are asked to present several separate pieces of evidence such as:
        <img src="../_static/assets/img/multifactor-authentication.png" width="70%" style="display: block;margin-left: auto;margin-right: auto;"/></p>
    <ul>
    <li><b>Something You Know</b>: for example your password or the answers to security questions that you have set up </li>
    <li><b>Something You Have</b>: for example a code texted to the your phone or a USB security token</li>
    <li><b>Something You Are</b>: for example <span class="hover vocab yui-wk-div" data-id='biometrics'>biometrics</span> such as fingerprints or face recognition</li>
    </ul>
	
	<p><span class="hover vocab yui-wk-div" data-id="multi-factor authentication (MFA)">Multi-factor authentication (MFA)</span> requires at least two steps to unlock protected information. Each step adds a new layer of security that must be broken to gain unauthorized access. Watch the following <a href="https://www.youtube.com/watch?v=0mvCeNsTa1g" target="_blank">video</a> on multi-factor authentication:</p>
    
.. youtube:: 0mvCeNsTa1g
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    <p><b>Biometric Authentication:</b> uses unique physical characteristics such as fingerprints for identification.</p>
    <ul>
    <li>Discuss with your class: What different types of <span class="hover vocab yui-wk-div" data-id="biometrics">biometric</span> authentication have you seen in real life or in movies?</li>
    </ul>
    <p><span class="hover vocab yui-wk-div" data-id='biometrics'>Biometrics</span> became popular with fingerprint scanners, and now facial recognition technology has exploded in use for biometric authentication and surveillance. However, the problem with static <span class="hover vocab yui-wk-div" data-id='biometrics'>biometrics</span> like fingerprints is that if it is compromised (stolen), you can’t change your face or fingerprint to a new one. Dynamic <span class="hover vocab yui-wk-div" data-id='biometrics'>biometrics</span> like heartbeats or behavioral <span class="hover vocab yui-wk-div" data-id='biometrics'>biometrics</span> like walking gaits are more difficult to hack. Watch the following <a href="https://www.youtube.com/watch?v=88Rjg8gM_DI" target="_blank">video</a> on biometric authentication:</p>
    
.. youtube:: 88Rjg8gM_DI
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    <h3>Malware </h3>
    <p><span class="hover vocab yui-wk-div" data-id='malware'>Malware</span> which stands for MALicious softWARE is software intended to damage a computing system or to take partial control over its operation. A computer <b><span class="hover vocab yui-wk-div" data-id='virus'>virus</span></b> is a type of <span class="hover vocab yui-wk-div" data-id='malware'>malware</span> that can copy itself and gain access to a computer in an unauthorized way. Computer viruses often attach themselves to legitimate programs and start running independently on a computer. </p>
    <ul>
    <li>Discuss with your class: Have you ever had a <span class="hover vocab yui-wk-div" data-id='virus'>virus</span> on your computer? What happened and how did you get rid of it?</li>
    </ul>
    <p>Watch the following <a href="https://www.youtube.com/watch?v=XU8PHihT_P4&ab_channel=FTCvideos" target="_blank">video</a> about <span class="hover vocab yui-wk-div" data-id='malware'>malware</span>:</p>
    
.. youtube:: XU8PHihT_P4
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    <p><span class="hover vocab yui-wk-div" data-id='malware'>Malware</span> can spread by email attachments, downloading from sites that are not reputable, network connections from infected computers, and copying infected files from computer to computer on portable memory. So don’t click or open anything where you don’t know the source. A computer that is infected may stop working, display strange messages, delete files, be controlled by others, steal personal information and infect other computers.  Recent <span class="hover vocab yui-wk-div" data-id='ransomware'>ransomware</span> attacks encrypt and lock computer systems until a ransom is paid.</p>
    <p>Computer <span class="hover vocab yui-wk-div" data-id='virus'>virus</span> and <span class="hover vocab yui-wk-div" data-id='malware'>malware</span> <b>scanning software</b> can protect a computing system against infection. Many operating systems like Windows come with their own free <span class="hover vocab yui-wk-div" data-id='malware'>malware</span> scanners like Windows Defender. It is very important to auto-update the <span class="hover vocab yui-wk-div" data-id='malware'>malware</span> scanning software with  newly discovered <span class="hover vocab yui-wk-div" data-id='malware'>malware</span> signatures. Explore the <span class="hover vocab yui-wk-div" data-id='malware'>malware</span> scanner on your computer. Regular software updates help to fix errors that would compromise a computing system. All real-world systems have errors or design flaws that can be exploited. </p>
    <h3>Unauthorized Access</h3>
    <p>Criminals can gain unauthorized access to computing systems in many ways by exploiting the users and the staff of the system. They can gain access through <span class="hover vocab yui-wk-div" data-id='malware'>malware</span> or by stealing or cracking passwords or hacking in through unprotected areas. </p>
    <p><span class="hover vocab yui-wk-div" data-id='phishing'>Phishing</span> is a common technique that is used to trick a user into providing personal information usually through email. That personal information can then be used to access sensitive online resources, such as bank accounts and emails. A malicious <span class="hover vocab yui-wk-div" data-id='phishing'>phishing</span> or <span class="hover vocab yui-wk-div" data-id='malware'>malware</span> link can be disguised on a web page or in an email message. Watch the following <a href="https://youtu.be/qkzAveeAuts" target="_blank">video</a> on <span class="hover vocab yui-wk-div" data-id='phishing'>phishing</span>. </p>
    
.. youtube:: qkzAveeAuts
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    <p>Another technique for capturing passwords is <span class="hover vocab yui-wk-div" data-id="keylogger">keylogging</span> software which secretly records every keystroke made by a computer user. This can be used to gain fraudulent access to passwords and other confidential information. Keyloggers can be installed through <span class="hover vocab yui-wk-div" data-id='malware'>malware</span> or hacking. Unsolicited emails, attachments, links, and forms in emails can be used to compromise the security of a computing system. These can come from unknown senders or from known senders whose security has been compromised.  Untrustworthy (often free) downloads from freeware or shareware sites can contain <span class="hover vocab yui-wk-div" data-id='malware'>malware</span>.</p>
    <p>Unencrypted information sent over public networks can also be compromised. Data sent over public networks can be intercepted, analyzed and modified. One way that this can happen is through a <span class="hover vocab yui-wk-div" data-id='rogue access point'>rogue access point</span>. A <span class="hover vocab yui-wk-div" data-id='rogue access point'>rogue access point</span> is a wireless access point that gives unauthorized access to secure networks. Network and system administrators protect their networks with <span class="hover vocab yui-wk-div" data-id='firewalls'>firewalls</span> which provide a barrier to attacks and scan their networks with network analyzers to prevent unauthorized access.</p>
   
   <h3>Investigate</h3>
    <p>Select one or more of the following activities to complete after watching and discussing the videos.</p>
    <ol>
    <li style="padding-bottom:5px">Can you spot when you’re being <span class="hover vocab yui-wk-div" data-id='phishing'>phished</span>? Do the <a href="https://phishingquiz.withgoogle.com" target="_blank">Phishing Quiz with Google</a> working in pairs. See how many you get right. Answer the following questions in your portfolio:
	<br/>
	a. Post a screenshot of your summary page. <br/>
	b. What did you find to be the most challenging phishing technique to spot?
	</li>
   
   <li style="padding-bottom:5px">In pairs, investigate this <a href="http://cybermap.kaspersky.com/" target="_blank">map</a> (click on a country and more details or statistics) and <a href="http://securelist.com/statistics/" target="_blank">securelist.com/statistics</a> which shows the current week’s infections and attacks. Answer the following questions in your portfolio:
	<br/>
	a. What are the top 3 attacked countries? What country has the highest rate of infections? <br/>
	b. What is the top infection (<span class="hover vocab yui-wk-div" data-id='virus'>virus</span>) currently?
	</li>
    <li>Investigate a famous or recent <span class="hover vocab yui-wk-div" data-id='malware'>malware</span>, hacking, or security breach incident. Answer the following questions in your portfolio:
	<br/>
	a. Who was involved in the incident? <br/>
	b. What happened in the incident? <br/>
	c. When did the incident occur? <br/>
	d. Where did the incident occur? <br/>
	e. How did the incident happen? <br/>
	f. What were the consequences of the incident?
	</li>
    </ol>
    <h3>(Optional) Activity: Watch and Discuss</h3>
    <table>
    <tbody><tr>
    <td valign="top" style="width:45%">
    <p><b>Before</b> watching the video below, discuss the following with your classmates:</p>
    <ul>
    <li>What types of security protections do cell phones have?</li>
    <li>Do most people you know use a password on their phones?</li>
    <li>In what instances might the government want information from an individual’s cell phone?</li>
    <li>Do you view privacy as an individual right?</li>
    </ul>
    </td>
    <td valign="top" >
    <p><b>After</b> watching the video, discuss the following questions with your classmates:</p>
    <ul>
    <li>Why did a judge order Apple to create software that would unlock iPhones?</li>
    <li>Do you think Apple should abide by the Court’s decision and unlock the mobile phone in the San Bernardino case? Explain.</li>
    <li>Why are some security experts worried that unlocking the phone in the San Bernardino case will have greater repercussions regarding individual privacy rights?</li>
    <li>Do you think it is the civic duty of a business to help law enforcement when it comes to solving criminal cases?</li>
    </ul>
    </td>
    </tr>
    </tbody></table>
    
.. youtube:: PtwF8E6iQGY
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


Summary
--------

.. raw:: html

    <p>
    In this lesson, you learned how to:
      <div class="yui-wk-div" id="summarylist">
    </div>
    
Still Curious
--------------
.. raw:: html

    <ul>
    <li>Try <a href="https://www.hacksplaining.com/lessons" target="_blank">hacksplaining.com</a> which describe hacking exploits and how to protect against them.</li>
    <li>Try the <a href="https://www.pbs.org/wgbh/nova/labs/lab/cyber/" target="_blank">PBS Cybersecurity Lab</a> where you protect a business against attacks.</li>
    <li>Try a Capture the Flag event where you solve computer security challenges to capture flags.  A great one for beginners is <a href="https://picoctf.com/" target="_blank">picoctf.com</a> designed for high school students. Here are some other  <a href="https://resources.infosecinstitute.com/tools-of-trade-and-resources-to-prepare-in-a-hacker-ctf-competition-or-challenge/" target="_blank">resources</a>.</li>
    <li>More Cybersecurity lessons available at <a href="https://teachingsecurity.org/">teachingsecurity.org</a></li>
    </ul>



Self-Check
-----------

.. raw:: html

    <p>
    Here is a table of some of the technical terms discussed in this lesson. Hover over the terms to review the definitions.
      <table align="center">
    <tbody>
    <tr>
    <td><span class="hover vocab yui-wk-div" data-id="strong password">strong password</span>
    <br/><span class="hover vocab yui-wk-div" data-id="multi-factor authentication (MFA)">multi-factor authentication (MFA)</span>
    <br/><span class="hover vocab yui-wk-div" data-id="biometrics">biometrics</span>
    <br/><span class="hover vocab yui-wk-div" data-id="malware">malware</span>
    <br/><span class="hover vocab yui-wk-div" data-id="virus">virus</span>
    </td>
    <td>
    <span class="hover vocab yui-wk-div" data-id="ransomware">ransomware</span>
    <br/><span class="hover vocab yui-wk-div" data-id="phishing">phishing</span>
    <br/><span class="hover vocab yui-wk-div" data-id="keylogger">keylogger</span>
    <br/><span class="hover vocab yui-wk-div" data-id="rogue access point">rogue access point</span>
    <br/><span class="hover vocab yui-wk-div" data-id="firewalls">firewalls</span>
    </td>
    </tr>
    </tbody>
    </table>
    
.. mchoice:: mcsp-6-9-1
    :random:
    :practice: T
    :answer_a: Your fingerprint
    :feedback_a: This is 2FA! But the question asks what is NOT 2FA.
    :answer_b: <span style="color: rgb(60, 64, 67); font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 14px; letter-spacing: 0.2px;">Entering a token that is sent to your phone&nbsp;</span>
    :feedback_b: This is 2FA! But the question asks what is NOT 2FA.
    :answer_c: <span style="color: rgb(60, 64, 67); font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 14px; letter-spacing: 0.2px;">Entering a token that is emailed to you.&nbsp;</span>
    :feedback_c: This is 2FA! But the question asks what is NOT 2FA.
    :answer_d: <font color="#3c4043" face="Roboto, RobotoDraft, Helvetica, Arial, sans-serif"><span style="font-size: 14px; letter-spacing: 0.2px;">Entering your password twice.</span></font>
    :feedback_d: 2FA adds on a second way of verifying your identity, for example a code texted to your phone or your fingerprint.&nbsp;
    :correct: d

    Which of the following would NOT count as 2FA in addition to entering a password? 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-6-9-2
    :random:
    :practice: T
    :answer_a: Open an email attachment from an unknown sender.
    :feedback_a: 
    :answer_b: Run malware scanning software.
    :feedback_b: 
    :answer_c: Run regular software updates.
    :feedback_c: 
    :answer_d: Don't click or open anything from a source that you don't know or can't identify.
    :feedback_d: 
    :correct: b,c,d

    .. raw:: html
    
    	<p>Which of the following can you do to prevent against malware? <i>Select all that apply</i>.</p>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-6-9-3
    :random:
    :practice: T
    :answer_a: A rogue access point
    :feedback_a: 
    :answer_b: Data-logging
    :feedback_b: 
    :answer_c: Phishing
    :feedback_c: 
    :answer_d: Keylogging
    :feedback_d: 
    :correct: a,c,d

    .. raw:: html
    
    	<p><i>Unauthorized access</i> to computing resources can be gained through which of the following? <i>Select all that apply</i>.</p>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-6-9-4
    :random:
    :practice: T
    :answer_a:  A vulnerability in the device’s software is exploited to gain unauthorized access to other devices on the user’s home network.
    :feedback_a: This sounds like a hacking attack, not a phishing attack.
    :answer_b:  A vulnerability in the device’s software is exploited to install software that reveals the user’s password to an unauthorized individual.
    :feedback_b: This sounds like a hacking attack, not a phishing attack.
    :answer_c:  The user is sent an e-mail appearing to be from the manufacturer, asking the user to confirm the account password by clicking on a link in the e-mail and entering the password on the resulting page.
    :feedback_c: Yes, a phishing attack is usually an e-mail that tries to fool people into revealing private information like passwords.
    :answer_d:  The user’s account is sent an overwhelming number of messages in an attempt to disrupt service on the user’s home network.
    :feedback_d: This sounds like a denial of service attack, not a phishing attack.
    :correct: c

    .. raw:: html
    
    	<p><b>AP 2021 Practice Question</b>: A user purchased a new smart home device with embedded software andconnected the device to a home network. The user then registered the devicewith the manufacturer, setting up an account using a personal e-mail andpassword. Which of the following explains how a phishing attack could occuragainst the user of the smart home device?</p>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


.. mchoice:: mcsp-6-9-5
    :random:
    :practice: T
    :answer_a:  Each employee for a company is issued a USB device that contains a unique token code. To log into a company computer, an employee must insert the USB device into the computer and provide a correct password.
    :feedback_a: 
    :answer_b:  After logging into an account from a new device, a user must enter a code that is sent via e-mail to the e-mail address on file with the account.
    :feedback_b: 
    :answer_c:  In order to log into an account, a user must provide both a password and a fingerprint that is captured using the user’s device.
    :feedback_c: 
    :answer_d:  When a user enters an incorrect password more than two times in a row, the user is locked out of the account for 24 hours.
    :feedback_d: 
    :correct: d

    .. raw:: html
    
    	<p><b>AP 2021 Sample Question</b>:  A Web site uses several strategies to prevent unauthorized individuals from accessing user accounts. Which of the following is NOT an example of multifactor authentication?</p>


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>



Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1U7_tRzo2HTZvIRMbP30bwgtMjL094GQ8cVFyZwmRpi0/copy" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vS4CuBdEGJlslov7AwV41frBI1ARjFA6cCsVBWgz22KLizg-07OjLJFyp5eO0x9Djqq6XCydYQ6TbLq/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    </div>
    </div>