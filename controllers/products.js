

const getAllProductsStatic = async (req,res) => {
    throw new Error('testing async error')
    res.status(200).json({msg: 'sucess product static'})
}

const getAllProducts = async (req,res) => {
    res.status(200).json({msg: 'sucess product'})
}


module.exports = {
    getAllProductsStatic,
    getAllProducts,
}
