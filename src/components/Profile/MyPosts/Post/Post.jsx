import {React} from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    console.log(props.message);
    return (
        <div>

            <div className={s.item}>
                <div className={s.circle}></div>


                <div className={s.post}>
                    <div>
                        {props.message}
                    </div>

                    <br/>

                    <div>
                        Like {props.like_count}
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Post