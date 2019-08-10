import React from 'react'

const Name = (props) => {
    return (
        <div>
            <h3>{props.name.name}</h3>
        <p>
          <strong>Course:</strong> {props.name.course}
        </p>
        <p>
          <strong>Technique:</strong> {props.name.technique}
        </p>
        <p>
          <strong>Ingredients:</strong> {props.name.ingredients}
        </p>
        </div>
    )
}

export default Name;
