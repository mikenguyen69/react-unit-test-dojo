const React = require('react')

class HelloWorld extends React.Component {
    render() {
        return <div>{this.props.children}</div>
    }
}

describe('HelloWorld', () => {
    const TestUtils = require('react-dom/test-utils')
    let hello = TestUtils.renderIntoDocument(<HelloWorld>Hello Bros</HelloWorld>)

    it('has props', (done) => {
        expect(hello.props).toBeDefined()
        console.log('Myhello props: ', hello.props)
        done()
    })

    it('has a div', (done) => {
        let div = TestUtils.scryRenderedDOMComponentsWithTag(hello, 'div').length
        expect(div).toBe(1)
        console.log('found this many divs: ', div)
        done()
    })
})