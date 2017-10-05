/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imask_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imask_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__imask_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_main_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_main_scss__);




(function($) {
  $(function() {

    // $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $("#copy-date").text(new Date().getFullYear());

    var phoneMask = new IMask(document.getElementById('phone'), {
      mask: '+{7} (000) 000-00-00'
    });

    var tapTarget;

    Materialize.scrollFire([{
      selector: '[name=form]',
      offset: 100,
      callback: function() {
        clearTimeout(tapTarget);
        $('.tap-target').tapTarget('close');
      }
    }, {
      selector: '.section-1',
      offset: 100,
      callback: function() {
        tapTarget = setTimeout(function() {
          $('.tap-target').tapTarget('open');
        }, 5000);
      }
    }]);

    function postAjax(url, data, success) {
      const params = JSON.stringify(data);
      let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      xhr.open('POST', url);
      xhr.onreadystatechange = function() {
        if (xhr.readyState > 3 && xhr.status == 200) {
          success(xhr.responseText);
        }
      };
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(params);
      return xhr;
    }

    $("#send-email").click(
      function() {
        var name = ($("#name").val() == "" || $("#name").hasClass("invalid")) ? null : $("#name").val();
        var phone = ($("#phone").val() == "" || $("#phone").hasClass("invalid")) ? null : $("#phone").val();
        var email = ($("#email").val() == "" || $("#email").hasClass("invalid")) ? null : $("#email").val();

        if (!name || !phone || !email) {
          console.error("form error")
        } else {
          var message = {
            from: "job@vvnab.ru",
            to: "vvnab@mail.ru",
            subject: `Заказ сайта`,
            text: `Имя: ${name}\nТелефон: ${phone}\nE-Mail: ${email}`
          };
          $("#send-email").attr("disabled", true);
          postAjax("https://api-driver.taxi21.ru/utils/mail?mail-access-key=123456", message, result => {
            console.log("OK", name, phone, email);
            Materialize.toast('Сообщение успешно отправлено', 4000, "red");
          });
        }
      }
    )
  }); // end of document ready
})(jQuery); // end of jQuery name space


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function(global, factory) {
     true ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.IMask = factory());
}(this, (function() {
    'use strict';

    function createCommonjsModule(fn, module) {
        return module = {
                exports: {}
            }, fn(module, module.exports), module.exports;
    }

    var _global = createCommonjsModule(function(module) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = typeof window != 'undefined' && window.Math == Math
            ? window : typeof self != 'undefined' && self.Math == Math ? self
                // eslint-disable-next-line no-new-func
                : Function('return this')();
        if (typeof __g == 'number')
            __g = global; // eslint-disable-line no-undef
    });

    var _core = createCommonjsModule(function(module) {
        var core = module.exports = {
            version: '2.5.1'
        };
        if (typeof __e == 'number')
            __e = core; // eslint-disable-line no-undef
    });

    var _isObject = function(it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
    };

    var _anObject = function(it) {
        if (!_isObject(it))
            throw TypeError(it + ' is not an object!');
        return it;
    };

    var _fails = function(exec) {
        try {
            return !!exec();
        } catch (e) {
            return true;
        }
    };

    // Thank's IE8 for his funny defineProperty
    var _descriptors = !_fails(function() {
            return Object.defineProperty({}, 'a', {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
    });

    var document$1 = _global.document;
    // typeof document.createElement is 'object' in old IE
    var is = _isObject(document$1) && _isObject(document$1.createElement);
    var _domCreate = function(it) {
        return is ? document$1.createElement(it) : {};
    };

    var _ie8DomDefine = !_descriptors && !_fails(function() {
            return Object.defineProperty(_domCreate('div'), 'a', {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
    });

    // 7.1.1 ToPrimitive(input [, PreferredType])

    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    var _toPrimitive = function(it, S) {
        if (!_isObject(it)) return it;
        var fn,
            val;
        if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
    };

    var dP = Object.defineProperty;

    var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        _anObject(O);
        P = _toPrimitive(P, true);
        _anObject(Attributes);
        if (_ie8DomDefine) try {
                return dP(O, P, Attributes);
            } catch (e) {
            /* empty */
        }
        if ('get' in Attributes || 'set' in Attributes)
            throw TypeError('Accessors not supported!');
        if ('value' in Attributes)
            O[P] = Attributes.value;
        return O;
    };

    var _objectDp = {
        f: f
    };

    var _propertyDesc = function(bitmap, value) {
        return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
        };
    };

    var _hide = _descriptors ? function(object, key, value) {
        return _objectDp.f(object, key, _propertyDesc(1, value));
    } : function(object, key, value) {
        object[key] = value;
        return object;
    };

    var hasOwnProperty = {}.hasOwnProperty;
    var _has = function(it, key) {
        return hasOwnProperty.call(it, key);
    };

    var id = 0;
    var px = Math.random();
    var _uid = function(key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };

    var _redefine = createCommonjsModule(function(module) {
        var SRC = _uid('src');
        var TO_STRING = 'toString';
        var $toString = Function[TO_STRING];
        var TPL = ('' + $toString).split(TO_STRING);

        _core.inspectSource = function(it) {
            return $toString.call(it);
        };

        (module.exports = function(O, key, val, safe) {
            var isFunction = typeof val == 'function';
            if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
            if (O[key] === val) return;
            if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
            if (O === _global) {
                O[key] = val;
            } else if (!safe) {
                delete O[key];
                _hide(O, key, val);
            } else if (O[key]) {
                O[key] = val;
            } else {
                _hide(O, key, val);
            }
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, TO_STRING, function toString() {
            return typeof this == 'function' && this[SRC] || $toString.call(this);
        });
    });

    var _aFunction = function(it) {
        if (typeof it != 'function')
            throw TypeError(it + ' is not a function!');
        return it;
    };

    // optional / simple context binding

    var _ctx = function(fn, that, length) {
        _aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
            case 1:
                return function(a) {
                    return fn.call(that, a);
                };
            case 2:
                return function(a, b) {
                    return fn.call(that, a, b);
                };
            case 3:
                return function(a, b, c) {
                    return fn.call(that, a, b, c);
                };
        }
        return function( /* ...args */ ) {
            return fn.apply(that, arguments);
        };
    };

    var PROTOTYPE = 'prototype';

    var $export = function(type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
        var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
        var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
        var key,
            own,
            out,
            exp;
        if (IS_GLOBAL)
            source = name;
        for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined;
            // export native or passed
            out = (own ? target : source)[key];
            // bind timers to global for call from export context
            exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
            // extend global
            if (target) _redefine(target, key, out, type & $export.U);
            // export
            if (exports[key] != out) _hide(exports, key, exp);
            if (IS_PROTO && expProto[key] != out)
                expProto[key] = out;
        }
    };
    _global.core = _core;
    // type bitmap
    $export.F = 1; // forced
    $export.G = 2; // global
    $export.S = 4; // static
    $export.P = 8; // proto
    $export.B = 16; // bind
    $export.W = 32; // wrap
    $export.U = 64; // safe
    $export.R = 128; // real proto method for `library`
    var _export = $export;

    var toString = {}.toString;

    var _cof = function(it) {
        return toString.call(it).slice(8, -1);
    };

    // fallback for non-array-like ES3 and non-enumerable old V8 strings

    // eslint-disable-next-line no-prototype-builtins
    var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
        return _cof(it) == 'String' ? it.split('') : Object(it);
    };

    // 7.2.1 RequireObjectCoercible(argument)
    var _defined = function(it) {
        if (it == undefined)
            throw TypeError("Can't call method on  " + it);
        return it;
    };

    // 7.1.13 ToObject(argument)

    var _toObject = function(it) {
        return Object(_defined(it));
    };

    // 7.1.4 ToInteger
    var ceil = Math.ceil;
    var floor = Math.floor;
    var _toInteger = function(it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };

    // 7.1.15 ToLength

    var min = Math.min;
    var _toLength = function(it) {
        return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };

    // 7.2.2 IsArray(argument)

    var _isArray = Array.isArray || function isArray(arg) {
        return _cof(arg) == 'Array';
    };

    var SHARED = '__core-js_shared__';
    var store = _global[SHARED] || (_global[SHARED] = {});
    var _shared = function(key) {
        return store[key] || (store[key] = {});
    };

    var _wks = createCommonjsModule(function(module) {
        var store = _shared('wks');

        var Symbol = _global.Symbol;
        var USE_SYMBOL = typeof Symbol == 'function';

        var $exports = module.exports = function(name) {
            return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
        };

        $exports.store = store;
    });

    var SPECIES = _wks('species');

    var _arraySpeciesConstructor = function(original) {
        var C;
        if (_isArray(original)) {
            C = original.constructor;
            // cross-realm fallback
            if (typeof C == 'function' && (C === Array || _isArray(C.prototype)))
                C = undefined;
            if (_isObject(C)) {
                C = C[SPECIES];
                if (C === null)
                    C = undefined;
            }
        }
        return C === undefined ? Array : C;
    };

    // 9.4.2.3 ArraySpeciesCreate(originalArray, length)


    var _arraySpeciesCreate = function(original, length) {
        return new (_arraySpeciesConstructor(original))(length);
    };

    // 0 -> Array#forEach
    // 1 -> Array#map
    // 2 -> Array#filter
    // 3 -> Array#some
    // 4 -> Array#every
    // 5 -> Array#find
    // 6 -> Array#findIndex





    var _arrayMethods = function(TYPE, $create) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        var create = $create || _arraySpeciesCreate;
        return function($this, callbackfn, that) {
            var O = _toObject($this);
            var self = _iobject(O);
            var f = _ctx(callbackfn, that, 3);
            var length = _toLength(self.length);
            var index = 0;
            var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
            var val,
                res;
            for (; length > index; index++)
                if (NO_HOLES || index in self) {
                    val = self[index];
                    res = f(val, index, O);
                    if (TYPE) {
                        if (IS_MAP)
                            result[index] = res; // map
                        else if (res) switch (TYPE) {
                                case 3:
                                    return true; // some
                                case 5:
                                    return val; // find
                                case 6:
                                    return index; // findIndex
                                case 2:
                                    result.push(val); // filter
                        }
                        else if (IS_EVERY) return false; // every
                    }
            }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
        };
    };

    // 22.1.3.31 Array.prototype[@@unscopables]
    var UNSCOPABLES = _wks('unscopables');
    var ArrayProto = Array.prototype;
    if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
    var _addToUnscopables = function(key) {
        ArrayProto[UNSCOPABLES][key] = true;
    };

    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

    var $find = _arrayMethods(5);
    var KEY = 'find';
    var forced = true;
    // Shouldn't skip holes
    if (KEY in []) Array(1)[KEY](function() {
            forced = false;
        });
    _export(_export.P + _export.F * forced, 'Array', {
        find: function find(callbackfn /* , that = undefined */ ) {
            return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
    });
    _addToUnscopables(KEY);

    // to indexed object, toObject with fallback for non-array-like ES3 strings


    var _toIobject = function(it) {
        return _iobject(_defined(it));
    };

    var max = Math.max;
    var min$1 = Math.min;
    var _toAbsoluteIndex = function(index, length) {
        index = _toInteger(index);
        return index < 0 ? max(index + length, 0) : min$1(index, length);
    };

    // false -> Array#indexOf
    // true  -> Array#includes



    var _arrayIncludes = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
            var O = _toIobject($this);
            var length = _toLength(O.length);
            var index = _toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el)
                while (length > index) {
                    value = O[index++];
                    // eslint-disable-next-line no-self-compare
                    if (value != value) return true;
            // Array#indexOf ignores holes, Array#includes - not
            }
            else
                for (; length > index; index++)
                    if (IS_INCLUDES || index in O) {
                        if (O[index] === el) return IS_INCLUDES || index || 0;
            }
            return !IS_INCLUDES && -1;
        };
    };

    var shared = _shared('keys');

    var _sharedKey = function(key) {
        return shared[key] || (shared[key] = _uid(key));
    };

    var arrayIndexOf = _arrayIncludes(false);
    var IE_PROTO = _sharedKey('IE_PROTO');

    var _objectKeysInternal = function(object, names) {
        var O = _toIobject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O)
            if (key != IE_PROTO) _has(O, key) && result.push(key);
        // Don't enum bug & hidden keys
        while (names.length > i)
        if (_has(O, key = names[i++])) {
                ~arrayIndexOf(result, key) || result.push(key);
        }
        return result;
    };

    // IE 8- don't enum bug keys
    var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
        ).split(',');

    // 19.1.2.14 / 15.2.3.14 Object.keys(O)



    var _objectKeys = Object.keys || function keys(O) {
        return _objectKeysInternal(O, _enumBugKeys);
    };

    // most Object methods by ES6 should accept primitives



    var _objectSap = function(KEY, exec) {
        var fn = (_core.Object || {})[KEY] || Object[KEY];
        var exp = {};
        exp[KEY] = exec(fn);
        _export(_export.S + _export.F * _fails(function() {
                fn(1);
            }), 'Object', exp);
    };

    // 19.1.2.14 Object.keys(O)



    _objectSap('keys', function() {
        return function keys(it) {
            return _objectKeys(_toObject(it));
        };
    });

    var _stringRepeat = function repeat(count) {
        var str = String(_defined(this));
        var res = '';
        var n = _toInteger(count);
        if (n < 0 || n == Infinity)
            throw RangeError("Count can't be negative");
        for (; n > 0; (n >>>= 1) && (str += str))
            if (n & 1)
                res += str;
        return res;
    };

    _export(_export.P, 'String', {
        // 21.1.3.13 String.prototype.repeat(count)
        repeat: _stringRepeat
    });

    // https://github.com/tc39/proposal-string-pad-start-end




    var _stringPad = function(that, maxLength, fillString, left) {
        var S = String(_defined(that));
        var stringLength = S.length;
        var fillStr = fillString === undefined ? ' ' : String(fillString);
        var intMaxLength = _toLength(maxLength);
        if (intMaxLength <= stringLength || fillStr == '') return S;
        var fillLen = intMaxLength - stringLength;
        var stringFiller = _stringRepeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
        if (stringFiller.length > fillLen)
            stringFiller = stringFiller.slice(0, fillLen);
        return left ? stringFiller + S : S + stringFiller;
    };

    // https://github.com/tc39/proposal-string-pad-start-end



    _export(_export.P, 'String', {
        padStart: function padStart(maxLength /* , fillString = ' ' */ ) {
            return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
        }
    });

    // https://github.com/tc39/proposal-string-pad-start-end



    _export(_export.P, 'String', {
        padEnd: function padEnd(maxLength /* , fillString = ' ' */ ) {
            return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
        }
    });

    function isString(str) {
        return typeof str === 'string' || str instanceof String;
    }

    function conform(res, str) {
        var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        return isString(res) ? res : res ? str : fallback;
    }

    var DIRECTION = {
        NONE: 0,
        LEFT: -1,
        RIGHT: 1
    };

    function indexInDirection(pos, direction) {
        if (direction === DIRECTION.LEFT) --pos;
        return pos;
    }

    function refreshValueOnSet(target, key, descriptor) {
        var method = descriptor.set;
        descriptor.set = function() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return this.withValueRefresh(method.bind.apply(method, [this].concat(args)));
        };
    }

    function escapeRegExp(str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
    }

    var classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    var createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();







    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };



    var inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };











    var possibleConstructorReturn = function(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    };

    var _class;

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function(key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    var Masked = (_class = function() {
        function Masked(_ref) {
            var mask = _ref.mask,
                _ref$prepare = _ref.prepare,
                prepare = _ref$prepare === undefined ? function(val) {
                    return val;
                } : _ref$prepare,
                _ref$validate = _ref.validate,
                validate = _ref$validate === undefined ? function() {
                    return true;
                } : _ref$validate,
                _ref$commit = _ref.commit,
                commit = _ref$commit === undefined ? function() {} : _ref$commit;
            classCallCheck(this, Masked);

            this._value = '';
            this.mask = mask;
            this.prepare = prepare;
            this.validate = validate;
            this.commit = commit;
            this.isInitialized = true;
        }

        Masked.prototype.clone = function clone() {
            var m = new Masked(this);
            m._value = this.value.slice();
            return m;
        };

        Masked.prototype.reset = function reset() {
            this._value = '';
        };

        Masked.prototype.nearestInputPos = function nearestInputPos(cursorPos) /* direction */ {
            return cursorPos;
        };

        Masked.prototype.extractInput = function extractInput() {
            var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

            return this.value.slice(fromPos, toPos);
        };

        Masked.prototype.extractTail = function extractTail() {
            var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

            return this.extractInput(fromPos, toPos);
        };

        Masked.prototype._appendTail = function _appendTail(tail) {
            return !tail || this._append(tail);
        };

        Masked.prototype._append = function _append(str, soft) {
            var oldValueLength = this.value.length;
            var consistentValue = this.clone();

            str = this.doPrepare(str, soft);
            for (var ci = 0; ci < str.length; ++ci) {
                this._value += str[ci];
                if (this.doValidate(soft) === false) {
                    _extends(this, consistentValue);
                    if (!soft) return false;
                }

                consistentValue = this.clone();
            }

            return this.value.length - oldValueLength;
        };

        Masked.prototype.appendWithTail = function appendWithTail(str, tail) {
            // TODO refactor
            var appendCount = 0;
            var consistentValue = this.clone();
            var consistentAppended = void 0;

            for (var ci = 0; ci < str.length; ++ci) {
                var ch = str[ci];

                var appended = this._append(ch, true);
                consistentAppended = this.clone();
                var tailAppended = appended !== false && this._appendTail(tail) !== false;
                if (tailAppended === false || this.doValidate(true) === false) {
                    _extends(this, consistentValue);
                    break;
                }

                consistentValue = this.clone();
                _extends(this, consistentAppended);
                appendCount += appended;
            }

            // TODO needed for cases when
            // 1) REMOVE ONLY AND NO LOOP AT ALL
            // 2) last loop iteration removes tail
            // 3) when breaks on tail insert
            this._appendTail(tail);

            return appendCount;
        };

        Masked.prototype._unmask = function _unmask() {
            return this.value;
        };

        // TODO rename - refactor


        Masked.prototype.clear = function clear() {
            var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

            this._value = this.value.slice(0, from) + this.value.slice(to);
        };

        Masked.prototype.withValueRefresh = function withValueRefresh(fn) {
            if (this._refreshing) return fn();
            this._refreshing = true;

            var unmasked = this.isInitialized ? this.unmaskedValue : null;

            var ret = fn();

            if (unmasked != null)
                this.unmaskedValue = unmasked;

            delete this._refreshing;
            return ret;
        };

        Masked.prototype.doPrepare = function doPrepare(str, soft) {
            return this.prepare(str, this, soft);
        };

        Masked.prototype.doValidate = function doValidate(soft) {
            return this.validate(this.value, this, soft);
        };

        Masked.prototype.doCommit = function doCommit() {
            this.commit(this.value, this);
        };

        // TODO
        // resolve (inputRaw) -> outputRaw

        // TODO
        // insert (str, fromPos, soft)

        // splice (start, deleteCount, inserted, removeDirection) {
        //   const tailPos = start + deleteCount;
        //   const tail = this.extractTail(tailPos);

        //   start = this.nearestInputPos(start, removeDirection);
        //   this.clear(start);
        //   return this.appendWithTail(inserted, tail);
        // }


        createClass(Masked, [{
            key: 'mask',
            get: function get$$1() {
                return this._mask;
            },
            set: function set$$1(mask) {
                this._mask = mask;
            }
        }, {
            key: 'prepare',
            get: function get$$1() {
                return this._prepare;
            },
            set: function set$$1(prepare) {
                this._prepare = prepare;
            }
        }, {
            key: 'validate',
            get: function get$$1() {
                return this._validate;
            },
            set: function set$$1(validate) {
                this._validate = validate;
            }
        }, {
            key: 'commit',
            get: function get$$1() {
                return this._commit;
            },
            set: function set$$1(commit) {
                this._commit = commit;
            }
        }, {
            key: 'value',
            get: function get$$1() {
                return this._value;
            },
            set: function set$$1(value) {
                this.reset();
                this.appendWithTail(value);
                this.doCommit();
            }
        }, {
            key: 'unmaskedValue',
            get: function get$$1() {
                return this._unmask();
            },
            set: function set$$1(value) {
                this.reset();
                this._append(value);
                this.appendWithTail("");
                this.doCommit();
            }
        }, {
            key: 'isComplete',
            get: function get$$1() {
                return true;
            }
        }]);
        return Masked;
    }(), (_applyDecoratedDescriptor(_class.prototype, 'mask', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class.prototype, 'mask'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'prepare', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class.prototype, 'prepare'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'validate', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class.prototype, 'validate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'commit', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class.prototype, 'commit'), _class.prototype)), _class);

    var MaskedRegExp = function(_Masked) {
        inherits(MaskedRegExp, _Masked);

        function MaskedRegExp() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            classCallCheck(this, MaskedRegExp);

            opts.validate = function(value) {
                return opts.mask.test(value);
            };
            return possibleConstructorReturn(this, _Masked.call(this, opts));
        }

        return MaskedRegExp;
    }(Masked);

    var MaskedFunction = function(_Masked) {
        inherits(MaskedFunction, _Masked);

        function MaskedFunction() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            classCallCheck(this, MaskedFunction);

            opts.validate = opts.mask;
            return possibleConstructorReturn(this, _Masked.call(this, opts));
        }

        return MaskedFunction;
    }(Masked);

    var _class$2;

    function _applyDecoratedDescriptor$2(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function(key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    var MaskedNumber = (_class$2 = function(_Masked) {
        inherits(MaskedNumber, _Masked);

        function MaskedNumber() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            classCallCheck(this, MaskedNumber);

            opts = _extends({}, MaskedNumber.DEFAULTS, opts);

            var _this = possibleConstructorReturn(this, _Masked.call(this, opts));

            delete _this.isInitialized;

            var _opts = opts,
                scale = _opts.scale,
                radix = _opts.radix,
                mapToRadix = _opts.mapToRadix,
                min = _opts.min,
                max = _opts.max,
                signed = _opts.signed,
                thousandsSeparator = _opts.thousandsSeparator,
                postFormat = _opts.postFormat;


            _this.min = min;
            _this.max = max;
            _this.scale = scale;
            _this.radix = radix;
            _this.mapToRadix = mapToRadix;
            _this.signed = signed;
            _this.thousandsSeparator = thousandsSeparator;
            _this.postFormat = postFormat;

            _this._updateNumberRegExp();

            _this.isInitialized = true;
            return _this;
        }

        MaskedNumber.prototype._updateNumberRegExp = function _updateNumberRegExp() {
            // TODO refactor?
            var regExpStrSoft = '^';
            var regExpStr = '^';

            if (this.signed) {
                regExpStrSoft += '([+|\\-]?|([+|\\-]?(0|([1-9]+\\d*))))';
                regExpStr += '[+|\\-]?';
            } else {
                regExpStrSoft += '(0|([1-9]+\\d*))';
            }
            regExpStr += '\\d*';

            if (this.scale) {
                regExpStrSoft += '(' + this.radix + '\\d{0,' + this.scale + '})?';
                regExpStr += '(' + this.radix + '\\d{0,' + this.scale + '})?';
            }

            regExpStrSoft += '$';
            regExpStr += '$';

            this._numberRegExpSoft = new RegExp(regExpStrSoft);
            this._numberRegExp = new RegExp(regExpStr);
        };

        MaskedNumber.prototype.extractTail = function extractTail() {
            var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

            return this._removeThousandsSeparators(_Masked.prototype.extractTail.call(this, fromPos, toPos));
        };

        MaskedNumber.prototype._removeThousandsSeparators = function _removeThousandsSeparators(value) {
            return value.replace(this._thousandsSeparatorRegExp, '');
        };

        MaskedNumber.prototype._insertThousandsSeparators = function _insertThousandsSeparators(value) {
            // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
            var parts = value.split(this.radix);
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
            return parts.join(this.radix);
        };

        MaskedNumber.prototype.doPrepare = function doPrepare(str, soft) {
            return _Masked.prototype.doPrepare.call(this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix)), soft);
        };

        MaskedNumber.prototype.appendWithTail = function appendWithTail(str, tail) {
            var oldValueLength = this.value.length;
            this._value = this._removeThousandsSeparators(this.value);
            var removedSeparatorsCount = oldValueLength - this.value.length;

            var appended = _Masked.prototype.appendWithTail.call(this, str, tail);

            this._value = this._insertThousandsSeparators(this.value);

            var beforeTailPos = oldValueLength + appended - removedSeparatorsCount;
            this._value = this._insertThousandsSeparators(this.value);
            var insertedSeparatorsBeforeTailCount = 0;
            for (var pos = 0; pos <= beforeTailPos; ++pos) {
                if (this.value[pos] === this.thousandsSeparator) {
                    ++insertedSeparatorsBeforeTailCount;
                    ++beforeTailPos;
                }
            }

            return appended - removedSeparatorsCount + insertedSeparatorsBeforeTailCount;
        };

        MaskedNumber.prototype.nearestInputPos = function nearestInputPos(cursorPos) {
            var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.LEFT;

            if (!direction) return cursorPos;

            var nextPos = indexInDirection(cursorPos, direction);
            if (this.value[nextPos] === this.thousandsSeparator)
                cursorPos += direction;
            return cursorPos;
        };

        MaskedNumber.prototype.doValidate = function doValidate(soft) {
            var regexp = soft ? this._numberRegExpSoft : this._numberRegExp;

            // validate as string
            var valid = regexp.test(this._removeThousandsSeparators(this.value));

            if (valid) {
                // validate as number
                var number = this.number;
                valid = valid && !isNaN(number) && (
                    // check min bound for negative values
                    this.min == null || this.min >= 0 || this.min <= this.number) && (
                    // check max bound for positive values
                    this.max == null || this.max <= 0 || this.number <= this.max);
            }

            return valid && _Masked.prototype.doValidate.call(this, soft);
        };

        MaskedNumber.prototype.doCommit = function doCommit() {
            var number = this.number;
            var validnum = number;

            // check bounds
            if (this.min != null)
                validnum = Math.max(validnum, this.min);
            if (this.max != null)
                validnum = Math.min(validnum, this.max);

            if (validnum !== number) {
                this.unmaskedValue = '' + validnum;
            }

            var formatted = this.value;

            if (this.postFormat.normalizeZeros) {
                formatted = this._normalizeZeros(formatted);
            }

            if (this.postFormat.padFractionalZeros) {
                formatted = this._padFractionalZeros(formatted);
            }

            this._value = formatted;
            _Masked.prototype.doCommit.call(this);
        };

        MaskedNumber.prototype._normalizeZeros = function _normalizeZeros(value) {
            var parts = this._removeThousandsSeparators(value).split(this.radix);

            // remove leading zeros
            parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function(match, sign, zeros, num) {
                return sign + num;
            });
            // add leading zero
            if (value.length && !/\d$/.test(parts[0]))
                parts[0] = parts[0] + '0';

            if (parts.length > 1) {
                parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
                if (!parts[1].length)
                    parts.length = 1; // remove fractional
            }

            return this._insertThousandsSeparators(parts.join(this.radix));
        };

        MaskedNumber.prototype._padFractionalZeros = function _padFractionalZeros(value) {
            var parts = value.split(this.radix);
            if (parts.length < 2) parts.push('');
            parts[1] = parts[1].padEnd(this.scale, '0');
            return parts.join(this.radix);
        };

        createClass(MaskedNumber, [{
            key: 'number',
            get: function get$$1() {
                var numstr = this._removeThousandsSeparators(this._normalizeZeros(this.unmaskedValue)).replace(this.radix, '.');

                return Number(numstr);
            },
            set: function set$$1(number) {
                this.unmaskedValue = '' + number;
            }
        }, {
            key: 'min',
            get: function get$$1() {
                return this._min;
            },
            set: function set$$1(min) {
                this._min = min;
            }
        }, {
            key: 'max',
            get: function get$$1() {
                return this._max;
            },
            set: function set$$1(max) {
                this._max = max;
            }
        }, {
            key: 'scale',
            get: function get$$1() {
                return this._scale;
            },
            set: function set$$1(scale) {
                this._scale = scale;
            }
        }, {
            key: 'radix',
            get: function get$$1() {
                return this._radix;
            },
            set: function set$$1(radix) {
                this._radix = radix;
                this._updateNumberRegExp();
            }
        }, {
            key: 'signed',
            get: function get$$1() {
                return this._signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
            },
            set: function set$$1(signed) {
                this._signed = signed;
            }
        }, {
            key: 'postFormat',
            get: function get$$1() {
                return this._postFormat;
            },
            set: function set$$1(postFormat) {
                this._postFormat = _extends({}, MaskedNumber.DEFAULTS.postFormat, postFormat);
            }
        }, {
            key: 'mapToRadix',
            get: function get$$1() {
                return this._mapToRadix;
            },
            set: function set$$1(mapToRadix) {
                this._mapToRadix = mapToRadix;
                this._mapToRadixRegExp = new RegExp('[' + mapToRadix.map(escapeRegExp).join('') + ']', 'g');
            }
        }, {
            key: 'thousandsSeparator',
            get: function get$$1() {
                return this._thousandsSeparator;
            },
            set: function set$$1(thousandsSeparator) {
                this._thousandsSeparator = thousandsSeparator;
                this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(thousandsSeparator), 'g');
            }
        }]);
        return MaskedNumber;
    }(Masked), (_applyDecoratedDescriptor$2(_class$2.prototype, 'min', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$2.prototype, 'min'), _class$2.prototype), _applyDecoratedDescriptor$2(_class$2.prototype, 'max', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$2.prototype, 'max'), _class$2.prototype), _applyDecoratedDescriptor$2(_class$2.prototype, 'scale', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$2.prototype, 'scale'), _class$2.prototype), _applyDecoratedDescriptor$2(_class$2.prototype, 'radix', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$2.prototype, 'radix'), _class$2.prototype), _applyDecoratedDescriptor$2(_class$2.prototype, 'signed', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$2.prototype, 'signed'), _class$2.prototype), _applyDecoratedDescriptor$2(_class$2.prototype, 'postFormat', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$2.prototype, 'postFormat'), _class$2.prototype), _applyDecoratedDescriptor$2(_class$2.prototype, 'mapToRadix', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$2.prototype, 'mapToRadix'), _class$2.prototype), _applyDecoratedDescriptor$2(_class$2.prototype, 'thousandsSeparator', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$2.prototype, 'thousandsSeparator'), _class$2.prototype)), _class$2);
    MaskedNumber.DEFAULTS = {
        radix: ',',
        thousandsSeparator: '',
        mapToRadix: ['.'],
        scale: 2,
        postFormat: {
            normalizeZeros: true
        }
    };

    function maskedClass(mask) {
        if (mask instanceof RegExp) return MaskedRegExp;
        if (isString(mask)) return IMask.MaskedPattern;
        if (mask.prototype instanceof Masked) return mask;
        if (mask instanceof Number || typeof mask === 'number' || mask === Number) return MaskedNumber;
        if (mask instanceof Date || mask === Date) return IMask.MaskedDate;
        if (mask instanceof Function) return MaskedFunction;

        console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
        return Masked;
    }

    function createMask(opts) {
        opts = _extends({}, opts); // clone
        var mask = opts.mask;

        if (mask instanceof Masked) return mask;

        var MaskedClass = maskedClass(mask);
        return new MaskedClass(opts);
    }

    var PatternDefinition = function() {
        function PatternDefinition(opts) {
            classCallCheck(this, PatternDefinition);

            _extends(this, opts);

            if (this.mask) {
                this._masked = createMask(opts);
            }
        }

        PatternDefinition.prototype.reset = function reset() {
            this.isHollow = false;
            if (this._masked) this._masked.reset();
        };

        PatternDefinition.prototype.resolve = function resolve(ch) {
            if (!this._masked) return false;
            // TODO seems strange
            this._masked.value = ch;
            return this._masked.value;
        };

        createClass(PatternDefinition, [{
            key: 'isInput',
            get: function get$$1() {
                return this.type === PatternDefinition.TYPES.INPUT;
            }
        }, {
            key: 'isHiddenHollow',
            get: function get$$1() {
                return this.isHollow && this.optional;
            }
        }]);
        return PatternDefinition;
    }();

    PatternDefinition.DEFAULTS = {
        '0': /\d/,
        'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, // http://stackoverflow.com/a/22075070
        '*': /./
    };
    PatternDefinition.TYPES = {
        INPUT: 'input',
        FIXED: 'fixed'
    };

    var PatternGroup = function() {
        function PatternGroup(masked, _ref) {
            var name = _ref.name,
                offset = _ref.offset,
                mask = _ref.mask,
                validate = _ref.validate;
            classCallCheck(this, PatternGroup);

            this.masked = masked;
            this.name = name;
            this.offset = offset;
            this.mask = mask;
            this.validate = validate || function() {
                return true;
            };
        }

        PatternGroup.prototype.doValidate = function doValidate(soft) {
            return this.validate(this.value, this, soft);
        };

        createClass(PatternGroup, [{
            key: 'value',
            get: function get$$1() {
                return this.masked.value.slice(this.masked.mapDefIndexToPos(this.offset), this.masked.mapDefIndexToPos(this.offset + this.mask.length));
            }
        }, {
            key: 'unmaskedValue',
            get: function get$$1() {
                return this.masked.extractInput(this.masked.mapDefIndexToPos(this.offset), this.masked.mapDefIndexToPos(this.offset + this.mask.length));
            }
        }]);
        return PatternGroup;
    }();

    var RangeGroup = function() {
        function RangeGroup(_ref2) {
            var from = _ref2[0],
                to = _ref2[1];
            var maxlen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (to + '').length;
            classCallCheck(this, RangeGroup);

            this._from = from;
            this._to = to;
            this._maxLength = maxlen;
            this.validate = this.validate.bind(this);

            this._update();
        }

        RangeGroup.prototype._update = function _update() {
            this._maxLength = Math.max(this._maxLength, (this.to + '').length);
            this.mask = '0'.repeat(this._maxLength);
        };

        RangeGroup.prototype.validate = function validate(str) {
            var minstr = '';
            var maxstr = '';

            var _str$match = str.match(/^(\D*)(\d*)(\D*)/),
                placeholder = _str$match[1],
                num = _str$match[2];

            if (num) {
                minstr = '0'.repeat(placeholder.length) + num;
                maxstr = '9'.repeat(placeholder.length) + num;
            }

            var firstNonZero = str.search(/[^0]/);
            if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

            minstr = minstr.padEnd(this._maxLength, '0');
            maxstr = maxstr.padEnd(this._maxLength, '9');

            return this.from <= Number(maxstr) && Number(minstr) <= this.to;
        };

        createClass(RangeGroup, [{
            key: 'to',
            get: function get$$1() {
                return this._to;
            },
            set: function set$$1(to) {
                this._to = to;
                this._update();
            }
        }, {
            key: 'from',
            get: function get$$1() {
                return this._from;
            },
            set: function set$$1(from) {
                this._from = from;
                this._update();
            }
        }, {
            key: 'maxLength',
            get: function get$$1() {
                return this._maxLength;
            },
            set: function set$$1(maxLength) {
                this._maxLength = maxLength;
                this._update();
            }
        }, {
            key: '_matchFrom',
            get: function get$$1() {
                return this.maxLength - (this.from + '').length;
            }
        }]);
        return RangeGroup;
    }();

    function EnumGroup(enums) {
        return {
            mask: '*'.repeat(enums[0].length),
            validate: function validate(value, group) {
                return enums.some(function(e) {
                    return e.indexOf(group.unmaskedValue) >= 0;
                });
            }
        };
    }

    PatternGroup.Range = RangeGroup;
    PatternGroup.Enum = EnumGroup;

    var _class$1;

    function _applyDecoratedDescriptor$1(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function(key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    var MaskedPattern = (_class$1 = function(_Masked) {
        inherits(MaskedPattern, _Masked);

        function MaskedPattern() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            classCallCheck(this, MaskedPattern);
            var definitions = opts.definitions,
                placeholder = opts.placeholder,
                groups = opts.groups;

            var _this = possibleConstructorReturn(this, _Masked.call(this, opts));

            delete _this.isInitialized;

            _this.placeholder = placeholder;
            _this.definitions = definitions;
            _this.groups = groups;

            _this.isInitialized = true;
            return _this;
        }

        MaskedPattern.prototype._updateMask = function _updateMask() {
            var _this2 = this;

            var defs = this._definitions;
            this._charDefs = [];
            this._groupDefs = [];

            var pattern = this.mask;
            if (!pattern || !defs) return;

            var unmaskingBlock = false;
            var optionalBlock = false;
            var stopAlign = false;

            var _loop = function _loop(_i) {
                if (_this2._groups) {
                    var p = pattern.slice(_i);
                    var gNames = Object.keys(_this2._groups).filter(function(gName) {
                        return p.indexOf(gName) === 0;
                    });
                    // order by key length
                    gNames.sort(function(a, b) {
                        return b.length - a.length;
                    });
                    // use group name with max length
                    var gName = gNames[0];
                    if (gName) {
                        var group = _this2._groups[gName];
                        _this2._groupDefs.push(new PatternGroup(_this2, {
                            name: gName,
                            offset: _this2._charDefs.length,
                            mask: group.mask,
                            validate: group.validate
                        }));
                        pattern = pattern.replace(gName, group.mask);
                    }
                }

                var char = pattern[_i];
                var type = !unmaskingBlock && char in defs ? PatternDefinition.TYPES.INPUT : PatternDefinition.TYPES.FIXED;
                var unmasking = type === PatternDefinition.TYPES.INPUT || unmaskingBlock;
                var optional = type === PatternDefinition.TYPES.INPUT && optionalBlock;

                if (char === MaskedPattern.STOP_CHAR) {
                    stopAlign = true;
                    return 'continue';
                }

                if (char === '{' || char === '}') {
                    unmaskingBlock = !unmaskingBlock;
                    return 'continue';
                }

                if (char === '[' || char === ']') {
                    optionalBlock = !optionalBlock;
                    return 'continue';
                }

                if (char === MaskedPattern.ESCAPE_CHAR) {
                    ++_i;
                    char = pattern[_i];
                    // TODO validation
                    if (!char) return 'break';
                    type = PatternDefinition.TYPES.FIXED;
                }

                _this2._charDefs.push(new PatternDefinition({
                    char: char,
                    type: type,
                    optional: optional,
                    stopAlign: stopAlign,
                    unmasking: unmasking,
                    mask: type === PatternDefinition.TYPES.INPUT ? defs[char] : function(value) {
                        return value === char;
                    }
                }));

                stopAlign = false;
                i = _i;
            };

            _loop2:
            for (var i = 0; i < pattern.length; ++i) {
                var _ret = _loop(i);

                switch (_ret) {
                    case 'continue':
                        continue;

                    case 'break':
                        break _loop2;
                }
            }
        };

        MaskedPattern.prototype.doValidate = function doValidate(soft) {
            return this._groupDefs.every(function(g) {
                    return g.doValidate(soft);
                }) && _Masked.prototype.doValidate.call(this, soft);
        };

        MaskedPattern.prototype.clone = function clone() {
            var _this3 = this;

            var m = new MaskedPattern(this);
            m._value = this.value;
            m._charDefs.forEach(function(d, i) {
                return _extends(d, _this3._charDefs[i]);
            });
            m._groupDefs.forEach(function(d, i) {
                return _extends(d, _this3._groupDefs[i]);
            });
            return m;
        };

        MaskedPattern.prototype.reset = function reset() {
            _Masked.prototype.reset.call(this);
            this._charDefs.forEach(function(d) {
                delete d.isHollow;
            });
        };

        MaskedPattern.prototype.hiddenHollowsBefore = function hiddenHollowsBefore(defIndex) {
            return this._charDefs.slice(0, defIndex).filter(function(d) {
                return d.isHiddenHollow;
            }).length;
        };

        MaskedPattern.prototype.mapDefIndexToPos = function mapDefIndexToPos(defIndex) {
            if (defIndex == null) return;
            return defIndex - this.hiddenHollowsBefore(defIndex);
        };

        MaskedPattern.prototype.mapPosToDefIndex = function mapPosToDefIndex(pos) {
            if (pos == null) return;
            var defIndex = pos;
            for (var di = 0; di < this._charDefs.length; ++di) {
                var def = this._charDefs[di];
                if (di >= defIndex) break;
                if (def.isHiddenHollow) ++defIndex;
            }
            return defIndex;
        };

        MaskedPattern.prototype._unmask = function _unmask() {
            var str = this.value;
            var unmasked = '';

            for (var ci = 0, di = 0; ci < str.length && di < this._charDefs.length; ++di) {
                var ch = str[ci];
                var def = this._charDefs[di];

                if (def.isHiddenHollow) continue;
                if (def.unmasking && !def.isHollow)
                    unmasked += ch;
                ++ci;
            }

            return unmasked;
        };

        MaskedPattern.prototype._appendTail = function _appendTail(tail) {
            return (!tail || this._appendChunks(tail)) && this._appendPlaceholder();
        };

        MaskedPattern.prototype._append = function _append(str, soft) {
            var oldValueLength = this.value.length;

            for (var ci = 0, di = this.mapPosToDefIndex(this.value.length); ci < str.length;) {
                var ch = str[ci];
                var def = this._charDefs[di];

                // check overflow
                if (!def) return false;

                // reset
                def.isHollow = false;

                var resolved = void 0,
                    skipped = void 0;
                var chres = conform(def.resolve(ch), ch);

                if (def.type === PatternDefinition.TYPES.INPUT) {
                    if (chres) {
                        this._value += chres;
                        if (!this.doValidate()) {
                            chres = '';
                            this._value = this.value.slice(0, -1);
                        }
                    }

                    resolved = !!chres;
                    skipped = !chres && !def.optional;

                    // if ok - next di
                    if (!chres) {
                        if (!def.optional && !soft) {
                            this._value += this.placeholder.char;
                            skipped = false;
                        }
                        if (!skipped)
                            def.isHollow = true;
                    }
                } else {
                    this._value += def.char;
                    resolved = chres && (def.unmasking || soft);
                }

                if (!skipped) ++di;
                if (resolved || skipped) ++ci;
            }

            return this.value.length - oldValueLength;
        };

        MaskedPattern.prototype._appendChunks = function _appendChunks(chunks, soft) {
            for (var ci = 0; ci < chunks.length; ++ci) {
                var _chunks$ci = chunks[ci],
                    fromDefIndex = _chunks$ci[0],
                    input = _chunks$ci[1];

                if (fromDefIndex != null) this._appendPlaceholder(fromDefIndex);
                if (this._append(input, soft) === false) return false;
            }
            return true;
        };

        MaskedPattern.prototype.extractTail = function extractTail(fromPos, toPos) {
            return this.extractInputChunks(fromPos, toPos);
        };

        MaskedPattern.prototype.extractInput = function extractInput() {
            var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

            // TODO fromPos === toPos
            var str = this.value;
            var input = '';

            var toDefIndex = this.mapPosToDefIndex(toPos);
            for (var ci = fromPos, di = this.mapPosToDefIndex(fromPos); ci < toPos && ci < str.length && di < toDefIndex; ++di) {
                var ch = str[ci];
                var def = this._charDefs[di];

                if (!def) break;
                if (def.isHiddenHollow) continue;

                if (def.isInput && !def.isHollow)
                    input += ch;
                ++ci;
            }
            return input;
        };

        MaskedPattern.prototype.extractInputChunks = function extractInputChunks() {
            var _this4 = this;

            var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

            // TODO fromPos === toPos
            var fromDefIndex = this.mapPosToDefIndex(fromPos);
            var toDefIndex = this.mapPosToDefIndex(toPos);
            var stopDefIndices = this._charDefs.map(function(d, i) {
                return [d, i];
            }).slice(fromDefIndex, toDefIndex).filter(function(_ref) {
                var d = _ref[0];
                return d.stopAlign;
            }).map(function(_ref2) {
                var i = _ref2[1];
                return i;
            });

            var stops = [fromDefIndex].concat(stopDefIndices, [toDefIndex]);

            return stops.map(function(s, i) {
                return [stopDefIndices.indexOf(s) >= 0 ? s : null, _this4.extractInput(_this4.mapDefIndexToPos(s), _this4.mapDefIndexToPos(stops[++i]))];
            }).filter(function(_ref3) {
                var stop = _ref3[0],
                    input = _ref3[1];
                return stop != null || input;
            });
        };

        MaskedPattern.prototype._appendPlaceholder = function _appendPlaceholder(toDefIndex) {
            var maxDefIndex = toDefIndex || this._charDefs.length;
            for (var di = this.mapPosToDefIndex(this.value.length); di < maxDefIndex; ++di) {
                var def = this._charDefs[di];
                if (def.isInput)
                    def.isHollow = true;

                if (!this.placeholder.lazy || toDefIndex) {
                    this._value += !def.isInput ? def.char : !def.optional ? this.placeholder.char : '';
                }
            }
        };

        MaskedPattern.prototype.clear = function clear() {
            var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

            this._value = this.value.slice(0, from) + this.value.slice(to);
            var fromDefIndex = this.mapPosToDefIndex(from);
            var toDefIndex = this.mapPosToDefIndex(to);
            this._charDefs.slice(fromDefIndex, toDefIndex).forEach(function(d) {
                return d.reset();
            });
        };

        MaskedPattern.prototype.nearestInputPos = function nearestInputPos(cursorPos) {
            var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.LEFT;

            if (!direction) return cursorPos;

            var initialDefIndex = this.mapPosToDefIndex(cursorPos);
            var di = initialDefIndex;

            var firstInputIndex = void 0,
                firstFilledInputIndex = void 0,
                firstVisibleHollowIndex = void 0,
                nextdi = void 0;

            // search forward
            for (nextdi = indexInDirection(di, direction); 0 <= nextdi && nextdi < this._charDefs.length; di += direction, nextdi += direction) {
                var nextDef = this._charDefs[nextdi];
                if (firstInputIndex == null && nextDef.isInput)
                    firstInputIndex = di;
                if (firstVisibleHollowIndex == null && nextDef.isHollow && !nextDef.isHiddenHollow)
                    firstVisibleHollowIndex = di;
                if (nextDef.isInput && !nextDef.isHollow) {
                    firstFilledInputIndex = di;
                    break;
                }
            }

            if (direction === DIRECTION.LEFT || firstInputIndex == null) {
                // search backwards
                direction = -direction;
                var overflow = false;

                // find hollows only before initial pos
                for (nextdi = indexInDirection(di, direction); 0 <= nextdi && nextdi < this._charDefs.length; di += direction, nextdi += direction) {
                    var _nextDef = this._charDefs[nextdi];
                    if (_nextDef.isInput) {
                        firstInputIndex = di;
                        if (_nextDef.isHollow && !_nextDef.isHiddenHollow) break;
                    }

                    // if hollow not found before start position - set `overflow`
                    // and try to find just any input
                    if (di === initialDefIndex)
                        overflow = true;

                    // first input found
                    if (overflow && firstInputIndex != null) break;
                }

                // process overflow
                overflow = overflow || nextdi >= this._charDefs.length;
                if (overflow && firstInputIndex != null)
                    di = firstInputIndex;
            } else if (firstFilledInputIndex == null) {
                // adjust index if delete at right and filled input not found at right
                di = firstVisibleHollowIndex != null ? firstVisibleHollowIndex : firstInputIndex;
            }

            return this.mapDefIndexToPos(di);
        };

        MaskedPattern.prototype.group = function group(name) {
            return this.groupsByName(name)[0];
        };

        MaskedPattern.prototype.groupsByName = function groupsByName(name) {
            return this._groupDefs.filter(function(g) {
                return g.name === name;
            });
        };

        createClass(MaskedPattern, [{
            key: 'placeholder',
            get: function get$$1() {
                return this._placeholder;
            },
            set: function set$$1(ph) {
                this._placeholder = _extends({}, MaskedPattern.DEFAULT_PLACEHOLDER, ph);
            }
        }, {
            key: 'definitions',
            get: function get$$1() {
                return this._definitions;
            },
            set: function set$$1(defs) {
                defs = _extends({}, PatternDefinition.DEFAULTS, defs);

                this._definitions = defs;
                this._updateMask();
            }
        }, {
            key: 'mask',
            get: function get$$1() {
                return this._mask;
            },
            set: function set$$1(mask) {
                this._mask = mask;
                this._updateMask();
            }
        }, {
            key: 'isComplete',
            get: function get$$1() {
                var _this5 = this;

                return !this._charDefs.some(function(d, i) {
                    return d.isInput && !d.optional && (d.isHollow || !_this5.extractInput(i, i + 1));
                });
            }
        }, {
            key: 'groups',
            get: function get$$1() {
                return this._groups;
            },
            set: function set$$1(groups) {
                this._groups = groups;
                this._updateMask();
            }
        }]);
        return MaskedPattern;
    }(Masked), (_applyDecoratedDescriptor$1(_class$1.prototype, 'placeholder', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$1.prototype, 'placeholder'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'definitions', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$1.prototype, 'definitions'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'mask', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$1.prototype, 'mask'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'groups', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$1.prototype, 'groups'), _class$1.prototype)), _class$1);
    MaskedPattern.DEFAULT_PLACEHOLDER = {
        lazy: true,
        char: '_'
    };
    MaskedPattern.STOP_CHAR = '`';
    MaskedPattern.ESCAPE_CHAR = '\\';
    MaskedPattern.Definition = PatternDefinition;
    MaskedPattern.Group = PatternGroup;

    var _class$3;

    function _applyDecoratedDescriptor$3(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function(key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    var MaskedDate = (_class$3 = function(_MaskedPattern) {
        inherits(MaskedDate, _MaskedPattern);

        function MaskedDate() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            classCallCheck(this, MaskedDate);

            var groups = opts.groups;
            opts = _extends({}, MaskedDate.DEFAULTS, opts);
            var _opts = opts,
                min = _opts.min,
                max = _opts.max,
                format = _opts.format,
                parse = _opts.parse;


            opts.groups = _extends({}, MaskedDate.DEFAULTS.groups);
            if (opts.groups.Y) {
                // adjust year group
                if (min)
                    opts.groups.Y.from = min.getFullYear();
                if (max)
                    opts.groups.Y.to = max.getFullYear();
            }

            _extends(opts.groups, groups);

            opts.mask = opts.pattern;
            delete opts.pattern;

            var _this = possibleConstructorReturn(this, _MaskedPattern.call(this, opts));

            delete _this.isInitialized;

            _this.min = min;
            _this.max = max;
            _this.format = format;
            _this.parse = parse;

            _this.isInitialized = true;
            return _this;
        }

        MaskedDate.prototype.doValidate = function doValidate(soft) {
            var valid = _MaskedPattern.prototype.doValidate.call(this, soft);
            var date = this.date;

            return valid && (!this.isComplete || this.isDateExist(this.value) && date && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
        };

        MaskedDate.prototype.isDateExist = function isDateExist(str) {
            return this.format(this.parse(str)) === str;
        };

        createClass(MaskedDate, [{
            key: 'date',
            get: function get$$1() {
                return this.isComplete ? this.parse(this.value) : null;
            },
            set: function set$$1(date) {
                this.value = this.format(date);
            }
        }, {
            key: 'min',
            get: function get$$1() {
                return this._min;
            },
            set: function set$$1(min) {
                this._min = min;
            }
        }, {
            key: 'max',
            get: function get$$1() {
                return this._max;
            },
            set: function set$$1(max) {
                this._max = max;
            }
        }, {
            key: 'mask',
            get: function get$$1() {
                return _MaskedPattern.prototype.mask;
            }, // check mask on set
            set: function set$$1(mask) {
                if (mask === Date) return;
                _MaskedPattern.prototype.mask = mask;
            }
        }, {
            key: 'pattern',
            get: function get$$1() {
                return this.mask;
            },
            set: function set$$1(pattern) {
                this.mask = pattern;
            }
        }]);
        return MaskedDate;
    }(MaskedPattern), (_applyDecoratedDescriptor$3(_class$3.prototype, 'min', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$3.prototype, 'min'), _class$3.prototype), _applyDecoratedDescriptor$3(_class$3.prototype, 'max', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$3.prototype, 'max'), _class$3.prototype), _applyDecoratedDescriptor$3(_class$3.prototype, 'pattern', [refreshValueOnSet], Object.getOwnPropertyDescriptor(_class$3.prototype, 'pattern'), _class$3.prototype)), _class$3);
    MaskedDate.DEFAULTS = {
        pattern: 'd{.}`m{.}`Y',
        format: function format(date) {
            var day = ('' + date.getDate()).padStart(2, '0');
            var month = ('' + (date.getMonth() + 1)).padStart(2, '0');
            var year = date.getFullYear();

            return [day, month, year].join('.');
        },
        parse: function parse(str) {
            var _str$split = str.split('.'),
                day = _str$split[0],
                month = _str$split[1],
                year = _str$split[2];

            return new Date(year, month - 1, day);
        },
        groups: {
            d: new PatternGroup.Range([1, 31]),
            m: new PatternGroup.Range([1, 12]),
            Y: new PatternGroup.Range([1900, 9999])
        }
    };

    var ActionDetails = function() {
        function ActionDetails(value, cursorPos, oldValue, oldSelection) {
            classCallCheck(this, ActionDetails);

            this.value = value;
            this.cursorPos = cursorPos;
            this.oldValue = oldValue;
            this.oldSelection = oldSelection;
        }

        createClass(ActionDetails, [{
            key: 'startChangePos',
            get: function get$$1() {
                return Math.min(this.cursorPos, this.oldSelection.start);
            }
        }, {
            key: 'insertedCount',
            get: function get$$1() {
                return this.cursorPos - this.startChangePos;
            }
        }, {
            key: 'inserted',
            get: function get$$1() {
                return this.value.substr(this.startChangePos, this.insertedCount);
            }
        }, {
            key: 'removedCount',
            get: function get$$1() {
                // Math.max for opposite operation
                return Math.max(this.oldSelection.end - this.startChangePos ||
                    // for Delete
                    this.oldValue.length - this.value.length, 0);
            }
        }, {
            key: 'removed',
            get: function get$$1() {
                return this.oldValue.substr(this.startChangePos, this.removedCount);
            }
        }, {
            key: 'head',
            get: function get$$1() {
                return this.value.substring(0, this.startChangePos);
            }
        }, {
            key: 'tail',
            get: function get$$1() {
                this.value.substring(this.startChangePos + this.insertedCount);
            }
        }, {
            key: 'removeDirection',
            get: function get$$1() {
                return this.removedCount && (this.oldSelection.end === this.cursorPos || this.insertedCount ? DIRECTION.RIGHT : DIRECTION.LEFT);
            }
        }]);
        return ActionDetails;
    }();

    var InputMask = function() {
        function InputMask(el, opts) {
            classCallCheck(this, InputMask);

            this.el = el;
            this.masked = createMask(opts);

            this._listeners = {};
            this._value = '';
            this._unmaskedValue = '';

            this._saveSelection = this._saveSelection.bind(this);
            this._onInput = this._onInput.bind(this);
            this._onChange = this._onChange.bind(this);
            this._onDrop = this._onDrop.bind(this);
            this._alignCursor = this._alignCursor.bind(this);
            this._alignCursorFriendly = this._alignCursorFriendly.bind(this);

            this.bindEvents();

            // refresh
            this.updateValue();
            this._onChange();
        }

        InputMask.prototype.bindEvents = function bindEvents() {
            this.el.addEventListener('keydown', this._saveSelection);
            this.el.addEventListener('input', this._onInput);
            this.el.addEventListener('drop', this._onDrop);
            this.el.addEventListener('click', this._alignCursorFriendly);
            this.el.addEventListener('change', this._onChange);
        };

        InputMask.prototype.unbindEvents = function unbindEvents() {
            this.el.removeEventListener('keydown', this._saveSelection);
            this.el.removeEventListener('input', this._onInput);
            this.el.removeEventListener('drop', this._onDrop);
            this.el.removeEventListener('click', this._alignCursorFriendly);
            this.el.removeEventListener('change', this._onChange);
        };

        InputMask.prototype.fireEvent = function fireEvent(ev) {
            var listeners = this._listeners[ev] || [];
            listeners.forEach(function(l) {
                return l();
            });
        };

        InputMask.prototype._saveSelection = function _saveSelection() /* ev */ {
            if (this.value !== this.el.value) {
                console.warn('Uncontrolled input change, refresh mask manually!'); // eslint-disable-line no-console
            }
            this._selection = {
                start: this.selectionStart,
                end: this.cursorPos
            };
        };

        InputMask.prototype.updateValue = function updateValue() {
            this.masked.value = this.el.value;
        };

        InputMask.prototype.updateControl = function updateControl() {
            var newUnmaskedValue = this.masked.unmaskedValue;
            var newValue = this.masked.value;
            var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;

            this._unmaskedValue = newUnmaskedValue;
            this._value = newValue;

            if (this.el.value !== newValue)
                this.el.value = newValue;
            if (isChanged) this._fireChangeEvents();
        };

        InputMask.prototype.updateOptions = function updateOptions(opts) {
            var _this = this;

            var mask = opts.mask;
            if (mask)
                this.mask = mask;

            this.masked.withValueRefresh(function() {
                for (var k in opts) {
                    if (k === 'mask') continue;
                    _this.masked[k] = opts[k];
                }
            });

            this.updateControl();
        };

        InputMask.prototype.updateCursor = function updateCursor(cursorPos) {
            if (cursorPos == null) return;
            this.cursorPos = cursorPos;

            // also queue change cursor for mobile browsers
            this._delayUpdateCursor(cursorPos);
        };

        InputMask.prototype._delayUpdateCursor = function _delayUpdateCursor(cursorPos) {
            var _this2 = this;

            this._abortUpdateCursor();
            this._changingCursorPos = cursorPos;
            this._cursorChanging = setTimeout(function() {
                _this2.cursorPos = _this2._changingCursorPos;
                _this2._abortUpdateCursor();
            }, 10);
        };

        InputMask.prototype._fireChangeEvents = function _fireChangeEvents() {
            this.fireEvent('accept');
            if (this.masked.isComplete) this.fireEvent('complete');
        };

        InputMask.prototype._abortUpdateCursor = function _abortUpdateCursor() {
            if (this._cursorChanging) {
                clearTimeout(this._cursorChanging);
                delete this._cursorChanging;
            }
        };

        InputMask.prototype._alignCursor = function _alignCursor() {
            this.cursorPos = this.masked.nearestInputPos(this.cursorPos);
        };

        InputMask.prototype._alignCursorFriendly = function _alignCursorFriendly() {
            if (this.selectionStart !== this.cursorPos) return;
            this._alignCursor();
        };

        InputMask.prototype.on = function on(ev, handler) {
            if (!this._listeners[ev])
                this._listeners[ev] = [];
            this._listeners[ev].push(handler);
            return this;
        };

        InputMask.prototype.off = function off(ev, handler) {
            if (!this._listeners[ev]) return;
            if (!handler) {
                delete this._listeners[ev];
                return;
            }
            var hIndex = this._listeners[ev].indexOf(handler);
            if (hIndex >= 0) this._listeners.splice(hIndex, 1);
            return this;
        };

        InputMask.prototype._onInput = function _onInput() {
            this._abortUpdateCursor();

            var details = new ActionDetails(
                // new state
                this.el.value, this.cursorPos,
                // old state
                this.value, this._selection);

            var tailPos = details.startChangePos + details.removed.length;
            var tail = this.masked.extractTail(tailPos);

            var lastInputPos = this.masked.nearestInputPos(details.startChangePos, details.removeDirection);
            this.masked.clear(lastInputPos);
            var insertedCount = this.masked.appendWithTail(details.inserted, tail);

            var cursorPos = this.masked.nearestInputPos(lastInputPos + insertedCount, details.removeDirection);

            this.updateControl();
            this.updateCursor(cursorPos);
        };

        InputMask.prototype._onChange = function _onChange() {
            if (this.value !== this.el.value) {
                this.updateValue();
            }
            this.masked.doCommit();
            this.updateControl();
        };

        InputMask.prototype._onDrop = function _onDrop(ev) {
            ev.preventDefault();
            ev.stopPropagation();
        };

        InputMask.prototype.destroy = function destroy() {
            this.unbindEvents();
            this._listeners.length = 0;
        };

        createClass(InputMask, [{
            key: 'mask',
            get: function get$$1() {
                return this.masked.mask;
            },
            set: function set$$1(mask) {
                if (mask == null || mask === this.masked.mask) return;

                if (this.masked.constructor === maskedClass(mask)) {
                    this.masked.mask = mask;
                    return;
                }

                var masked = createMask({
                    mask: mask
                });
                masked.unmaskedValue = this.masked.unmaskedValue;
                this.masked = masked;
            }
        }, {
            key: 'value',
            get: function get$$1() {
                return this._value;
            },
            set: function set$$1(str) {
                this.masked.value = str;
                this.updateControl();
                this._alignCursor();
            }
        }, {
            key: 'unmaskedValue',
            get: function get$$1() {
                return this._unmaskedValue;
            },
            set: function set$$1(str) {
                this.masked.unmaskedValue = str;
                this.updateControl();
                this._alignCursor();
            }
        }, {
            key: 'selectionStart',
            get: function get$$1() {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
            }
        }, {
            key: 'cursorPos',
            get: function get$$1() {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
            },
            set: function set$$1(pos) {
                if (this.el !== document.activeElement) return;

                this.el.setSelectionRange(pos, pos);
                this._saveSelection();
            }
        }]);
        return InputMask;
    }();

    function IMask$1(el) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        // currently available only for input elements
        return new InputMask(el, opts);
    }

    IMask$1.InputMask = InputMask;

    IMask$1.Masked = Masked;
    IMask$1.MaskedPattern = MaskedPattern;
    IMask$1.MaskedNumber = MaskedNumber;
    IMask$1.MaskedDate = MaskedDate;
    IMask$1.MaskedRegExp = MaskedRegExp;
    IMask$1.MaskedFunction = MaskedFunction;

    window.IMask = IMask$1;

    return IMask$1;

})));
//# sourceMappingURL=imask.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "/* Custom Stylesheet */\n/**\r\n * Use this file to override Materialize files so you can update\r\n * the core Materialize files in the future\r\n *\r\n * Made By MaterializeCSS.com\r\n */\nnav ul a,\nnav .brand-logo {\n  color: #444; }\n\np {\n  line-height: 2rem; }\n\n.button-collapse {\n  color: #26a69a; }\n\n.parallax-container {\n  min-height: 380px;\n  line-height: 0;\n  height: auto;\n  color: rgba(255, 255, 255, 0.9); }\n\n.parallax-container .section {\n  width: 100%; }\n\n@media only screen and (max-width: 992px) {\n  .parallax-container .section {\n    position: absolute;\n    top: 40%; }\n  #index-banner .section {\n    top: 10%; } }\n\n@media only screen and (max-width: 600px) {\n  #index-banner .section {\n    top: 0; } }\n\n.icon-block {\n  padding: 0 15px; }\n\n.icon-block .material-icons {\n  font-size: 7rem; }\n\nfooter.page-footer {\n  margin: 0; }\n\nul.contacts {\n  line-height: 200%;\n  font-size: 1.2rem; }\n  ul.contacts li a {\n    vertical-align: top;\n    cursor: pointer; }\n    ul.contacts li a:hover .icon-box {\n      background: rgba(255, 255, 0, 0.4);\n      transition: background-color 200ms linear; }\n    ul.contacts li a .icon-box {\n      background: rgba(255, 255, 255, 0.25);\n      transition: background-color 200ms linear;\n      width: 2.8rem;\n      height: 2.8rem;\n      display: inline-block;\n      border-radius: 50%;\n      text-align: center; }\n      ul.contacts li a .icon-box:not(last-child) {\n        margin-bottom: 0.5rem; }\n    ul.contacts li a i.fa {\n      font-size: 1.5rem;\n      margin-top: 10%;\n      vertical-align: middle; }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);