const React = require('react')

class HelloWorld extends React.Component {
    render() {
        return 
        <div>
            <span>{this.props.children}</span>
            <span>1</span>
            <h3>this is awsome!</h3>
        </div>
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

    it('props value', (done) => {
        expect(hello.props.children).toBe("Hello Bros")
        console.log('Myhello props: ', hello.props)
        done()
    })

    it('has a div', (done) => {
        let div = TestUtils.scryRenderedDOMComponentsWithTag(hello, 'div').length
        expect(div).toBe(1)
        console.log('found this many divs: ', div)
        done()
    })

    it('has two spans', (done) => {
        let span = TestUtils.scryRenderedDOMComponentsWithTag(hello, 'span').length
        expect(span).toBe(2)
        console.log('found this many spans: ', span)
        done()
    })

    it('has a h3', (done) => {
        let tg = TestUtils.scryRenderedDOMComponentsWithTag(hello, 'h3').length
        expect(tg).toBe(1)
        console.log('found this many h3: ', tg)
        done()
    })
})