module.exports = function parseStringAsArray(arrayAsString) {

    if ( !arrayAsString ) {
        // em alguns momentos isso ta vindo undefined
        return null
    }

    return arrayAsString.split(',').map( tech => tech.trim() )
}