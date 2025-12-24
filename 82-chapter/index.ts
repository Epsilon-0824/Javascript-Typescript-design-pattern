type User = {
    name: 'John'
    show: () => void
}

type Customer = {
    name: 'Mary'
    buy: () => void
}

type Sale = User | Customer

function handleSale(sale: Sale){
    if(sale.name === 'Mary'){
        sale.buy()
    }
    else{
        sale.show()
    }
}