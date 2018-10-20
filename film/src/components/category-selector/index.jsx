import React, {Component} from 'react';
import Select from 'react-select';
import selectorOptions from '../../selectors/selector-options';
import './style.css';

export default class CategorySelector extends Component {

  state = {
    category: '',
  };
    
  changeCategory = category => {
    this.setState({category: category.value})
  };

  componentDidMount(){
    const {fetchCategiry} = this.props;
    fetchCategiry(this.state.category);
  }

  componentDidUpdate(prevProps, prevState){

    if(prevState.category !== this.state.category){
      const {category} = this.state;
      const {fetchCategiry} = this.props;
      fetchCategiry(category);
    }
  }
    
  render(){

    const { category } = this.state;

    return (
      <div className="category-block">
        <h3 className="category-search">Select by category</h3>
        <Select 
        className="category"
        options={selectorOptions}
        value={category}
        onChange={this.changeCategory}
        />
      </div>
    );
  }
}