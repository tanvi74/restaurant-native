import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp, { data } from '../api/yelp';
import axios from 'axios';


export default function SearchScreen() {

    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async(searchTerm) => 
    {
        console.log(searchTerm);
        try
        {
            const resp = await yelp.get("http://10.0.2.2:8000/api", {
                params: {
                    term: searchTerm,
                    limit: 30,
                    location: "california"
                } 
            })

            // const resp = data
            console.log(resp.businesses.length);
            setResults(resp.businesses);

        }
        catch(err)
        {
            console.log(err);
            setErrorMessage("Something Went Wrong");
        }
    }

    return (
        <View>

            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>SearchScreen {results.length}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});



