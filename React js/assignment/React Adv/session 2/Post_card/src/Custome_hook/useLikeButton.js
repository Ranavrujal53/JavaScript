import { useState } from "react"

const useLikeButton = (initialLikes = 0) =>{
    const [liked ,setLiked ] = useState(false);
    const [likecount, setLikecount] = useState(initialLikes);


    const toggelLike = () => {
        setLiked(!liked);
        setLikecount(liked ? likecount - 1 : likecount + 1);
    };
    return {liked, likecount, toggelLike};
};

export default useLikeButton;