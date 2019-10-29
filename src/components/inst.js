import React from 'react';
import ReactDOM from 'react-dom';
import './welcome.css';
import instOne from './instOne.JPG';
import instTwo from './instTwo.JPG';
import instThree from './instThree.JPG';
import instFour from './instFour.JPG';

class Inst extends React.Component {
    render (){
        return (
            <div>
                 <div>
                        <div className='text-center' id='inst'> <a href="https://www.instagram.com/yulka.ger/" target="_blank"> INSTAGRAM</a> <a className='line'>____________</a></div>
                </div>
                <div className="content-container">
                        <div className='row'>
                            <div className='col col-sm-3 col-lg-3'><a href="https://www.instagram.com/p/B3Uek7IJScf/" target="_blank" ><img src={instOne} alt='Не удается загрузить фото' id='instOne'className ="zoom"></img></a></div>
                            <div className='col col-sm-3 col-lg-3'><a href="https://www.instagram.com/p/B3kG9w1IzFV/" target="_blank" ><img src={instTwo} alt='Не удается загрузить фото' id='instTwo' className ="zoom"></img></a></div>
                            <div className='col col-sm-3 col-lg-3'><a href="https://www.instagram.com/yulka.ger/" target="_blank" ><img src={instThree} alt='Не удается загрузить фото' id='instThree' className ="zoom"></img></a></div>
                            <div className='col col-sm-3 col-lg-3'><a href="https://www.instagram.com/yulka.ger/" target="_blank" ><img src={instFour} alt='Не удается загрузить фото' id='instFour' className ="zoom"></img></a></div>
                        </div>
                </div>  

            </div>
            
        );
    }
}

export default Inst;