import React from 'react';
import './Display.css';
function Display(props) {
    let rows = props.state.map((info, index) => {
        const { id, name, description } = info //destructuring
        return (
            <tr key={id}>
                <td>{name}</td>
                <td>{description}</td>
            </tr>
        )
    })
    let tab = <table id='ls'>
        <tbody>
            <tr>
                <th>Name: </th>
                <th>Description:</th>
            </tr>
            {rows}
        </tbody>
    </table>;
    return (
        <div id='dis'>
            {tab}
        </div>

    );
}

export default Display;