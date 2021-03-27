import React from 'react';
import { DaySelector } from './day-selector'

export function Week(props: {
    days: (number | null)[],
}) {
    return <div>
        {props.days.map(day =>
            <DaySelector day={day} />
        )}
    </div>
}
