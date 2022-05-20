import React from 'react'
import { Link } from 'react-router-dom'
import '../../common/css/Board.css';


const Board_main = () => {
    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>공지사항</strong>
                <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
            </div>
            <div className="board_list_wrap">
                <div className="board_list">
                    <div className="top">
                        <div className="num">번호</div>
                        <div className="title">제목</div>
                        <div className="writer">글쓴이</div>
                        <div className="date">작성일</div>
                        <div className="count">조회</div>
                    </div>
                    <div>
                        <div className="num">5</div>
                        <div className="title"><Link to="Board_view">글 제목이 들어갑니다.</Link></div>
                        <div className="writer">김이름</div>
                        <div className="date">2021.1.15</div>
                        <div className="count">33</div>
                    </div>
                    <div>
                        <div className="num">4</div>
                        <div className="title"><Link to="#">글 제목이 들어갑니다.</Link></div>
                        <div className="writer">김이름</div>
                        <div className="date">2021.1.15</div>
                        <div className="count">33</div>
                    </div>
                    <div>
                        <div className="num">3</div>
                        <div className="title"><Link to="#">글 제목이 들어갑니다.</Link></div>
                        <div className="writer">김이름</div>
                        <div className="date">2021.1.15</div>
                        <div className="count">33</div>
                    </div>
                    <div>
                        <div className="num">2</div>
                        <div className="title"><Link to="#">글 제목이 들어갑니다.</Link></div>
                        <div className="writer">김이름</div>
                        <div className="date">2021.1.15</div>
                        <div className="count">33</div>
                    </div>
                    <div>
                        <div className="num">1</div>
                        <div className="title"><Link to="#">글 제목이 들어갑니다.</Link></div>
                        <div className="writer">김이름</div>
                        <div className="date">2021.1.15</div>
                        <div className="count">33</div>
                    </div>
                </div>
                <div className="board_page">
                    <Link to="#" className="bt first">&#10094;&#10094;</Link>
                    <Link to="#" className="bt prev">&#10094;</Link>
                    <Link to="#" className="num on">1</Link>
                    <Link to="#" className="num">2</Link>
                    <Link to="#" className="num">3</Link>
                    <Link to="#" className="num">4</Link>
                    <Link to="#" className="num">5</Link>
                    <Link to="#" className="bt next">&#10095;</Link>
                    <Link to="#" className="bt last">&#10095;&#10095;</Link>
                </div>
                <div className="bt_wrap">
                    <a href="/Board/Board_write" className="on">등록</a>
                    {/* <a href="/Board/Board_edit">수정</a> */}
                </div>
            </div>
        </div>
    )
}

export default Board_main