import React from 'react';

export function Month(
    props: {
        year: string,
        month: string,
    },
) {
    return <span>{props.year}年 {props.month}月</span>
}
