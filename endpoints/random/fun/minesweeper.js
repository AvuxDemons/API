module.exports = {
    run: async (req, res, next) => {
        let size1 = req.query.size
        let bomb = req.query.bombs

        let size = size1 || 5
        let bombs = bomb || 10

        const minesweeper = (size, bombs) => {
            let board = [];

            for (let i = 0; i < size; i++) {
                board.push([]);
                for (let j = 0; j < size; j++) {
                    board[i].push(0);
                }
            }

            let x = Math.floor(Math.random() * size);
            let y = Math.floor(Math.random() * size);

            for (let i = 0; i < bombs; i++) {

                x = Math.floor(Math.random() * size);
                y = Math.floor(Math.random() * size);

                if (board[y][x] == `☠️`) {
                    --i;
                    continue;
                }

                board[y][x] = `☠️`;

            }

            x = 0;
            y = 0;

            for (y = 0; y < size; y++) {
                for (x = 0; x < size; x++) {
                    if (board[y][x] == `☠️`) {
                        for (let m = -1; m <= 1; m++) {
                            for (let n = -1; n <= 1; n++) {
                                if (typeof board[y + m] === 'undefined') continue;
                                if (typeof board[y + m][x + n] === 'undefined') continue;
                                if (board[y + m][x + n] == `☠️`) continue;
                                board[y + m][x + n] += 1;
                            }
                        }
                    }
                }
            }
            // message.channel.send(board);
            return board;
        };

        /**
         * @param {Int32Array[]} board - Mine Sweeper
         */

        const format = board => {
            let result = "";

            const numberToEmoji = {
                0: `0️⃣`,
                1: `1️⃣`,
                2: `2️⃣`,
                3: `3️⃣`,
                4: `4️⃣`,
                5: `5️⃣`,
                6: `6️⃣`,
                7: `7️⃣`,
                8: `8️⃣`
            }

            board.forEach(col => {
                col.forEach(row => {
                    if (row == `☠️`) {
                        result += `||☠️||`
                    } else {
                        result += `||${numberToEmoji[row]}||`
                    }
                });
                result += "\n";
            });

            return result;
        }

        // log(minesweeper(5, 5));
        res.status(200).send({
            output: format(minesweeper(size, bombs))
        })
    }
};