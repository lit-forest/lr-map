const SEARCH = 'SEARCH';

export const search = (key) => ({
    type: SEARCH,
    keyword: key
})