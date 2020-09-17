import React from 'react';

export function Day(
    props: {
        day: string,
    },
) {
    return <div className="day">{props.day}</div>
}
