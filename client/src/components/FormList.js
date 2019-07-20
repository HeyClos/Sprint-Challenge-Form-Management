import React from 'react';
import axios from 'axios';

const FormList = (props) => {
    axios
        .get("http://localhost:5000/api/restricted/data") 
        
        .then(res => {
          console.log(res); 
          // am i using my custom useInput hook in here correctly? Do i need to pass it res?
          useInput();
        })
        .catch(err => {
          console.log(err);
        });

    return (
        <div>
            <ul className="Form-List">
                {props.forms.map(form => {
                    return (
                    <li>
                        {form.name}
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default FormList;
