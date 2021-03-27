import React from 'react';
import { Day } from './day'
import { DayOfWeek } from './day-of-week'
import { MonthSelector } from './month-selector'

function Week(props: {
    days: number[],
}) {
    return <div>
        {props.days.map(day => <Day day={day} />)}
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

            <DayOfWeek value="日" />
            <DayOfWeek value="月" />
            <DayOfWeek value="火" />
            <DayOfWeek value="水" />
            <DayOfWeek value="木" />
            <DayOfWeek value="金" />
            <DayOfWeek value="土" />
            <br />

            {weeks.map(week => <Week days={week} />)}
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
