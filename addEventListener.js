function EventEmitter() {
	this._events = Object.create(null)
}



// С проверкой на уникальность значений
EventEmitter.prototype.addEventListener = function(type, cb) {
		if ( type in this._events )
			this._events[type].add(cb)
		else {
			this._events[type] = new Set([cb])
		}
}
