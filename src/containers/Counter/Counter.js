import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { increment, decrement, add10, subtract5, onStoreResult, onDeleteResult } from '../../store/actions/index'
// import * as actionCreators from '../../store/actions'

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAdd10Counter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract5Counter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Click to save</button>
                <ul>
                    {this.props.storedResults.map(result => {
                        return (<li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>
                            {result.id.getHours()}:{result.id.getMinutes()}:{result.id.getSeconds()}
                            ------ {result.value}</li>)
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.result.results
    };
};

const mapDispathToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAdd10Counter: () => dispatch(add10(10)),
        onSubtract5Counter: () => dispatch(subtract5()),
        onStoreResult: (result) => dispatch(onStoreResult(result)),
        onDeleteResult: (id) => dispatch(onDeleteResult(id))
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Counter);