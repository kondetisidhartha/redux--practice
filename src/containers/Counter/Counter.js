import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAdd5Counter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract5Counter} />
                <hr />
                <button onClick={this.props.onStoreResult}>Click to save</button>
                <ul>
                    {this.props.storedResults.map(result => {
                        return <li key={result.id} onClick={this.props.onDeleteResult}>
                            {result.id.getHours()}:{result.id.getMinutes()}:{result.id.getSeconds()}
                            ------ {result.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispathToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAdd5Counter: () => dispatch({ type: 'ADD5', value: 10 }),
        onSubtract5Counter: () => dispatch({ type: 'SUBTRACT5' }),
        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteResult: () => dispatch({ type: 'DELETE_RESULT' })
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Counter);