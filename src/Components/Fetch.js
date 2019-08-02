import React from 'react';
import './fetch.css';
function Fetch(props) {
    let list = props.state.map((info, index) => <li onClick={() => props.myfun(info.short_name)} key={index}>{info.name}({info.short_name})</li>);

    let unorderedList = <ul>{list}</ul>;
    return (
        <div className='fetch'>
            <ul>
                <h1>Menu Categories</h1>
                {unorderedList}
            </ul>
        </div>

    );


}

export default Fetch;