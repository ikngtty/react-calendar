import React from 'react';
import { Date as Date_ } from './date'
import { Day } from './day'
import { MonthSelector } from './month-selector'

function Week(props: {
    dates: number[],
}) {
    return <div>
        {props.dates.map(date => <Date_ date={date.toString()} />)}
    </div>
}

type Props = {}
type State = {
    baseDate: Date,
}

export class Calender
    extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        const now = new Date()
        this.state = {
            baseDate: new Date(now.getFullYear(), now.getMonth()),
        }
    }

    render() {
        const weeks = [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19, 20, 21],
            [22, 23, 24, 25, 26, 27, 28],
            [29, 30, 31],
        ]

        return <div>
            <MonthSelector
                baseDate={this.state.baseDate}
                onGoToNextMonth={() => this.goToNextMonth()}
                onGoToPreviousMonth={() => this.goToPreviousMonth()}
            />

            <Day day="日" />
            <Day day="月" />
            <Day day="火" />
            <Day day="水" />
            <Day day="木" />
            <Day day="金" />
            <Day day="土" />
            <br />

            {weeks.map(week => <Week dates={week} />)}
        </div>
    }

    goToPreviousMonth() {
        this.setState((state) => ({
            baseDate: new Date(
                state.baseDate.getFullYear(),
                state.baseDate.getMonth() - 1,
            ),
        }))
    }

    goToNextMonth() {
        this.setState((state) => ({
            baseDate: new Date(
                state.baseDate.getFullYear(),
                state.baseDate.getMonth() + 1,
            ),
        }))
    }
}
