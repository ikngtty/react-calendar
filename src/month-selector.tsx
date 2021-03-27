import React from 'react';

export function MonthSelector(props: {
    baseDate: Date,
    onGoToPreviousMonth: () => void,
    onGoToNextMonth: () => void,
}) {
    const yearString = props.baseDate.getFullYear().toString()
    const monthString = (props.baseDate.getMonth() + 1).toString().padStart(2, '0')
    return <div>
        <span onClick={props.onGoToPreviousMonth}>◀</span>
        {yearString}年 {monthString}月
        <span onClick={props.onGoToNextMonth}>▶</span>
    </div>
}
