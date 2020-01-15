import React, {Component, Fragment } from 'react'
import './home.scss'


window.addEventListener('scroll', () => {
  const header = document.getElementById('header-content');
    header.style.opacity = '1'- window.pageYOffset / 650;})



class Home extends Component{
    render(){
        return(
            <Fragment>
                <header className="header-content" id="header-content">
                    <div className="header-text">
                        <p className ="icon">
                            <i class="fas fa-gamepad"></i>
                        </p>
                        <h1 className="title">
                            David Roman
                            <br/>  <br/>       
                        <span className="orange-neon-title regular-text">Web developper</span>
                        </h1>
                        <p className="description">
                            Welcome to my Home page!<br/>
                            All the information about me it is below the page<br/>
                            it will be very funny work with you!.
                        </p>
                        <a href="https://github.com/davidroman-hub" target="_blank" rel="noopener noreferrer" className="btn-link regular-text">Git Hub</a>

                    </div>
                </header>
                 <main>
                    <section className="container">
                        <h2 className=" h2-subtitle">
                        servicios
                        </h2>
                        <p>
                          <span className="capital-letter">P</span>ara despejar la cabeza sunt officia pariatur consequat laborum eiusmod fugiat veniam commodo.
                           Sit laboris aliquip anim occaecat ipsum ex aliquip ipsum sit fugiat.
                           Aute occaecat fugiat culpa culpa eu ut veniam reprehenderit in et Lorem
                           Veniam occaecat qui do id non velit. Consectetur sit ullamco dolore labore elit
                           aliquip anim eu irure dolor adipisicing. Sunt ad mollit quis laboris consectetur adipisicing
                           proident excepteur aliquip elit incididunt culpa.</p>

                        <p>Laborum cillum nisi id eiusmod est labore adipisicing elit et enim veniam Lorem dolor.
                            Adipisicing dolore ut velit elit aliquip velit adipisicing cillum sunt proident culpa.
                            Sint eiusmod eiusmod adipisicing anim amet anim. Excepteur nostrud aute laboris proident
                            eu dolor commodo laboris deserunt duis duis adipisicing. Veniam aliqua ipsum proident aliqua
                            ut est ad ad sunt. Nostrud qui sunt eu id officia sunt ullamco ullamco veniam.</p>

                        <p>Voluptate commodo sint fugiat enim consequat sunt exercitation qui amet.
                            Sunt dolore incididunt ullamco ad magna. Sint tempor pariatur nostrud
                            pariatur aliquip adipisicing esse occaecat. Et velit ad esse mollit
                            laborum dolor excepteur ipsum esse sunt magna dolore fugiat et. 
                            Eu veniam ullamco ipsum ut labore sint culpa sit consequat sit
                            dolor nisi exercitation dolor. Consectetur excepteur nulla irure
                            exercitation. Aliqua sit laborum pariatur dolore velit. 
                        </p>
                    </section>
                </main>
                               
            </Fragment>
         )
    }
}

export default Home