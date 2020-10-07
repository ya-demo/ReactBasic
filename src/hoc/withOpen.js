import React, {Component} from 'react'


//同一個邏輯 套用在不同Component下使用
//或是 兩個邏輯不同 留一個相同樣式的組建可用function component使用
//輸入一個component回傳另外一個component
const withOpen = (WrappedComponent) =>{

    return class extends Component{
        state = {
            open: false
        };

        toggleOpen = () => {
            this.setState({
                open: !this.state.open
            })
        }

        render(){
            return <WrappedComponent 
                {...this.props}
                open={this.state.open} 
                toggleOpen={this.toggleOpen} 
            />
        }
    }

}

export default withOpen