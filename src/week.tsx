import React from 'react';
import { Day } from './day'

export function Week(props: {
    days: number[],
}) {
    return <div>
        {props.days.map(day => <Day day={day} />)}
    </div>
}
