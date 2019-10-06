import React, { Component } from "react"
import { connect } from 'react-redux'
import { setRecipes } from '../actions/index'
import axios from "axios";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel ,
  Button
} from "react-bootstrap";

class SearchRecipes extends Component {

    state = {
        ingredients: '',
        dish: ''
    };

    async search() {
        const { ingredients, dish } = this.state;
        const res = await axios.get(`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`);
         this.props.setRecipes(res.data.results); 
        // console.log("tttttttttt"+res.data.results);
    }
    
  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel >Ingradient</FormLabel >{" "}
          <FormControl 
            type="text" 
            placeholder="garlic, chicken"
            onChange = {e => this.setState({ ingredients: e.target.value })}
            />
        </FormGroup>
        {" "}
        <FormGroup>
          <FormLabel >Dish</FormLabel >{" "}
          <FormControl 
            type="text" 
            placeholder="adobo"
            onChange = {e => this.setState({ dish : e.target.value })}
            />
        </FormGroup>
        {" "}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}

export default connect(null, {setRecipes})(SearchRecipes);