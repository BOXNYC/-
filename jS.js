
/**
 * j$ - By Jo$eph Weitzel
 **/

var $$ = function(a){
		var self = this,
				doc = document,
				_clean = function() {
					var i = self.length;
					while(typeof self[i] !== 'undefined') {
						delete self[i];
						i++;
					};
				};
		this.length = 0;
		this.events = {};
		switch(typeof a) {
			case 'function' :
				doc.addEventListener('DOMContentLoaded', a);
				break;
			case 'object' :
				switch(a.constructor.name) {
					case 'HTMLElement' :
						this[0] = a;
						this.length = 1;
						break;
					case 'NodeList' :
						for(var i=0; i<a.length; i++)
							this[i] = a[i];
						this.length = i;
						break;
				};
				_clean();
				break;
			case 'string' :
				var sel = doc.querySelectorAll(a);
				for(var i=0; i<sel.length; i++)
					this[i] = sel[i];
				this.length = i;
				_clean();
				break;
		};
		this.each = function(func){
			for(var i=0; i<self.length; i++)
				func.call(self[i], i, self[i]);
			return self;
		};
		this.bind = function(event, func){
			self.each(function(i, el){
				self.events[event] = func;
				el.addEventListener(event, self.events[event]);
			});
			return self;
		};
		this.unbind = function(event){
			el.removeEventListener(event, self.events[event]);
			delete self.events[event];
			return self;
		};
		this.trigger = function(event){
			self.each(function(i, el){
				el.dispatchEvent(new Event(event));
			});
			return self;
		};
	}, $ = function(a){
		return new $$(a);
	};
