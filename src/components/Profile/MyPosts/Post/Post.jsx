import {React} from 'react';
import s from "./Post.module.css";

const Post = () => {
    return (
        <div>

            <div className={s.item}>
                <div className={s.circle}></div>
                Post 1
                <div>
                    <span>like</span>
                </div>

            </div>
        </div>

    );
}

export default Post