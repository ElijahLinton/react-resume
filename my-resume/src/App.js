/* eslint-disable jsx-a11y/img-redundant-alt */
import me from './myFace.jpg';
import './App.css';

function App() {
  return (
    <article>
      <header className="App-header">
         Elijah linton
      </header>

      <div className='board'>
        <img className='myPic' alt='a image of a really handsome dude' src={me}></img>
        <h3>who am i? </h3> 

     </div>
     <footer>links</footer>
    </article>
  );
}

export default App;
