(function () {
	try {
		// test for object support
		var a = document.createElement('a');

		a.setAttribute({
			id: 'a'
		});

		if (a.id !== 'a') {
			throw Error;
		}
	} catch (error) {
		var originalSetAttribute = Element.prototype.setAttribute;

		Element.prototype.setAttribute = function setAttribute(name, value) {
			if (!name || typeof name === 'string' || 1 in arguments) {
				// if it is empty, a string, or a value is passed, set the attribute
				originalSetAttribute.call(this, name, value);
			} else {
				// otherwise, for each key in the name object
				for (var key in name) {
					if (name.hasOwnProperty(key)) {
						// kebabed camelcase attribute name
						var kebabKey = key.replace(/[A-Z]/g, '-$&').toLowerCase();

						// set the attribute
						originalSetAttribute.call(this, kebabKey, name[key]);
					}
				}
			}
		};
	}
})();
