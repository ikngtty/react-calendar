import React from 'react';

import { Month } from './month'

type Props = {}
type State = {
    month: Date,
}

export class MonthSelector
    extends React.Component<Props, State> {

    state: State = {
        month: (() => {
            const now = new Date()
            return new Date(now.getFullYear(), now.getMonth())
        })(),
    }

    render() {
        return <div>
            <span onClick={this.goToPreviousMonth}>◀</span>
            <Month
                year={this.state.month.getFullYear().toString()}
                month={(this.state.month.getMonth() + 1)
                    .toString().padStart(2, '0')} />
            <span onClick={this.goToNextMonth}>▶</span>
        </div>
    }

    goToPreviousMonth = () => {
        this.setState((state) => ({
            month: new Date(
                state.month.getFullYear(),
                state.month.getMonth() - 1,
            ),
        }))
    }

    goToNextMonth = () => {
        this.setState((state) => ({
            month: new Date(
                state.month.getFullYear(),
                state.month.getMonth() + 1,
            ),
        }))
    }
}
