import React from 'react';

export function Date(
    props: {
        date: string,
    },
) {
    return <div className="date">{props.date}</div>
}
