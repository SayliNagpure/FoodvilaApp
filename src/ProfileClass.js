import { Component } from "react"

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    componentdidMount(){
        console.log('mount')
    }
    componentdidUpdate(){
        console.log('update')
    }
    componentwillunmount(){
        console.log('will unmount')
    }
    render() {
        console.log('this is resnder')
        return (
            <div>
                <h1>its class component</h1>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
export default Profile