import React from 'react';


const restaurant = [
    { name: 'La mesa', cuisine: ['italian', 'indian'] },
    { name: 'Red Bull', cuisine: ['chiness', 'french'] },
    { name: 'Purnima', cuisine: ['thai', 'arabic'] }
];

const cuisineData = [
    { id: 1, name: 'italian', checked: false },
    { id: 2, name: 'indian', checked: false },
    { id: 3, name: 'chiness', checked: false },
    { id: 4, name: 'french', checked: false },
    { id: 5, name: 'arabic', checked: false }
];



function Cook() {

    const [cuisine, setCuisine] = React.useState(cuisineData);

    const setFilter = (cuisine, flag) => {
        setCuisine(prevState => (
            prevState.map((c) =>
                // check state for the selected cuisine
                c.id === cuisine.id ? { ...c, checked: flag } : c
            )));
    };

    const handleCuisineFilter = (e, cuisine) => {
        if (e.target.checked) {
            setFilter(cuisine, true);
        } else {
            setFilter(cuisine, false);
        }
    };

    const filterRestaurants = (restaurant) => {
        const checkedFilters = cuisine.filter((c) => c.checked);
        const noFiltersChecked = checkedFilters.length === 0;

        if (noFiltersChecked) {
            return true;
        } else {

            const tmp = checkedFilters.reduce(
                (hasRestaurantAllTheseCuisines, nextCuisine) =>
                    (hasRestaurantAllTheseCuisines =
                        hasRestaurantAllTheseCuisines &&
                        restaurant.cuisine.includes(nextCuisine.name)),
                true
            );

            return tmp;
        }
    };

    return (
        <div>
            {cuisine.length &&
                cuisine.map((cuisine) => (
                    <li key={cuisine.id}>
                        <input
                            id={cuisine.id}
                            type="checkbox"
                            onChange={(e) => handleCuisineFilter(e, cuisine)}
                            name="check"
                            value={cuisine.name}
                        />
                        {cuisine.name}
                    </li>
                ))}

            {restaurant.length &&
                restaurant
                    .filter(filterRestaurants)
                    .map((rest) => <h5 key={rest.name}>{rest.name}</h5>)}
        </div>
    );
}

export default Cook;


