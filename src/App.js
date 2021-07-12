import logo from './logo.svg';
import './App.scss';

import Nav from './components/nav';
import Background from './components/background';
import Page from './components/page';

function App() {
  return (
    <>
      <Background />
      <div className="App">
        <Nav />


        {/* <Page>
        <div className="page-flex">
          <div className="page-vertical">
            <div> TEERZO </div>
          </div>
        </div>
      </Page> */}

        <Page>
          <div className="page-padding">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus facilisis felis, ut vestibulum orci facilisis ac.
              Nunc facilisis sagittis tortor, eu finibus ipsum interdum at. Mauris ultrices cursus condimentum.
              Sed fringilla sit amet sem in lobortis. Morbi urna lectus, feugiat et mi vel, porttitor posuere tortor.
              Integer dapibus elementum metus, at dictum massa tempus ut.
              Nunc imperdiet egestas purus, nec ultricies purus accumsan eget.
              Pellentesque quis vehicula sapien. Quisque non eros justo.
        </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus facilisis felis, ut vestibulum orci facilisis ac.
              Nunc facilisis sagittis tortor, eu finibus ipsum interdum at. Mauris ultrices cursus condimentum.
              Sed fringilla sit amet sem in lobortis. Morbi urna lectus, feugiat et mi vel, porttitor posuere tortor.
              Integer dapibus elementum metus, at dictum massa tempus ut.
              Nunc imperdiet egestas purus, nec ultricies purus accumsan eget.
              Pellentesque quis vehicula sapien. Quisque non eros justo.
        </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus facilisis felis, ut vestibulum orci facilisis ac.
              Nunc facilisis sagittis tortor, eu finibus ipsum interdum at. Mauris ultrices cursus condimentum.
              Sed fringilla sit amet sem in lobortis. Morbi urna lectus, feugiat et mi vel, porttitor posuere tortor.
              Integer dapibus elementum metus, at dictum massa tempus ut.
              Nunc imperdiet egestas purus, nec ultricies purus accumsan eget.
              Pellentesque quis vehicula sapien. Quisque non eros justo.
        </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus facilisis felis, ut vestibulum orci facilisis ac.
              Nunc facilisis sagittis tortor, eu finibus ipsum interdum at. Mauris ultrices cursus condimentum.
              Sed fringilla sit amet sem in lobortis. Morbi urna lectus, feugiat et mi vel, porttitor posuere tortor.
              Integer dapibus elementum metus, at dictum massa tempus ut.
              Nunc imperdiet egestas purus, nec ultricies purus accumsan eget.
              Pellentesque quis vehicula sapien. Quisque non eros justo.
        </p>
          </div>
        </Page>
      </div>
    </>
  );
}

export default App;
