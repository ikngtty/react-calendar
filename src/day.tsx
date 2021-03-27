import React from 'react';

export function Day(
    props: {
        day: number,
    },
) {
    return <div className="day">{props.day.toString()}</div>
}
