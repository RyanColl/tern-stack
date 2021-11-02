import { connect } from "react-redux"
import { setInfo } from "../redux/actions/main"

const IndexPage = ({ logo }) => {
  
  return(
    <div className="App">
    <header className="App-header">
      <img src={'./logo-p1.png'} className="App-logo" alt="logo" />
      <span>RCOLL DEV</span>
    </header>
  </div>
)};


const mapStateToProps = state => {
  return { name: state.main.name }
 }
 
 const mapDispatchToProps = {
   setInfo
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)