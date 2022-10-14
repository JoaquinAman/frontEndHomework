import React from "react";
import './style.css'

function List(names){

    return (
        <div className="bigContainer">
            <div className="container">
                <div className="firstHalf">
                    <div className="yellowFirstHalf">
                        <div class="word2">{names.student4}</div>
                    </div>
                    <div className="whiteFirstHalf">
                        <div class="word2">{names.student1}</div>
                    </div>
                    <div className="blueFirstHalf">
                        <div class="word">{names.student3}</div>
                    </div>
                </div>
                <div className="secondHalf">
                    <div className="redSecondHalf">
                        <div class="word">{names.student2}</div>
                    </div>
                    <div className="whiteSecondHalf">
                        <div className="whiteFirstPart">
                            <div class="word2">{names.student5}</div>
                        </div>
                        <div className="whiteSecondPart">
                        <div class="word">{names.student6}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default List;