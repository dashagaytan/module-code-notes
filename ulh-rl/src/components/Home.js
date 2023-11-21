import React from "react";
import { Link } from "react-router-dom";
import homeImg from '../images/pearl-dna.jpeg'

const Home = () => {
    return (
        <div className="home">
        <div className="home-grid">
          <div className="home-text">
            <h2><em>Welcome to Unconditional Love Healing</em> &hearts;</h2>
            <p className="welcome"> 
              Are you ready to embark on a journey of self-discovery, healing, and transformation? <br/>
              Meet  
              <Link style={{ color: '#d1b0be', textDecoration: 'none'}} to="/about"><strong><em> Ruta Labutis</em></strong></Link>, 
              a dedicated ThetaHealing practitioner, instructor, and intuitive healer. <br/>
              Her path to spiritual healing and holistic wellness began early in life, <br/>
              and today, she is here to guide you toward a brighter, more vibrant future.
            </p>
            <h2><em>The Power of Theta Healing</em></h2>
            <p> Thetahealing is a profound technique that induces a deep 
                state of relaxation akin to those blissful moments when you're half-awake in the morning or savoring a glass of wine. 
                This state, known as the Theta brainwave state, holds the key to unlocking your hidden subconscious. 
                You see, 90% of our challenges lie buried in our subconscious minds. 
                Through ThetaHealing, you will be guided into the Theta state, where you'll connect with divine, unconditional love. 
                In this sacred space, you'll open channels of communication with the divine, enabling you to co-create, 
                heal, and manifest your desires. 
                Are you ready to experience the transformative power of Unconditional Love Healing with Ruta Labutis? 
                Your journey to a life filled with love, health, and abundance begins here.</p>
          </div>
          <div className="home-image">
            <img src={homeImg} alt='homeImg' clas/>
          </div>
        </div>
        {/* contact me for more info section:  */}
      </div>
    )
}

export default Home;