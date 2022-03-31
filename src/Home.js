import Login from './Login';
import './index.css';
import { Table } from "react-bootstrap";
const Home = (props) => {
  return (
    <div>
        <h3> Home </h3>
        {/* <p><h3>ID:</h3> {props.info.id}</p>
        <p><h3>Name:</h3> {props.info.full_name}</p>
        <p><h3>Role ID:</h3> {props.info.RoleId}</p>
        <p><h3>Role Name:</h3> {props.info.role}</p>
        <p><h3>Token:</h3> {props.info.token}</p> */}
        {/* <table class="table table-sm">
  <tbody>
    <tr>
      <th scope="row">ID:</th>
      <td>{props.info.id}</td>
     
      
    </tr>
    <tr>
      <th scope="row">Name:</th>
      <td>{props.info.full_name}</td>
      
      
    </tr>
    <tr>
      <th scope="row">Role ID:</th>
      <td colspan="2">{props.info.RoleId}</td>
      
    </tr>
    <tr>
      <th scope="row">Role Name:</th>
      <td colspan="2">{props.info.role}</td>
      
    </tr>
    <tr class="token">
      <th scope="row" >Token:</th>
      <td colspan="2" >{props.info.token}</td>
      
    </tr>
  </tbody>
</table> */}
<Table responsive striped bordered hover variant="dark">
  
  <tbody class="tab">
  <tr>
      <th >ID:</th>
      <td>{props.info.id}</td>
     
      
    </tr>
    <tr>
      <th scope="row">Name:</th>
      <td>{props.info.full_name}</td>
      
      
    </tr>
    <tr>
      <th >Role ID:</th>
      <td >{props.info.RoleId}</td>
      
    </tr>
    <tr>
      <th >Role Name:</th>
      <td >{props.info.role}</td>
      
    </tr>
    <tr >
      <th >Token:</th>
      <td class="token">{props.info.token}</td>
      
    </tr>
  </tbody>
</Table>
    </div>
  );
}

export default Home