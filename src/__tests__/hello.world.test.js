describe('HelloWorld', () => {

    const React = require('react')
    const TestUtils = require('react-dom/test-utils')
    
    class HelloWorld extends React.Component {
        render() {
            return <div>{this.props.children}</div>
        }
    }

    it('has props', (done) => {
        
        let hello = TestUtils.renderIntoDocument(<HelloWorld>Hello Bros</HelloWorld>)

        expect(hello.props).toBeDefined()
        console.log('Myhello props: ', hello.props)
        done()
    })

    it('has a div', (done) => {
        let hello = TestUtils.renderIntoDocument(<HelloWorld>Hello Bros</HelloWorld>)

        let div = TestUtils.scryRenderedDOMComponentsWithTag(hello, 'div').length
        expect(div).toBe(1)
        console.log('found this many divs: ', div)
        done()
    })
})