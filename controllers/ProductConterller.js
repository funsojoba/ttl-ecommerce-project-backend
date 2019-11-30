exports.getProducts = (req, res) => {

    let products = [{
            name: 'Tunde',
            age: 32,
            desciption: 'Omo daadaa'
        },
        {
            name: 'Tunde',
            age: 32,
            desciption: 'Omo daadaa'
        },
        {
            name: 'Tunde',
            age: 32,
            desciption: 'Omo daadaa'
        },
        {
            name: 'Tunde',
            age: 32,
            desciption: 'Omo daadaa'
        },
        {
            name: 'Tunde',
            age: 32,
            desciption: 'Omo daadaa'
        },
        {
            name: 'Tunde',
            age: 32,
            desciption: 'Omo daadaa'
        },
        {
            name: 'Tunde',
            age: 32,
            desciption: 'Omo daadaa'
        },
        {
            name: 'Tunde',
            age: 32,
            desciption: 'Omo daadaa'
        },
        {
            name: 'Tunde',
            age: 32,
            desciption: 'Omo daadaa'
        },
        {
            name: 'Tunde',
            age: 32,
            desciption: 'Omo daadaa'
        }
    ]
    res.send(products)
}

exports.getProductID = (req, res) => {
    res.status(200).send('get product by id here')
}

exports.createProduct = (req, res) => {
    res.status(200).send('create product by id')

};
exports.updateProduct = (req, res) => {
    res.status(200).send('update product by id')

};

exports.deleteProduct = (req, res) => {
    res.status(200).send('This API endpoint is deleted')

};