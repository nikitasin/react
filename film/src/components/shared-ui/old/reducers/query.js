import {QUERY} from '../actions/query';

export default function searchReducer(state = '1', {type, payload}){
    switch(type){
      case QUERY:
        return payload;
  
      default:
        return state;
    }
  }
