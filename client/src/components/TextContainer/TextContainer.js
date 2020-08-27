import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
   <div className="textContainer">
       <div>
           <h1>Real-time Chat Application <span role="img" aria-label="emoji">💬</span></h1>
       </div>
       {
           users 
           ? (
               <div>
                   <h2>People in the Room: </h2>
                   <div className="activeContainer">
                       <h3>
                           {
                            users.map(({name}) => (
                            <div key={name} className="activeItem">
                                 <img alt="Online Icon" src={onlineIcon}/>
                                {name}
            
                            </div>
                            ))
                           }
                       </h3>
                    </div>
                    <p>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></p>
                </div>
           )
           : null
       }
   </div>
)

export default TextContainer;