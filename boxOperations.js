export function  boxOps(){
    let currentBox = {
        color: "#05EFFF",
        width: 10,
        height: 10,
        top: 30,
        left: 30
    };

    function moveBoxForward(){
        let canvasContext = canvas.getContext('2d');
        canvasContext.clearRect(currentBox.left, currentBox.top, currentBox.width, currentBox.height);
        currentBox.left = currentBox.left + 10;
        drawBox(currentBox);
    }

    function generateBox(){
        drawBox(currentBox);
    }

    function drawBox(box){
        let canvasContext = canvas.getContext('2d');
        canvasContext.fillStyle = box.color;
        canvasContext.fillRect(box.left, box.top, box.width, box.height);
    }

    return {
        moveBoxForward: moveBoxForward,
        generateBox: generateBox
    }
};