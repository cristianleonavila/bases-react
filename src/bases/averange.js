const averange = ( lista ) => {
    let sum = 0;
    lista.forEach(element => {
        sum += element;
    });
    return sum / lista.length;
}

module.exports = {
    averange
}