import { useEffect } from 'react';
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchContext } from '../../Context/SearchContext';
import './index.css'

const Search = () => {
    const search = useContext(SearchContext)
    const [searchParams, setSearchParams] = useSearchParams()

    const searchQuery = {
        query: searchParams.get('query')
    }

    useEffect(() => {
        setSearchParams({ query: searchQuery.query }, { replace: true })
    }, [searchQuery.query])

    return (
        <div className="search__container">
            <div className="search__container__header">
                <h1>No results found for "{searchQuery.query}"</h1>
            </div>
        </div>
    );
}

export default Search;