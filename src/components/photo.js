import React from 'react';
import ReactDOM from 'react-dom';
import './welcome.css';
import two from './two.JPG'
import three from './three.JPG'
import four from './four.JPG'


class Photo extends React.Component {
    render (){
        return (
            <div>
                 <div className="content-container">
                    <div className='row'>
                        <p className='col col-sm-4 col-lg-4'><img src={two} alt='Не удается загрузить фото' id='two'className ="zoom"></img></p>
                        <div className='col  col-sm-4 col-lg-4'><img src={three} alt='Не удается загрузить фото' id='three' className ="zoom"></img></div>
                        <div className='col  col-sm-4 col-lg-4'><img src={four} alt='Не удается загрузить фото' id='four' className ="zoom"></img></div>
                    </div>
                </div>  

            </div>
            
        );
    }
}

export default Photo;