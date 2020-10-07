import React, { Component,PureComponent } from 'react';

//Class Component
class ProgressBarLine extends Component {
    render() {
        const {value} = this.props
        return (
            <div className="bar-outer">
                <div className="bar-inner" style={{width: `${value}%`}}></div>
                <span>{value}%</span>
            </div>
        );
    }
}

//PureComponent 差別在porps或state值傳進來沒變就不會重新render 
//判斷方式使用了 shadow compare 只判斷props&state資料的第一層
// class ProgressBarLine extends PureComponent {
//     render() {
//         const {value} = this.props
//         return (
//             <div className="bar-outer">
//                 <div className="bar-inner" style={{width: `${value}%`}}></div>
//                 <span>{value}%</span>
//             </div>
//         );
//     }
// }

//Functional StateLessComponent
//看起來就直接就是一個render內容  沒有state的狀態 props直接參數傳進來
// const ProgressBarLine = (props) =>{
   
//     const {value} = this.props
//         return (
//            <div className="bar-outer">
//                 <div className="bar-inner" style={{width: `${value}%`}}></div>
//                 <span>{value}%</span>
//             </div>
//         );
    
// }




export default ProgressBarLine;