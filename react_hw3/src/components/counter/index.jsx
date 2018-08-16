import React from 'react';


const Counter = ({value, add, sub}) => (
    <div>
        <div class="js-value">{value}</div>
        <div>
        <button class="js-add" onClick={() => add(5)}>add</button>
        <button class="js-sub" onClick={() => sub(5)}>sub</button>
        </div>
    </div>
);

export default Counter;