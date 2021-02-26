import {
   SET_LOADING,
   SEARCH_USERS,
   GET_USERS,
   GET_USER,
   GET_REPOS,
   SET_ERROR
} from '@context/types';

export default (state, action) => {

   switch (action.type) {
      case SET_LOADING:
         return {
            ...state,
            loading: true
         };

      case SET_ERROR:
         return {
            ...state,
            loading: false,
            error: action.payload
         };
      case GET_USERS:
         return {
            ...state,
            users: action.payload,
            loading: false
         };

      case SEARCH_USERS:
         return {
            ...state,
            users: action.payload,
            loading: false,
            error: ''
         };
      case GET_REPOS:
         return {
            ...state,
            repos: action.payload,
            loading: false,
            error: ''
         };
      case GET_USER:
         return {
            ...state,
            user: action.payload,
            loading: false,
            error: ''
         };

      default: return state;

   }
};

