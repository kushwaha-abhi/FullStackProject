import axios from 'axios';
import './Search.css';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/storeContext';

const Search = () => {
    const Navigate= useNavigate();
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
     const {url}= useContext(StoreContext)
    const fetchData = async () => {
        try {
            const result = await axios.get(`${url}/api/foods/search`);
            setData(result.data.data);
            setFilteredData(result.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = data.filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    }, [query, data]);

    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Search food..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
            <div className="search-results">
                {filteredData.length > 0 ? (
                    filteredData.map(item => (
                        <div onClick={()=>Navigate('/')} key={item.id} className="search-item">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default Search;
