/**
 * j$ v2.0 - By Jo$eph Weitzel
 **/

var j$ = function(a){
	var self = this,
			doc = document,
			_clean = function() {
				var i = self.length;
				while(typeof self[i] !== 'undefined') {
					delete self[i];
					i++;
				};
			},
			UND = 'undefined',
			_und = function(a){
				return typeof a === UND;
			},
			updateClass = function(m, a){
				if(_und(self[0])) return self;
				self.each(function(){
					this.classList[m](a);
				});
				return self;
			};
	this.length = 0;
	this.events = {};
	switch(typeof a) {
		case 'function' :
			doc.addEventListener('DOMContentLoaded', a);
			break;
		case 'object' :
			if(a.constructor.name == 'NodeList') {
				for(var i=0; i<a.length; i++)
					this[i] = a[i];
				this.length = i;
			} else {
				this[0] = a;
				this.length = 1;
			};
			_clean();
			break;
		case 'string' :
			a = a.replace(/^\s*|\s*$/, '');
			if(a.indexOf('<')==0) {
				var n = a.match(/^\<([^\s\>]{1,})/i);
				if(n.length == 2) {
					self[0] = doc.createElement(n[1].toUpperCase());
					self.length = 1;
					_clean();
				};
				break;
			};
			var sel = doc.querySelectorAll(a);
			for(var i=0; i<sel.length; i++)	this[i] = sel[i];
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
	this.click = function(a){
		self.bind('click', a);
		return self;
	};
	this.hover = function(a, aa){
		if(_und(a)) {
			self.trigger('mouseover');
			return self;
		};
		self.bind('mouseover', a);
		if(!_und(aa)) self.bind('mouseout', aa);
		return self;
	};
	this.find = function(a){
		if(_und(self[0])) return $();
		return $(self[0].querySelectorAll(a));
	};
	this.parent = function(a){
		if(_und(self[0])) return $();
		return $(self[0].parentNode);
	};
	this.css = function(a, aa){
		if(_und(self[0])) return null;
		if(_und(aa)) return self[0].style[a];
		self[0].style[a] = aa;
		return self;
	};
	this.addClass = function(a){
		return updateClass('add', a);
	};
	this.removeClass = function(a){
		return updateClass('remove', a);
	};
	this.toggleClass = function(a){
		return updateClass('toggle', a);
	};
	this.hasClass = function(a) {
		if(_und(self[0])) return false;
		return self[0].classList.contains(a);
	};
	this.attr = function(a, aa){
    if(_und(self[0]) && !_und(aa)) return self;
    else if(_und(self[0]) && _und(aa)) return null;
    if(typeof a !== 'object' && _und(aa)) return self[0].attributes[a].value;
    if(typeof a === 'string') { var k = a; a = {}; a[k]=aa; }
    return self.each(function(){
			for(var k in a) this.setAttribute(k, a[k]);
    });
  };
  this.removeAttr = function(a){
    return self.each(function(){
			this.removeAttribute(a);
    });
  };
  this.html = function(a){
		if(_und(a)) {
			if(_und(self[0])) return null;
			return self[0].innerHTML;
		};
		if(_und(self[0])) return self;
		return self.each(function(){
			this.innerHTML = a;
		});
  };
  this.empty = function(){
		return self.each(function(){
		  this.innerHTML == '';
		});
  };
  this.remove = function(){
		return self.each(function(){
		  this.parentElement.removeChild(this);
		});
  };
  this.append = function($a){
		return self.each(function(i, el){
			$a.each(function(){
				el.appendChild(this);
			});
		});
  };
  this.prepend = function($a){
		return self.each(function(i, el){
			$a.each(function(){
				el.insertBefore(this, el.firstChild);
			});
		});
  };
}, $ = function(a){
	return new j$(a);
};
