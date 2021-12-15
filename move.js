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
                if (x >= 10){
                    x -= 1
                }
            }
        
            if (direction === 'east'){
                if (x <= 950){
                    x = x + 1
                }
            }
        
            if (direction === 'south'){
                if( y >= 120){
                    y -= 1
                }
            }
        
            if (direction === 'north'){
                if (y <= 900){
                    y += 1
                }
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