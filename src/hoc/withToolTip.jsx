import React from "react";
import './tooltip.css'


// creation de la function

function withToolTip(Component) {
  //dans cette function, je crée un nouveau component (WithToolTip) qui va wrappé le composant original (Text)
  //le hoc va nous permettre d'appliquer la meme logique a n'importe quel component créé dans le futur.

  return class WithToolTip extends Component {
    state = { showToolTip: false }; // l'etat de base de se component est set sur false, en utilisant des setState nous allons pouvoir changer cette valeure et faire apparaitre/disparaitre le texte explicatif.
    mouseOver = () => {
      this.setState({ showToolTip: true }); // fait apparaitre le tooltip quand l'utilisateur passe la souris sur l'élément
    };
    mouseOut = () => {
      this.setState({ showToolTip: false }); // fait disparaitre le tooltip quand l'utilisateur retire la souris de l'élément
    };
    render() {
      return (
         <div className='tooltip-container'>
             <div className="tooltip-wrapper">
             <h1>Front-end Test</h1>
        <div className='input' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} >
            
          <Component  showToolTip={this.state.showToolTip} />      
          {/* props showToolTip contient la valeure true ou false dont nous aurons besoin dans le component text*/}
        </div>
        </div>
        </div>
        
      );
    }
  };
}

export default withToolTip;
