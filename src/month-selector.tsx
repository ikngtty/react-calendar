import React from 'react';

import { Month } from './month'

export function MonthSelector(props: {
    baseDate: Date,
    onGoToPreviousMonth: () => void,
    onGoToNextMonth: () => void,
}) {
    return <div>
        <span onClick={props.onGoToPreviousMonth}>◀</span>
        <Month
            year={props.baseDate.getFullYear().toString()}
            month={(props.baseDate.getMonth() + 1)
                .toString().padStart(2, '0')} />
        <span onClick={props.onGoToNextMonth}>▶</span>
    </div>
}
