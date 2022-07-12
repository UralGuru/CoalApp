import {React} from 'react';
import s from "./Post.module.css";

const Post = ({message, like_count}) => {
    return (
        <div>
            <div className={s.item}>
                <div className={s.circle}></div>
                <div className={s.post}>
                    <div>{message}</div>
                    <br/>
                    <div>Like {like_count}</div>
                </div>
            </div>
        </div>
    );
}

export default Post