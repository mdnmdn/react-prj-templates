import smpleReducer from './sample';

const initialState = {
    sample: { 
      value: 0,
      message: null,
     },
};

const rootReducer = (state = initialState, action) => {
    let newState = state;

    newState = smpleReducer(newState, action);    

    return newState;
};

export default rootReducer;