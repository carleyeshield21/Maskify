function maskify(cc) {

    // We first convert the given cc to a string to make sure we can use it on an array and count the string length
    ccstring = cc.toString()

    // We now create an array called ccstringArray, so we can use the for loop and push each element to that array
    ccstringArray = []
    for (i = 0; i <= ccstring.length - 1; i++) {
        ccstringArray.push(ccstring[i])
    }

    // We use another for loop for the ccStringArray so we can use the splice function and replace the elements except the last four elements so we set the limit to minus 5 the ccstringArray's length
    for (i = 0; i <= ccstringArray.length - 5; i++) {
        ccstringArray.splice(i, 1, "#")
    }

    // Here, we convert the array to a string with the characters replaced with # except the last four elements, so that we use the replaceAll function to replace all the commas with a single space, so we can output the string withour commas 
    masked = ccstringArray.toString()
    console.log(masked.replaceAll(',', ''))
}
maskify(4556364607935616)
maskify('4556364607935616')
maskify('64607935616')
maskify('Nananananananananananananananana Batman!')