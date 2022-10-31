import React from "react";
import "../styles/error.scss";

function NotFound() {
    return (
        <>
            <div className="not-found">
                <h2><span class="material-symbols-outlined">sentiment_dissatisfied</span>404 ERROR</h2>
                <p>요청한 페이지를 찾을 수 없습니다 :(</p>
                <a href="/">홈으로</a>
            </div>
        </>
    );
};

export default NotFound;