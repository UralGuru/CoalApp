import {React} from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    console.log(props.message);
    return (
        <div>

            <div className={s.item}>
                <div className={s.circle}></div>


                <div>
                    {props.message}
                    <br/>
                    <span>like {props.like_count}</span>
                </div>

            </div>
        </div>

    );
}

export default Post