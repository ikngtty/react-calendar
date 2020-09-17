import React from 'react';
import { Date } from './date'
import { Day } from './day'
import { MonthSelector } from './month-selector'

export function Calender() {
    return <div>
        <MonthSelector />

        <Day day="日" />
        <Day day="月" />
        <Day day="火" />
        <Day day="水" />
        <Day day="木" />
        <Day day="金" />
        <Day day="土" />
        <br />

        <Date date="1" />
        <Date date="2" />
        <Date date="3" />
        <Date date="4" />
        <Date date="5" />
        <Date date="6" />
        <Date date="7" />
        <br />

        <Date date="8" />
        <Date date="9" />
        <Date date="10" />
        <Date date="11" />
        <Date date="12" />
        <Date date="13" />
        <Date date="14" />
    </div>
}
