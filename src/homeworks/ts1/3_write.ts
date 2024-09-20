interface Category {
    id: string,
    name: string,
    photo?: string
}
interface Product {
    id: string,
    name: string,
    photo: string,
    desc?: string,
    createdAt: string,
    oldPrice?: string,
    price: number,
    category: Category
}

type Operation = Cost | Profit

interface Cost {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: 'Cost'
}

interface Profit {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: 'Profit'
}

function getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string) => {
    return {
        id: `id${getRandomNumber(1, 5)}`,
        name: `Product #${getRandomNumber(1, 5)}`,
        photo: `Photo #${getRandomNumber(1, 5)}`,
        createdAt: createdAt,
        price: `${getRandomNumber(1, 500)}`,
        category: {
            id: `id${getRandomNumber(1, 5)}`,
            name: `Category ${getRandomNumber(1, 5)}`,
        },
        desc: "",
        oldPrice: ""
    }
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string) => {
    return {
        type: getRandomNumber(1, 10) > 5 ? 'Cost' : 'Profit',
        id: `id${getRandomNumber(1, 5)}`,
        name: `Operation #${getRandomNumber(1, 5)}`,
        createdAt: createdAt,
        amount: getRandomNumber(1, 500),
        category: {
            id: `id${getRandomNumber(1, 5)}`,
            name: `Category ${getRandomNumber(1, 5)}`
        },
        desc: ""
    }
};
