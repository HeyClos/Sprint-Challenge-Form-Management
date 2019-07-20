import React from 'react';
import axios from 'axios';

const FormList = (props) => {
        useInput(() => {
            axiosWithAuth().get("http://localhost:5000/api/restricted/data")
                .then(res => setFriends(res.data))
                .catch(err => console.log(err))
        }, [])
    return (
        <div>
            <ul className="Form-List">
                {props.forms.map(form => {
                    return (
                    <li>
                        {form.username}
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default FormList;
