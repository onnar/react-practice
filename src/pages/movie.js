import React, { useState } from "react";
import axios from 'axios';

const Movie = () => {
    const [date, setDate] = useState("");
    const [movies, setMovies] = useState([]);
    const [item, setItem] = useState("");
    const key = "113854b91df9adff54ea56e9e853c86f";
    const url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}`;
    //const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&movieNm=${query}`;

    const fetchMovie = async () => {
        console.log("action => click");
        axios.get(`${url}&targetDt=${date}`)
            .then((res) => {
                const newMovieList = res.data.boxOfficeResult.dailyBoxOfficeList;
                setMovies(newMovieList);
                result(movies);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const onChangeDate = (e) => {
        setDate(e.target.value);
    }
    function result(movies) {
        for(let i = 0; i < movies.length; i++) {
            let item = movies[i];
            console.log(`${i} : ${item}`);
            item.push(
                <tr>
                    <td>{item.rank}</td>
                    <td>{movies.movieNm}</td>
                    <td>{movies.openDt}</td>
                    <td>{movies.salesShare}</td>
                    <td>{movies.audiCnt}</td>
                </tr>
            );

        }
        console.log(item);
    }
    return (
        <div className="movie">
            <div className="searchBox">
                <input
                type="text"
                onChange={onChangeDate}
                value={date}
                placeholder="YYYYMMDD"
                maxLength="8"
                />
                <button type="button" onClick={fetchMovie}>검색</button>
            </div>
            <div className="movie-list">
                <table>
                    <caption className="blind">kobis data call test</caption>
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>제목</th>
                            <th>개봉일</th>
                            <th>점유율</th>
                            <th>누적관객</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item}
                        {/*
                        <tr>
                            <td>{item.rank}</td>
                            <td>{movies.movieNm}</td>
                            <td>{movies.openDt}</td>
                            <td>{movies.salesShare}</td>
                            <td>{movies.audiCnt}</td>
                        </tr>
                        */} 
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Movie;