export const checkCollision = (heroPosition, heroSize, itemPosition, itemSize) => {
    // console.log(heroPosition, itemPosition)
    if(heroPosition.x + heroSize > itemPosition.x &&
        heroPosition.x < itemPosition.x + itemSize &&
        heroPosition.y + heroSize + 20 > itemPosition.y &&
        heroPosition.y < itemPosition.y + itemSize + 20
        ){ 
            return true
        }else{ 
            return false
        }
}