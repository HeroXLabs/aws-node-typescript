export function isBlank(x: any) : boolean {
  return x === undefined || x === null 
}

export function isEmpty(x: any) : boolean {
  return isBlank(x) || ((x instanceof Array) && x.length <= 0) || x === ""
}

export function decamelize(text: string, separator: string = '_') : string {
	if (!(typeof text === 'string' && typeof separator === 'string')) {
		throw new TypeError('The `text` and `separator` arguments should be of type `string`');
	}

	return text
		.replace(/([\p{Lowercase_Letter}\d])(\p{Uppercase_Letter})/gu, `$1${separator}$2`)
		.replace(/(\p{Uppercase_Letter}+)(\p{Uppercase_Letter}\p{Lowercase_Letter}+)/gu, `$1${separator}$2`)
		.toLowerCase();
};