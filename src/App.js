/* eslint-disable jsx-a11y/img-redundant-alt */
import me from './myFace.jpg';
import linkedin from './linkedin.png';
import gitHub from './GitHub.png';
import './App.css';
import progressive from './progressive.mp4';
import film_fetch from './FilmFetch.mp4';
import codingTest from './codingTest.mp4';
import employees from './employees.mp4';
import gmail from './gmail.png'
import KU from './kansasuniveristy.jpg'

function App() {
  return (
    <article>
      <header className="App-header">
         Elijah linton
         <a href='#aboutMe'>about me</a>
         <a href='#portfolio'> portfolio</a>
         <a href='#contact'>contact</a>
        <a href='#resume'>resume</a>   
      </header>

      <div id='aboutMe'>
        <img className='myPic' alt='a image of a really handsome dude' src={me}></img>
          <h2>about me</h2>
          <p>
            i am Elijah Linton 20 year old bootcamp student,
            my skillset consist of html, css, sql, nodejs, express,
            react js, mongodb, and much more!
          </p> 

     </div>

     <div id='portfolio'>
          <h2> portfolio</h2>
          <video id="pwa" src={progressive} controls>
          
          </video>
          <p>
            my work using front end and back end technologies has 
            gave me the helped me understand full stack apps and websites
            i gave this web app the ability to be installable and uninstallable

          </p>

          <video id='backend' src={film_fetch} alt='my work' controls></video>
          <p>
            this a group project known as film fetch with our ability to
            communicate and work hard mutaully we created front end web page with
            the use of server side apis html css moment.js
          </p>
          
          <video id='codingTest' src={codingTest} controls> </video>
              
             <p>
                 this is know as the coding test a quiz webpage
                  that uses local storage to save names and scores
                  and takes the data and post it onto the webpage
                  making this helped me further understand how to make
                  interactive webpages on the front end
             </p>

          <video id='employee' src={employees} controls></video>
          <p>the backend application in this video was made using object oriented programming
             inquirer and test driven development.Through using these technologies and style of programming
             i have strong capabilities of applying logic and became knowledgable al resolving bugs.
             over all the experiance in the back end has made me a problem solver who can avoid fustration
             and leave no stone unturned. 
          </p>
     </div>

     <div id="contact">
        <h2>contact</h2>
        <img id='gmail' src={gmail} alt='gmail pic'></img>
        <p>
          I am excited for potenital opportunies to show 
          others my skills i look forward to them. feel free to contact me at
          demigodlinty@gmail.com 
        </p>
     </div>

     <div id='resume'>
      <h1>Resume</h1>
        <img  id="KU" src={KU} alt='image of kansas university symbol'>

        </img>
        <p> currently enrolled in kansas university bootcamp</p>
     </div>
     
     <footer>
      <a href='https://github.com/ElijahLinton' ><img className="icons" src={gitHub}></img></a>
      <a href="https://www.linkedin.com/in/elijah-linton-4612b7241/"><img className="icons" src={linkedin} alt="my linkedin page"></img></a>
     </footer>
    </article>
  );
}

export default App;
