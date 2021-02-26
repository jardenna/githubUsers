import React, { useReducer } from 'react';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { CLIENT_ID, CLIENT_SECRET } from './secrets';

import {
   SET_LOADING,
   SEARCH_USERS,
   GET_USERS,
   GET_USER,
   GET_REPOS,
   SET_ERROR
} from '../types';


const GithubState = props => {

   const initialState = {
      users: [],
      initialUsers: [],
      user: {},
      repos: [],
      loading: false,
      error: ''
   };


   const [state, dispatch] = useReducer(GithubReducer, initialState);
   //Set Loading

   const setLoading = () => dispatch({ type: SET_LOADING });
   const setError = () => dispatch({ type: SET_ERROR });
   const mainUrl = 'https://api.github.com/users';
   //Initial Users
   const getUsers = async () => {
      const url = `${mainUrl}?&client_id${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
      setLoading();
      try {
         const response = await fetch(url);
         const result = await response.json();

         if (response.ok) {
            dispatch({
               type: GET_USERS,
               payload: result
            });

         }

      } catch (err) {
         setError(err);
      }
   };

   //Search Users
   const searchUsers = async (id) => {
      const url = `https://api.github.com/search/users?q=${id}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
      setLoading();
      if (id) {
         try {
            const response = await fetch(url);
            const result = await response.json();

            if (response.ok) {
               dispatch({
                  type: SEARCH_USERS,
                  payload: result.items
               });

            }

         } catch (err) {
            setError(err);
         }
      }
   };

   //Get User
   const getUser = async (id) => {
      const url = `${mainUrl}/${id}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
      setLoading();
      try {
         const response = await fetch(url);
         const result = await response.json();
         if (response.ok) {
            dispatch({
               type: GET_USER,
               payload: result
            });

         }

      } catch (err) {
         setError(err);
      }
   };

   //Get Repos

   const getRepos = async (id) => {

      const url = `${mainUrl}/${id}/repos?per_page=5&sort=created:asc&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
      setLoading();
      try {
         const response = await fetch(url);
         const result = await response.json();
         if (response.ok) {
            dispatch({
               type: GET_REPOS,
               payload: result
            });
         }

      } catch (err) {
         setError(err);
      }

   };

   return (
      <GithubContext.Provider value={{
         users: state.users,
         initialUsers: state.initialUsers,
         user: state.user,
         repos: state.repos,
         loading: state.loading,
         error: state.error,
         searchUsers,
         getUsers,
         getUser,
         getRepos

      }}>
         {props.children}
      </GithubContext.Provider>
   );


};

export default GithubState;