import React from 'react';
import Name from './Name';

function NameCard(props) {
    return (
      //PROPS IS AN OBJECT SO I CANT USE AN ARRAY METHOD(MAP) ON IT! 
      <div>
        <h2>Food Names!</h2>
    
        <div>
        
          {props.names.map(name => (
            <Name name={name} ingredients={name.ingredients} />
          ))}
        </div>
      </div>
    );
}

export default NameCard;