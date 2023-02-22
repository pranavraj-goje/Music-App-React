import React, { useState, useEffect} from 'react'
import Tables from './Tables'

let myDataMap
export default class FetchingDataFromNode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {},
            // myDataMap: Object
        }
        console.log(props)
    }



    componentDidMount() {
        fetch("http://localhost:8000/message")
            .then((res) => res.json())
            .then((jsonData) => {
                this.setState({ message: jsonData });
                console.log('Did Mount')
                console.log(this.state.message)
                console.log('Global Map')
                myDataMap = this.state.message
                console.log(myDataMap)
                // this.myDataMap = JSON.parse(this.message)
            })
    }

    render() {
        return (
            // <div>
            //     {
            //     this.props.data['Football']!=null ? this.props.data['Football'] : this.state.message['Football']}
            // </div>
            <div>
                {
                    
                    this.props.data == null ?
                        <Tables data={myDataMap} />
                        :
                        <Tables data={this.props.data} />
                }
            </div>

        )
    }

}




// function FetchingDataFromNode(props) {

//     const [message, setMessage] = useState({});

//     useEffect(() => {
//         fetch('http://localhost:8000/message')
//             .then((res) => res.json())
//             .then((jsonData) => {
//                 setMessage(jsonData);
//                 console.log(jsonData['Football']);
//             });
//     }, {});

//     return (
//         <div>
//             {
//                 this.props.data == null ?
//                     <Tables data={message} />
//                     :
//                     <Tables data={props.data} />
//             }
//         </div>
//     )
// }

// export default FetchingDataFromNode

