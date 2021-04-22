import React from 'react';
import ReactDOM from 'react-dom';
import Box from 'css-cssinjs/Box';
import Button from 'css-cssinjs/Button';

ReactDOM.render(
    <div>
        <Button size="big" />
        <Button size="small" />
        <Box size="big" />
        <Box size="small" />
    </div>,
    document.getElementById('root'),
);