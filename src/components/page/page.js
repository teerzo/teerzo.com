import React, { useEffect, useState } from 'react';
import './page.scss';

export default function Page(props) {
    return (
        <>
            <div className="page">
                {props.children}
            </div>
        </>
    )
}