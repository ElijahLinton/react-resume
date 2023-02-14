/* eslint-disable jsx-a11y/img-redundant-alt */
import me from './myFace.jpg';
import linkedin from './linkedin.png';
import gitHub from './GitHub.png';
import './App.css';

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
     <footer>
      <a href='https://github.com/ElijahLinton' ><img className="icons" src={gitHub}></img></a>
      <a href="https://www.linkedin.com/in/elijah-linton-4612b7241/"><img className="icons" src={linkedin} alt="my linkedin page"></img></a>
     </footer>
    </article>
  );
}

export default App;
