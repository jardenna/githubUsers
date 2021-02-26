import React from 'react';

function useFilter(initialState, data, callback = () => { }) {
   const [values, setValues] = React.useState(initialState);
   const [alert, setAlert] = React.useState(null);

   const filteredText = data && data.filter(item => {
      for (let key in values) {

         if (item[key]) {
            const a = typeof item[key] === 'string' && item[key].toLowerCase();
            const b = typeof values[key] === 'string' && values[key].toLowerCase();

            if (!a.includes(b) && values[key] !== '') {
               return false;
            }
         }
      }
      return true;
   });

   const onSubmit = (e) => {
      e.preventDefault();

      for (let key in values) {
         callback(values[key]);

         if (values[key] === '') {
            setAlert('Please enter a value');
         } else {
            setValues({
               ...values,
               [key]: ''
            });
         }
      }
   };


   const handleChange = (e) => {
      const { name, value } = e.target;
      setAlert(null);
      setValues({
         ...values,
         [name]: value
      });

   };

   const handleEmptyInput = (e, name) => {
      e.preventDefault();
      setValues({
         ...values,
         [name]: ''
      });

   };

   return {
      handleChange, onSubmit, alert, values, handleEmptyInput, filteredText

   };
}

export default useFilter;