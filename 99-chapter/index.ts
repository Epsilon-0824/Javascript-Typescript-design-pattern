const option = {
    dark: 'dark mode',
    light: 'light mode'
} as const

type ThemeOption = keyof typeof option;

function setTheme(value: ThemeOption){

}

const filters = {
    category: 'books',
    sort: 'asc',
    page: 1
} as const

type Filterkey = keyof typeof filters;