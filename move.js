function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys (left, bottom, callBack) {
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'

        function moveCharacter() {
            if (direction === 'west'){
                x -= 1
            }
        
            if (direction === 'east'){
                x = x + 1
            }
        
            if (direction === 'south'){
                y -= 1
            }
        
            if (direction === 'north'){
                y += 1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        
        }

        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', (e) => {
            if (e.repeat) return;

            if (e.key === 'ArrowLeft') {
                direction = 'west'
            }
            if (e.key === 'ArrowRight') {
                direction = 'east'
            }
            if (e.key === 'ArrowUp') {
                direction = 'north'
            }
            if (e.key === 'ArrowDown') {
                direction = 'south'
            }
            if(callBack){
                callBack(direction)
            }
        })

        document.addEventListener('keyup', (e) => {
            direction = null;
            if (callBack){
                callBack(direction)
            }
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}