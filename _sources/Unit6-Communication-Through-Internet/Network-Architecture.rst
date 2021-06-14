.. raw:: html 

    <a href="../index.html"><img class="align-center" src="../_static/MobileCSPLogo.png" width="250px"/></a>

Network Architecture
====================

.. raw:: html

        <div class="MCSP-lesson-content">
    <script>
      $(document).ready(function() {
        generateSummary(EKmapping['6.03']);
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
        "host": "An Internet host computer is a computer that's connected directly to the Internet -- often a computer that provides certain services or resources.",
        "router": "A router is a device that transmits data between two different networks.",
        "IP Address":"An IP Address is a unique string of numbers separated by periods that identifies each computer using the Internet Protocol to communicate over a network.",
        "domain name": "An Internet domain name is a hierarchical name (such as trincoll.edu) that identifies an domain and an institution on the Internet. Top level domains include com, edu, gov.",
        "ping": "Ping is a networking utility used by network administrators to test the reachability of a host on the Internet.",
        "traceroute" : "Traceroute is a networking utility used to trace the route and measure delays of packets moving through the Internet.",
        "packet switching" : "Packet switching is the method by which information is transmitted through the Internet.  Information is broken into packets and each packet is routed independently from source to destination.",
        "packet": "A packet is a collection of data used by the TCP/IP protocol to transmit data across the Internet. Each packet contains routing data as well as the content of the message. ",
        "packet sniffer" : "A packet sniffer is software used by network administrators to monitor data being transmitted over a network.  In the wrong hands, it can be used to steal email messages and other information.",
        "abstraction layer" : "The Internet is organized into several abstraction layers that are controlled by various protocols. From the bottom up, we have the link layer (Ethernet protocol), the Internet layer (IP), transport layer (TCP), and application layer (HTTP).",
      };      */
    </script>
    <h3 id="est-length"><b>Time Estimate: 90 minutes</b></h3>
    

Introduction and Goals
-----------------------

.. raw:: html

    <p>
    <p>As we've learned in previous lessons, the Internet is network of networks that is managed by a collection of protocols.  We've already seen the role that the HTTP protocol plays in supporting the World Wide Web application.  In this lesson we delve more deeply into the basic architecture and infrastructure of the Internet.  We'll learn that the main Internet protocols are organized into a hierarchy of abstraction layers -- the application, transport, internet, and link layers -- each of which manages certain specific tasks required to route messages between hosts on the Internet. We'll learn about:
      </p><ul>
    <li>Internet architecture and abstraction layers</li>
    <li>The <span class="hover vocab yui-wk-div" data-id='packet'>packet</span> switching routing scheme</li>
    <li>The TCP/IP protocol</li>
    </ul>
    <p>  
      After this lesson you should have a pretty good understanding of how some of your familiar applications -- web browsing,
      email, smartphone apps -- are supported by the underlying Internet hardware and software. Here is a short video called <a href="https://www.youtube.com/watch?v=ewrBalT_eBM" target="_blank">A <span class="hover vocab yui-wk-div" data-id='Packet'>Packet</span>'s Tale</a> to get us started on our journey.
    </p>
    <p><br/></p>
    

Learning Activities
--------------------

.. raw:: html

    <p><h3>Part 1: Network Architecture and Packet Switching</h3>
    <p>
      This first video focuses on basic architecture of the internet and <span class="hover vocab yui-wk-div" data-id='packet'>packet</span> switching. 
     The Internet has been engineered to be <b><span class="hover vocab yui-wk-div" data-id='fault-tolerant'>fault-tolerant</span></b>, which means it can support failures and still continue to function. Network <b>redundancy</b> allows having more than one path between any two connected devices in case something part of the network fails. If a particular device or connection on the Internet fails, subsequent data will be sent via a different route, if possible.  Redundancy within a system often requires additional resources but can provide the benefit of fault tolerance. The redundancy of routing options between two points increases the reliability of the Internet and helps it scale to more devices and more people.  The Internet was designed to be scalable. The <b><span class="hover vocab yui-wk-div" data-id='scalability'>scalability</span></b> of a system is the capacity for the system to change in size and scale to meet new demands. 
      
      </p><p>The video also illustrates how the <b><i><span class="hover vocab yui-wk-div" data-id='ping'>ping</span></i></b>
      utility can be used to test whether certain hosts are reachable on the network.  And it introduces a new 
      tool, <b><i><span class="hover vocab yui-wk-div" data-id='traceroute'>traceroute</span></i></b>, that can be used to trace the routes that packets take from one computer to 
      another on the Internet. (<a href="https://docs.google.com/presentation/d/1g7NmzbMvyBYLZwe2NtWXSurW4D7o-uCKYCdI2yvDFIc" target="_blank" title="">Slides</a>)</p>
    <!-- Old video id:  f4TjIlS8Bms   -->
    
.. youtube:: qrG0bS-JuTo
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    <div class="pogil yui-wk-div">
    <h3>POGIL Activity 1  - Using Ping and Traceroute to Investigate the Internet (15 minutes)</h3>
    <p>Break into POGIL teams of 4.  Record your answers using <a href="https://docs.google.com/document/d/1qxREGzfG3XUp0n8Fo-n9v6L9dFHcqP17nIHjufiOmvg/edit?usp=sharing" target="_blank"> this worksheet</a>
    </p><table>
    <tbody><tr><th>Role</th><th>Responsibility</th></tr>
    <tr>
    <td>Facilitator</td>
    <td>Uses the <span class="hover vocab yui-wk-div" data-id='ping'>ping</span> and trace tools online at <a href="http://network-tools.com/" target="_blank">network-tools.com</a>.
            </td>
    </tr>
    <tr>
    <td>Spokesperson</td>
    <td>Reads out questions and reports the team's answers to the class.</td>
    </tr>
    <tr>
    <td>Quality Control</td>
    <td>Records the team's answers in <a href="https://docs.google.com/document/d/1qxREGzfG3XUp0n8Fo-n9v6L9dFHcqP17nIHjufiOmvg/edit?usp=sharing" target="_blank"> the worksheet</a> (File-Make a Copy to have a version you can edit).</td>
    </tr>
    <tr>
    <td>Process Analyst</td>
    <td>Keeps track of the teams progress and assesses its performance. </td>
    </tr>
    </tbody></table>
    <p>
      In this activity, 
      you will use the <span class="hover vocab yui-wk-div" data-id='ping'>ping</span> and <span class="hover vocab yui-wk-div" data-id='traceroute'>traceroute</span> utilities at <a href="http://network-tools.com/" target="_blank">network-tools.com</a> to measure the latency and observe trace routes to answer the question:
      </p><blockquote>
    <b>Does geographical distance between the source and the destination 
          on the network affect latency?
        </b>
    </blockquote>
    <p>You will use multiple trials of <span class="hover vocab yui-wk-div" data-id='ping'>ping</span> and trace for 5 university servers around the globe (mit.edu,
    stanford.edu,
    ox.ac.uk,
    kyoto-u.ac.jp,
    usp.br) to answer the questions below:
        </p><ol>
    <li> Did any of the servers lose packets or time out?  Some servers will block <span class="hover vocab yui-wk-div" data-id='ping'>ping</span> and trace for security reasons which are seen as time outs. Were there any surprising locations in the hops that the <span class="hover vocab yui-wk-div" data-id='packet'>packet</span> went through?</li>
    <li>Did different trials have different results for the same destination? Do packets always get routed in the same way?</li>
    <li>Can you guess where the network-tools server is located based on the latency data you collected? Can you confirm your guess using trace or whois (which gives you information about who owns a server)? </li>
    <li>Select one route and specify all the directly-connected computing devices along the route which form a path between the sender and the receiver. How many hops are taken on this path? List each device on this path.</li>
    <li>How does the number of hops in the trace affect latency (the round trip time seen in <span class="hover vocab yui-wk-div" data-id='ping'>ping</span>)?  </li>
    <li> (<b>Portfolio</b>) How does geographical distance affect latency? What are some other factors that may be affecting latency? </li>
    </ol><br/>
    </div>
    <h3>Part 2: Internet Abstraction Layers</h3>
    <p>
     Data is sent through the Internet in data streams made up of data packets.  Each <span class="hover vocab yui-wk-div" data-id='packet'>packet</span> contains data and metadata used for routing the <span class="hover vocab yui-wk-div" data-id='packet'>packet</span> between the origin and the destination on the Internet, as well as for data reassembly. This video focuses on the TCP/IP model which is a set of abstraction layers with different protocols that manage the routing of messages on the Internet. Protocols such as TCP, IP, UDP, and SMTP work together in the hierarchy to support applications such as email and web browsing. 
    </p>
    <!-- Old video: W0w-n3YHvjo -->
    
.. youtube:: Q6ixZe6ifHI
        :width: 650
        :height: 415
        :align: center

.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>

    <div class="pogil yui-wk-div">
    <h3>POGIL Activity 2  - TCP/IP <span class="hover vocab yui-wk-div" data-id='Packet'>Packet</span> Routing (15 minutes)</h3>
    <p>In the same POGIL team of 4, you will act out the layers in the TCP/IP model to encapsulate and transmit data.  Each group of 4 should be given an <span class="hover vocab yui-wk-div" data-id='IP address'>IP address</span> such as 10.1, 10.2, etc. in a local area network (LAN). Each group member should take on the role of one of the layers below:
    
    </p><table border="">
    <tbody><tr>
    <th>Application Layer (protocol: SMTP)</th><td>
    <b>Send:</b> Composes a message to another student and passes it to the Transport layer.
      <br/><b>  Receive:</b>  Receives and reads out messages from other students passed on from the Transport layer. 
     </td></tr>
    <tr><th>Transport Layer (protocol: TCP)</th><td>
    <b>Send:</b> Splits the message into packets, adds TCP headers to number the packets, and sends them to the Internet layer.
    <br/><b>Receive:</b> Receives packets from the Internet layer, puts them in order, and passes them to the application layer when all is received.
    </td></tr>
    <tr><th>Internet Layer (protocol: IP)</th><td>
    <b>Send: </b> Uses a routing table (given in the handout)  to add the destination <span class="hover vocab yui-wk-div" data-id='IP address'>IP address</span> to each <span class="hover vocab yui-wk-div" data-id='packet'>packet</span> and passes them to the Link layer.
    <br/> <b>Receive:</b> Receives packets from the Link layer and checks that it’s their own group’s <span class="hover vocab yui-wk-div" data-id='IP address'>IP address</span>. If it is, it passes it to the transport layer. If it is not, it gives it back to the link layer to give to another group.
    </td></tr>
    <tr><th>Link Layer (protocol: Ethernet)</th><td>
    <b>Send:</b> Passes the individual packets randomly to the link layer of other groups.
    <br/> <b>Receive:</b> Receives packets from other groups and passes them to the Internet Layer.
     </td></tr>
    </tbody></table>
    <p>Follow <a href="https://docs.google.com/document/d/1vCMjrLWMzU-bs1zv8Btu-rjrcvzQ21J0HarznLgL30g/edit?usp=sharing" target="_blank">these handouts</a> to simulate <span class="hover vocab yui-wk-div" data-id='packet'>packet</span> routing in the TCP/IP model.
        Once your group has sent and received a message, discuss the following questions.
    </p><ol>
    <li><b><span class="hover vocab yui-wk-div" data-id='Packet'>Packet</span> Order. </b> Does it matter whether the packets of a message arrive in order?  Explain how this set of protocols handles that. </li>
    <li>(<b>Portfolio</b>) <b>Missing Packets.</b> What should happen if a <span class="hover vocab yui-wk-div" data-id='packet'>packet</span> goes missing? Who (which layer) would handle this?  What action would they have to take?  And what additional information would be needed in the <span class="hover vocab yui-wk-div" data-id='packet'>packet</span> in order to handle it?  </li>
    <li><b>Corrupted Packets.</b> Suppose there’s some kind hardware glitch that corrupts one or more bits in a <span class="hover vocab yui-wk-div" data-id='packet'>packet</span>? Can this be detected?  What action should be taken in this case?  What additional information would be needed to handle this issue? </li><li><b>Fault-Tolerance. </b>Complex systems, like networks, fail at unexpected times. Often multiple devices fail at the same time.  Explain how the TCP/IP model continues to function even when parts of the system fail.<br/></li>
    <li>(<b>Portfolio</b>) <b>Security/Privacy.</b>  As the packets are being transmitted through the network, can people other than the sender and receiver read the messages? What methods can we use to protect the message?  </li>
    </ol>
    </div>
    

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
    
    Here is a table of some of the technical terms discussed in this
    lesson. Hover over the terms to review the definitions.
    <blockquote>
    <table align="center">
    <tbody>
    <tr>
    <td><span class="hover vocab yui-wk-div" data-id="host">host</span>
    <br/><span class="hover vocab yui-wk-div" data-id="router">router</span>
    <br/><span class="hover vocab yui-wk-div" data-id="IP address">IP address</span>
    <br/><span class="hover vocab yui-wk-div" data-id="ping">ping</span>
    <br/><span class="hover vocab yui-wk-div" data-id="traceroute">traceroute</span>
    </td>
    <td>
    <br/><span class="hover vocab yui-wk-div" data-id="packet">packet</span>
    <br/><span class="hover vocab yui-wk-div" data-id="packet switching">packet switching</span>
    <br/><span class="hover vocab yui-wk-div" data-id="fault-tolerant">fault-tolerant</span>
    <br/><span class="hover vocab yui-wk-div" data-id="scalability">scalability</span>
    <br/><span class="hover vocab yui-wk-div" data-id="abstraction layer">abstraction layer</span>
    </td>
    </tr>
    </tbody>
    </table>
    </blockquote>
    <!-- &lt;question quid=&quot;4911545570033664&quot; weight=&quot;1&quot; instanceid=&quot;nsSuWrvMAauX&quot;&gt;&lt;/question&gt; -->
    
.. mchoice:: mcsp-6-3-1
    :random:
    :practice: T
    :answer_a: True
    :feedback_a: If it were easy, you wouldn’t be learning anything!
    :answer_b: False
    :feedback_b: That's right! Circuit switching means that there is a continuous circuit set up to send the data, as in a telephone call. Packet switching means that data is broken up into small packets and sent out in parts.
    :correct: b

    True or False: The main difference between circuit switching and packet switching is that in circuit switching data is broken up and sent in parts and in packet switching data is sent out on a continuous circuit. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <!-- &lt;question quid=&quot;5761540401659904&quot; weight=&quot;1&quot; instanceid=&quot;xpxldwL7eRNz&quot;&gt;&lt;/question&gt; -->
    
.. mchoice:: mcsp-6-3-2
    :random:
    :practice: T
    :answer_a: True
    :feedback_a: We’re in the learning zone today. Mistakes are our friends!
    :answer_b: False
    :feedback_b: That's right! Data packets sent over the Internet have different possible routes that they can take to get to their destination.
    :correct: b

    True or False: All routes on the internet are specified in advance and not set dynamically. For every packet of data sent over the Internet, there is only one route it can take to reach its destination. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    
.. mchoice:: mcsp-6-3-3
    :random:
    :practice: T
    :answer_a: the Gmail server puts the message into a single packet that is routed through the Internet to the recipient's email  
    :feedback_a: That's not quite right. Unless the message is very small, it would be divided into multiple packets, each of which is routed individually to the recipient's email.
    :answer_b: the Gmail server divides the message into packets that are routed individually over the Internet to the recipient's email
    :feedback_b: That's right! Information that is sent over the Internet is first divided into packets and then each packet is routed individually over the Internet.
    :answer_c: the Gmail server divides the message into packets that are routed through a dedicated channel to the recipient's email
    :feedback_c: That's not quite right. The packets would be routed independently, possibly using separate paths to the recipient.
    :answer_d: the Gmail server puts the message into a single packet that is routed through a dedicated channel to the recipient's email
    :feedback_d: That's not quite right. Unless it is very small, the message would be divided into several packets that are routed independently to the recipient's email.
    :correct: b

    When you send an e-mail message using Gmail in your browser or using the Gmail app __________________. 


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


.. mchoice:: mcsp-6-3-4
    :random:
    :practice: T
    :answer_a: Increasing the fault-tolerance of the Internet so that packets will reach their destination even if some connections have failed.
    :feedback_a: 
    :answer_b: Increasing the ease with which the Internet can scale or grow where extra routes can be easily added.
    :feedback_b: 
    :answer_c: Allowing many different protocols.
    :feedback_c: Although the Internet does allow different protocols, it is not a benefit of redundancy in routing.
    :answer_d: Avoiding loss of packets.
    :feedback_d: Packets can still be lost on the Internet. The redundancy in routing does not help with this.
    :correct: a,b

    Which of the following are benefits of redundancy in routing on the Internet where there is more than one route for packets to travel through the Internet?


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


.. mchoice:: mcsp-6-3-5
    :random:
    :practice: T
    :answer_a: (A) Each packet contains data to be transmitted, along with metadata containing information used for routing the data.
    :feedback_a: 
    :answer_b: (B) Each packet contains an encrypted version of the data to be transmitted, along with metadata containing the key needed to decrypt the data. 
    :feedback_b: 
    :answer_c: (C) Each packet contains only the metadata used to establish a direct connection so that the data can be transmitted.
    :feedback_c: 
    :answer_d: (D) Each packet contains multiple data files bundled together, along with metadata describing how to categorize each data file.
    :feedback_d: 
    :correct: a

    AP 2021 Sample Question: Which of the following best explains how data is typically assembled in packets for transmission over the Internet?


.. raw:: html

    <div id="bogus-div">
    <p></p>
    </div>


    <!--
    &lt;h2&gt;Sample AP CSP Exam Question&lt;/h2&gt;&lt;question quid=&quot;5697493825224704&quot; weight=&quot;1&quot; instanceid=&quot;HGpj2Ad2nDBG&quot;&gt;&lt;/question&gt;&lt;br&gt;
    -->
    

Still Curious
--------------

.. raw:: html

    <p>
    
    There is a wealth of good introductory and comprehensive information about the Internet and the WWW.
    
    <ul>
    <li>As always, 
    <a href="http://en.wikipedia.org" target="_blank">Wikipedia</a> 
    is an excellent resource as a first stop. Its pages on 
    <a href="http://en.wikipedia.org/wiki/Internet_protocol_suite" target="_blank">Internet protocol</a>,
    <a href="http://en.wikipedia.org/wiki/Ping_(networking_utility)" target="_blank">Ping</a>,
    <a href="http://en.wikipedia.org/wiki/Traceroute" target="_blank">Traceroute</a>, and the other topics
    in this lesson are all accurate and accessible.
    
    
    </li><li>The <a href="http://computer.howstuffworks.com/router1.htm" target="_blank">
    How Stuff Works</a> site has a nice animated description of how routers
    work to direct traffic on the Internet. 
    
    </li>
    <li><a href="https://www.youtube.com/watch?v=PBWhzz_Gn10" target="_blank">Warriors of the Net</a> is a classic 12 minute animated video about packets traveling through the Internet.</li>
    <li>For a very detailed and comprehensive discussion of networking -- sort of
    like reading a short book -- see the <a href="http://www.comptechdoc.org/independent/networking/guide/index.html" target="_blank">
    CTDP's Networking Tutorial</a>, which covers the topic in much more detail than
    we have done here.
    
    </li><li>Explore this <a href="https://www.telegeography.com/telecom-maps/submarine-cable-map/index.html" target="_blank"> map of the underwater cables</a> that carry 99% of international data.<a href="http://submarine-cable-map-2016.telegeography.com/" target="_blank">(2016 interactive version of map).</a>
    </li>
    <li>Watch <a href="http://youtu.be/b56WwssMxZw" target="_blank">this video</a> that describes 
      how a hacker could view your data on a public network using a packet sniffer.</li></ul>
    

Reflection: For Your Portfolio
-------------------------------

.. raw:: html

    <p><div class="yui-wk-div" id="portfolio">
    <p>Answer the following portfolio reflection questions as directed by your instructor. Questions are also available in this <a href="https://docs.google.com/document/d/1Qh8azjqAPoipQOHvddphbjkwtd0ei6y6oBXA6M0mAc0/edit?usp=sharing" target="_blank">Google Doc</a> where you may use File/Make a Copy to make your own editable copy.</p>
    <div style="align-items:center;"><iframe class="portfolioQuestions" scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vRBzopMg_-dkcbyqHWlK09BxzNHSuNZ9SlTvF-gmqcz4qAW0cCjeQ5qOGZZ4twg0jZByzebKLKByMHw/pub?embedded=true" style="height:30em;width:100%"></iframe></div>
    <!--Create a page on your portfolio named &lt;i&gt;How the Internet Works?&lt;/i&gt; in your portfolio and answer the following questions:
    &lt;ol&gt;
      &lt;li&gt;(&lt;b&gt;POGIL Activity 1&lt;/b&gt;)
      How does the geographical distance between the source and destination hosts on a network affect latency? 
      &lt;/li&gt;
      &lt;li&gt;What are the benefits of packet switching?&lt;/li&gt;
      &lt;li&gt;(&lt;b&gt;POGIL Activity 2&lt;/b&gt;)  &lt;b&gt;Missing Packets.&lt;/b&gt; What should happen if a packet goes missing? Who (which layer) would handle this?  What action would they have to take?  And what additional information would be needed in the packet in order to handle it?  &lt;/li&gt;
    
      &lt;li&gt;(&lt;b&gt;POGIL Activity 2&lt;/b&gt;) &lt;b&gt;Security/Privacy.&lt;/b&gt;  As the packets are being transmitted through the network, can people other than the sender and receiver read the messages? What methods can we use to protect the message?&amp;nbsp;&lt;/li&gt;
    
      &lt;/ol&gt;-->
    </div>
    </div>