import React from 'react';
import Link from 'next/link';
import { Button, Input } from 'antd';

const page = (props) => {
    const onClick = (e) => {
        console.log(e);
    };
    return (
        <div>
            <Button onClick={onClick}>test</Button>
            <Button>page</Button>
        </div>
    );
};

export default page;
