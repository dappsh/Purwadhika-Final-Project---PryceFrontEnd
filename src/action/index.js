// export namanya apa dan nama fungsi yang diberikan 
const userLogin = (x) => {
    console.log('data dari login', x);
    return{
        type: 'user',
        // mengacu pada case di file pada reducer
        // contoh case idLogin pada file idLogin
        payload: x
        // payload adalah apa yang akan di return
    }
} 

const storeProduct = (x) => {
    console.log('data Product Detail', x)
    return{
        type: 'productDetail',
        // nama reducersnya
        payload: x
    }
}


const greeting = (x) => {
    console.log('data Product Detail', x)
    return{
        type: 'greetRed',
        // nama reducersnya
        payload: x
    }
}

const storeInvoice = (x) => {
    console.log('data Invoice ', x)
    return{
        type: 'invoiceRed',
        // nama reducersnya
        payload: x
    }
}


export {
    userLogin,
    storeProduct,
    greeting,
    storeInvoice
}