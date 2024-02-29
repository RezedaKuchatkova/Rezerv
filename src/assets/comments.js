
const commentsImg = [];

export const getRandCommentsImg = () => {
    const randNum = Math.floor(Math.random() );
    return commentsImg[randNum];
}