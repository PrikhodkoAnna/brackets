module.exports = function check(str, bracketsConfig) {


    let stack = [];
    let flag = false;


    if (str.length % 2 !== 0) {
        return false;
    }
    else {
        for (let i = 0; i < str.length; i++) {

            let currentSymbol = str[i];
            flag = false;
            for (let j = 0; j < bracketsConfig.length; j++) {

                if (bracketsConfig[j][0] === currentSymbol) {

                    if (bracketsConfig[j][0] === bracketsConfig[j][1]) {

                        if (stack.length < 1) {
                            stack.push(currentSymbol);

                        }
                        else {
                            if (stack[stack.length - 1] === currentSymbol) {
                                stack.pop();

                            }
                            else {
                                stack.push(currentSymbol);

                            }
                        }
                    }

                    else {
                        stack.push(currentSymbol);

                    }
                    flag = true;
                    continue;
                }
            }


            if (flag === false) {
                for (let j = 0; j < bracketsConfig.length; j++) {


                    if (bracketsConfig[j][1] === currentSymbol) {

                        if (stack.length < 1) {
                            return false;
                        }

                        if (stack[stack.length - 1] === bracketsConfig[j][0]) {
                            stack.pop();
                            continue;
                        }

                    }

                }
            }
        }
    }




    return stack.length === 0;
}
