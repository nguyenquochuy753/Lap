import * as React from "react";
import './drumitem.css';
import sound1 from './music/tom-1.mp3'
import sound2 from './music/tom-2.mp3'
import sound3 from './music/tom-3.mp3'
import sound4 from './music/tom-4.mp3'
import sound5 from './music/snare.mp3'
import sound6 from './music/crash.mp3'
import sound7 from './music/kick-bass.mp3'



class MyDrum extends React.Component {

    clickHandler = (s) => {
        switch (s) {
            case '1':
                const music1 = new Audio(sound1);
                music1.play();
                break;
            case '2':
                const music2 = new Audio(sound2);
                music2.play();
                break;
            case '3':
                const music3 = new Audio(sound3);
                music3.play();
                break;
            case '4':
                const music4 = new Audio(sound4);
                music4.play();
                break;
            case '5':
                const music5 = new Audio(sound5);
                music5.play();
                break;
            case '6':
                const music6 = new Audio(sound6);
                music6.play();
                break;
            case '7':
                const music7 = new Audio(sound7);
                music7.play();
                break;
            default: break;
        }
    }

    render() {
        return (
            <div>
                <img className="img1" src={this.props.src} onClick={() => this.clickHandler(this.props.name)}/>
                <audio
                    id="1"
                    src="./music/tom-2.mp3"
                />
            </div>
        )
    }
}


export default MyDrum;