import logo from './logo.svg';
import './App.scss';

import Nav from './components/nav';
import Background from './components/background';
import Page from './components/page';

function App() {
  return (
    <>
      <div className="App">


        {/* <Background /> */}
        <Nav />
        <div className="container">

          <Page>
            <div className="page-padding page-layout-centered">
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
      </div>
    </>
  );
}

export default App;
