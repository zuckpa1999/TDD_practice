// use jest

function greet(name) {


    if (name === null) {
        return 'Hello, my friend.'
    }


    if (name.length > 1 && name instanceof Object) {
        let temp_arr = []
        // deal with ,
        for (let i = 0; i < name.length; i++) {
            if (name[i].includes(',')) {
                console.log('yess')
                if (name[i].includes("\\") || name[i].includes('"')) {
                    let new_element = name[i]
                    console.log(new_element)
                    if (new_element.includes("\\")) {
                        new_element = new_element.replaceAll('\\', '')
                        console.log(new_element)
                    }
                    if (new_element.includes('"')) {
                        new_element = new_element.replaceAll('"', '')
                        console.log(new_element)
                    }

                    name.pop(name[i])
                    name.push(new_element)

                }
                else {
                    temp_arr = name[i].split(' ')
                    name.pop(name[i])
                }
            }

        }
        if (temp_arr.length !== 0) {
            name.push(...temp_arr)
        }
        if (name.length > 2) {
            let result = 'Hello,'
            let upperCaseName = []
            for (let i = 0; i < name.length; i++) {
                if (name[i] !== name[i].toUpperCase()) {
                    if (i !== name.length - 1) {
                        if (name[i].includes(',')) {
                            result += ` ${name[i]}`
                        }
                        else {
                            result += ` ${name[i]},`
                        }

                    }
                    else {
                        result += ` and ${name[i]}.`
                    }
                }
                else {
                    // console.log(name[i])
                    // console.log(name[i].toUpperCase())
                    upperCaseName.push(name[i])
                }

            }
            if (upperCaseName.length >= 1) {
                result += ` AND `
                for (let i = 0; i < upperCaseName.length; i++) {
                    result += `HELLO ${upperCaseName[i]}!`
                }

            }
            return result
        }

        return `Hello, ${name[0]} and ${name[1]}.`

    }

    else if (name === name.toUpperCase()) {
        return 'HELLO ' + name + '!';
    }


    return 'Hello, ' + name + '.';
}
module.exports = greet;