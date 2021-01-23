import React, {Component} from 'react';
import Aux from '../../hoc/Auxi';
import {Listtable} from '../../components/Chequelist/Listtable';
import { Container} from "@chakra-ui/react"

class ListBuilder extends Component{

    state ={
        // name:'Dakshitha',
        modal:'',
        modalopen:false
      }
      Changemodal = (event,t)=>{
        // const cheque1= {...this.state.cheque};
        // cheque1[t]=event.target.value;
        console.log(t)
        this.setState({
          modal:t,
          modalopen:true
        });
      }
      closemodal = (event)=>{
          this.setState({
              modalopen:false
          })
      }

    render(){
        return(
          // <Container w="4000px" centerContent>
    <Listtable modal={this.state.modal} change={this.Changemodal} open={this.state.modalopen} close={this.closemodal}/>
// </Container>

        );
    }
}
export default ListBuilder;
