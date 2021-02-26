const isObject = o => o && typeof o === 'object' && !(o instanceof Date);

export const flattenObject = obj => Object.entries(obj).reduce((acc, [key, val]) => ({
   ...acc, ...(isObject(val) ? flattenObject(val) : { [key]: val })
}), {});