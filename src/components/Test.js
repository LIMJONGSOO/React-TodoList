import React, { Component } from 'react';

class Test extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos } = this.props;

    return (
      <div>
        {
          todos.map(
            ({id, text, checked, color}) => (
              <div key={id}>{text}</div>
            )
          )
        }
      </div>
    );
  }
}

export default Test;