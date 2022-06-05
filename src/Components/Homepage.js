import {Link} from 'react-router-dom';
import aboutUsIMG from './images/aboutUs.jpg';

function Homepage() {
  window.scrollTo(0, 0)
  return (
    <div className="Homepage">
      <div className="main-parallax">
      </div>

      <div className="aboutUs flex">
        <div className="story">
          <p className="title">ABOUT US</p>
          <p>Honeycat's cat cafe is a peaceful retreat where you can connect and make friends (human and animal!), know that you are doing good, and be served excellent quality, healthy, kind food and drink.</p>
          <p>There are many cat-lovers out there, some of whom may not even know that they are cat-lovers yet… Some people can’t have pets because of where they live, their lifestyle, or being away from home. Honeycat's cat cafe is a place for people to experience the healing serenity of being around cats, and all of the benefits they bring: enhancing your mood, relieving stress, increasing joy and happiness.</p>
          <p>There are many people-loving cats out there, some of whom may not have found their loving ‘forever home’ yet. Some cats have been badly treated or are homeless because the owner they loved has passed away, we offer a home to and promote rehoming of rescue cats. Honeycat's cat cafe is a place for cats to be well-cared for, loved and attended to, with all of their needs met. Lots of fun toys to climb on, people to show off to and comfy places to rest when it’s time for a cat-nap.</p>
        </div>
        <div className="image">
          <img src={aboutUsIMG}/>
        </div>
      </div>

      <div className="section flex">
        <div className="book flex">
          <p className="title">BOOK NOW!</p>
          <p>Our kittys are very busy so if you want to see them it’s best to book in advance.</p>
          <button><Link to="/book_now" className="Link">BOOK NOW</Link></button>
        </div>
        <div className="meet">
          <p className="title">MEET THE CATS!</p> 
          <p>All our cats are Micro-chipped, Neutered/Spayed, Fully Vaccinated & Dewormed</p>
          <button type="submit"><Link to="/meet_the_cats" className="Link">MEET THE CATS</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
