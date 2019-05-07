<h1 id="top">Akamai Nook</h1>
<br>
<hr>
<h3>Index</h3>


<ul>
  <li><a href="#links">Useful Links</a></li>
  <li><a href="#1">What is it?</a></li>
  <li><a href="#2">Who can use it?</a></li>
  <li><a href="#3">Where can you use it for?</a></li>
  <li><a href="#devguide">Developer Guide</a></li>
  <li><a href="#userguide">User Guide</a></li>
  <ul>                                
    <li><a href="#7">Landing Page</a></li>
    <li><a href="#8">Nooks Page</a></li>  
    <li><a href="#9">Log In Page</a></li>
    <li><a href="#10">Register Page</a></li>                                          
    <li><a href="#11">Profile Page</a></li>
    <li><a href="#12">Add Page</a></li>
    <li><a href="#mynooks">My Nooks Page</a></li>
    <li><a href="#13">Admin Page</a></li>
   </ul>
  <li><a href="#5">Milestone 1</a>
  <li><a href="#14">Milestone 2</a></li>
  <li><a href="#15">Milestone 3</a></li>
  <li><a href="#feedback">Community Feedback</a></li>


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


<h3 id="devguide">Developer's Guide</h3>
<p>

 <p>Firstly, install <a href="https://www.meteor.com/install">Meteor</a>.</p>
 
 <p>Then, clone a copy of AkamaiNook using <a href="https://github.com/akamainook/akamainook">Github</a>.</p>
 
 <p>Next, open a Command Prompt/Terminal window and cd into the app directory within the AkamaiNook directory.</p>
 
 <p>Once within AkamaiNook/app enter the following command to install the libraries:
 <p><code>$ meteor npm install</code></p>
 </p>
 
 <p>Fifth, run the following command to get the system running:
 <p><code>$ meteor npm run start</code></p>
 </p>
 
 <p>You can now access the downloaded build of the site on Google Chrome, or a similar browser by typing:
<p><code>$ localhost:3000</code></p>
</p>

<hr>

<h3 id="userguide">User Guide</h3>


<ul>
<li>
<h4 id="7">Landing Page</h4>
<p>
  This will be the page that the users are greeted upon opening the application. The user is able to see three of our recommended locations with a image, location, and attributes attached. The user is able to quickly type in some key words in the search bar and begin their hunt for their nook. The navigation bar on the top will allow the user to log in or sign up for more action. 
</p>
<a href="http://akamainook.meteorapp.com/#/"><img src="/images/landingfullm3.png" width="500px" align="middle"></a>
</li>

<li>
<h4 id="8">Nooks Page</h4>
<p>
  The Nooks page will display all current Nooks on cards. This page is accessible through the top navigation bar. Upon arrival of the page you will be greeted by a Google Map of UH Manoa area with points that correspond to the Nooks. Pointers will be added by admins on a weekly basis. All visitors of the site may access this page.
</p>
<a href="http://akamainook.meteorapp.com/#/nooks"><img src="/images/listnookmapm3.png" width="500px" align="middle"></a>
  <hr>
  <a href="http://akamainook.meteorapp.com/#/nooks"><img src="/images/listnook2m3.png" width="500px" align="middle"></a>
</li>

<li>
<h4 id="9">Log in Page</h4>
<p>
  Simple email and password registration page. Convieniently allows user to register if they have not done so.
</p>
<a href="http://akamainook.meteorapp.com/#/signin"><img src="/images/loginm3.png" width="500px" align="middle"></a>
</li>

<li>
<h4 id="10">Register Page</h4>
<p>
  Another simple interface that allows user to register their email and password. You must enter your password twice to prevent accidental typos.
</p>
<a href="http://akamainook.meteorapp.com/#/signup"><img src="/images/registerm3.png" width="500px" align="middle"></a>
</li>

<li>
<h4 id="11">Profile</h4>
<p>
  Now that the user is registered and logged in, they are able to view their profile. The profile page will allow users to check what nook they have uploaded, and have control over their email address and password. 
</p>
<a href="http://akamainook.meteorapp.com/#/profile"><img src="/images/profilem3.png" width="500px" align="middle"></a>
</li>

<li>
<h4 id="12">Add Nooks Page</h4>
<p>
  This is a simple page that allows user to add their favorite nook. Our scope is to allow the user to enter the name, a short description, link an image, select tags, and enter the hours of operation. Of course, some users may be discouraged to enter all of the field, so not all of the fields will be mandatory. Adding is accessible through clicking the link on the navigation bar titled "Add Nooks"
</p>
<a href="http://akamainook.meteorapp.com/#/addnook"><img src="/images/addnookm3.png" width="500px" align="middle"></a>
</li>

<li>
  <h4 id="mynooks">My Nooks Page</h4>
  <p>
     My Nooks is a listing of your added Nooks. It is availible to all logged in users. The user can view all Nooks they added and have the option to edit or delete the desired Nook. When you attempt to delete, you have an option to confirm deletion so no acciedental deletions may be made.
  </p>
<a href="http://akamainook.meteorapp.com/#/mynooks"><img src="/images/adminm3.png" width="500px" align="middle"></a>

<li>
<h4 id="13">Admin Page</h4>
<p>
  A variation of the My Nooks page. It is accessible only as an admin user. This page allows the admin user to change any details of any Nook. All nooks are accessible from default nooks, user added nooks, and admin added nooks. The same parameters available to edit are the same as when adding.
</p>
<a href="http://akamainook.meteorapp.com/#/admin"><img src="/images/adminm3.png" width="500px" align="middle"></a>
</li>

<hr>

<h3 id="5"><a href="https://github.com/akamainook/akamainook/projects/1">Milestone 1</a></h3>
<h4 id="6">Deployment</h4>
<p>
  We have deployed our application to galaxy, which can be found through <a   href="https://galaxy.meteor.com/app/akamainook.meteorapp.com">this</a> link.
</p>
<img src="/images/deployment.png" width="500px" align="middle">

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


<hr>

<h3 id="15"><a href="https://github.com/akamainook/akamainook/projects/3">Milestone 3</a></h3>
<p>
After the hard part of back-end programming is done, we decided to polish our website.
</p>
<ul>
  <li>Design: We changed up some of the font and color theme to make the website aesthetically pleasing to look at. A google font Montserrat as the overall font choice. Navigation bar now reflects the color of the foot bar. Paddings and margins were added in many of the pages to allow more breathing rooms. </li>
  <li>Logo: Using the power of Logomakr.com, we were able to create our unique logo. The logo is in the color of green and white, which is the overall theme of this webpage. The book in the back represents all the knowledge you could gain from using our site. </li>
  <img src="/images/logo.png" width="500px" align="middle">
  <li>Code elegance: We went and deleted all test console.log statements, added some comments, got rid of unnecessary imports, deleted all template related stuff that were unrelated to our project. </li>
  </ul>

<h3>New Page Changes</h3>
<ul>
  <li>
    <h4 id="9">Landing Page</h4>
      <p> The landing page has been updated with a new background of UH Manoa's Hamilton Library interior. It retains the searchbar and popular nooks. It now has a list of popular tags.
    </p>
    <a href="http://akamainook.meteorapp.com/#/"><img src="/images/landingfullm3.png" width="500px" align="middle"></a>
  </li>
  <li>
    <h4>Nooks Page</h4>
      <p> The Nooks page is a list of all the nooks added. This is accessible to all visitors of the site, logged in or not. Tags are listed individually in each of the Nook cards. We merged home and list page functionality. Now the Google Maps with markers that was previously on the home page is now on the list page.
    </p>
    <a href="http://akamainook.meteorapp.com/#/nooks"><img src="/images/listnookmapm3.png" width="500px" align="middle"></a>
    <hr>
    <a href="http://akamainook.meteorapp.com/#/nooks"><img src="/images/listnook2m3.png" width="500px" align="middle"></a>
  </li>
  <li>
    <h4>My Nooks Page</h4>
      <p> My Nooks is a variation of the Nooks Page. It is availible to all logged in users. The user can view all Nooks they added and have the option to edit or delete the desired Nook. When you attempt to delete, you have an option to confirm deletion so no acciedental deletions may be made.
    </p>
    <a href="http://akamainook.meteorapp.com/#/mynooks"><img src="/images/adminm3.png" width="500px" align="middle"></a>
  </li>
    <li>
    <h4>Add Page</h4>
      <p> This page allows the user to change any details of the Nook. New features include a checkbox system for tags compared to the previous text box. There is also a dropdown menu to select time. The same parameters available to you when adding is availble in edit.
    </p>
    <a href="http://akamainook.meteorapp.com/#/mynooks"><img src="/images/addnookm3.png" width="500px" align="middle"></a>
  </li>
  <li>
    <h4>Edit Page</h4>
      <p> A variation of the Add Nook page. This page allows the user to change any details of the Nook. The same parameters available to you when adding is availble in edit.
    </p>
    <a href="http://akamainook.meteorapp.com/#/mynooks"><img src="/images/editnookm3.png" width="500px" align="middle"></a>
  </li>
  <li>
    <h4>Profile Page</h4>
      <p> The profile page shows you nooks and your current profile picture and a link to edit your profile. Editing your profile allows you to change your profile picture and change your password. You can only change your profile picture from a list a default pictures. To change your password you must enter your old password and confirm your new password twice.
    </p>
    <a href="http://akamainook.meteorapp.com/#/profile"><img src="/images/profilem3.png" width="500px" align="middle"></a>
    <hr>
    <a href="http://akamainook.meteorapp.com/#/profile"><img src="/images/editprofilem3.png" width="500px" align="middle"></a>
  </li>
  <li>
    <h4>Admin Page</h4>
    <p> A variation of the My Nooks page. This page allows the admin user to change any details of any Nook. All nooks are accessible from default nooks, user added nooks, and admin added nooks. The same parameters available to you when adding is availble in edit. 
    </p>
    <a href="http://akamainook.meteorapp.com/#/admin"><img src="/images/adminm3.png" width="500px" align="middle"></a>
  </li>
  <li>
    <h4>Signup Page</h4>
    <p> The signup page now has a confirm password box. This is to prevent accidental password typos.
    </p>
    <a href="http://akamainook.meteorapp.com/#/signup"><img src="/images/registerm3.png" width="500px" align="middle"></a>
  </li>
  
</ul>

<hr>
<h3 id="feedback"><a href="https://github.com/akamainook/akamainook/feedback">Community Feedback</a></h3>

<p>
  <h4>Isaiah T.</h4>
  <p>
  Website goes along well with Manoa's colors
  - Wishes time field of 'Add Nook' Page was simpler/easier to use
  </p>
</p>
<p>
  <h4>James U.</h4>
    <p>
      - Thinks it looks nice  
    </p>
</p>

<a href="#top">Back to top</a>
