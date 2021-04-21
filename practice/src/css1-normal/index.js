import React from 'react';
import ReactDOM from 'react-dom';
import Box from 'css1-normal/Box';
import Button from 'css1-normal/Button';

ReactDOM.render(
    <div>
        <Button size="big" />
        <Button size="small" />
        <Box size="big" />
        <Box size="small" />
    </div>,
    document.getElementById('root'),
);