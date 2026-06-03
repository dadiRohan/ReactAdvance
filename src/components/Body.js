import React, { useEffect, useState, useContext } from "react";
import Card, { withPromtedLabel } from "./Card";
import { restList as restListJS, RestAdvanceList } from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [restList, setList] = useState([]); // Changed from 0 to []
    const [filterSearch, setFilterSearch] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const { loggedInUser, setUserName } = useContext(UserContext);
    const useOnlineStatusVar = useOnlineStatus();
    const RestaurantCardPromoted = withPromtedLabel(Card);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            
            // Using Vercel serverless function (No CORS error)
            const response = await fetch(
                `/api/swiggy?lat=19.120842&lng=72.9250169&str=Mumbai`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const json = await response.json();
            const masterJson = json?.data?.suggestions || [];
            
            if (masterJson.length === 0) {
                throw new Error("No data received from API");
            }
            
            setList(masterJson);
            setFilterSearch(masterJson);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Fallback to mock data
            setList(RestAdvanceList);
            setFilterSearch(RestAdvanceList);
            setError("Using demo data. Unable to connect to Swiggy API.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData();
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);

    const handleSearch = () => {
        if (searchText.trim() === "") {
            setFilterSearch(restList);
        } else {
            const filtered = restList.filter((listData) => 
                listData?.text?.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterSearch(filtered);
        }
    };

    const handleClear = () => {
        setSearchText("");
        setFilterSearch(restList);
    };

    const handleRetry = () => {
        fetchData();
    };

    // Loading state
    if (loading) {
        return <Shimmer />;
    }

    // Error state but with fallback data
    if (error && filterSearch.length === 0) {
        return (
            <div className="main-body">
                <div className="error-container" style={{ 
                    textAlign: 'center', 
                    padding: '2rem',
                    margin: '2rem auto',
                    maxWidth: '500px'
                }}>
                    <div style={{ fontSize: '48px', marginBottom: '1rem' }}>⚠️</div>
                    <h3 style={{ color: '#FC8019', marginBottom: '1rem' }}>{error}</h3>
                    <button 
                        onClick={handleRetry}
                        className="m-2 p-2 text-white rounded-full bg-purple"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="main-body">
            <div className="search-box">
                <span className="font-thin">
                    Online Status: {(useOnlineStatusVar === true) ? '🟢' : '🔴'}
                </span>
                
                <b>Login User :</b>
                <input 
                    type="text" 
                    placeholder="Enter Name"
                    className="m-2 p-1 text-center text-white rounded-full bg-metal"
                    value={loggedInUser}
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />
                
                <input 
                    type="text" 
                    className="w-96 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="search" 
                    placeholder="Search Restaurant Name" 
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') handleSearch();
                    }}
                />
                
                <button 
                    className="m-2 p-2 text-white rounded-full bg-purple"
                    onClick={handleSearch}
                >
                    Search
                </button>
                
                <button 
                    className="m-2 p-2 text-white rounded-full bg-metal"
                    onClick={handleClear}
                >
                    Clear
                </button>
            </div>

            <div className="card flex flex-wrap">
                {filterSearch.map((restaurant, index) => {
                    let primaryRestaurantId = null;
                    let enabledFlag = null;
                    
                    // Safely parse metadata
                    try {
                        if (restaurant.metadata) {
                            const parsedMetadata = JSON.parse(restaurant.metadata);
                            primaryRestaurantId = parsedMetadata?.data?.primaryRestaurantId;
                            enabledFlag = parsedMetadata?.data?.enabled_flag;
                        }
                    } catch (e) {
                        console.error("Error parsing metadata:", e);
                    }
                    
                    // Skip if no valid ID
                    if (!primaryRestaurantId) return null;
                    
                    return (
                        <Link 
                            key={primaryRestaurantId} 
                            to={"/restaurant/" + primaryRestaurantId}
                        >
                            {enabledFlag === 0 ? (
                                <RestaurantCardPromoted restData={restaurant} />
                            ) : (
                                <Card restData={restaurant} />
                            )}
                        </Link>
                    );
                })}
            </div>
            
            {/* Show message when no results found */}
            {filterSearch.length === 0 && !loading && (
                <div style={{ 
                    textAlign: 'center', 
                    padding: '2rem',
                    color: '#666'
                }}>
                    No restaurants found matching "{searchText}"
                </div>
            )}
        </div>
    );
};

export default Body;