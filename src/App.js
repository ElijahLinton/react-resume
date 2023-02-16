/* eslint-disable jsx-a11y/img-redundant-alt */
import me from './myFace.jpg';
import linkedin from './linkedin.png';
import gitHub from './GitHub.png';
import './App.css';
import progressive from './progressive.mp4';
import film_fetch from './FilmFetch.mp4';
import codingTest from './codingTest.mp4';
import employees from './employees.mp4';

function App() {
  return (
    <article>
      <header className="App-header">
         Elijah linton
         <a href='.board'>about me</a>
         <a> portfolio</a>
         <a>contact</a>
        <a>resume</a>   
      </header>

      <div className='board'>
        <img className='myPic' alt='a image of a really handsome dude' src={me}></img>
          <h3>about me</h3>
          <p>
            i am Elijah Linton 20 year old bootcamp student,
            my skillset consist of html, css, sql, nodejs, express,
            react js, mongodb, and much more!
          </p> 

     </div>

     <div id='portfolio'>
          <h1> portfolio</h1>
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

          <video id='employee' src={employees} controls></video>
     </div>


     
     <footer>
      <a href='https://github.com/ElijahLinton' ><img className="icons" src={gitHub}></img></a>
      <a href="https://www.linkedin.com/in/elijah-linton-4612b7241/"><img className="icons" src={linkedin} alt="my linkedin page"></img></a>
     </footer>
    </article>
  );
}

export default App;
