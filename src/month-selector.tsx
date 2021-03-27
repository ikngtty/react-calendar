import React from 'react';

export function MonthSelector(props: {
    baseDate: Date,
    onPrevButtonClick: () => void,
    onNextButtonClick: () => void,
}) {
    const yearString = props.baseDate.getFullYear().toString()
    const monthString = (props.baseDate.getMonth() + 1).toString().padStart(2, '0')
    return <div>
        <span onClick={props.onPrevButtonClick}>◀</span>
        {yearString}年 {monthString}月
        <span onClick={props.onNextButtonClick}>▶</span>
    </div>
}
