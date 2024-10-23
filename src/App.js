import Header from './components/header/Header';
import './App.css';
import Hero from './components/hero/Hero';
import Category from './components/category/Category';
import Post from './components/pos/Post';
import Recent from './components/recent/Recent';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className='bg__img'>
        <Header></Header>
        <Hero></Hero>
      </div>
      <Category></Category>
      <Post></Post>
      <Recent></Recent>
      <Footer></Footer>
    </>
  );
}

export default App;
