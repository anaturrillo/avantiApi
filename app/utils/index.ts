
export const createIndex = (list, key) => {
    return list.reduce((index, item) => {
        if (!index[item[key]]) index[item[key]] = item;
        return index
    }, {})
};
