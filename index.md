<h1 id="top">Akamai Nook</h1>
<br>
<hr>
<h3>Index</h3>


<ul>
  <li><a href="#links">Useful Links</a></li>
  <li><a href="#1">What is it?</a></li>
  <li><a href="#2">Who can use it?</a></li>
  <li><a href="#3">Where can you use it for?</a></li>
  <li><a href="#4">How can you use it?</a></li>
  <li><a href="#5">Milestone 1</a>
  <ul>                                
    <li><a href="#6">Deployment</a></li>  
    <li><a href="#7">Landing Page</a></li>
    <li><a href="#8">Home Page</a></li>  
    <li><a href="#9">Log In Page</a></li>
    <li><a href="#10">Register Page</a></li>                                                                 <li><a href="#11">Profile Page</a></li>
    <li><a href="#12">Add Page</a></li>
    <li><a href="#13">Admin Page</a></li>
   </ul>
  <li><a href="#14">Milestone 2</a></li>
  <li><a href="#15">Milestone 3</a></li>
  
</ul>
<hr>

<h3 id="links">Useful Links</h3>
<ul>
  <li>Github organization page: <br>
    <a href="https://github.com/akamainook">https://github.com/akamainook</a></li>
  <li>Github application code:  <br>
    <a href="https://github.com/akamainook/akamainook">https://github.com/akamainook/akamainook</a></li>  
  <li>Project and milestones:  <br>
    <a href="https://github.com/akamainook/akamainook/projects">https://github.com/akamainook/akamainook/projects</a></li>
  <li>Meteor deployment website:  <br>
    <a href="https://galaxy.meteor.com/app/akamainook.meteorapp.com">https://galaxy.meteor.com/app/akamainook.meteorapp.com</a></li>
  <li>Actual application website:  <br>
    <a href="https://akamainook.meteorapp.com">https://akamainook.meteorapp.com</a></li>
</ul>
<hr>
  
<h3 id="1">What is it?</h3>
<p>
  Students have relied on Sinclair and Hamilton library for all their emergency studying and napping needs, and with the recent Sinclair    hour change there are a lot of students study-place-less. The Akamai Nook is a free to use web application that allows students to  find and rate their favorite place to study, give real-time feed back of how wonderful a newly discovered nook is. 
</p>
<hr>

<h3 id="2">Who can use it?</h3>
<p>
  Any students of University of Hawaii are allowed to come aboard and rate their favorite nook. International students, exchange        students, community college students, and Alumnis could all give important feedback and discoveries that supports student life.
</p>
<hr>

<h3 id="3">Where can you use it for?</h3>
<p>
  Location does not have to be limited in University campus only. Find a nice new coffee store with good WiFi? Share it with us. Find a   nice picnic area for some outdoor team meaning? Great! The openess of this application allows students to visit many different nooks,   making each study session exciting and refreshing. 
</p>
<hr>

<h3 id="4">How can you use it?</h3>
<p>

 <p>Firstly, install <a href="https://www.meteor.com/install">Meteor</a>.</p>
 
 <p>Then, clone a copy of AkamaiNook using <a href="https://github.com/akamainook/akamainook">Github</a>.</p>
 
 <p>Next, open a Command Propmt/Terminal window and cd into the app directory within the AkamaiNook directory.</p>
 
 <p>Once within AkamaiNook/app enter the following command to install the libraries:
 <p><code>$ meteor npm install</code></p>
 </p>
 
 <p>Fifth, run the following command to get the system running:
 <p><code>$ meteor npm run start</code>
 </p>
</p>

<hr>

<h3 id="5"><a href="https://github.com/akamainook/akamainook/projects/1">Milestone 1</a></h3>
<h4 id="6">Deployment</h4>
<p>
  We have deployed our application to galaxy, which can be found through <a   href="https://galaxy.meteor.com/app/akamainook.meteorapp.com">this</a> link.
</p>
<img src="/images/deployment.png" width="500px" align="middle">
<ul>
<li>
<h4 id="7">Landing Page</h4>
<p>
  This will be the page that the users are greeted upon opening the application. The user is able to see three of our recommended locations with a image, location, and attributes attached. The user is able to quickly type in some key words in the search bar and begin their hunt for their nook. The navigation bar on the top will allow the user to log in or sign up for more action. 
</p>
<a href="http://akamainook.meteorapp.com/#/"><img src="/images/landing.PNG" width="500px" align="middle"></a>
</li>

<li>
<h4 id="8">Home Page</h4>
<p>
  The home page will be greeting the users who have made an account and signed in. The home page have an in-depth search function complete with an embed Google Maps to allow users to visually see the location of the nooks. 
</p>
<a href="http://akamainook.meteorapp.com/#/home"><img src="/images/home.png" width="500px" align="middle"></a>
</li>

<li>
<h4 id="9">Log in Page</h4>
<p>
  Simple email and password registration page. Convieniently allows user to register if they have not done so.
</p>
<a href="http://akamainook.meteorapp.com/#/signin"><img src="/images/login.png" width="500px" align="middle"></a>
</li>

<li>
<h4 id="10">Register Page</h4>
<p>
  Another simple interface that allows user to register their email and password. We may add dual password option later to help users make sure the password they typed in is what they want it to be. 
</p>
<a href="http://akamainook.meteorapp.com/#/signup"><img src="/images/register.png" width="500px" align="middle"></a>
</li>

<li>
<h4 id="11">Profile</h4>
<p>
  Now that the user is registered and logged in, they are able to view their profile. The profile page will allow users to check what nook they have uploaded, and have control over their email address and password. 
</p>
<a href="http://akamainook.meteorapp.com/#/signup"><img src="/images/profile.png" width="500px" align="middle"></a>
</li>

<li>
<h4 id="12">Add Page</h4>
<p>
  This is a simple page that allows user to add their favorite nook. Our scope is to allow the user to enter the name, a short description, upload an image, select tags, and enter the hours of operation. Of course, some users may be discouraged to enter all of the field, so not all of the fields will be mandatory. For data purposes, currently all fields are mandatory and image will require a link instead of an upload. 
</p>
<a href="http://akamainook.meteorapp.com/#/addnook"><img src="/images/add.png" width="500px" align="middle"></a>
</li>
<li>
<h4 id="13">Admin Page</h4>
<p>
  The admin will have full control of which location to add to our archives and which location to decline. Because this is a relatively small scoped project, we plan to manually update the maps and location cards as the requests come in. This allows us to take our time and actually fill out the description of the locations if needed, such as taking a photo of the location if the submittion lacks one. 
</p>
<a href="http://akamainook.meteorapp.com/#/admin"><img src="/images/admin.png" width="500px" align="middle"></a>
</li>
</ul>
<hr>

<h3 id="14"><a href="https://github.com/akamainook/akamainook/projects/2">Milestone 2</a></h3>

<p>
Our primary goal of Milestone 2 was to implement the functions each page of the application. These functions were as follows:

<ul>
<li>Log In Page: We implemented the ability to sign into an account using default credentials</li>
<li>Profile Page: The user is able to log in and see the nooks that they submitted</li>
<li>Nooks Page: Any vistor of the site may view all current nooks</li>
<img src="/images/nooks.png" width="500px" align="middle">
<li>Nook Admin Page: The admin is able to edit currently listed nooks</li>
<img src="/images/nookadmin.png" width="500px" align="middle">
<li>Add Page: The user is able to submit a nook by filling in a form as seen below
<img src="/images/addM2.png" width="500px" align="middle">
<li>Admin Page: The admin is able to approve spots which then enables anyone to see all existing nooks.</li>
</ul>
</p>

<hr>

<h3 id="15"><a href="https://github.com/akamainook/akamainook/projects/3">Milestone 3</a></h3>
<p>
After the hard part of back-end programming is done, we decided to polish our website.
</p>
<li>Design: We changed up some of the font and color theme to make the website aesthetically pleasing to look at.</li>
<li>Logo: Using the power of Logomakr.com, we were able to create our unique logo.</li>
<img src="/images/logo.png" width="500px" align="middle">


<a href="#top">Back to top</a>
