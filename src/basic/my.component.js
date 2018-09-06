import React from 'react'

class MyComponent extends React.Component {
    render () {
      var children = this.props.children.map((child) => {
        return (<li className='child'>{child.sex === 'm' ? 'Son: ' : 'Daughter: '} Name: {child.name} ({child.age})</li>);
      });
  
      return (
        <div className='container -large'>
          <ul>
            <li>Name: {this.props.name}</li>
            {children}
          </ul>
        </div>
      );
    }
  }
  