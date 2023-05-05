const excelGenerator = (products, name, res) => {
    const xls = require('excel4node');
    products = products.map(product => {
        const id = product._id.toString()
        delete product._id
        return {
            id,
            ...product
        }
    })

    let wb = new xls.Workbook();
    let ws = wb.addWorksheet('Productos');

    products.forEach((product, index) => {
        Object.keys(product).forEach((label, indexLabel) => {
            switch(typeof product[label]){
                case 'string':
                    ws.cell(index + 1, indexLabel + 1).string(product[label])
                    break;
                case 'number':
                    ws.cell(index + 1, indexLabel + 1).number(product[label])
                    break;
            }
        })
    })

    wb.write(`${name}.xlsx`, res);
}

module.exports.ProductsUtils = {
    excelGenerator
}