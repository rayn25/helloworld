import React from 'react';
import ReactDOM from 'react-dom';
import Box from 'practice/src/css-normal/Box';
import Button from 'practice/src/css-normal/Button';

ReactDOM.render(
    <div>
        <Button size="big" />
        <Button size="small" />
        <Box size="big" />
        <Box size="small" />
    </div>,
    document.getElementById('root'),
);