import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';


export default function SearchScreen() {

    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterByPrice = (price) => 
    {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => result.price === price);
    }

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList title="Cost Effective" results={filterByPrice('$')}  />
                <ResultsList title="Bit Pricer" results={filterByPrice('$$')}  />
                <ResultsList title="Big Spender" results={filterByPrice('$$$')}  />
            </ScrollView>
            
        </>
    )
}

const styles = StyleSheet.create({});



