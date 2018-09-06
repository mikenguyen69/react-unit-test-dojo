import { renderIntoDocument } from 'react-dom/test-utils';
import MyComponent from '../../basic/my.component';
import React from 'react'

describe('MyComponent', () => {
  it('should render with the correct DOM', () => {
    var children = [
      {name: "Billy", age: 4, sex: 'm'},
      {name: "Sally", age: 6, sex: 'f'},
    ];
    var myComponent = renderIntoDocument(<MyComponent children />);
    var renderedDOM = () => React.findDOMNode(myComponent);

    expect(renderedDOM.tagName).toBe('div');
    expect(renderedDOM.classList).toEqual(['container', '-large']);
    //...

    var children = renderedDOM.querySelectorAll('li.child');
    expect(children.length).toBe(2);
    expect(children[0]).toEqual({name: "Billy", age: 4, sex: 'm'});
    //...
  });
});