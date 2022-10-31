import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkDetail from "./workDetail";
import works from "../assets/data/works.json";
//import data from "https://jsonplaceholder.typicode.com/users";

const WorkList = () => { 
    const [items, setItems] = useState([]);
    //console.log(dbs);
    const getData = async () => {
        //axios.get("https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=113854b91df9adff54ea56e9e853c86f&targetDt=20221010")
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                //console.log("____");
                //console.log(res);
                //console.log("----");
                setItems(res);
            })
            .catch((err) => {
                console.log("error: " + err);
            });
    }
    function result(data) {
        //console.log(data);
            for(let i = 0; i < items.length; i++) {
                console.log("aaaaaaaaaa");
                let test = items[i];
                console.log(test);
                test.push(
                    <tr>
                        <td>{test.rank}</td>
                        <td>{test.movieNm}</td>
                        <td>{test.openDt}</td>
                        <td>{test.salesShare}</td>
                        <td>{test.audiCnt}</td>
                    </tr>
                )
            }

    }

    const [isDisplay, setIsDisplay] = useState(0);
    const errImg = (e) => {
        const repImg = "/assets/img/noimg.jpg";
        e.target.src = repImg;
    }

    useEffect(() => {
        if(items) {
            result(items);
        }
    },[items]);

    const viewDetail = (e) => {
        //console.log("click view: " + e);
        getData();
    }
    return (
        <>
        <ul className="list-gallery">
            {works.map((item, index) => (
                <li className={`item ${(item.id)? 'item-'+item.id :'none'}`} key={index} data-item={"ddd"+item.id}>
                    <figure className="itemBox">
                        <div className="thumb">
                            <a href={void(0)} onClick={viewDetail}><img src={item.imgPath+'/'} alt={item.title} onError={errImg} /></a>
                        </div>
                        <figcaption>
                            <dl>
                                <dt>{item.title}</dt>
                                <dd>{item.type}</dd>
                                {/* <dd>{item.ver}</dd> */}
                            </dl>
                        </figcaption>
                    </figure>
                </li>
            ))}
        </ul>
        <WorkDetail/>
        </>
    );
}

export default WorkList;