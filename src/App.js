import React, { useState, useEffect } from 'react';
import List from './components/List';
import Loading from './components/Loading';
import Error from './components/Error';
import Details from './components/Details';
import './App.css';

export default function App() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ state: false });
    const [info, setInfo] = useState({ id: null });

    useEffect(() => {
        fetchApi('users');
    }, []);

    useEffect(() => {
        if (!info.id) return;
        fetchApi(info.id);
    }, [info.id]);

    const fetchApi = (arg) => {
        setLoading(true);
        return fetch(process.env.REACT_APP_URL + `${arg}.json`)
            .then((response) => response.json())
            .then((result) => {
                if (arg === 'users') setList(result.slice());
                setInfo(result);
            })
            .catch((e) => {
                setError({ state: true, text: e.message });
            })
            .finally(() => {
                setTimeout(() => setLoading(false), 1500);
            });
    };

    const clickHandler = (id) => {
        if (id === info.id) return;
        setInfo({ id });
    };

    return (
        <>
            {(!loading || info.id) && (
                <List list={list} error={error.state} clickHandler={clickHandler} />
            )}
            {loading && <Loading />}
            {!loading && error.state && <Error {...error} />}
            {!loading && (
                <Details
                    {...info}
                    avatar={`https://i.pravatar.cc/300?img=${info.id}`}
                />
            )}
        </>
    );
}