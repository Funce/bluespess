class Component {
	constructor(atom, template) {
		if(template) {
			Object.assign(this, template);
		}
		Object.defineProperty(this, 'atom', {enumerable: false, configurable: false, writable: false, value: atom});
	}
}
