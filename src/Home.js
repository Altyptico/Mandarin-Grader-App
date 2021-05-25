const Home = () => {
    const tagline = 'Do more with your reading';
    return ( 
        <div className="home-content">
            <h4>{tagline}</h4>
            <div class="row">
                {/* card 1 */}
                <div class="col s12 m6">
                    <div class="card small cyan darken-2">
                        <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
                {/* End of Card 1 */}
                {/* card 2 */}
                <div class="col s12 m6">
                    <div class="card small cyan darken-2">
                        <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
                {/* End of Card 2 */}

               
            </div>
            
        </div>
     );
}
 
export default Home;