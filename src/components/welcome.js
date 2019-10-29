import React from 'react';
import ReactDOM from 'react-dom';
import './welcome.css';
import first from './first.jpg';
import Photo from './photo';
import Inst from './inst';
import one from './one.JPG'
import Gallery from './gallery';
import whatsapp from './whatsapp.png';
import vk from './vk.png';
import instagram from './instagram.png';
import telergam from './telegram.png';

class Welcome extends React.Component {
    render(){
        return (
            <div>
                <div className='content-container'>
                    <div className='row flex-lg-nowrap align-items-center'>
                        <div className='col col-sm-4 col-lg-4 left' id='main'>
                            <div id='word'>JULIA`S WEBSITE</div>
                            <div id='word2'>PHOTOGRAPHER</div>
                        </div> 
                        <div className='col col-sm-2 col-lg-4 center'> 
                            <div><img src={one} className="img-fluid" id="one" alt='Не удается загрузить фото'  className ="zoom"></img></div>
                        </div>
                        <div className='col col-sm-5col-lg-5 right'>
                            <div className='text-right' id='head'>  
                                <a href='#main'>ГЛАВНАЯ</a>
                                <a href='#gallery'>ГАЛЕРЕЯ</a>
                                <a href='#footer'>КОНТАКТЫ</a>
                                <a href='#thirdsentens'>ПРАЙС</a>
                            </div>
                                <div className='text-center' id='word3'>WELCOME</div>
                                <div className='text-center' id='word4'>Помогу запечатлеть моменты твоей жизни</div>
                        </div>
                    </div>
                </div>                    
                 

                <div className='content-container' className='text-center' > 
                    <div className='row flex-lg-nowrap align-items-center'>
                        <div className='col'><img src={first} alt='Не удается загрузить фото' id='first'></img></div>
                        <div className='col' id='firstsentens'>
                            <div>Мое вдохновление сейчас - работы лучших</div>
                            <div>Моя цель - быть лучшим вдохновлением других</div>
                        </div>
                    </div>
                </div> 

                <div>
                    <Photo/>
                </div>  

                <div className='content-container' className='text-center' > 
                    <div className='row flex-lg-nowrap align-items-center'>
                        <div className='col'><img src={first} alt='Не удается загрузить фото' id='first'></img></div>
                        <div className='col' id='secondsentens'>
                        <div>Готова отдать всю свою душу и чувства для сотрудничества со своими клиентами</div>
                        <div>Поверьте, шедевра нам не избежать!</div>                         
                        </div>
                    </div>
                </div> 

                <div>
                    <Gallery/>
                </div>
                <div className='content-container' className='text-center' > 
                    <div className='row flex-lg-nowrap align-items-center'>
                        <div className='col'><img src={first} alt='Не удается загрузить фото' id='first'></img></div>
                        <div className='col' id='thirdsentens'>
                            <div>Найду индивидуальный подход к каждому</div>
                            <div>Любые пожелания обговариваются индивидуально</div>                       
                        </div>
                    </div>
                </div> 

               <Inst/>

                <div className="content-container" id="foursentens">
                    <div className='row'>
                        <div className='col  col-sm-4' id='kind'>
                            <ul>
                                <a id="ki">ВИДЫ СЪЕМОК</a>
                                <li>индивидуальная</li>
                                <li>love story</li>
                                <li>предметная</li>
                                <li>репортажная</li>
                                <li>съемка новорожденных</li>
                                <li>съемка "в ожидании"</li>

                            </ul>
                        </div>
                    
                    <div className='col  col-sm-4' id='price'>
                        <ul> <a id='pr'>ПРАЙС</a>
                            <li>индивидуальная: 1500Р/час, 2500Р/2 часа</li>
                            <li>love story: 2000Р/час, 3500Р/2 часа</li>
                            <li>готовые фото отсылаются Вам на электронную почту через 1,5-2 недели</li>
                        </ul>
                    </div>
                    </div>
                </div>

                

                <div className="content-container" id='footer'>
                   
                    <div className='row'>
                        <div className='col col-sm-2 col-lg-1' id='cont'>КОНТАКТЫ</div> 
                        <div className='col col-sm-4 col-lg-4'>
                            <div id='location'>Местоположение: Россия, Иркутск  </div>
                            <div>Телефон: +79041262191</div>
                            <div>E-mail: yulya.gerasimova.97@list.ru</div>
                            <br></br>
                            <div> <a href="tg://resolve?domain=yulkager01"> <img src={telergam} alt='Не удается загрузить фото' id='telegram'></img> Telegram </a></div>
                            <div> <a href="http://wa.me/79041262191" target="_blank"><img src={whatsapp} alt='Не удается загрузить фото' id='whatsapp'></img> WhatsApp </a></div>
                            <div> <a href="https://vk.com/y.gerasimova1997" target="_blank"> <img src={vk} alt='Не удается загрузить фото' id='vk'></img> VK </a></div>
                            <div> <a href="https://www.instagram.com/yulka.ger/" target="_blank"> <img src={instagram} alt='Не удается загрузить фото' id='instagram'></img> Instagram </a></div>
                            
                        </div>
                        <div className='col col-sm-1 col-lg-1'></div>
                        <div className='col col-sm-3 col-lg-4' id='btt'>
                            <span>Свяжитесь со мной,</span>
                            <br></br>
                            <span>если у Вас остались какие-то вопросы</span>
                            <br></br>
                            <a href="http://wa.me/79041262191" target="_blank" className="btn btn-outline-light" id="call">Связаться</a>
                        </div>
                        <div> </div>
                    </div>
                 </div>


               

            </div>

        
            
        );
    };
};

export default Welcome;