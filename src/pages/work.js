import React, { useEffect } from "react";
import WorkList from '../components/workList';
import "../styles/list.scss";

function Work() {
    /* const aaa = "bbb";
    useEffect(() => {
        console.log("useEffect!!", typeof WorkList);
    }, [WorkList]); */

    return (
        <div className="work-list">
            <WorkList />
        </div>
    );
}

export default Work;