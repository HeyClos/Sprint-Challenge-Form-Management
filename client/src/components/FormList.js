import React, { useState } from 'react';
import { useInput } from '../useInput';
import { axiosWithAuth } from '../axiosWithAuth';

const FormList = () => {
    const [forms, setForms] = useState([]);
        useInput(() => {
            axiosWithAuth().get("http://localhost:5000/api/restricted/data")
                .then(res => setForms(res.data))
                .catch(err => console.log(err))
        }, [])
    return (
        <div>
            <ul className="Form-List">
                {forms.map(form => {
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
