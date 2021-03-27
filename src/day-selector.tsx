import React from 'react';
import { Day } from './day'
import { DayDummy } from './day-dummy'

export function DaySelector(props: {
    day: number | null,
}) {
    if (props.day == null) {
        return <DayDummy />
    }
    return <Day day={props.day} />
}
