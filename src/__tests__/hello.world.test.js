import ShallowRenderer from "react-test-renderer/shallow"
    
describe('HelloWorld', () => {

    const React = require('react')
    const TestUtils = require('react-dom/test-utils')
   
    it('has props', (done) => {
        class HelloWorld extends React.Component {
            render() {
                return <div>{this.props.children}</div>
            }
        }
        let hello = TestUtils.renderIntoDocument(<HelloWorld>Hello Bros</HelloWorld>)

        expect(hello.props).toBeDefined()
        console.log('Myhello props: ', hello.props)
        done()
    })

    const HelloWorld = require("../basic/hello.world")

    it('has props v2', (done) => {
        const renderer = new ShallowRenderer()
        renderer.render(<HelloWorld>Hey bros</HelloWorld>)

        const hello = renderer.getRendererOutput();

        expect(hello.props).toBeDefined()
        console.log('Myhello props: ', hello.props)
        done()
    })



})