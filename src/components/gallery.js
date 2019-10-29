import React from 'react';
import ReactDOM from 'react-dom';
import AwesomeSlider from 'react-awesome-slider';
import './gallery.scss';
import './welcome.css';
import galOne from './galOne.JPG';
import galTwo from './galTwo.JPG';
import galThree from './galThree.JPG';
import galFour from './galFour.JPG';
import galFive from './galFive.JPG';
import galSix from './galSix.JPG';
import galSeven from './galSeven.JPG';
import galEight from './galEight.JPG';
import galNine from './galNine.JPG';
import galTen from './galTen.JPG';
import galEleven from './galEleven.JPG';
import galTwelve from './galTwelve.JPG';
import galThirteen from './galThirteen.JPG';
import galFourteen from './galFourteen.JPG';
import galFifteen from './galFifteen.JPG';



class Gallery extends React.Component {
    
    render (){
        return (
                <div className='gall' id='gallery'>
                    <AwesomeSlider>
                        <div data-src={galOne} />
                        <div data-src={galTwo}  />
                        <div data-src={galThree} />
                        <div data-src={galFour} />
                        <div data-src={galFive} />
                        <div data-src={galSix} />
                        <div data-src={galSeven}  />
                        <div data-src={galEight} />
                        <div data-src={galNine} />
                        <div data-src={galTen} />
                        <div data-src={galEleven} />
                        <div data-src={galTwelve}  />
                        <div data-src={galThirteen} />
                        <div data-src={galFourteen} />
                        <div data-src={galFifteen} />
                    </AwesomeSlider>
                </div>
                
        );
 };
};

export default Gallery;