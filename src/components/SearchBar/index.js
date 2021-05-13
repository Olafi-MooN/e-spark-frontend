import React, { useState } from 'react';

import SearchIcon from '../../images/search.png';

import './searchbar.css';

const SearchBar = () => {
    const [date] = useState([
        'economico',
        'economia',
        'rapido',
        'bonitos',
        'esportivos'
    ]);

    return (
        <div className="container-search-bar">
            <input list="data" className="search-bar" placeholder="search..." />
            <img src={SearchIcon} alt="search-bar-icon" />
            <datalist id="data">
                {date.map((item, key) =>
                    <option key={key} value={item} />
                )}
            </datalist>
        </div>
    )
}

export { SearchBar };