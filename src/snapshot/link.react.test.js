import React from 'react'
import Link from './link.react'
import Renderer from 'react-test-renderer'

it('renders correctly', () => {
    const tree = Renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders another correctly', () => {
    const newTree = Renderer
    .create(<Link page="https://dotnetsharing.wordpress.com">My personal blog</Link>)
    .toJSON()
    expect(newTree).toMatchSnapshot()
}) 