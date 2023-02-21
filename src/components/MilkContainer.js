import React from 'react'
import { connect } from 'react-redux'
import { buyMilk } from '../redux/Index'

function MilkContainer(props) {
    return (
        <div>
            <h2> Number Of Milk - {props.numOfMilk}</h2>
            <button onClick={props.buyMilk}>Buy Milk</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      numOfMilk: state.milk.numOfMilk
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      buyMilk: () => dispatch(buyMilk())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(MilkContainer)