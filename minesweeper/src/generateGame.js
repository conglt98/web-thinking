function genRandomValue(from, to) {
    return Math.round(from + (to - from - 1) * Math.random());
}

function checkHaveBomb(x, y, numRow, numCol, mapGame) {
    if (x < 0 || y < 0 || x >= numRow || y >= numCol)
        return false;
    return mapGame[x][y] === -1;
}

function initializeMapGame(numRow, numCol) {
    var mapGame = new Array(numRow).fill(null);
    for (let idx = 0; idx < numRow; idx++) {
        mapGame[idx] = new Array(numCol).fill(null);
    }
    for (let i = 0; i < numRow; i++) {
        for (let j = 0; j < numCol; j++) {
            mapGame[i][j] = 0;
        }
    }
    return mapGame;
}

function generateBomb(numBomb, numRow, numCol, mapGame) {
    let val = 0;
    while (val < numBomb) {
        let x = genRandomValue(0, numRow);
        let y = genRandomValue(0, numCol);

        if (!mapGame[x][y]) {
            mapGame[x][y] = -1;
            val++;
        }
    }
}

function increaseCellCount(x, y, numRow, numCol, mapGame) {
    if (!(x < 0 || y < 0 || x >= numRow || y >= numCol))
        mapGame[x][y]++;
}

function increaseCountAroundBomb(x, y, numRow, numCol, mapGame) {
    for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
            if (k === 0 && l === 0) {
                continue;
            }
            if (checkHaveBomb(x + k, y + l, numRow, numCol, mapGame)) {
                continue;
            }
            increaseCellCount(x + k, y + l, numRow, numCol, mapGame);
        }
    }
}

function generateNumber(numRow, numCol, mapGame) {
    for (let i = 0; i < numRow; i++) {
        for (let j = 0; j < numCol; j++) {
            if (mapGame[i][j] === -1) {
                increaseCountAroundBomb(i, j, numRow, numCol, mapGame);
            }
        }
    }
}

export default function comboMakeGame(numRow, numCol, numBomb) {
    if (numBomb > numRow * numCol) {
        return null;
    }
    let mapGame = initializeMapGame(numRow, numCol);
    generateBomb(numBomb, numRow, numCol, mapGame);
    generateNumber(numRow, numCol, mapGame);
    console.log(mapGame);
    return mapGame;
}