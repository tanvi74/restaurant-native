import yelp from '../api/yelp';
import React, {useState, useEffect} from 'react';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async(searchTerm) => 
    {
        console.log(searchTerm);
        try
        {
            const resp = await yelp.get("/search", {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: "california"
                } 
            })

            // const resp = data
            console.log(resp.data.businesses.length);
            setResults(resp.data.businesses);

        }
        catch(err)
        {
            console.log(err);
            setErrorMessage("Something Went Wrong");
        }
    }

    useEffect(() => {
       searchApi('pasta');
    }, [])

    return [searchApi, results, errorMessage];
}