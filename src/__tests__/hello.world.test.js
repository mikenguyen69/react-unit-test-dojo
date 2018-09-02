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

     const HelloWorld1 = require("../basic/hello.world")



})