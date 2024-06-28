# Enjoy the Microblog Project and the MicroblogLite API!

Don't forget to read the [*MicroblogLite* API docs](http://microbloglite.us-east-2.elasticbeanstalk.com/docs) and experiment with the API in *Postman!*

Practice and experimentation provide experience, and experience provides confidence.

##Log-in
Using bootstrap I made a functioning carsouel. On this page you cannt access the post or profile page wihtout logging in!
<img alt="Log-in Page" width="40%" src="/images/login1.PNG">
<img alt="Log-in Page 2" width="40%" src="./images/login2.PNG">

##Register
Using the POST method I am able to create(register) a new profile. 
<img alt="Register Page 1" width="45%" src="./images/register1.PNG">
<img alt="Register Page 2" width="45%" src="./images/register2.PNG">

##Posts
Once you are logged in you are able to see the post page. Here we can see everyone else's posts. I wanted to keep the posts organized in a liner way, so I didnt try to put them side by side. 
<img alt="Posts Page" width="45%" src="./images/posts.PNG">
<img alt="Posts Page" width="45%" src="./images/posts2.PNG">


##My-Profile
This page is only able to be accessed when you are logged in. In the javascript i added -usernameElement.textContent = data.username;- in -function showProfile(data)-, so that which ever account is logged in, the username is displayed.  
<img alt="Profile Page 1" width="45%" src="./images/profile1.PNG">
<img alt="Profile Page 2" width="45%" src="./images/profile2.PNG">
