import React from 'react';

// creation de la function 

function withToolTip(Component){
    //dans cette function, je crée un nouveau component (WithToolTip) qui va wrappé le composant original (Text)
    //le hoc va nous permettre d'appliquer la meme logique a n'importe quel component créé dans le futur.
    
    return class WithToolTip extends Component{
        state= {showToolTip : false} // l'etat de base de se component est set sur false, en utilisant des setState nous allons pouvoir changer cette valeure et faire apparaitre/disparaitre le texte explicatif. 
        mouseOver =() => {
            this.setState({showToolTip:true}) // fait apparaitre le tooltip quand l'utilisateur passe la souris sur l'élément
        }
        mouseOut =() => {
            this.setState({showToolTip:false}) // fait disparaitre le tooltip quand l'utilisateur retire la souris de l'élément
        }
        render() {
            <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
           <Component showToolTip={this.state.showToolTip}/>
           </div>
        }



    }
}

export default withToolTip;