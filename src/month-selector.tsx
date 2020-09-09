import React from 'react';

import { Month } from './month'

type Props = {}
type State = {
    month: number,
}

export class MonthSelector
    extends React.Component<Props, State> {

    state: State = {
        month: 9
    }

    render() {
        return <div>
            <span onClick={this.goToPreviousMonth}>◀</span>
            <Month year='2020' month={this.state.month.toString()} />
            <span onClick={this.goToNextMonth}>▶</span>
        </div>
    }

    goToPreviousMonth = () => {
        this.setState((state) => ({ month: state.month - 1 }))
    }

    goToNextMonth = () => {
        this.setState((state) => ({ month: state.month + 1 }))
    }
}
