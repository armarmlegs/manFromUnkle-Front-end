import React, {Component} from 'react';
import './text.css'
// creating the initial component, a simple text div, this component will be the argument in the higher order component withToolTip, 
// the behavior is that when the mouse enter a explicative text will appear underneath the initial div,
// likewise on mouseLeave wil make the explicative text disappear.
class Text extends Component {
    render() { 
        return (<div className='text-block'>
            Some random text here
        </div>);
    }
}
 
export default Text;