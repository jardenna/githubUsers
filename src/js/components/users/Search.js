import React from 'react';

import Loader from '@commonReact/Loader';
import GithubContext from '@context/github/githubContext';
import useFilter from '@hooks/useFilter';

function Search({ searchObj, inputName, placeholder }) {
   const githubContext = React.useContext(GithubContext);

   const { users, loading, searchUsers } = githubContext;
   const { handleChange, onSubmit, alert, values, handleEmptyInput } = useFilter(searchObj, users, searchUsers);

   return (
      <div>
         <form >
            <div className="input-wrapper">
               <input
                  type="text"
                  value={values[inputName]}
                  onChange={handleChange}
                  name={inputName}
                  placeholder={placeholder}
               />
               <a href="#" className="icon-x" onClick={(e) => handleEmptyInput(e, inputName)} />
            </div>
            <button
               className="btn-primary"
               type="submit"
               onClick={onSubmit}
            >
               {loading && values[inputName] === '' ? <Loader size='small' /> : 'Search'}
            </button>
            {alert}

         </form>

      </div>
   );
}

export default Search;
