;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r)
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === 'childList')
        for (const l of i.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && n(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function s(r) {
    const i = {}
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    )
  }
  function n(r) {
    if (r.ep) return
    r.ep = !0
    const i = s(r)
    fetch(r.href, i)
  }
})()
function Ns(e) {
  const t = Object.create(null)
  for (const s of e.split(',')) t[s] = 1
  return (s) => s in t
}
const U = {},
  ot = [],
  Me = () => {},
  Vn = () => !1,
  ss = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Vs = (e) => e.startsWith('onUpdate:'),
  re = Object.assign,
  Us = (e, t) => {
    const s = e.indexOf(t)
    s > -1 && e.splice(s, 1)
  },
  ei = Object.prototype.hasOwnProperty,
  N = (e, t) => ei.call(e, t),
  O = Array.isArray,
  at = (e) => ns(e) === '[object Map]',
  Un = (e) => ns(e) === '[object Set]',
  j = (e) => typeof e == 'function',
  X = (e) => typeof e == 'string',
  Je = (e) => typeof e == 'symbol',
  Q = (e) => e !== null && typeof e == 'object',
  Wn = (e) => (Q(e) || j(e)) && j(e.then) && j(e.catch),
  Kn = Object.prototype.toString,
  ns = (e) => Kn.call(e),
  ti = (e) => ns(e).slice(8, -1),
  zn = (e) => ns(e) === '[object Object]',
  Ws = (e) => X(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  wt = Ns(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  rs = (e) => {
    const t = Object.create(null)
    return (s) => t[s] || (t[s] = e(s))
  },
  si = /-\w/g,
  ze = rs((e) => e.replace(si, (t) => t.slice(1).toUpperCase())),
  ni = /\B([A-Z])/g,
  rt = rs((e) => e.replace(ni, '-$1').toLowerCase()),
  qn = rs((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  hs = rs((e) => (e ? `on${qn(e)}` : '')),
  We = (e, t) => !Object.is(e, t),
  gs = (e, ...t) => {
    for (let s = 0; s < e.length; s++) e[s](...t)
  },
  Jn = (e, t, s, n = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: n,
      value: s,
    })
  },
  ri = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let dn
const is = () =>
  dn ||
  (dn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Ks(e) {
  if (O(e)) {
    const t = {}
    for (let s = 0; s < e.length; s++) {
      const n = e[s],
        r = X(n) ? ai(n) : Ks(n)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (X(e) || Q(e)) return e
}
const ii = /;(?![^(]*\))/g,
  li = /:([^]+)/,
  oi = /\/\*[^]*?\*\//g
function ai(e) {
  const t = {}
  return (
    e
      .replace(oi, '')
      .split(ii)
      .forEach((s) => {
        if (s) {
          const n = s.split(li)
          n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
      }),
    t
  )
}
function ut(e) {
  let t = ''
  if (X(e)) t = e
  else if (O(e))
    for (let s = 0; s < e.length; s++) {
      const n = ut(e[s])
      n && (t += n + ' ')
    }
  else if (Q(e)) for (const s in e) e[s] && (t += s + ' ')
  return t.trim()
}
const ci = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  fi = Ns(ci)
function Gn(e) {
  return !!e || e === ''
}
const Qn = (e) => !!(e && e.__v_isRef === !0),
  P = (e) =>
    X(e)
      ? e
      : e == null
        ? ''
        : O(e) || (Q(e) && (e.toString === Kn || !j(e.toString)))
          ? Qn(e)
            ? P(e.value)
            : JSON.stringify(e, Yn, 2)
          : String(e),
  Yn = (e, t) =>
    Qn(t)
      ? Yn(e, t.value)
      : at(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (s, [n, r], i) => ((s[ms(n, i) + ' =>'] = r), s),
              {}
            ),
          }
        : Un(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((s) => ms(s)) }
          : Je(t)
            ? ms(t)
            : Q(t) && !O(t) && !zn(t)
              ? String(t)
              : t,
  ms = (e, t = '') => {
    var s
    return Je(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  }
let pe
class ui {
  constructor(t = !1) {
    ;((this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = pe),
      !t && pe && (this.index = (pe.scopes || (pe.scopes = [])).push(this) - 1))
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, s
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++) this.scopes[t].pause()
      for (t = 0, s = this.effects.length; t < s; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, s
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++) this.scopes[t].resume()
      for (t = 0, s = this.effects.length; t < s; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const s = pe
      try {
        return ((pe = this), t())
      } finally {
        pe = s
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = pe), (pe = this))
  }
  off() {
    this._on > 0 && --this._on === 0 && ((pe = this.prevScope), (this.prevScope = void 0))
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let s, n
      for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop()
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function di() {
  return pe
}
let q
const xs = new WeakSet()
class Zn {
  constructor(t) {
    ;((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      pe && pe.active && pe.effects.push(this))
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), xs.has(this) && (xs.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || er(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;((this.flags |= 2), pn(this), tr(this))
    const t = q,
      s = _e
    ;((q = this), (_e = !0))
    try {
      return this.fn()
    } finally {
      ;(sr(this), (q = t), (_e = s), (this.flags &= -3))
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Js(t)
      ;((this.deps = this.depsTail = void 0),
        pn(this),
        this.onStop && this.onStop(),
        (this.flags &= -2))
    }
  }
  trigger() {
    this.flags & 64 ? xs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    Ts(this) && this.run()
  }
  get dirty() {
    return Ts(this)
  }
}
let Xn = 0,
  kt,
  Ct
function er(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;((e.next = Ct), (Ct = e))
    return
  }
  ;((e.next = kt), (kt = e))
}
function zs() {
  Xn++
}
function qs() {
  if (--Xn > 0) return
  if (Ct) {
    let t = Ct
    for (Ct = void 0; t; ) {
      const s = t.next
      ;((t.next = void 0), (t.flags &= -9), (t = s))
    }
  }
  let e
  for (; kt; ) {
    let t = kt
    for (kt = void 0; t; ) {
      const s = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (n) {
          e || (e = n)
        }
      t = s
    }
  }
  if (e) throw e
}
function tr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t))
}
function sr(e) {
  let t,
    s = e.depsTail,
    n = s
  for (; n; ) {
    const r = n.prevDep
    ;(n.version === -1 ? (n === s && (s = r), Js(n), pi(n)) : (t = n),
      (n.dep.activeLink = n.prevActiveLink),
      (n.prevActiveLink = void 0),
      (n = r))
  }
  ;((e.deps = t), (e.depsTail = s))
}
function Ts(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (nr(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function nr(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Pt) ||
    ((e.globalVersion = Pt),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Ts(e)))
  )
    return
  e.flags |= 2
  const t = e.dep,
    s = q,
    n = _e
  ;((q = e), (_e = !0))
  try {
    tr(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || We(r, e._value)) &&
      ((e.flags |= 128), (e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;((q = s), (_e = n), sr(e), (e.flags &= -3))
  }
}
function Js(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e
  if (
    (n && ((n.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = n), (e.nextSub = void 0)),
    s.subs === e && ((s.subs = n), !n && s.computed))
  ) {
    s.computed.flags &= -5
    for (let i = s.computed.deps; i; i = i.nextDep) Js(i, !0)
  }
  !t && !--s.sc && s.map && s.map.delete(s.key)
}
function pi(e) {
  const { prevDep: t, nextDep: s } = e
  ;(t && ((t.nextDep = s), (e.prevDep = void 0)),
    s && ((s.prevDep = t), (e.nextDep = void 0)))
}
let _e = !0
const rr = []
function Re() {
  ;(rr.push(_e), (_e = !1))
}
function He() {
  const e = rr.pop()
  _e = e === void 0 ? !0 : e
}
function pn(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const s = q
    q = void 0
    try {
      t()
    } finally {
      q = s
    }
  }
}
let Pt = 0
class hi {
  constructor(t, s) {
    ;((this.sub = t),
      (this.dep = s),
      (this.version = s.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0))
  }
}
class Gs {
  constructor(t) {
    ;((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0))
  }
  track(t) {
    if (!q || !_e || q === this.computed) return
    let s = this.activeLink
    if (s === void 0 || s.sub !== q)
      ((s = this.activeLink = new hi(q, this)),
        q.deps
          ? ((s.prevDep = q.depsTail), (q.depsTail.nextDep = s), (q.depsTail = s))
          : (q.deps = q.depsTail = s),
        ir(s))
    else if (s.version === -1 && ((s.version = this.version), s.nextDep)) {
      const n = s.nextDep
      ;((n.prevDep = s.prevDep),
        s.prevDep && (s.prevDep.nextDep = n),
        (s.prevDep = q.depsTail),
        (s.nextDep = void 0),
        (q.depsTail.nextDep = s),
        (q.depsTail = s),
        q.deps === s && (q.deps = n))
    }
    return s
  }
  trigger(t) {
    ;(this.version++, Pt++, this.notify(t))
  }
  notify(t) {
    zs()
    try {
      for (let s = this.subs; s; s = s.prevSub) s.sub.notify() && s.sub.dep.notify()
    } finally {
      qs()
    }
  }
}
function ir(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let n = t.deps; n; n = n.nextDep) ir(n)
    }
    const s = e.dep.subs
    ;(s !== e && ((e.prevSub = s), s && (s.nextSub = e)), (e.dep.subs = e))
  }
}
const As = new WeakMap(),
  tt = Symbol(''),
  Ms = Symbol(''),
  Et = Symbol('')
function se(e, t, s) {
  if (_e && q) {
    let n = As.get(e)
    n || As.set(e, (n = new Map()))
    let r = n.get(s)
    ;(r || (n.set(s, (r = new Gs())), (r.map = n), (r.key = s)), r.track())
  }
}
function Oe(e, t, s, n, r, i) {
  const l = As.get(e)
  if (!l) {
    Pt++
    return
  }
  const o = (c) => {
    c && c.trigger()
  }
  if ((zs(), t === 'clear')) l.forEach(o)
  else {
    const c = O(e),
      h = c && Ws(s)
    if (c && s === 'length') {
      const d = Number(n)
      l.forEach((g, C) => {
        ;(C === 'length' || C === Et || (!Je(C) && C >= d)) && o(g)
      })
    } else
      switch (((s !== void 0 || l.has(void 0)) && o(l.get(s)), h && o(l.get(Et)), t)) {
        case 'add':
          c ? h && o(l.get('length')) : (o(l.get(tt)), at(e) && o(l.get(Ms)))
          break
        case 'delete':
          c || (o(l.get(tt)), at(e) && o(l.get(Ms)))
          break
        case 'set':
          at(e) && o(l.get(tt))
          break
      }
  }
  qs()
}
function it(e) {
  const t = B(e)
  return t === e ? t : (se(t, 'iterate', Et), be(e) ? t : t.map(ve))
}
function ls(e) {
  return (se((e = B(e)), 'iterate', Et), e)
}
function Ne(e, t) {
  return De(e) ? dt(st(e) ? ve(t) : t) : ve(t)
}
const gi = {
  __proto__: null,
  [Symbol.iterator]() {
    return bs(this, Symbol.iterator, (e) => Ne(this, e))
  },
  concat(...e) {
    return it(this).concat(...e.map((t) => (O(t) ? it(t) : t)))
  },
  entries() {
    return bs(this, 'entries', (e) => ((e[1] = Ne(this, e[1])), e))
  },
  every(e, t) {
    return Ee(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return Ee(this, 'filter', e, t, (s) => s.map((n) => Ne(this, n)), arguments)
  },
  find(e, t) {
    return Ee(this, 'find', e, t, (s) => Ne(this, s), arguments)
  },
  findIndex(e, t) {
    return Ee(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Ee(this, 'findLast', e, t, (s) => Ne(this, s), arguments)
  },
  findLastIndex(e, t) {
    return Ee(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Ee(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return _s(this, 'includes', e)
  },
  indexOf(...e) {
    return _s(this, 'indexOf', e)
  },
  join(e) {
    return it(this).join(e)
  },
  lastIndexOf(...e) {
    return _s(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return Ee(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return bt(this, 'pop')
  },
  push(...e) {
    return bt(this, 'push', e)
  },
  reduce(e, ...t) {
    return hn(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return hn(this, 'reduceRight', e, t)
  },
  shift() {
    return bt(this, 'shift')
  },
  some(e, t) {
    return Ee(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return bt(this, 'splice', e)
  },
  toReversed() {
    return it(this).toReversed()
  },
  toSorted(e) {
    return it(this).toSorted(e)
  },
  toSpliced(...e) {
    return it(this).toSpliced(...e)
  },
  unshift(...e) {
    return bt(this, 'unshift', e)
  },
  values() {
    return bs(this, 'values', (e) => Ne(this, e))
  },
}
function bs(e, t, s) {
  const n = ls(e),
    r = n[t]()
  return (
    n !== e &&
      !be(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next()
        return (i.done || (i.value = s(i.value)), i)
      })),
    r
  )
}
const mi = Array.prototype
function Ee(e, t, s, n, r, i) {
  const l = ls(e),
    o = l !== e && !be(e),
    c = l[t]
  if (c !== mi[t]) {
    const g = c.apply(e, i)
    return o ? ve(g) : g
  }
  let h = s
  l !== e &&
    (o
      ? (h = function (g, C) {
          return s.call(this, Ne(e, g), C, e)
        })
      : s.length > 2 &&
        (h = function (g, C) {
          return s.call(this, g, C, e)
        }))
  const d = c.call(l, h, n)
  return o && r ? r(d) : d
}
function hn(e, t, s, n) {
  const r = ls(e)
  let i = s
  return (
    r !== e &&
      (be(e)
        ? s.length > 3 &&
          (i = function (l, o, c) {
            return s.call(this, l, o, c, e)
          })
        : (i = function (l, o, c) {
            return s.call(this, l, Ne(e, o), c, e)
          })),
    r[t](i, ...n)
  )
}
function _s(e, t, s) {
  const n = B(e)
  se(n, 'iterate', Et)
  const r = n[t](...s)
  return (r === -1 || r === !1) && Xs(s[0]) ? ((s[0] = B(s[0])), n[t](...s)) : r
}
function bt(e, t, s = []) {
  ;(Re(), zs())
  const n = B(e)[t].apply(e, s)
  return (qs(), He(), n)
}
const xi = Ns('__proto__,__v_isRef,__isVue'),
  lr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Je)
  )
function bi(e) {
  Je(e) || (e = String(e))
  const t = B(this)
  return (se(t, 'has', e), t.hasOwnProperty(e))
}
class or {
  constructor(t = !1, s = !1) {
    ;((this._isReadonly = t), (this._isShallow = s))
  }
  get(t, s, n) {
    if (s === '__v_skip') return t.__v_skip
    const r = this._isReadonly,
      i = this._isShallow
    if (s === '__v_isReactive') return !r
    if (s === '__v_isReadonly') return r
    if (s === '__v_isShallow') return i
    if (s === '__v_raw')
      return n === (r ? (i ? Ai : ur) : i ? fr : cr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
        ? t
        : void 0
    const l = O(t)
    if (!r) {
      let c
      if (l && (c = gi[s])) return c
      if (s === 'hasOwnProperty') return bi
    }
    const o = Reflect.get(t, s, ne(t) ? t : n)
    if ((Je(s) ? lr.has(s) : xi(s)) || (r || se(t, 'get', s), i)) return o
    if (ne(o)) {
      const c = l && Ws(s) ? o : o.value
      return r && Q(c) ? Es(c) : c
    }
    return Q(o) ? (r ? Es(o) : Ys(o)) : o
  }
}
class ar extends or {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, s, n, r) {
    let i = t[s]
    const l = O(t) && Ws(s)
    if (!this._isShallow) {
      const h = De(i)
      if ((!be(n) && !De(n) && ((i = B(i)), (n = B(n))), !l && ne(i) && !ne(n)))
        return (h || (i.value = n), !0)
    }
    const o = l ? Number(s) < t.length : N(t, s),
      c = Reflect.set(t, s, n, ne(t) ? t : r)
    return (t === B(r) && (o ? We(n, i) && Oe(t, 'set', s, n) : Oe(t, 'add', s, n)), c)
  }
  deleteProperty(t, s) {
    const n = N(t, s)
    t[s]
    const r = Reflect.deleteProperty(t, s)
    return (r && n && Oe(t, 'delete', s, void 0), r)
  }
  has(t, s) {
    const n = Reflect.has(t, s)
    return ((!Je(s) || !lr.has(s)) && se(t, 'has', s), n)
  }
  ownKeys(t) {
    return (se(t, 'iterate', O(t) ? 'length' : tt), Reflect.ownKeys(t))
  }
}
class _i extends or {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, s) {
    return !0
  }
  deleteProperty(t, s) {
    return !0
  }
}
const vi = new ar(),
  yi = new _i(),
  wi = new ar(!0)
const Ps = (e) => e,
  Ut = (e) => Reflect.getPrototypeOf(e)
function ki(e, t, s) {
  return function (...n) {
    const r = this.__v_raw,
      i = B(r),
      l = at(i),
      o = e === 'entries' || (e === Symbol.iterator && l),
      c = e === 'keys' && l,
      h = r[e](...n),
      d = s ? Ps : t ? dt : ve
    return (
      !t && se(i, 'iterate', c ? Ms : tt),
      re(Object.create(h), {
        next() {
          const { value: g, done: C } = h.next()
          return C
            ? { value: g, done: C }
            : { value: o ? [d(g[0]), d(g[1])] : d(g), done: C }
        },
      })
    )
  }
}
function Wt(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function Ci(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw,
        l = B(i),
        o = B(r)
      e || (We(r, o) && se(l, 'get', r), se(l, 'get', o))
      const { has: c } = Ut(l),
        h = t ? Ps : e ? dt : ve
      if (c.call(l, r)) return h(i.get(r))
      if (c.call(l, o)) return h(i.get(o))
      i !== l && i.get(r)
    },
    get size() {
      const r = this.__v_raw
      return (!e && se(B(r), 'iterate', tt), r.size)
    },
    has(r) {
      const i = this.__v_raw,
        l = B(i),
        o = B(r)
      return (
        e || (We(r, o) && se(l, 'has', r), se(l, 'has', o)),
        r === o ? i.has(r) : i.has(r) || i.has(o)
      )
    },
    forEach(r, i) {
      const l = this,
        o = l.__v_raw,
        c = B(o),
        h = t ? Ps : e ? dt : ve
      return (!e && se(c, 'iterate', tt), o.forEach((d, g) => r.call(i, h(d), h(g), l)))
    },
  }
  return (
    re(
      s,
      e
        ? { add: Wt('add'), set: Wt('set'), delete: Wt('delete'), clear: Wt('clear') }
        : {
            add(r) {
              !t && !be(r) && !De(r) && (r = B(r))
              const i = B(this)
              return (Ut(i).has.call(i, r) || (i.add(r), Oe(i, 'add', r, r)), this)
            },
            set(r, i) {
              !t && !be(i) && !De(i) && (i = B(i))
              const l = B(this),
                { has: o, get: c } = Ut(l)
              let h = o.call(l, r)
              h || ((r = B(r)), (h = o.call(l, r)))
              const d = c.call(l, r)
              return (
                l.set(r, i),
                h ? We(i, d) && Oe(l, 'set', r, i) : Oe(l, 'add', r, i),
                this
              )
            },
            delete(r) {
              const i = B(this),
                { has: l, get: o } = Ut(i)
              let c = l.call(i, r)
              ;(c || ((r = B(r)), (c = l.call(i, r))), o && o.call(i, r))
              const h = i.delete(r)
              return (c && Oe(i, 'delete', r, void 0), h)
            },
            clear() {
              const r = B(this),
                i = r.size !== 0,
                l = r.clear()
              return (i && Oe(r, 'clear', void 0, void 0), l)
            },
          }
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      s[r] = ki(r, e, t)
    }),
    s
  )
}
function Qs(e, t) {
  const s = Ci(e, t)
  return (n, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? n
          : Reflect.get(N(s, r) && r in n ? s : n, r, i)
}
const Si = { get: Qs(!1, !1) },
  $i = { get: Qs(!1, !0) },
  Ti = { get: Qs(!0, !1) }
const cr = new WeakMap(),
  fr = new WeakMap(),
  ur = new WeakMap(),
  Ai = new WeakMap()
function Mi(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Pi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Mi(ti(e))
}
function Ys(e) {
  return De(e) ? e : Zs(e, !1, vi, Si, cr)
}
function Ei(e) {
  return Zs(e, !1, wi, $i, fr)
}
function Es(e) {
  return Zs(e, !0, yi, Ti, ur)
}
function Zs(e, t, s, n, r) {
  if (!Q(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = Pi(e)
  if (i === 0) return e
  const l = r.get(e)
  if (l) return l
  const o = new Proxy(e, i === 2 ? n : s)
  return (r.set(e, o), o)
}
function st(e) {
  return De(e) ? st(e.__v_raw) : !!(e && e.__v_isReactive)
}
function De(e) {
  return !!(e && e.__v_isReadonly)
}
function be(e) {
  return !!(e && e.__v_isShallow)
}
function Xs(e) {
  return e ? !!e.__v_raw : !1
}
function B(e) {
  const t = e && e.__v_raw
  return t ? B(t) : e
}
function Ii(e) {
  return (!N(e, '__v_skip') && Object.isExtensible(e) && Jn(e, '__v_skip', !0), e)
}
const ve = (e) => (Q(e) ? Ys(e) : e),
  dt = (e) => (Q(e) ? Es(e) : e)
function ne(e) {
  return e ? e.__v_isRef === !0 : !1
}
function It(e) {
  return Oi(e, !1)
}
function Oi(e, t) {
  return ne(e) ? e : new ji(e, t)
}
class ji {
  constructor(t, s) {
    ;((this.dep = new Gs()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = s ? t : B(t)),
      (this._value = s ? t : ve(t)),
      (this.__v_isShallow = s))
  }
  get value() {
    return (this.dep.track(), this._value)
  }
  set value(t) {
    const s = this._rawValue,
      n = this.__v_isShallow || be(t) || De(t)
    ;((t = n ? t : B(t)),
      We(t, s) &&
        ((this._rawValue = t), (this._value = n ? t : ve(t)), this.dep.trigger()))
  }
}
function H(e) {
  return ne(e) ? e.value : e
}
const Ri = {
  get: (e, t, s) => (t === '__v_raw' ? e : H(Reflect.get(e, t, s))),
  set: (e, t, s, n) => {
    const r = e[t]
    return ne(r) && !ne(s) ? ((r.value = s), !0) : Reflect.set(e, t, s, n)
  },
}
function dr(e) {
  return st(e) ? e : new Proxy(e, Ri)
}
class Hi {
  constructor(t, s, n) {
    ;((this.fn = t),
      (this.setter = s),
      (this._value = void 0),
      (this.dep = new Gs(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Pt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !s),
      (this.isSSR = n))
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && q !== this)) return (er(this, !0), !0)
  }
  get value() {
    const t = this.dep.track()
    return (nr(this), t && (t.version = this.dep.version), this._value)
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function Di(e, t, s = !1) {
  let n, r
  return (j(e) ? (n = e) : ((n = e.get), (r = e.set)), new Hi(n, r, s))
}
const Kt = {},
  Gt = new WeakMap()
let et
function Fi(e, t = !1, s = et) {
  if (s) {
    let n = Gt.get(s)
    ;(n || Gt.set(s, (n = [])), n.push(e))
  }
}
function Li(e, t, s = U) {
  const { immediate: n, deep: r, once: i, scheduler: l, augmentJob: o, call: c } = s,
    h = (E) => (r ? E : be(E) || r === !1 || r === 0 ? je(E, 1) : je(E))
  let d,
    g,
    C,
    T,
    R = !1,
    F = !1
  if (
    (ne(e)
      ? ((g = () => e.value), (R = be(e)))
      : st(e)
        ? ((g = () => h(e)), (R = !0))
        : O(e)
          ? ((F = !0),
            (R = e.some((E) => st(E) || be(E))),
            (g = () =>
              e.map((E) => {
                if (ne(E)) return E.value
                if (st(E)) return h(E)
                if (j(E)) return c ? c(E, 2) : E()
              })))
          : j(e)
            ? t
              ? (g = c ? () => c(e, 2) : e)
              : (g = () => {
                  if (C) {
                    Re()
                    try {
                      C()
                    } finally {
                      He()
                    }
                  }
                  const E = et
                  et = d
                  try {
                    return c ? c(e, 3, [T]) : e(T)
                  } finally {
                    et = E
                  }
                })
            : (g = Me),
    t && r)
  ) {
    const E = g,
      ee = r === !0 ? 1 / 0 : r
    g = () => je(E(), ee)
  }
  const ie = di(),
    L = () => {
      ;(d.stop(), ie && ie.active && Us(ie.effects, d))
    }
  if (i && t) {
    const E = t
    t = (...ee) => {
      ;(E(...ee), L())
    }
  }
  let J = F ? new Array(e.length).fill(Kt) : Kt
  const Z = (E) => {
    if (!(!(d.flags & 1) || (!d.dirty && !E)))
      if (t) {
        const ee = d.run()
        if (r || R || (F ? ee.some((Le, ye) => We(Le, J[ye])) : We(ee, J))) {
          C && C()
          const Le = et
          et = d
          try {
            const ye = [ee, J === Kt ? void 0 : F && J[0] === Kt ? [] : J, T]
            ;((J = ee), c ? c(t, 3, ye) : t(...ye))
          } finally {
            et = Le
          }
        }
      } else d.run()
  }
  return (
    o && o(Z),
    (d = new Zn(g)),
    (d.scheduler = l ? () => l(Z, !1) : Z),
    (T = (E) => Fi(E, !1, d)),
    (C = d.onStop =
      () => {
        const E = Gt.get(d)
        if (E) {
          if (c) c(E, 4)
          else for (const ee of E) ee()
          Gt.delete(d)
        }
      }),
    t ? (n ? Z(!0) : (J = d.run())) : l ? l(Z.bind(null, !0), !0) : d.run(),
    (L.pause = d.pause.bind(d)),
    (L.resume = d.resume.bind(d)),
    (L.stop = L),
    L
  )
}
function je(e, t = 1 / 0, s) {
  if (t <= 0 || !Q(e) || e.__v_skip || ((s = s || new Map()), (s.get(e) || 0) >= t))
    return e
  if ((s.set(e, t), t--, ne(e))) je(e.value, t, s)
  else if (O(e)) for (let n = 0; n < e.length; n++) je(e[n], t, s)
  else if (Un(e) || at(e))
    e.forEach((n) => {
      je(n, t, s)
    })
  else if (zn(e)) {
    for (const n in e) je(e[n], t, s)
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && je(e[n], t, s)
  }
  return e
}
function Ht(e, t, s, n) {
  try {
    return n ? e(...n) : e()
  } catch (r) {
    os(r, t, s)
  }
}
function Pe(e, t, s, n) {
  if (j(e)) {
    const r = Ht(e, t, s, n)
    return (
      r &&
        Wn(r) &&
        r.catch((i) => {
          os(i, t, s)
        }),
      r
    )
  }
  if (O(e)) {
    const r = []
    for (let i = 0; i < e.length; i++) r.push(Pe(e[i], t, s, n))
    return r
  }
}
function os(e, t, s, n = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: l } =
      (t && t.appContext.config) || U
  if (t) {
    let o = t.parent
    const c = t.proxy,
      h = `https://vuejs.org/error-reference/#runtime-${s}`
    for (; o; ) {
      const d = o.ec
      if (d) {
        for (let g = 0; g < d.length; g++) if (d[g](e, c, h) === !1) return
      }
      o = o.parent
    }
    if (i) {
      ;(Re(), Ht(i, null, 10, [e, c, h]), He())
      return
    }
  }
  Bi(e, s, r, n, l)
}
function Bi(e, t, s, n = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const ae = []
let Te = -1
const ct = []
let Ve = null,
  lt = 0
const pr = Promise.resolve()
let Qt = null
function Ni(e) {
  const t = Qt || pr
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Vi(e) {
  let t = Te + 1,
    s = ae.length
  for (; t < s; ) {
    const n = (t + s) >>> 1,
      r = ae[n],
      i = Ot(r)
    i < e || (i === e && r.flags & 2) ? (t = n + 1) : (s = n)
  }
  return t
}
function en(e) {
  if (!(e.flags & 1)) {
    const t = Ot(e),
      s = ae[ae.length - 1]
    ;(!s || (!(e.flags & 2) && t >= Ot(s)) ? ae.push(e) : ae.splice(Vi(t), 0, e),
      (e.flags |= 1),
      hr())
  }
}
function hr() {
  Qt || (Qt = pr.then(mr))
}
function Ui(e) {
  ;(O(e)
    ? ct.push(...e)
    : Ve && e.id === -1
      ? Ve.splice(lt + 1, 0, e)
      : e.flags & 1 || (ct.push(e), (e.flags |= 1)),
    hr())
}
function gn(e, t, s = Te + 1) {
  for (; s < ae.length; s++) {
    const n = ae[s]
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid) continue
      ;(ae.splice(s, 1),
        s--,
        n.flags & 4 && (n.flags &= -2),
        n(),
        n.flags & 4 || (n.flags &= -2))
    }
  }
}
function gr(e) {
  if (ct.length) {
    const t = [...new Set(ct)].sort((s, n) => Ot(s) - Ot(n))
    if (((ct.length = 0), Ve)) {
      Ve.push(...t)
      return
    }
    for (Ve = t, lt = 0; lt < Ve.length; lt++) {
      const s = Ve[lt]
      ;(s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), (s.flags &= -2))
    }
    ;((Ve = null), (lt = 0))
  }
}
const Ot = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function mr(e) {
  try {
    for (Te = 0; Te < ae.length; Te++) {
      const t = ae[Te]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        Ht(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Te < ae.length; Te++) {
      const t = ae[Te]
      t && (t.flags &= -2)
    }
    ;((Te = -1), (ae.length = 0), gr(), (Qt = null), (ae.length || ct.length) && mr())
  }
}
let xe = null,
  xr = null
function Yt(e) {
  const t = xe
  return ((xe = e), (xr = (e && e.type.__scopeId) || null), t)
}
function Wi(e, t = xe, s) {
  if (!t || e._n) return e
  const n = (...r) => {
    n._d && Sn(-1)
    const i = Yt(t)
    let l
    try {
      l = e(...r)
    } finally {
      ;(Yt(i), n._d && Sn(1))
    }
    return l
  }
  return ((n._n = !0), (n._c = !0), (n._d = !0), n)
}
function br(e, t) {
  if (xe === null) return e
  const s = us(xe),
    n = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [i, l, o, c = U] = t[r]
    i &&
      (j(i) && (i = { mounted: i, updated: i }),
      i.deep && je(l),
      n.push({ dir: i, instance: s, value: l, oldValue: void 0, arg: o, modifiers: c }))
  }
  return e
}
function Ze(e, t, s, n) {
  const r = e.dirs,
    i = t && t.dirs
  for (let l = 0; l < r.length; l++) {
    const o = r[l]
    i && (o.oldValue = i[l].value)
    let c = o.dir[n]
    c && (Re(), Pe(c, s, 8, [e.el, o, e, t]), He())
  }
}
function Ki(e, t) {
  if (ce) {
    let s = ce.provides
    const n = ce.parent && ce.parent.provides
    ;(n === s && (s = ce.provides = Object.create(n)), (s[e] = t))
  }
}
function zt(e, t, s = !1) {
  const n = Wl()
  if (n || ft) {
    let r = ft
      ? ft._context.provides
      : n
        ? n.parent == null || n.ce
          ? n.vnode.appContext && n.vnode.appContext.provides
          : n.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return s && j(t) ? t.call(n && n.proxy) : t
  }
}
const zi = Symbol.for('v-scx'),
  qi = () => zt(zi)
function vs(e, t, s) {
  return _r(e, t, s)
}
function _r(e, t, s = U) {
  const { immediate: n, deep: r, flush: i, once: l } = s,
    o = re({}, s),
    c = (t && n) || (!t && i !== 'post')
  let h
  if (Rt) {
    if (i === 'sync') {
      const T = qi()
      h = T.__watcherHandles || (T.__watcherHandles = [])
    } else if (!c) {
      const T = () => {}
      return ((T.stop = Me), (T.resume = Me), (T.pause = Me), T)
    }
  }
  const d = ce
  o.call = (T, R, F) => Pe(T, d, R, F)
  let g = !1
  ;(i === 'post'
    ? (o.scheduler = (T) => {
        ge(T, d && d.suspense)
      })
    : i !== 'sync' &&
      ((g = !0),
      (o.scheduler = (T, R) => {
        R ? T() : en(T)
      })),
    (o.augmentJob = (T) => {
      ;(t && (T.flags |= 4), g && ((T.flags |= 2), d && ((T.id = d.uid), (T.i = d))))
    }))
  const C = Li(e, t, o)
  return (Rt && (h ? h.push(C) : c && C()), C)
}
function Ji(e, t, s) {
  const n = this.proxy,
    r = X(e) ? (e.includes('.') ? vr(n, e) : () => n[e]) : e.bind(n, n)
  let i
  j(t) ? (i = t) : ((i = t.handler), (s = t))
  const l = Dt(this),
    o = _r(r, i.bind(n), s)
  return (l(), o)
}
function vr(e, t) {
  const s = t.split('.')
  return () => {
    let n = e
    for (let r = 0; r < s.length && n; r++) n = n[s[r]]
    return n
  }
}
const Gi = Symbol('_vte'),
  Qi = (e) => e.__isTeleport,
  Yi = Symbol('_leaveCb')
function tn(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), tn(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function yr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
const Zt = new WeakMap()
function St(e, t, s, n, r = !1) {
  if (O(e)) {
    e.forEach((R, F) => St(R, t && (O(t) ? t[F] : t), s, n, r))
    return
  }
  if ($t(n) && !r) {
    n.shapeFlag & 512 &&
      n.type.__asyncResolved &&
      n.component.subTree.component &&
      St(e, t, s, n.component.subTree)
    return
  }
  const i = n.shapeFlag & 4 ? us(n.component) : n.el,
    l = r ? null : i,
    { i: o, r: c } = e,
    h = t && t.r,
    d = o.refs === U ? (o.refs = {}) : o.refs,
    g = o.setupState,
    C = B(g),
    T = g === U ? Vn : (R) => N(C, R)
  if (h != null && h !== c) {
    if ((mn(t), X(h))) ((d[h] = null), T(h) && (g[h] = null))
    else if (ne(h)) {
      h.value = null
      const R = t
      R.k && (d[R.k] = null)
    }
  }
  if (j(c)) Ht(c, o, 12, [l, d])
  else {
    const R = X(c),
      F = ne(c)
    if (R || F) {
      const ie = () => {
        if (e.f) {
          const L = R ? (T(c) ? g[c] : d[c]) : c.value
          if (r) O(L) && Us(L, i)
          else if (O(L)) L.includes(i) || L.push(i)
          else if (R) ((d[c] = [i]), T(c) && (g[c] = d[c]))
          else {
            const J = [i]
            ;((c.value = J), e.k && (d[e.k] = J))
          }
        } else
          R ? ((d[c] = l), T(c) && (g[c] = l)) : F && ((c.value = l), e.k && (d[e.k] = l))
      }
      if (l) {
        const L = () => {
          ;(ie(), Zt.delete(e))
        }
        ;((L.id = -1), Zt.set(e, L), ge(L, s))
      } else (mn(e), ie())
    }
  }
}
function mn(e) {
  const t = Zt.get(e)
  t && ((t.flags |= 8), Zt.delete(e))
}
is().requestIdleCallback
is().cancelIdleCallback
const $t = (e) => !!e.type.__asyncLoader,
  wr = (e) => e.type.__isKeepAlive
function Zi(e, t) {
  kr(e, 'a', t)
}
function Xi(e, t) {
  kr(e, 'da', t)
}
function kr(e, t, s = ce) {
  const n =
    e.__wdc ||
    (e.__wdc = () => {
      let r = s
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((as(t, n, s), s)) {
    let r = s.parent
    for (; r && r.parent; ) (wr(r.parent.vnode) && el(n, t, s, r), (r = r.parent))
  }
}
function el(e, t, s, n) {
  const r = as(t, e, n, !0)
  Sr(() => {
    Us(n[t], r)
  }, s)
}
function as(e, t, s = ce, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...l) => {
          Re()
          const o = Dt(s),
            c = Pe(t, s, e, l)
          return (o(), He(), c)
        })
    return (n ? r.unshift(i) : r.push(i), i)
  }
}
const Fe =
    (e) =>
    (t, s = ce) => {
      ;(!Rt || e === 'sp') && as(e, (...n) => t(...n), s)
    },
  tl = Fe('bm'),
  Cr = Fe('m'),
  sl = Fe('bu'),
  nl = Fe('u'),
  rl = Fe('bum'),
  Sr = Fe('um'),
  il = Fe('sp'),
  ll = Fe('rtg'),
  ol = Fe('rtc')
function al(e, t = ce) {
  as('ec', e, t)
}
const cl = Symbol.for('v-ndc')
function fe(e, t, s, n) {
  let r
  const i = s,
    l = O(e)
  if (l || X(e)) {
    const o = l && st(e)
    let c = !1,
      h = !1
    ;(o && ((c = !be(e)), (h = De(e)), (e = ls(e))), (r = new Array(e.length)))
    for (let d = 0, g = e.length; d < g; d++)
      r[d] = t(c ? (h ? dt(ve(e[d])) : ve(e[d])) : e[d], d, void 0, i)
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let o = 0; o < e; o++) r[o] = t(o + 1, o, void 0, i)
  } else if (Q(e))
    if (e[Symbol.iterator]) r = Array.from(e, (o, c) => t(o, c, void 0, i))
    else {
      const o = Object.keys(e)
      r = new Array(o.length)
      for (let c = 0, h = o.length; c < h; c++) {
        const d = o[c]
        r[c] = t(e[d], d, c, i)
      }
    }
  else r = []
  return r
}
const Is = (e) => (e ? (zr(e) ? us(e) : Is(e.parent)) : null),
  Tt = re(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Is(e.parent),
    $root: (e) => Is(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Tr(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        en(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Ni.bind(e.proxy)),
    $watch: (e) => Ji.bind(e),
  }),
  ys = (e, t) => e !== U && !e.__isScriptSetup && N(e, t),
  fl = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const {
        ctx: s,
        setupState: n,
        data: r,
        props: i,
        accessCache: l,
        type: o,
        appContext: c,
      } = e
      if (t[0] !== '$') {
        const C = l[t]
        if (C !== void 0)
          switch (C) {
            case 1:
              return n[t]
            case 2:
              return r[t]
            case 4:
              return s[t]
            case 3:
              return i[t]
          }
        else {
          if (ys(n, t)) return ((l[t] = 1), n[t])
          if (r !== U && N(r, t)) return ((l[t] = 2), r[t])
          if (N(i, t)) return ((l[t] = 3), i[t])
          if (s !== U && N(s, t)) return ((l[t] = 4), s[t])
          Os && (l[t] = 0)
        }
      }
      const h = Tt[t]
      let d, g
      if (h) return (t === '$attrs' && se(e.attrs, 'get', ''), h(e))
      if ((d = o.__cssModules) && (d = d[t])) return d
      if (s !== U && N(s, t)) return ((l[t] = 4), s[t])
      if (((g = c.config.globalProperties), N(g, t))) return g[t]
    },
    set({ _: e }, t, s) {
      const { data: n, setupState: r, ctx: i } = e
      return ys(r, t)
        ? ((r[t] = s), !0)
        : n !== U && N(n, t)
          ? ((n[t] = s), !0)
          : N(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = s), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: s,
          ctx: n,
          appContext: r,
          props: i,
          type: l,
        },
      },
      o
    ) {
      let c
      return !!(
        s[o] ||
        (e !== U && o[0] !== '$' && N(e, o)) ||
        ys(t, o) ||
        N(i, o) ||
        N(n, o) ||
        N(Tt, o) ||
        N(r.config.globalProperties, o) ||
        ((c = l.__cssModules) && c[o])
      )
    },
    defineProperty(e, t, s) {
      return (
        s.get != null
          ? (e._.accessCache[t] = 0)
          : N(s, 'value') && this.set(e, t, s.value, null),
        Reflect.defineProperty(e, t, s)
      )
    },
  }
function xn(e) {
  return O(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e
}
let Os = !0
function ul(e) {
  const t = Tr(e),
    s = e.proxy,
    n = e.ctx
  ;((Os = !1), t.beforeCreate && bn(t.beforeCreate, e, 'bc'))
  const {
    data: r,
    computed: i,
    methods: l,
    watch: o,
    provide: c,
    inject: h,
    created: d,
    beforeMount: g,
    mounted: C,
    beforeUpdate: T,
    updated: R,
    activated: F,
    deactivated: ie,
    beforeDestroy: L,
    beforeUnmount: J,
    destroyed: Z,
    unmounted: E,
    render: ee,
    renderTracked: Le,
    renderTriggered: ye,
    errorCaptured: Be,
    serverPrefetch: Ft,
    expose: Ge,
    inheritAttrs: ht,
    components: Lt,
    directives: Bt,
    filters: ds,
  } = t
  if ((h && dl(h, n, null), l))
    for (const Y in l) {
      const K = l[Y]
      j(K) && (n[Y] = K.bind(s))
    }
  if (r) {
    const Y = r.call(s, s)
    Q(Y) && (e.data = Ys(Y))
  }
  if (((Os = !0), i))
    for (const Y in i) {
      const K = i[Y],
        Qe = j(K) ? K.bind(s, s) : j(K.get) ? K.get.bind(s, s) : Me,
        Nt = !j(K) && j(K.set) ? K.set.bind(s) : Me,
        Ye = Ke({ get: Qe, set: Nt })
      Object.defineProperty(n, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => Ye.value,
        set: (we) => (Ye.value = we),
      })
    }
  if (o) for (const Y in o) $r(o[Y], n, s, Y)
  if (c) {
    const Y = j(c) ? c.call(s) : c
    Reflect.ownKeys(Y).forEach((K) => {
      Ki(K, Y[K])
    })
  }
  d && bn(d, e, 'c')
  function le(Y, K) {
    O(K) ? K.forEach((Qe) => Y(Qe.bind(s))) : K && Y(K.bind(s))
  }
  if (
    (le(tl, g),
    le(Cr, C),
    le(sl, T),
    le(nl, R),
    le(Zi, F),
    le(Xi, ie),
    le(al, Be),
    le(ol, Le),
    le(ll, ye),
    le(rl, J),
    le(Sr, E),
    le(il, Ft),
    O(Ge))
  )
    if (Ge.length) {
      const Y = e.exposed || (e.exposed = {})
      Ge.forEach((K) => {
        Object.defineProperty(Y, K, {
          get: () => s[K],
          set: (Qe) => (s[K] = Qe),
          enumerable: !0,
        })
      })
    } else e.exposed || (e.exposed = {})
  ;(ee && e.render === Me && (e.render = ee),
    ht != null && (e.inheritAttrs = ht),
    Lt && (e.components = Lt),
    Bt && (e.directives = Bt),
    Ft && yr(e))
}
function dl(e, t, s = Me) {
  O(e) && (e = js(e))
  for (const n in e) {
    const r = e[n]
    let i
    ;(Q(r)
      ? 'default' in r
        ? (i = zt(r.from || n, r.default, !0))
        : (i = zt(r.from || n))
      : (i = zt(r)),
      ne(i)
        ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l),
          })
        : (t[n] = i))
  }
}
function bn(e, t, s) {
  Pe(O(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s)
}
function $r(e, t, s, n) {
  let r = n.includes('.') ? vr(s, n) : () => s[n]
  if (X(e)) {
    const i = t[e]
    j(i) && vs(r, i)
  } else if (j(e)) vs(r, e.bind(s))
  else if (Q(e))
    if (O(e)) e.forEach((i) => $r(i, t, s, n))
    else {
      const i = j(e.handler) ? e.handler.bind(s) : t[e.handler]
      j(i) && vs(r, i, e)
    }
}
function Tr(e) {
  const t = e.type,
    { mixins: s, extends: n } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: l },
    } = e.appContext,
    o = i.get(t)
  let c
  return (
    o
      ? (c = o)
      : !r.length && !s && !n
        ? (c = t)
        : ((c = {}), r.length && r.forEach((h) => Xt(c, h, l, !0)), Xt(c, t, l)),
    Q(t) && i.set(t, c),
    c
  )
}
function Xt(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t
  ;(i && Xt(e, i, s, !0), r && r.forEach((l) => Xt(e, l, s, !0)))
  for (const l in t)
    if (!(n && l === 'expose')) {
      const o = pl[l] || (s && s[l])
      e[l] = o ? o(e[l], t[l]) : t[l]
    }
  return e
}
const pl = {
  data: _n,
  props: vn,
  emits: vn,
  methods: yt,
  computed: yt,
  beforeCreate: oe,
  created: oe,
  beforeMount: oe,
  mounted: oe,
  beforeUpdate: oe,
  updated: oe,
  beforeDestroy: oe,
  beforeUnmount: oe,
  destroyed: oe,
  unmounted: oe,
  activated: oe,
  deactivated: oe,
  errorCaptured: oe,
  serverPrefetch: oe,
  components: yt,
  directives: yt,
  watch: gl,
  provide: _n,
  inject: hl,
}
function _n(e, t) {
  return t
    ? e
      ? function () {
          return re(j(e) ? e.call(this, this) : e, j(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function hl(e, t) {
  return yt(js(e), js(t))
}
function js(e) {
  if (O(e)) {
    const t = {}
    for (let s = 0; s < e.length; s++) t[e[s]] = e[s]
    return t
  }
  return e
}
function oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function yt(e, t) {
  return e ? re(Object.create(null), e, t) : t
}
function vn(e, t) {
  return e
    ? O(e) && O(t)
      ? [...new Set([...e, ...t])]
      : re(Object.create(null), xn(e), xn(t ?? {}))
    : t
}
function gl(e, t) {
  if (!e) return t
  if (!t) return e
  const s = re(Object.create(null), e)
  for (const n in t) s[n] = oe(e[n], t[n])
  return s
}
function Ar() {
  return {
    app: null,
    config: {
      isNativeTag: Vn,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let ml = 0
function xl(e, t) {
  return function (n, r = null) {
    ;(j(n) || (n = re({}, n)), r != null && !Q(r) && (r = null))
    const i = Ar(),
      l = new WeakSet(),
      o = []
    let c = !1
    const h = (i.app = {
      _uid: ml++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Ql,
      get config() {
        return i.config
      },
      set config(d) {},
      use(d, ...g) {
        return (
          l.has(d) ||
            (d && j(d.install)
              ? (l.add(d), d.install(h, ...g))
              : j(d) && (l.add(d), d(h, ...g))),
          h
        )
      },
      mixin(d) {
        return (i.mixins.includes(d) || i.mixins.push(d), h)
      },
      component(d, g) {
        return g ? ((i.components[d] = g), h) : i.components[d]
      },
      directive(d, g) {
        return g ? ((i.directives[d] = g), h) : i.directives[d]
      },
      mount(d, g, C) {
        if (!c) {
          const T = h._ceVNode || te(n, r)
          return (
            (T.appContext = i),
            C === !0 ? (C = 'svg') : C === !1 && (C = void 0),
            e(T, d, C),
            (c = !0),
            (h._container = d),
            (d.__vue_app__ = h),
            us(T.component)
          )
        }
      },
      onUnmount(d) {
        o.push(d)
      },
      unmount() {
        c &&
          (Pe(o, h._instance, 16), e(null, h._container), delete h._container.__vue_app__)
      },
      provide(d, g) {
        return ((i.provides[d] = g), h)
      },
      runWithContext(d) {
        const g = ft
        ft = h
        try {
          return d()
        } finally {
          ft = g
        }
      },
    })
    return h
  }
}
let ft = null
const bl = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${ze(t)}Modifiers`] || e[`${rt(t)}Modifiers`]
function _l(e, t, ...s) {
  if (e.isUnmounted) return
  const n = e.vnode.props || U
  let r = s
  const i = t.startsWith('update:'),
    l = i && bl(n, t.slice(7))
  l && (l.trim && (r = s.map((d) => (X(d) ? d.trim() : d))), l.number && (r = s.map(ri)))
  let o,
    c = n[(o = hs(t))] || n[(o = hs(ze(t)))]
  ;(!c && i && (c = n[(o = hs(rt(t)))]), c && Pe(c, e, 6, r))
  const h = n[o + 'Once']
  if (h) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[o]) return
    ;((e.emitted[o] = !0), Pe(h, e, 6, r))
  }
}
const vl = new WeakMap()
function Mr(e, t, s = !1) {
  const n = s ? vl : t.emitsCache,
    r = n.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let l = {},
    o = !1
  if (!j(e)) {
    const c = (h) => {
      const d = Mr(h, t, !0)
      d && ((o = !0), re(l, d))
    }
    ;(!s && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c))
  }
  return !i && !o
    ? (Q(e) && n.set(e, null), null)
    : (O(i) ? i.forEach((c) => (l[c] = null)) : re(l, i), Q(e) && n.set(e, l), l)
}
function cs(e, t) {
  return !e || !ss(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      N(e, t[0].toLowerCase() + t.slice(1)) || N(e, rt(t)) || N(e, t))
}
function yn(e) {
  const {
      type: t,
      vnode: s,
      proxy: n,
      withProxy: r,
      propsOptions: [i],
      slots: l,
      attrs: o,
      emit: c,
      render: h,
      renderCache: d,
      props: g,
      data: C,
      setupState: T,
      ctx: R,
      inheritAttrs: F,
    } = e,
    ie = Yt(e)
  let L, J
  try {
    if (s.shapeFlag & 4) {
      const E = r || n,
        ee = E
      ;((L = Ae(h.call(ee, E, d, g, T, C, R))), (J = o))
    } else {
      const E = t
      ;((L = Ae(E.length > 1 ? E(g, { attrs: o, slots: l, emit: c }) : E(g, null))),
        (J = t.props ? o : yl(o)))
    }
  } catch (E) {
    ;((At.length = 0), os(E, e, 1), (L = te(qe)))
  }
  let Z = L
  if (J && F !== !1) {
    const E = Object.keys(J),
      { shapeFlag: ee } = Z
    E.length && ee & 7 && (i && E.some(Vs) && (J = wl(J, i)), (Z = pt(Z, J, !1, !0)))
  }
  return (
    s.dirs &&
      ((Z = pt(Z, null, !1, !0)), (Z.dirs = Z.dirs ? Z.dirs.concat(s.dirs) : s.dirs)),
    s.transition && tn(Z, s.transition),
    (L = Z),
    Yt(ie),
    L
  )
}
const yl = (e) => {
    let t
    for (const s in e)
      (s === 'class' || s === 'style' || ss(s)) && ((t || (t = {}))[s] = e[s])
    return t
  },
  wl = (e, t) => {
    const s = {}
    for (const n in e) (!Vs(n) || !(n.slice(9) in t)) && (s[n] = e[n])
    return s
  }
function kl(e, t, s) {
  const { props: n, children: r, component: i } = e,
    { props: l, children: o, patchFlag: c } = t,
    h = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (s && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return n ? wn(n, l, h) : !!l
    if (c & 8) {
      const d = t.dynamicProps
      for (let g = 0; g < d.length; g++) {
        const C = d[g]
        if (l[C] !== n[C] && !cs(h, C)) return !0
      }
    }
  } else
    return (r || o) && (!o || !o.$stable)
      ? !0
      : n === l
        ? !1
        : n
          ? l
            ? wn(n, l, h)
            : !0
          : !!l
  return !1
}
function wn(e, t, s) {
  const n = Object.keys(t)
  if (n.length !== Object.keys(e).length) return !0
  for (let r = 0; r < n.length; r++) {
    const i = n[r]
    if (t[i] !== e[i] && !cs(s, i)) return !0
  }
  return !1
}
function Cl({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree
    if ((n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e))
      (((e = t.vnode).el = s), (t = t.parent))
    else break
  }
}
const Pr = {},
  Er = () => Object.create(Pr),
  Ir = (e) => Object.getPrototypeOf(e) === Pr
function Sl(e, t, s, n = !1) {
  const r = {},
    i = Er()
  ;((e.propsDefaults = Object.create(null)), Or(e, t, r, i))
  for (const l in e.propsOptions[0]) l in r || (r[l] = void 0)
  ;(s ? (e.props = n ? r : Ei(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i))
}
function $l(e, t, s, n) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: l },
    } = e,
    o = B(r),
    [c] = e.propsOptions
  let h = !1
  if ((n || l > 0) && !(l & 16)) {
    if (l & 8) {
      const d = e.vnode.dynamicProps
      for (let g = 0; g < d.length; g++) {
        let C = d[g]
        if (cs(e.emitsOptions, C)) continue
        const T = t[C]
        if (c)
          if (N(i, C)) T !== i[C] && ((i[C] = T), (h = !0))
          else {
            const R = ze(C)
            r[R] = Rs(c, o, R, T, e, !1)
          }
        else T !== i[C] && ((i[C] = T), (h = !0))
      }
    }
  } else {
    Or(e, t, r, i) && (h = !0)
    let d
    for (const g in o)
      (!t || (!N(t, g) && ((d = rt(g)) === g || !N(t, d)))) &&
        (c
          ? s &&
            (s[g] !== void 0 || s[d] !== void 0) &&
            (r[g] = Rs(c, o, g, void 0, e, !0))
          : delete r[g])
    if (i !== o) for (const g in i) (!t || !N(t, g)) && (delete i[g], (h = !0))
  }
  h && Oe(e.attrs, 'set', '')
}
function Or(e, t, s, n) {
  const [r, i] = e.propsOptions
  let l = !1,
    o
  if (t)
    for (let c in t) {
      if (wt(c)) continue
      const h = t[c]
      let d
      r && N(r, (d = ze(c)))
        ? !i || !i.includes(d)
          ? (s[d] = h)
          : ((o || (o = {}))[d] = h)
        : cs(e.emitsOptions, c) || ((!(c in n) || h !== n[c]) && ((n[c] = h), (l = !0)))
    }
  if (i) {
    const c = B(s),
      h = o || U
    for (let d = 0; d < i.length; d++) {
      const g = i[d]
      s[g] = Rs(r, c, g, h[g], e, !N(h, g))
    }
  }
  return l
}
function Rs(e, t, s, n, r, i) {
  const l = e[s]
  if (l != null) {
    const o = N(l, 'default')
    if (o && n === void 0) {
      const c = l.default
      if (l.type !== Function && !l.skipFactory && j(c)) {
        const { propsDefaults: h } = r
        if (s in h) n = h[s]
        else {
          const d = Dt(r)
          ;((n = h[s] = c.call(null, t)), d())
        }
      } else n = c
      r.ce && r.ce._setProp(s, n)
    }
    l[0] && (i && !o ? (n = !1) : l[1] && (n === '' || n === rt(s)) && (n = !0))
  }
  return n
}
const Tl = new WeakMap()
function jr(e, t, s = !1) {
  const n = s ? Tl : t.propsCache,
    r = n.get(e)
  if (r) return r
  const i = e.props,
    l = {},
    o = []
  let c = !1
  if (!j(e)) {
    const d = (g) => {
      c = !0
      const [C, T] = jr(g, t, !0)
      ;(re(l, C), T && o.push(...T))
    }
    ;(!s && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d))
  }
  if (!i && !c) return (Q(e) && n.set(e, ot), ot)
  if (O(i))
    for (let d = 0; d < i.length; d++) {
      const g = ze(i[d])
      kn(g) && (l[g] = U)
    }
  else if (i)
    for (const d in i) {
      const g = ze(d)
      if (kn(g)) {
        const C = i[d],
          T = (l[g] = O(C) || j(C) ? { type: C } : re({}, C)),
          R = T.type
        let F = !1,
          ie = !0
        if (O(R))
          for (let L = 0; L < R.length; ++L) {
            const J = R[L],
              Z = j(J) && J.name
            if (Z === 'Boolean') {
              F = !0
              break
            } else Z === 'String' && (ie = !1)
          }
        else F = j(R) && R.name === 'Boolean'
        ;((T[0] = F), (T[1] = ie), (F || N(T, 'default')) && o.push(g))
      }
    }
  const h = [l, o]
  return (Q(e) && n.set(e, h), h)
}
function kn(e) {
  return e[0] !== '$' && !wt(e)
}
const sn = (e) => e === '_' || e === '_ctx' || e === '$stable',
  nn = (e) => (O(e) ? e.map(Ae) : [Ae(e)]),
  Al = (e, t, s) => {
    if (t._n) return t
    const n = Wi((...r) => nn(t(...r)), s)
    return ((n._c = !1), n)
  },
  Rr = (e, t, s) => {
    const n = e._ctx
    for (const r in e) {
      if (sn(r)) continue
      const i = e[r]
      if (j(i)) t[r] = Al(r, i, n)
      else if (i != null) {
        const l = nn(i)
        t[r] = () => l
      }
    }
  },
  Hr = (e, t) => {
    const s = nn(t)
    e.slots.default = () => s
  },
  Dr = (e, t, s) => {
    for (const n in t) (s || !sn(n)) && (e[n] = t[n])
  },
  Ml = (e, t, s) => {
    const n = (e.slots = Er())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (Dr(n, t, s), s && Jn(n, '_', r, !0)) : Rr(t, n)
    } else t && Hr(e, t)
  },
  Pl = (e, t, s) => {
    const { vnode: n, slots: r } = e
    let i = !0,
      l = U
    if (n.shapeFlag & 32) {
      const o = t._
      ;(o ? (s && o === 1 ? (i = !1) : Dr(r, t, s)) : ((i = !t.$stable), Rr(t, r)),
        (l = t))
    } else t && (Hr(e, t), (l = { default: 1 }))
    if (i) for (const o in r) !sn(o) && l[o] == null && delete r[o]
  },
  ge = Rl
function El(e) {
  return Il(e)
}
function Il(e, t) {
  const s = is()
  s.__VUE__ = !0
  const {
      insert: n,
      remove: r,
      patchProp: i,
      createElement: l,
      createText: o,
      createComment: c,
      setText: h,
      setElementText: d,
      parentNode: g,
      nextSibling: C,
      setScopeId: T = Me,
      insertStaticContent: R,
    } = e,
    F = (
      a,
      f,
      p,
      _ = null,
      m = null,
      x = null,
      w = void 0,
      y = null,
      v = !!f.dynamicChildren
    ) => {
      if (a === f) return
      ;(a && !_t(a, f) && ((_ = Vt(a)), we(a, m, x, !0), (a = null)),
        f.patchFlag === -2 && ((v = !1), (f.dynamicChildren = null)))
      const { type: b, ref: M, shapeFlag: k } = f
      switch (b) {
        case fs:
          ie(a, f, p, _)
          break
        case qe:
          L(a, f, p, _)
          break
        case ks:
          a == null && J(f, p, _, w)
          break
        case G:
          Lt(a, f, p, _, m, x, w, y, v)
          break
        default:
          k & 1
            ? ee(a, f, p, _, m, x, w, y, v)
            : k & 6
              ? Bt(a, f, p, _, m, x, w, y, v)
              : (k & 64 || k & 128) && b.process(a, f, p, _, m, x, w, y, v, mt)
      }
      M != null && m
        ? St(M, a && a.ref, x, f || a, !f)
        : M == null && a && a.ref != null && St(a.ref, null, x, a, !0)
    },
    ie = (a, f, p, _) => {
      if (a == null) n((f.el = o(f.children)), p, _)
      else {
        const m = (f.el = a.el)
        f.children !== a.children && h(m, f.children)
      }
    },
    L = (a, f, p, _) => {
      a == null ? n((f.el = c(f.children || '')), p, _) : (f.el = a.el)
    },
    J = (a, f, p, _) => {
      ;[a.el, a.anchor] = R(a.children, f, p, _, a.el, a.anchor)
    },
    Z = ({ el: a, anchor: f }, p, _) => {
      let m
      for (; a && a !== f; ) ((m = C(a)), n(a, p, _), (a = m))
      n(f, p, _)
    },
    E = ({ el: a, anchor: f }) => {
      let p
      for (; a && a !== f; ) ((p = C(a)), r(a), (a = p))
      r(f)
    },
    ee = (a, f, p, _, m, x, w, y, v) => {
      if (
        (f.type === 'svg' ? (w = 'svg') : f.type === 'math' && (w = 'mathml'), a == null)
      )
        Le(f, p, _, m, x, w, y, v)
      else {
        const b = a.el && a.el._isVueCE ? a.el : null
        try {
          ;(b && b._beginPatch(), Ft(a, f, m, x, w, y, v))
        } finally {
          b && b._endPatch()
        }
      }
    },
    Le = (a, f, p, _, m, x, w, y) => {
      let v, b
      const { props: M, shapeFlag: k, transition: A, dirs: I } = a
      if (
        ((v = a.el = l(a.type, x, M && M.is, M)),
        k & 8
          ? d(v, a.children)
          : k & 16 && Be(a.children, v, null, _, m, ws(a, x), w, y),
        I && Ze(a, null, _, 'created'),
        ye(v, a, a.scopeId, w, _),
        M)
      ) {
        for (const z in M) z !== 'value' && !wt(z) && i(v, z, null, M[z], x, _)
        ;('value' in M && i(v, 'value', null, M.value, x),
          (b = M.onVnodeBeforeMount) && $e(b, _, a))
      }
      I && Ze(a, null, _, 'beforeMount')
      const D = Ol(m, A)
      ;(D && A.beforeEnter(v),
        n(v, f, p),
        ((b = M && M.onVnodeMounted) || D || I) &&
          ge(() => {
            ;(b && $e(b, _, a), D && A.enter(v), I && Ze(a, null, _, 'mounted'))
          }, m))
    },
    ye = (a, f, p, _, m) => {
      if ((p && T(a, p), _)) for (let x = 0; x < _.length; x++) T(a, _[x])
      if (m) {
        let x = m.subTree
        if (f === x || (Nr(x.type) && (x.ssContent === f || x.ssFallback === f))) {
          const w = m.vnode
          ye(a, w, w.scopeId, w.slotScopeIds, m.parent)
        }
      }
    },
    Be = (a, f, p, _, m, x, w, y, v = 0) => {
      for (let b = v; b < a.length; b++) {
        const M = (a[b] = y ? Ue(a[b]) : Ae(a[b]))
        F(null, M, f, p, _, m, x, w, y)
      }
    },
    Ft = (a, f, p, _, m, x, w) => {
      const y = (f.el = a.el)
      let { patchFlag: v, dynamicChildren: b, dirs: M } = f
      v |= a.patchFlag & 16
      const k = a.props || U,
        A = f.props || U
      let I
      if (
        (p && Xe(p, !1),
        (I = A.onVnodeBeforeUpdate) && $e(I, p, f, a),
        M && Ze(f, a, p, 'beforeUpdate'),
        p && Xe(p, !0),
        ((k.innerHTML && A.innerHTML == null) ||
          (k.textContent && A.textContent == null)) &&
          d(y, ''),
        b
          ? Ge(a.dynamicChildren, b, y, p, _, ws(f, m), x)
          : w || K(a, f, y, null, p, _, ws(f, m), x, !1),
        v > 0)
      ) {
        if (v & 16) ht(y, k, A, p, m)
        else if (
          (v & 2 && k.class !== A.class && i(y, 'class', null, A.class, m),
          v & 4 && i(y, 'style', k.style, A.style, m),
          v & 8)
        ) {
          const D = f.dynamicProps
          for (let z = 0; z < D.length; z++) {
            const V = D[z],
              ue = k[V],
              de = A[V]
            ;(de !== ue || V === 'value') && i(y, V, ue, de, m, p)
          }
        }
        v & 1 && a.children !== f.children && d(y, f.children)
      } else !w && b == null && ht(y, k, A, p, m)
      ;((I = A.onVnodeUpdated) || M) &&
        ge(() => {
          ;(I && $e(I, p, f, a), M && Ze(f, a, p, 'updated'))
        }, _)
    },
    Ge = (a, f, p, _, m, x, w) => {
      for (let y = 0; y < f.length; y++) {
        const v = a[y],
          b = f[y],
          M = v.el && (v.type === G || !_t(v, b) || v.shapeFlag & 198) ? g(v.el) : p
        F(v, b, M, null, _, m, x, w, !0)
      }
    },
    ht = (a, f, p, _, m) => {
      if (f !== p) {
        if (f !== U) for (const x in f) !wt(x) && !(x in p) && i(a, x, f[x], null, m, _)
        for (const x in p) {
          if (wt(x)) continue
          const w = p[x],
            y = f[x]
          w !== y && x !== 'value' && i(a, x, y, w, m, _)
        }
        'value' in p && i(a, 'value', f.value, p.value, m)
      }
    },
    Lt = (a, f, p, _, m, x, w, y, v) => {
      const b = (f.el = a ? a.el : o('')),
        M = (f.anchor = a ? a.anchor : o(''))
      let { patchFlag: k, dynamicChildren: A, slotScopeIds: I } = f
      ;(I && (y = y ? y.concat(I) : I),
        a == null
          ? (n(b, p, _), n(M, p, _), Be(f.children || [], p, M, m, x, w, y, v))
          : k > 0 &&
              k & 64 &&
              A &&
              a.dynamicChildren &&
              a.dynamicChildren.length === A.length
            ? (Ge(a.dynamicChildren, A, p, m, x, w, y),
              (f.key != null || (m && f === m.subTree)) && Fr(a, f, !0))
            : K(a, f, p, M, m, x, w, y, v))
    },
    Bt = (a, f, p, _, m, x, w, y, v) => {
      ;((f.slotScopeIds = y),
        a == null
          ? f.shapeFlag & 512
            ? m.ctx.activate(f, p, _, w, v)
            : ds(f, p, _, m, x, w, v)
          : ln(a, f, v))
    },
    ds = (a, f, p, _, m, x, w) => {
      const y = (a.component = Ul(a, _, m))
      if ((wr(a) && (y.ctx.renderer = mt), Kl(y, !1, w), y.asyncDep)) {
        if ((m && m.registerDep(y, le, w), !a.el)) {
          const v = (y.subTree = te(qe))
          ;(L(null, v, f, p), (a.placeholder = v.el))
        }
      } else le(y, a, f, p, m, x, w)
    },
    ln = (a, f, p) => {
      const _ = (f.component = a.component)
      if (kl(a, f, p))
        if (_.asyncDep && !_.asyncResolved) {
          Y(_, f, p)
          return
        } else ((_.next = f), _.update())
      else ((f.el = a.el), (_.vnode = f))
    },
    le = (a, f, p, _, m, x, w) => {
      const y = () => {
        if (a.isMounted) {
          let { next: k, bu: A, u: I, parent: D, vnode: z } = a
          {
            const Ce = Lr(a)
            if (Ce) {
              ;(k && ((k.el = z.el), Y(a, k, w)),
                Ce.asyncDep.then(() => {
                  a.isUnmounted || y()
                }))
              return
            }
          }
          let V = k,
            ue
          ;(Xe(a, !1),
            k ? ((k.el = z.el), Y(a, k, w)) : (k = z),
            A && gs(A),
            (ue = k.props && k.props.onVnodeBeforeUpdate) && $e(ue, D, k, z),
            Xe(a, !0))
          const de = yn(a),
            ke = a.subTree
          ;((a.subTree = de),
            F(ke, de, g(ke.el), Vt(ke), a, m, x),
            (k.el = de.el),
            V === null && Cl(a, de.el),
            I && ge(I, m),
            (ue = k.props && k.props.onVnodeUpdated) && ge(() => $e(ue, D, k, z), m))
        } else {
          let k
          const { el: A, props: I } = f,
            { bm: D, m: z, parent: V, root: ue, type: de } = a,
            ke = $t(f)
          ;(Xe(a, !1),
            D && gs(D),
            !ke && (k = I && I.onVnodeBeforeMount) && $e(k, V, f),
            Xe(a, !0))
          {
            ue.ce && ue.ce._def.shadowRoot !== !1 && ue.ce._injectChildStyle(de)
            const Ce = (a.subTree = yn(a))
            ;(F(null, Ce, p, _, a, m, x), (f.el = Ce.el))
          }
          if ((z && ge(z, m), !ke && (k = I && I.onVnodeMounted))) {
            const Ce = f
            ge(() => $e(k, V, Ce), m)
          }
          ;((f.shapeFlag & 256 || (V && $t(V.vnode) && V.vnode.shapeFlag & 256)) &&
            a.a &&
            ge(a.a, m),
            (a.isMounted = !0),
            (f = p = _ = null))
        }
      }
      a.scope.on()
      const v = (a.effect = new Zn(y))
      a.scope.off()
      const b = (a.update = v.run.bind(v)),
        M = (a.job = v.runIfDirty.bind(v))
      ;((M.i = a), (M.id = a.uid), (v.scheduler = () => en(M)), Xe(a, !0), b())
    },
    Y = (a, f, p) => {
      f.component = a
      const _ = a.vnode.props
      ;((a.vnode = f),
        (a.next = null),
        $l(a, f.props, _, p),
        Pl(a, f.children, p),
        Re(),
        gn(a),
        He())
    },
    K = (a, f, p, _, m, x, w, y, v = !1) => {
      const b = a && a.children,
        M = a ? a.shapeFlag : 0,
        k = f.children,
        { patchFlag: A, shapeFlag: I } = f
      if (A > 0) {
        if (A & 128) {
          Nt(b, k, p, _, m, x, w, y, v)
          return
        } else if (A & 256) {
          Qe(b, k, p, _, m, x, w, y, v)
          return
        }
      }
      I & 8
        ? (M & 16 && gt(b, m, x), k !== b && d(p, k))
        : M & 16
          ? I & 16
            ? Nt(b, k, p, _, m, x, w, y, v)
            : gt(b, m, x, !0)
          : (M & 8 && d(p, ''), I & 16 && Be(k, p, _, m, x, w, y, v))
    },
    Qe = (a, f, p, _, m, x, w, y, v) => {
      ;((a = a || ot), (f = f || ot))
      const b = a.length,
        M = f.length,
        k = Math.min(b, M)
      let A
      for (A = 0; A < k; A++) {
        const I = (f[A] = v ? Ue(f[A]) : Ae(f[A]))
        F(a[A], I, p, null, m, x, w, y, v)
      }
      b > M ? gt(a, m, x, !0, !1, k) : Be(f, p, _, m, x, w, y, v, k)
    },
    Nt = (a, f, p, _, m, x, w, y, v) => {
      let b = 0
      const M = f.length
      let k = a.length - 1,
        A = M - 1
      for (; b <= k && b <= A; ) {
        const I = a[b],
          D = (f[b] = v ? Ue(f[b]) : Ae(f[b]))
        if (_t(I, D)) F(I, D, p, null, m, x, w, y, v)
        else break
        b++
      }
      for (; b <= k && b <= A; ) {
        const I = a[k],
          D = (f[A] = v ? Ue(f[A]) : Ae(f[A]))
        if (_t(I, D)) F(I, D, p, null, m, x, w, y, v)
        else break
        ;(k--, A--)
      }
      if (b > k) {
        if (b <= A) {
          const I = A + 1,
            D = I < M ? f[I].el : _
          for (; b <= A; )
            (F(null, (f[b] = v ? Ue(f[b]) : Ae(f[b])), p, D, m, x, w, y, v), b++)
        }
      } else if (b > A) for (; b <= k; ) (we(a[b], m, x, !0), b++)
      else {
        const I = b,
          D = b,
          z = new Map()
        for (b = D; b <= A; b++) {
          const he = (f[b] = v ? Ue(f[b]) : Ae(f[b]))
          he.key != null && z.set(he.key, b)
        }
        let V,
          ue = 0
        const de = A - D + 1
        let ke = !1,
          Ce = 0
        const xt = new Array(de)
        for (b = 0; b < de; b++) xt[b] = 0
        for (b = I; b <= k; b++) {
          const he = a[b]
          if (ue >= de) {
            we(he, m, x, !0)
            continue
          }
          let Se
          if (he.key != null) Se = z.get(he.key)
          else
            for (V = D; V <= A; V++)
              if (xt[V - D] === 0 && _t(he, f[V])) {
                Se = V
                break
              }
          Se === void 0
            ? we(he, m, x, !0)
            : ((xt[Se - D] = b + 1),
              Se >= Ce ? (Ce = Se) : (ke = !0),
              F(he, f[Se], p, null, m, x, w, y, v),
              ue++)
        }
        const cn = ke ? jl(xt) : ot
        for (V = cn.length - 1, b = de - 1; b >= 0; b--) {
          const he = D + b,
            Se = f[he],
            fn = f[he + 1],
            un = he + 1 < M ? fn.el || Br(fn) : _
          xt[b] === 0
            ? F(null, Se, p, un, m, x, w, y, v)
            : ke && (V < 0 || b !== cn[V] ? Ye(Se, p, un, 2) : V--)
        }
      }
    },
    Ye = (a, f, p, _, m = null) => {
      const { el: x, type: w, transition: y, children: v, shapeFlag: b } = a
      if (b & 6) {
        Ye(a.component.subTree, f, p, _)
        return
      }
      if (b & 128) {
        a.suspense.move(f, p, _)
        return
      }
      if (b & 64) {
        w.move(a, f, p, mt)
        return
      }
      if (w === G) {
        n(x, f, p)
        for (let k = 0; k < v.length; k++) Ye(v[k], f, p, _)
        n(a.anchor, f, p)
        return
      }
      if (w === ks) {
        Z(a, f, p)
        return
      }
      if (_ !== 2 && b & 1 && y)
        if (_ === 0) (y.beforeEnter(x), n(x, f, p), ge(() => y.enter(x), m))
        else {
          const { leave: k, delayLeave: A, afterLeave: I } = y,
            D = () => {
              a.ctx.isUnmounted ? r(x) : n(x, f, p)
            },
            z = () => {
              ;(x._isLeaving && x[Yi](!0),
                k(x, () => {
                  ;(D(), I && I())
                }))
            }
          A ? A(x, D, z) : z()
        }
      else n(x, f, p)
    },
    we = (a, f, p, _ = !1, m = !1) => {
      const {
        type: x,
        props: w,
        ref: y,
        children: v,
        dynamicChildren: b,
        shapeFlag: M,
        patchFlag: k,
        dirs: A,
        cacheIndex: I,
      } = a
      if (
        (k === -2 && (m = !1),
        y != null && (Re(), St(y, null, p, a, !0), He()),
        I != null && (f.renderCache[I] = void 0),
        M & 256)
      ) {
        f.ctx.deactivate(a)
        return
      }
      const D = M & 1 && A,
        z = !$t(a)
      let V
      if ((z && (V = w && w.onVnodeBeforeUnmount) && $e(V, f, a), M & 6))
        Xr(a.component, p, _)
      else {
        if (M & 128) {
          a.suspense.unmount(p, _)
          return
        }
        ;(D && Ze(a, null, f, 'beforeUnmount'),
          M & 64
            ? a.type.remove(a, f, p, mt, _)
            : b && !b.hasOnce && (x !== G || (k > 0 && k & 64))
              ? gt(b, f, p, !1, !0)
              : ((x === G && k & 384) || (!m && M & 16)) && gt(v, f, p),
          _ && on(a))
      }
      ;((z && (V = w && w.onVnodeUnmounted)) || D) &&
        ge(() => {
          ;(V && $e(V, f, a), D && Ze(a, null, f, 'unmounted'))
        }, p)
    },
    on = (a) => {
      const { type: f, el: p, anchor: _, transition: m } = a
      if (f === G) {
        Zr(p, _)
        return
      }
      if (f === ks) {
        E(a)
        return
      }
      const x = () => {
        ;(r(p), m && !m.persisted && m.afterLeave && m.afterLeave())
      }
      if (a.shapeFlag & 1 && m && !m.persisted) {
        const { leave: w, delayLeave: y } = m,
          v = () => w(p, x)
        y ? y(a.el, x, v) : v()
      } else x()
    },
    Zr = (a, f) => {
      let p
      for (; a !== f; ) ((p = C(a)), r(a), (a = p))
      r(f)
    },
    Xr = (a, f, p) => {
      const { bum: _, scope: m, job: x, subTree: w, um: y, m: v, a: b } = a
      ;(Cn(v),
        Cn(b),
        _ && gs(_),
        m.stop(),
        x && ((x.flags |= 8), we(w, a, f, p)),
        y && ge(y, f),
        ge(() => {
          a.isUnmounted = !0
        }, f))
    },
    gt = (a, f, p, _ = !1, m = !1, x = 0) => {
      for (let w = x; w < a.length; w++) we(a[w], f, p, _, m)
    },
    Vt = (a) => {
      if (a.shapeFlag & 6) return Vt(a.component.subTree)
      if (a.shapeFlag & 128) return a.suspense.next()
      const f = C(a.anchor || a.el),
        p = f && f[Gi]
      return p ? C(p) : f
    }
  let ps = !1
  const an = (a, f, p) => {
      let _
      ;(a == null
        ? f._vnode && (we(f._vnode, null, null, !0), (_ = f._vnode.component))
        : F(f._vnode || null, a, f, null, null, null, p),
        (f._vnode = a),
        ps || ((ps = !0), gn(_), gr(), (ps = !1)))
    },
    mt = { p: F, um: we, m: Ye, r: on, mt: ds, mc: Be, pc: K, pbc: Ge, n: Vt, o: e }
  return { render: an, hydrate: void 0, createApp: xl(an) }
}
function ws({ type: e, props: t }, s) {
  return (s === 'svg' && e === 'foreignObject') ||
    (s === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : s
}
function Xe({ effect: e, job: t }, s) {
  s ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function Ol(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Fr(e, t, s = !1) {
  const n = e.children,
    r = t.children
  if (O(n) && O(r))
    for (let i = 0; i < n.length; i++) {
      const l = n[i]
      let o = r[i]
      ;(o.shapeFlag & 1 &&
        !o.dynamicChildren &&
        ((o.patchFlag <= 0 || o.patchFlag === 32) &&
          ((o = r[i] = Ue(r[i])), (o.el = l.el)),
        !s && o.patchFlag !== -2 && Fr(l, o)),
        o.type === fs &&
          (o.patchFlag !== -1
            ? (o.el = l.el)
            : (o.__elIndex = i + (e.type === G ? 1 : 0))),
        o.type === qe && !o.el && (o.el = l.el))
    }
}
function jl(e) {
  const t = e.slice(),
    s = [0]
  let n, r, i, l, o
  const c = e.length
  for (n = 0; n < c; n++) {
    const h = e[n]
    if (h !== 0) {
      if (((r = s[s.length - 1]), e[r] < h)) {
        ;((t[n] = r), s.push(n))
        continue
      }
      for (i = 0, l = s.length - 1; i < l; )
        ((o = (i + l) >> 1), e[s[o]] < h ? (i = o + 1) : (l = o))
      h < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), (s[i] = n))
    }
  }
  for (i = s.length, l = s[i - 1]; i-- > 0; ) ((s[i] = l), (l = t[l]))
  return s
}
function Lr(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Lr(t)
}
function Cn(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
function Br(e) {
  if (e.placeholder) return e.placeholder
  const t = e.component
  return t ? Br(t.subTree) : null
}
const Nr = (e) => e.__isSuspense
function Rl(e, t) {
  t && t.pendingBranch ? (O(e) ? t.effects.push(...e) : t.effects.push(e)) : Ui(e)
}
const G = Symbol.for('v-fgt'),
  fs = Symbol.for('v-txt'),
  qe = Symbol.for('v-cmt'),
  ks = Symbol.for('v-stc'),
  At = []
let me = null
function S(e = !1) {
  At.push((me = e ? null : []))
}
function Hl() {
  ;(At.pop(), (me = At[At.length - 1] || null))
}
let jt = 1
function Sn(e, t = !1) {
  ;((jt += e), e < 0 && me && t && (me.hasOnce = !0))
}
function Vr(e) {
  return (
    (e.dynamicChildren = jt > 0 ? me || ot : null),
    Hl(),
    jt > 0 && me && me.push(e),
    e
  )
}
function $(e, t, s, n, r, i) {
  return Vr(u(e, t, s, n, r, i, !0))
}
function Ur(e, t, s, n, r) {
  return Vr(te(e, t, s, n, r, !0))
}
function Wr(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function _t(e, t) {
  return e.type === t.type && e.key === t.key
}
const Kr = ({ key: e }) => e ?? null,
  qt = ({ ref: e, ref_key: t, ref_for: s }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (X(e) || ne(e) || j(e) ? { i: xe, r: e, k: t, f: !!s } : e) : null
  )
function u(e, t = null, s = null, n = 0, r = null, i = e === G ? 0 : 1, l = !1, o = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Kr(t),
    ref: t && qt(t),
    scopeId: xr,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: xe,
  }
  return (
    o ? (rn(c, s), i & 128 && e.normalize(c)) : s && (c.shapeFlag |= X(s) ? 8 : 16),
    jt > 0 && !l && me && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && me.push(c),
    c
  )
}
const te = Dl
function Dl(e, t = null, s = null, n = 0, r = null, i = !1) {
  if (((!e || e === cl) && (e = qe), Wr(e))) {
    const o = pt(e, t, !0)
    return (
      s && rn(o, s),
      jt > 0 && !i && me && (o.shapeFlag & 6 ? (me[me.indexOf(e)] = o) : me.push(o)),
      (o.patchFlag = -2),
      o
    )
  }
  if ((Gl(e) && (e = e.__vccOpts), t)) {
    t = Fl(t)
    let { class: o, style: c } = t
    ;(o && !X(o) && (t.class = ut(o)),
      Q(c) && (Xs(c) && !O(c) && (c = re({}, c)), (t.style = Ks(c))))
  }
  const l = X(e) ? 1 : Nr(e) ? 128 : Qi(e) ? 64 : Q(e) ? 4 : j(e) ? 2 : 0
  return u(e, t, s, n, r, l, i, !0)
}
function Fl(e) {
  return e ? (Xs(e) || Ir(e) ? re({}, e) : e) : null
}
function pt(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: l, children: o, transition: c } = e,
    h = t ? Bl(r || {}, t) : r,
    d = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: h,
      key: h && Kr(h),
      ref: t && t.ref ? (s && i ? (O(i) ? i.concat(qt(t)) : [i, qt(t)]) : qt(t)) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: o,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== G ? (l === -1 ? 16 : l | 16) : l,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && pt(e.ssContent),
      ssFallback: e.ssFallback && pt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return (c && n && tn(d, c.clone(d)), d)
}
function Ll(e = ' ', t = 0) {
  return te(fs, null, e, t)
}
function nt(e = '', t = !1) {
  return t ? (S(), Ur(qe, null, e)) : te(qe, null, e)
}
function Ae(e) {
  return e == null || typeof e == 'boolean'
    ? te(qe)
    : O(e)
      ? te(G, null, e.slice())
      : Wr(e)
        ? Ue(e)
        : te(fs, null, String(e))
}
function Ue(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : pt(e)
}
function rn(e, t) {
  let s = 0
  const { shapeFlag: n } = e
  if (t == null) t = null
  else if (O(t)) s = 16
  else if (typeof t == 'object')
    if (n & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), rn(e, r()), r._c && (r._d = !0))
      return
    } else {
      s = 32
      const r = t._
      !r && !Ir(t)
        ? (t._ctx = xe)
        : r === 3 &&
          xe &&
          (xe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    j(t)
      ? ((t = { default: t, _ctx: xe }), (s = 32))
      : ((t = String(t)), n & 64 ? ((s = 16), (t = [Ll(t)])) : (s = 8))
  ;((e.children = t), (e.shapeFlag |= s))
}
function Bl(...e) {
  const t = {}
  for (let s = 0; s < e.length; s++) {
    const n = e[s]
    for (const r in n)
      if (r === 'class') t.class !== n.class && (t.class = ut([t.class, n.class]))
      else if (r === 'style') t.style = Ks([t.style, n.style])
      else if (ss(r)) {
        const i = t[r],
          l = n[r]
        l && i !== l && !(O(i) && i.includes(l)) && (t[r] = i ? [].concat(i, l) : l)
      } else r !== '' && (t[r] = n[r])
  }
  return t
}
function $e(e, t, s, n = null) {
  Pe(e, t, 7, [s, n])
}
const Nl = Ar()
let Vl = 0
function Ul(e, t, s) {
  const n = e.type,
    r = (t ? t.appContext : e.appContext) || Nl,
    i = {
      uid: Vl++,
      vnode: e,
      type: n,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new ui(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: jr(n, r),
      emitsOptions: Mr(n, r),
      emit: null,
      emitted: null,
      propsDefaults: U,
      inheritAttrs: n.inheritAttrs,
      ctx: U,
      data: U,
      props: U,
      attrs: U,
      slots: U,
      refs: U,
      setupState: U,
      setupContext: null,
      suspense: s,
      suspenseId: s ? s.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = _l.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let ce = null
const Wl = () => ce || xe
let es, Hs
{
  const e = is(),
    t = (s, n) => {
      let r
      return (
        (r = e[s]) || (r = e[s] = []),
        r.push(n),
        (i) => {
          r.length > 1 ? r.forEach((l) => l(i)) : r[0](i)
        }
      )
    }
  ;((es = t('__VUE_INSTANCE_SETTERS__', (s) => (ce = s))),
    (Hs = t('__VUE_SSR_SETTERS__', (s) => (Rt = s))))
}
const Dt = (e) => {
    const t = ce
    return (
      es(e),
      e.scope.on(),
      () => {
        ;(e.scope.off(), es(t))
      }
    )
  },
  $n = () => {
    ;(ce && ce.scope.off(), es(null))
  }
function zr(e) {
  return e.vnode.shapeFlag & 4
}
let Rt = !1
function Kl(e, t = !1, s = !1) {
  t && Hs(t)
  const { props: n, children: r } = e.vnode,
    i = zr(e)
  ;(Sl(e, n, i, t), Ml(e, r, s || t))
  const l = i ? zl(e, t) : void 0
  return (t && Hs(!1), l)
}
function zl(e, t) {
  const s = e.type
  ;((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, fl)))
  const { setup: n } = s
  if (n) {
    Re()
    const r = (e.setupContext = n.length > 1 ? Jl(e) : null),
      i = Dt(e),
      l = Ht(n, e, 0, [e.props, r]),
      o = Wn(l)
    if ((He(), i(), (o || e.sp) && !$t(e) && yr(e), o)) {
      if ((l.then($n, $n), t))
        return l
          .then((c) => {
            Tn(e, c)
          })
          .catch((c) => {
            os(c, e, 0)
          })
      e.asyncDep = l
    } else Tn(e, l)
  } else qr(e)
}
function Tn(e, t, s) {
  ;(j(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Q(t) && (e.setupState = dr(t)),
    qr(e))
}
function qr(e, t, s) {
  const n = e.type
  e.render || (e.render = n.render || Me)
  {
    const r = Dt(e)
    Re()
    try {
      ul(e)
    } finally {
      ;(He(), r())
    }
  }
}
const ql = {
  get(e, t) {
    return (se(e, 'get', ''), e[t])
  },
}
function Jl(e) {
  const t = (s) => {
    e.exposed = s || {}
  }
  return { attrs: new Proxy(e.attrs, ql), slots: e.slots, emit: e.emit, expose: t }
}
function us(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(dr(Ii(e.exposed)), {
          get(t, s) {
            if (s in t) return t[s]
            if (s in Tt) return Tt[s](e)
          },
          has(t, s) {
            return s in t || s in Tt
          },
        }))
    : e.proxy
}
function Gl(e) {
  return j(e) && '__vccOpts' in e
}
const Ke = (e, t) => Di(e, t, Rt),
  Ql = '3.5.27'
let Ds
const An = typeof window < 'u' && window.trustedTypes
if (An)
  try {
    Ds = An.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const Jr = Ds ? (e) => Ds.createHTML(e) : (e) => e,
  Yl = 'http://www.w3.org/2000/svg',
  Zl = 'http://www.w3.org/1998/Math/MathML',
  Ie = typeof document < 'u' ? document : null,
  Mn = Ie && Ie.createElement('template'),
  Xl = {
    insert: (e, t, s) => {
      t.insertBefore(e, s || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, s, n) => {
      const r =
        t === 'svg'
          ? Ie.createElementNS(Yl, e)
          : t === 'mathml'
            ? Ie.createElementNS(Zl, e)
            : s
              ? Ie.createElement(e, { is: s })
              : Ie.createElement(e)
      return (
        e === 'select' &&
          n &&
          n.multiple != null &&
          r.setAttribute('multiple', n.multiple),
        r
      )
    },
    createText: (e) => Ie.createTextNode(e),
    createComment: (e) => Ie.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ie.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, s, n, r, i) {
      const l = s ? s.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); );
      else {
        Mn.innerHTML = Jr(
          n === 'svg' ? `<svg>${e}</svg>` : n === 'mathml' ? `<math>${e}</math>` : e
        )
        const o = Mn.content
        if (n === 'svg' || n === 'mathml') {
          const c = o.firstChild
          for (; c.firstChild; ) o.appendChild(c.firstChild)
          o.removeChild(c)
        }
        t.insertBefore(o, s)
      }
      return [l ? l.nextSibling : t.firstChild, s ? s.previousSibling : t.lastChild]
    },
  },
  eo = Symbol('_vtc')
function to(e, t, s) {
  const n = e[eo]
  ;(n && (t = (t ? [t, ...n] : [...n]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : s
        ? e.setAttribute('class', t)
        : (e.className = t))
}
const ts = Symbol('_vod'),
  Gr = Symbol('_vsh'),
  Qr = {
    name: 'show',
    beforeMount(e, { value: t }, { transition: s }) {
      ;((e[ts] = e.style.display === 'none' ? '' : e.style.display),
        s && t ? s.beforeEnter(e) : vt(e, t))
    },
    mounted(e, { value: t }, { transition: s }) {
      s && t && s.enter(e)
    },
    updated(e, { value: t, oldValue: s }, { transition: n }) {
      !t != !s &&
        (n
          ? t
            ? (n.beforeEnter(e), vt(e, !0), n.enter(e))
            : n.leave(e, () => {
                vt(e, !1)
              })
          : vt(e, t))
    },
    beforeUnmount(e, { value: t }) {
      vt(e, t)
    },
  }
function vt(e, t) {
  ;((e.style.display = t ? e[ts] : 'none'), (e[Gr] = !t))
}
const so = Symbol(''),
  no = /(?:^|;)\s*display\s*:/
function ro(e, t, s) {
  const n = e.style,
    r = X(s)
  let i = !1
  if (s && !r) {
    if (t)
      if (X(t))
        for (const l of t.split(';')) {
          const o = l.slice(0, l.indexOf(':')).trim()
          s[o] == null && Jt(n, o, '')
        }
      else for (const l in t) s[l] == null && Jt(n, l, '')
    for (const l in s) (l === 'display' && (i = !0), Jt(n, l, s[l]))
  } else if (r) {
    if (t !== s) {
      const l = n[so]
      ;(l && (s += ';' + l), (n.cssText = s), (i = no.test(s)))
    }
  } else t && e.removeAttribute('style')
  ts in e && ((e[ts] = i ? n.display : ''), e[Gr] && (n.display = 'none'))
}
const Pn = /\s*!important$/
function Jt(e, t, s) {
  if (O(s)) s.forEach((n) => Jt(e, t, n))
  else if ((s == null && (s = ''), t.startsWith('--'))) e.setProperty(t, s)
  else {
    const n = io(e, t)
    Pn.test(s) ? e.setProperty(rt(n), s.replace(Pn, ''), 'important') : (e[n] = s)
  }
}
const En = ['Webkit', 'Moz', 'ms'],
  Cs = {}
function io(e, t) {
  const s = Cs[t]
  if (s) return s
  let n = ze(t)
  if (n !== 'filter' && n in e) return (Cs[t] = n)
  n = qn(n)
  for (let r = 0; r < En.length; r++) {
    const i = En[r] + n
    if (i in e) return (Cs[t] = i)
  }
  return t
}
const In = 'http://www.w3.org/1999/xlink'
function On(e, t, s, n, r, i = fi(t)) {
  n && t.startsWith('xlink:')
    ? s == null
      ? e.removeAttributeNS(In, t.slice(6, t.length))
      : e.setAttributeNS(In, t, s)
    : s == null || (i && !Gn(s))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : Je(s) ? String(s) : s)
}
function jn(e, t, s, n, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    s != null && (e[t] = t === 'innerHTML' ? Jr(s) : s)
    return
  }
  const i = e.tagName
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const o = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = s == null ? (e.type === 'checkbox' ? 'on' : '') : String(s)
    ;((o !== c || !('_value' in e)) && (e.value = c),
      s == null && e.removeAttribute(t),
      (e._value = s))
    return
  }
  let l = !1
  if (s === '' || s == null) {
    const o = typeof e[t]
    o === 'boolean'
      ? (s = Gn(s))
      : s == null && o === 'string'
        ? ((s = ''), (l = !0))
        : o === 'number' && ((s = 0), (l = !0))
  }
  try {
    e[t] = s
  } catch {}
  l && e.removeAttribute(r || t)
}
function lo(e, t, s, n) {
  e.addEventListener(t, s, n)
}
function oo(e, t, s, n) {
  e.removeEventListener(t, s, n)
}
const Rn = Symbol('_vei')
function ao(e, t, s, n, r = null) {
  const i = e[Rn] || (e[Rn] = {}),
    l = i[t]
  if (n && l) l.value = n
  else {
    const [o, c] = co(t)
    if (n) {
      const h = (i[t] = po(n, r))
      lo(e, o, h, c)
    } else l && (oo(e, o, l, c), (i[t] = void 0))
  }
}
const Hn = /(?:Once|Passive|Capture)$/
function co(e) {
  let t
  if (Hn.test(e)) {
    t = {}
    let n
    for (; (n = e.match(Hn)); )
      ((e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0))
  }
  return [e[2] === ':' ? e.slice(3) : rt(e.slice(2)), t]
}
let Ss = 0
const fo = Promise.resolve(),
  uo = () => Ss || (fo.then(() => (Ss = 0)), (Ss = Date.now()))
function po(e, t) {
  const s = (n) => {
    if (!n._vts) n._vts = Date.now()
    else if (n._vts <= s.attached) return
    Pe(ho(n, s.value), t, 5, [n])
  }
  return ((s.value = e), (s.attached = uo()), s)
}
function ho(e, t) {
  if (O(t)) {
    const s = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        ;(s.call(e), (e._stopped = !0))
      }),
      t.map((n) => (r) => !r._stopped && n && n(r))
    )
  } else return t
}
const Dn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  go = (e, t, s, n, r, i) => {
    const l = r === 'svg'
    t === 'class'
      ? to(e, n, l)
      : t === 'style'
        ? ro(e, s, n)
        : ss(t)
          ? Vs(t) || ao(e, t, s, n, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : mo(e, t, n, l)
              )
            ? (jn(e, t, n),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                On(e, t, n, l, i, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !X(n))
              ? jn(e, ze(t), n, i, t)
              : (t === 'true-value'
                  ? (e._trueValue = n)
                  : t === 'false-value' && (e._falseValue = n),
                On(e, t, n, l))
  }
function mo(e, t, s, n) {
  if (n) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Dn(t) && j(s)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'autocorrect' ||
    (t === 'sandbox' && e.tagName === 'IFRAME') ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1
  }
  return Dn(t) && X(s) ? !1 : t in e
}
const xo = re({ patchProp: go }, Xl)
let Fn
function bo() {
  return Fn || (Fn = El(xo))
}
const _o = (...e) => {
  const t = bo().createApp(...e),
    { mount: s } = t
  return (
    (t.mount = (n) => {
      const r = yo(n)
      if (!r) return
      const i = t._component
      ;(!j(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = ''))
      const l = s(r, !1, vo(r))
      return (
        r instanceof Element &&
          (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        l
      )
    }),
    t
  )
}
function vo(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function yo(e) {
  return X(e) ? document.querySelector(e) : e
}
const Fs = 'portfolio-theme',
  Mt = It(!1)
let Ls = !1,
  $s,
  Ln
const Bs = (e) => {
    if (typeof document > 'u') return
    const t = document.documentElement
    e ? t.classList.add('dark') : t.classList.remove('dark')
  },
  Yr = () => {
    if (Ls || typeof window > 'u') return
    $s = window.matchMedia('(prefers-color-scheme: dark)')
    const e = window.localStorage.getItem(Fs),
      t = e ? e === 'dark' : $s.matches
    ;((Mt.value = t),
      Bs(t),
      (Ls = !0),
      (Ln = (s) => {
        window.localStorage.getItem(Fs) || ((Mt.value = s.matches), Bs(s.matches))
      }),
      $s.addEventListener('change', Ln))
  }
function wo() {
  !Ls && typeof window < 'u' && Yr()
  const e = (s) => {
    if (typeof window > 'u') return
    const n = !!s
    ;((Mt.value = n), window.localStorage.setItem(Fs, n ? 'dark' : 'light'), Bs(n))
  }
  return { isDark: Mt, toggleTheme: () => e(!Mt.value), setTheme: e }
}
const W = {
    name: 'Michael Sabado',
    nickname: 'Mike',
    role: 'Software Engineer',
    availabilityTag: null,
    intro:
      "I'm passionate about building scalable web applications and clean, maintainable code. I enjoy turning ideas into functional products and constantly learning new technologies.",
    summary:
      'I’m a software engineer who enjoys building practical web applications with a focus on clean code and thoughtful design. I like solving problems, improving systems, and learning new technologies along the way.',
    secondarySummary:
      'My experience includes working with frontend frameworks, backend APIs, and database-driven applications. I care about maintainability, performance, and creating software that’s easy to understand and evolve.',
    location: 'Philippines',
    availability: 'Open to select remote-first collaborations',
    metrics: [
      { label: 'Years Experience', value: '3+' },
      { label: 'Projects Completed', value: '10+' },
      { label: 'Technologies Used', value: '15+' },
    ],
    highlights: [
      'Scalable system design and implementation',
      'Accessible, user-focused development',
      'Clear and collaborative engineering',
    ],
    heroImage: {
      alt: 'Michael sitting with aesthetic lighting and plants',
      src: '/profile.jpg',
    },
    contact: {
      email: 'michaelsabado.ms04@gmail.com',
      location: 'Philippines',
      availability: null,
      note: 'Open to opportunities and collaborations. Share a short brief, and I’ll follow up promptly.',
      socials: [
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/michael-sabado-212a36147/',
          icon: 'linkedin',
        },
        { label: 'GitHub', url: 'https://github.com/michaelsabado', icon: 'github' },
        {
          label: 'Instagram',
          url: 'https://www.instagram.com/mike.dev2k/',
          icon: 'instagram',
        },
      ],
    },
  },
  ko = {
    class:
      'fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-slate-50/80 backdrop-blur-lg dark:border-slate-800/60 dark:bg-slate-950/70',
  },
  Co = { class: 'mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 md:px-8 lg:px-0' },
  So = { class: 'flex items-center justify-between gap-4' },
  $o = {
    href: '#hero',
    class:
      'flex flex-col text-left text-sm font-medium leading-tight text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300',
  },
  To = { class: 'text-lg font-semibold text-slate-900 dark:text-white' },
  Ao = {
    class:
      'hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex',
  },
  Mo = ['href'],
  Po = ['aria-label', 'aria-pressed'],
  Eo = { key: 0, class: 'inline-flex items-center' },
  Io = { key: 1, class: 'inline-flex items-center' },
  Oo = { class: 'flex items-center gap-3 md:hidden' },
  jo = ['aria-label', 'aria-pressed'],
  Ro = { key: 0, class: 'inline-flex items-center' },
  Ho = { key: 1, class: 'inline-flex items-center' },
  Do = ['aria-expanded'],
  Fo = {
    key: 0,
    class: 'h-5 w-5',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '1.5',
  },
  Lo = {
    key: 1,
    class: 'h-5 w-5',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '1.5',
  },
  Bo = {
    class:
      'mt-4 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm font-medium text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 md:hidden',
  },
  No = ['href'],
  Vo = {
    __name: 'Navbar',
    setup(e) {
      const t = [
          { label: 'About', href: '#about' },
          { label: 'Skills', href: '#skills' },
          { label: 'Projects', href: '#projects' },
          { label: 'Experience', href: '#experience' },
        ],
        { isDark: s, toggleTheme: n } = wo(),
        r = Ke(() => (s.value ? 'Switch to light mode' : 'Switch to dark mode')),
        i = It(!1),
        l = () => {
          i.value = !i.value
        },
        o = () => {
          i.value = !1
        },
        c = () => {
          o()
        }
      return (h, d) => (
        S(),
        $('header', ko, [
          u('nav', Co, [
            u('div', So, [
              u('a', $o, [
                u('span', To, P(H(W).name), 1),
                u('span', null, P(H(W).role), 1),
              ]),
              u('div', Ao, [
                (S(),
                $(
                  G,
                  null,
                  fe(t, (g) =>
                    u(
                      'a',
                      {
                        key: g.href,
                        href: g.href,
                        class:
                          'transition-colors hover:text-brand-600 dark:hover:text-brand-300',
                      },
                      P(g.label),
                      9,
                      Mo
                    )
                  ),
                  64
                )),
                d[4] ||
                  (d[4] = u(
                    'a',
                    {
                      href: '#contact',
                      class:
                        'rounded-full border border-slate-200 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-900 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-brand-500',
                    },
                    ' Connect ',
                    -1
                  )),
                u(
                  'button',
                  {
                    type: 'button',
                    class:
                      'inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 transition-colors hover:border-slate-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-slate-600',
                    'aria-label': r.value,
                    'aria-pressed': H(s),
                    onClick: d[0] || (d[0] = (...g) => H(n) && H(n)(...g)),
                  },
                  [
                    H(s)
                      ? (S(),
                        $('span', Eo, [
                          ...(d[2] ||
                            (d[2] = [
                              u(
                                'svg',
                                {
                                  class: 'h-5 w-5',
                                  viewBox: '0 0 24 24',
                                  fill: 'none',
                                  stroke: 'currentColor',
                                  'stroke-width': '1.5',
                                },
                                [
                                  u('path', {
                                    'stroke-linecap': 'round',
                                    'stroke-linejoin': 'round',
                                    d: 'M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z',
                                  }),
                                ],
                                -1
                              ),
                            ])),
                        ]))
                      : (S(),
                        $('span', Io, [
                          ...(d[3] ||
                            (d[3] = [
                              u(
                                'svg',
                                {
                                  class: 'h-5 w-5',
                                  viewBox: '0 0 24 24',
                                  fill: 'none',
                                  stroke: 'currentColor',
                                  'stroke-width': '1.5',
                                },
                                [
                                  u('path', {
                                    'stroke-linecap': 'round',
                                    'stroke-linejoin': 'round',
                                    d: 'M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m0 12.728l1.414-1.414m11.314-11.314l-1.414 1.414',
                                  }),
                                  u('circle', { cx: '12', cy: '12', r: '4' }),
                                ],
                                -1
                              ),
                            ])),
                        ])),
                  ],
                  8,
                  Po
                ),
              ]),
              u('div', Oo, [
                u(
                  'button',
                  {
                    type: 'button',
                    class:
                      'inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 transition-colors hover:border-slate-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-slate-600',
                    'aria-label': r.value,
                    'aria-pressed': H(s),
                    onClick: d[1] || (d[1] = (...g) => H(n) && H(n)(...g)),
                  },
                  [
                    H(s)
                      ? (S(),
                        $('span', Ro, [
                          ...(d[5] ||
                            (d[5] = [
                              u(
                                'svg',
                                {
                                  class: 'h-5 w-5',
                                  viewBox: '0 0 24 24',
                                  fill: 'none',
                                  stroke: 'currentColor',
                                  'stroke-width': '1.5',
                                },
                                [
                                  u('path', {
                                    'stroke-linecap': 'round',
                                    'stroke-linejoin': 'round',
                                    d: 'M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z',
                                  }),
                                ],
                                -1
                              ),
                            ])),
                        ]))
                      : (S(),
                        $('span', Ho, [
                          ...(d[6] ||
                            (d[6] = [
                              u(
                                'svg',
                                {
                                  class: 'h-5 w-5',
                                  viewBox: '0 0 24 24',
                                  fill: 'none',
                                  stroke: 'currentColor',
                                  'stroke-width': '1.5',
                                },
                                [
                                  u('path', {
                                    'stroke-linecap': 'round',
                                    'stroke-linejoin': 'round',
                                    d: 'M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m0 12.728l1.414-1.414m11.314-11.314l-1.414 1.414',
                                  }),
                                  u('circle', { cx: '12', cy: '12', r: '4' }),
                                ],
                                -1
                              ),
                            ])),
                        ])),
                  ],
                  8,
                  jo
                ),
                u(
                  'button',
                  {
                    type: 'button',
                    class:
                      'inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition-colors hover:border-slate-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200',
                    'aria-label': 'Toggle navigation menu',
                    'aria-expanded': i.value,
                    onClick: l,
                  },
                  [
                    i.value
                      ? (S(),
                        $('svg', Lo, [
                          ...(d[8] ||
                            (d[8] = [
                              u(
                                'path',
                                {
                                  'stroke-linecap': 'round',
                                  'stroke-linejoin': 'round',
                                  d: 'M6 18L18 6M6 6l12 12',
                                },
                                null,
                                -1
                              ),
                            ])),
                        ]))
                      : (S(),
                        $('svg', Fo, [
                          ...(d[7] ||
                            (d[7] = [
                              u(
                                'path',
                                {
                                  'stroke-linecap': 'round',
                                  'stroke-linejoin': 'round',
                                  d: 'M4 6h16M4 12h16M4 18h16',
                                },
                                null,
                                -1
                              ),
                            ])),
                        ])),
                  ],
                  8,
                  Do
                ),
              ]),
            ]),
            br(
              u(
                'div',
                Bo,
                [
                  (S(),
                  $(
                    G,
                    null,
                    fe(t, (g) =>
                      u(
                        'a',
                        {
                          key: g.href + '-mobile',
                          href: g.href,
                          class:
                            'rounded-lg px-3 py-2 text-base transition-colors hover:bg-slate-100 dark:hover:bg-slate-800',
                          onClick: c,
                        },
                        P(g.label),
                        9,
                        No
                      )
                    ),
                    64
                  )),
                  u(
                    'a',
                    {
                      href: '#contact',
                      class:
                        'mt-1 rounded-full border border-slate-200 px-4 py-2 text-xs uppercase tracking-[0.2em] text-center text-slate-900 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-brand-500',
                      onClick: c,
                    },
                    ' Connect '
                  ),
                ],
                512
              ),
              [[Qr, i.value]]
            ),
          ]),
        ])
      )
    },
  },
  Uo = { id: 'hero' },
  Wo = { class: 'grid gap-10 sm:gap-12 lg:grid-cols-[1.2fr,0.8fr]' },
  Ko = { class: 'order-2 space-y-8 text-pretty lg:order-1' },
  zo = {
    key: 0,
    class:
      'inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:border-slate-800 dark:text-slate-400',
  },
  qo = { class: 'space-y-4' },
  Jo = {
    class:
      'text-5xl font-semibold tracking-tight text-slate-900 text-balance lg:text-5xl xl:text-6xl dark:text-white',
  },
  Go = {
    class: 'text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300',
  },
  Qo = { class: 'grid gap-6 grid-cols-2 sm:grid-cols-3' },
  Yo = {
    class: 'text-[0.6rem] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400',
  },
  Zo = { class: 'mt-3 text-2xl font-semibold text-slate-900 dark:text-white' },
  Xo = {
    class:
      'order-1 relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-full text-white shadow-card sm:max-w-[250px] lg:order-2 lg:max-w-[350px]',
  },
  ea = { class: 'absolute inset-0' },
  ta = ['src', 'alt'],
  sa = {
    key: 1,
    class: 'h-full w-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950',
  },
  na = {
    __name: 'Hero',
    setup(e) {
      const t = Ke(() => W.heroImage?.src ?? ''),
        s = Ke(() => W.heroImage?.alt ?? `${W.name} workspace placeholder`),
        n = Ke(() => !!t.value)
      return (r, i) => (
        S(),
        $('section', Uo, [
          u('div', Wo, [
            u('div', Ko, [
              H(W).availabilityTag
                ? (S(), $('p', zo, P(H(W).availabilityTag), 1))
                : nt('', !0),
              u('div', qo, [
                u('h1', Jo, " Hi, it's " + P(H(W).nickname) + '. ', 1),
                u('p', Go, P(H(W).intro), 1),
              ]),
              i[0] ||
                (i[0] = u(
                  'div',
                  { class: 'flex flex-wrap gap-4' },
                  [
                    u('a', { href: '#projects', class: 'btn-primary' }, 'View projects'),
                    u('a', { href: '#contact', class: 'btn-ghost' }, 'Let’s collaborate'),
                  ],
                  -1
                )),
              u('dl', Qo, [
                (S(!0),
                $(
                  G,
                  null,
                  fe(
                    H(W).metrics,
                    (l) => (
                      S(),
                      $(
                        'div',
                        {
                          key: l.label,
                          class:
                            'rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-5 text-center shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60',
                        },
                        [u('dt', Yo, P(l.label), 1), u('dd', Zo, P(l.value), 1)]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            u('div', Xo, [
              u('div', ea, [
                n.value
                  ? (S(),
                    $(
                      'img',
                      {
                        key: 0,
                        src: t.value,
                        alt: s.value,
                        class: 'h-full w-full object-cover',
                        loading: 'lazy',
                      },
                      null,
                      8,
                      ta
                    ))
                  : (S(), $('div', sa)),
              ]),
              i[1] ||
                (i[1] = u(
                  'div',
                  {
                    class:
                      'relative flex h-full flex-col items-center justify-end gap-3 p-6 text-center sm:p-8',
                  },
                  null,
                  -1
                )),
            ]),
          ]),
        ])
      )
    },
  },
  ra = { id: 'about', class: 'space-y-0' },
  ia = { class: 'grid gap-8 lg:grid-cols-[0.5fr,1fr] lg:gap-10' },
  la = {
    class:
      "relative space-y-4 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-full before:bg-gradient-to-b before:from-brand-400/80 before:via-brand-500/40 before:to-transparent before:content-['']",
  },
  oa = { class: 'text-sm text-slate-500 dark:text-slate-400' },
  aa = {
    class:
      'space-y-6 text-base leading-relaxed text-slate-600 sm:space-y-8 dark:text-slate-300',
  },
  ca = { class: 'mt-6 border-t border-slate-200/70 pt-6 dark:border-slate-800' },
  fa = { class: 'mt-4 flex flex-wrap gap-3' },
  ua = {
    __name: 'About',
    setup(e) {
      return (t, s) => (
        S(),
        $('section', ra, [
          u('div', ia, [
            u('div', la, [
              s[0] || (s[0] = u('p', { class: 'section-heading' }, 'About', -1)),
              s[1] ||
                (s[1] = u(
                  'h2',
                  {
                    class:
                      'text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white',
                  },
                  ' Building Reliable Software. ',
                  -1
                )),
              u('p', oa, P(H(W).location) + ' · ' + P(H(W).availability), 1),
            ]),
            u('div', aa, [
              u('p', null, P(H(W).summary), 1),
              u('p', null, P(H(W).secondarySummary), 1),
              u('div', ca, [
                s[2] ||
                  (s[2] = u(
                    'p',
                    {
                      class:
                        'text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400',
                    },
                    ' Ways I can help ',
                    -1
                  )),
                u('div', fa, [
                  (S(!0),
                  $(
                    G,
                    null,
                    fe(
                      H(W).highlights,
                      (n) => (
                        S(),
                        $(
                          'span',
                          {
                            key: n,
                            class:
                              'rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200',
                          },
                          P(n),
                          1
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]),
          ]),
        ])
      )
    },
  },
  da = [
    {
      title: 'Languages & Web Technologies',
      description:
        'Shipping production interfaces across classic web stacks and modern TypeScript-driven builds.',
      items: ['PHP', 'JavaScript', 'TypeScript', 'Node.js', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frameworks, UI & Styling',
      description:
        'Pairing pragmatic frameworks with purposeful styling systems for maintainable UI layers.',
      items: ['Laravel', 'Vue.js', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'AJAX'],
    },
    {
      title: 'Backend, APIs & Architecture',
      description:
        'Designing resilient services and API contracts that keep cross-team delivery aligned.',
      items: ['RESTful APIs', 'MVC Architecture'],
    },
    {
      title: 'Cloud, DevOps & Databases',
      description:
        'Deploying and observing workloads across AWS surfaces with containerized workflows.',
      items: ['AWS (EC2, RDS, S3, Lambda)', 'Docker', 'MySQL'],
    },
    {
      title: 'Tools & Version Control',
      description:
        'Keeping collaboration calm through reliable tooling and transparent change tracking.',
      items: ['Git', 'GitHub', 'Bitbucket', 'Postman'],
    },
  ],
  pa = { id: 'skills', class: 'space-y-8' },
  ha = { class: 'grid gap-5 md:grid-cols-2 xl:grid-cols-3' },
  ga = { class: 'text-l font-semibold text-slate-900 dark:text-white' },
  ma = { class: 'mt-5 flex flex-wrap gap-2' },
  xa = {
    __name: 'Skills',
    setup(e) {
      return (t, s) => (
        S(),
        $('section', pa, [
          s[0] ||
            (s[0] = u(
              'div',
              { class: 'flex flex-col gap-3' },
              [
                u('p', { class: 'section-heading' }, 'Skills'),
                u(
                  'h2',
                  {
                    class:
                      'text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white',
                  },
                  ' Broad experience, applied with intention. '
                ),
                u(
                  'p',
                  { class: 'text-base text-slate-600 dark:text-slate-300' },
                  ' Strong fundamentals across frontend, backend, and cloud, with a focus on maintainable, production-ready solutions. '
                ),
              ],
              -1
            )),
          u('div', ha, [
            (S(!0),
            $(
              G,
              null,
              fe(
                H(da),
                (n) => (
                  S(),
                  $(
                    'article',
                    {
                      key: n.title,
                      class:
                        'flex flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-card sm:p-6 dark:border-slate-800/80 dark:bg-slate-900/60',
                    },
                    [
                      u('h3', ga, P(n.title), 1),
                      u('div', ma, [
                        (S(!0),
                        $(
                          G,
                          null,
                          fe(
                            n.items,
                            (r) => (
                              S(),
                              $(
                                'span',
                                {
                                  key: r,
                                  class:
                                    'rounded-full border border-slate-200/80 px-3 py-1 text-xs font-medium tracking-widest text-slate-600 dark:border-slate-700 dark:text-slate-300',
                                },
                                P(r),
                                1
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]
                  )
                )
              ),
              128
            )),
          ]),
        ])
      )
    },
  },
  ba = {
    class:
      'group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-card transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/70',
  },
  _a = { class: 'flex-1 space-y-6' },
  va = {
    class:
      'flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500',
  },
  ya = {
    class:
      'grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-center text-[0.8rem] font-semibold leading-none tracking-normal text-slate-700 dark:border-slate-700 dark:text-slate-200',
  },
  wa = { class: 'space-y-3 text-pretty' },
  ka = { class: 'text-2xl font-semibold text-slate-900 dark:text-white' },
  Ca = {
    class:
      'grid gap-4 rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm text-slate-600 dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-300',
  },
  Sa = { class: 'mt-1 leading-relaxed' },
  $a = { class: 'mt-1 leading-relaxed' },
  Ta = { class: 'space-y-3 text-pretty' },
  Aa = {
    class:
      'rounded-2xl bg-slate-100/80 p-4 text-sm text-slate-700 dark:bg-slate-800/50 dark:text-slate-200',
  },
  Ma = { class: 'mt-2 leading-relaxed' },
  Pa = { class: 'lg:w-[42%] space-y-4' },
  Ea = {
    class:
      'relative overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-100 dark:border-slate-800/70 dark:bg-slate-900/40',
  },
  Ia = ['src', 'alt'],
  Oa = { class: 'mt-3 flex flex-wrap gap-2' },
  ja = {
    __name: 'ProjectCard',
    props: {
      project: { type: Object, required: !0 },
      index: { type: Number, default: 0 },
    },
    setup(e) {
      const t = e,
        s = Ke(() => t.project.tech ?? []),
        n = Ke(() => t.index % 2 === 1),
        r = Ke(() => t.index + 1)
      return (i, l) => (
        S(),
        $('article', ba, [
          u(
            'div',
            {
              class: ut([
                'flex flex-col gap-8 lg:flex-row',
                { 'lg:flex-row-reverse': n.value },
              ]),
            },
            [
              u('div', _a, [
                u('div', va, [
                  u('span', ya, P(r.value), 1),
                  l[0] || (l[0] = u('span', null, 'Case Study', -1)),
                ]),
                u('div', wa, [u('h3', ka, P(e.project.title), 1)]),
                u('div', Ca, [
                  u('div', null, [
                    l[1] ||
                      (l[1] = u(
                        'p',
                        {
                          class:
                            'text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500',
                        },
                        ' Problem ',
                        -1
                      )),
                    u('p', Sa, P(e.project.problem), 1),
                  ]),
                  u('div', null, [
                    l[2] ||
                      (l[2] = u(
                        'p',
                        {
                          class:
                            'text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500',
                        },
                        ' Solution ',
                        -1
                      )),
                    u('p', $a, P(e.project.solution), 1),
                  ]),
                ]),
                u('div', Ta, [
                  u('div', Aa, [
                    l[3] ||
                      (l[3] = u(
                        'p',
                        {
                          class:
                            'text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300',
                        },
                        ' Result ',
                        -1
                      )),
                    u('p', Ma, P(e.project.result), 1),
                  ]),
                ]),
              ]),
              u('div', Pa, [
                u('div', Ea, [
                  u(
                    'img',
                    {
                      src: e.project.image.src,
                      alt: e.project.image.alt,
                      class: 'h-56 w-full object-cover md:h-64',
                      loading: 'lazy',
                    },
                    null,
                    8,
                    Ia
                  ),
                  l[4] ||
                    (l[4] = u(
                      'div',
                      {
                        class:
                          'absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent',
                      },
                      null,
                      -1
                    )),
                ]),
                u('div', null, [
                  l[5] ||
                    (l[5] = u(
                      'p',
                      {
                        class:
                          'text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500',
                      },
                      ' Tech ',
                      -1
                    )),
                  u('div', Oa, [
                    (S(!0),
                    $(
                      G,
                      null,
                      fe(
                        s.value,
                        (o) => (
                          S(),
                          $(
                            'span',
                            {
                              key: o,
                              class:
                                'inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-200',
                            },
                            P(o),
                            1
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
            ],
            2
          ),
        ])
      )
    },
  },
  Ra = [
    {
      title: 'Queue Management System',
      problem:
        'Long queues and disorganized client flow at the university registrar caused inconvenience and delays for both students and staff.',
      solution:
        'Developed a system that automates client flow using token-based queuing, ensuring students are served in order and reducing overcrowding in service areas. Built with a focus on usability and efficient office operations.',
      result:
        'Streamlined client flow, reduced waiting times, and improved the overall experience for students and staff across SAS offices.',
      tech: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'AJAX', 'jQuery'],
      github: null,
      demo: null,
      image: {
        alt: 'Dashboard UI showcasing metrics and device health cards',
        src: '/projects/qms-wf.jpg',
      },
    },
    {
      title: 'Online Health Diagnosis & E-Consultation System',
      problem:
        'Low health literacy among Filipinos leads to self-medication and potential health risks, with limited access to reliable medical guidance.',
      solution:
        'Developed system (iConsult) using Rapid Application Development methodology, providing symptom-based initial diagnosis and connecting users to professional health experts for online consultation.',
      result:
        'Improved access to reliable medical guidance, reduced self-medication risks, and enhanced overall health literacy among users.',
      tech: ['PHP', 'JavaScript', 'jQuery', 'Bootstrap', 'APIs', 'AJAX', 'jQuery'],
      github: null,
      demo: null,
      image: {
        alt: 'Component documentation screens with typography and color tokens',
        src: '/projects/iconsult-wf.jpg',
      },
    },
    {
      title: 'Online Exam/Quiz Generator with TOS and Computerized Class Record',
      problem:
        'Creating fair, competency-aligned exams and tracking student performance manually was time-consuming and prone to errors.',
      solution:
        'Developed system with Table of Specifications (TOS) integration, allowing teachers to generate exams from a question repository, link questions to competencies, and automatically compute student performance and class records.',
      result:
        'Streamlined exam creation, ensured competency coverage, and provided accurate, automated class performance tracking for students and instructors.',
      tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'AJAX', 'jQuery'],
      github: null,
      demo: null,
      image: {
        alt: 'Playbook UI with tasks and progress graph',
        src: '/projects/gentest-wf.jpg',
      },
    },
  ],
  Ha = { id: 'projects', class: 'space-y-10' },
  Da = { class: 'space-y-8' },
  Fa = {
    __name: 'Projects',
    setup(e) {
      return (t, s) => (
        S(),
        $('section', Ha, [
          s[0] ||
            (s[0] = u(
              'div',
              { class: 'flex flex-col gap-3' },
              [
                u('p', { class: 'section-heading' }, 'Projects'),
                u(
                  'h2',
                  {
                    class:
                      'text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white',
                  },
                  ' From idea to implementation. '
                ),
                u(
                  'p',
                  { class: 'text-base text-slate-600 dark:text-slate-300' },
                  ' Selected case studies highlighting full-stack development, technical problem-solving, and production-ready solutions. '
                ),
              ],
              -1
            )),
          u('div', Da, [
            (S(!0),
            $(
              G,
              null,
              fe(
                H(Ra),
                (n, r) => (
                  S(),
                  Ur(ja, { key: n.title, project: n, index: r }, null, 8, [
                    'project',
                    'index',
                  ])
                )
              ),
              128
            )),
          ]),
        ])
      )
    },
  },
  La = [
    {
      company: 'YNS Philippines Inc. - Makati City, Philippines',
      period: '2022 — Present',
      techStack: [
        'PHP (Laravel)',
        'CakePHP',
        'Vue.js',
        'TypeScript',
        'Tailwind CSS',
        'MySQL',
        'API',
      ],
      roles: [
        {
          title: 'Software Engineer II',
          period: '2024 — Present',
          contributions: [
            'Participated in full-stack feature delivery, workflow optimization, and broader system enhancements.',
            'Built backend and frontend components, integrated new modules, and supported project setup plus task coordination.',
            'Handled debugging, testing, code reviews, and post-release validation to keep systems stable.',
            'Mentored junior developers and suggested architecture as well as workflow improvements.',
            'Documented APIs, technical decisions, and communicated trade-offs to stakeholders.',
          ],
        },
        {
          title: 'Software Engineer I',
          period: '2022 — 2024',
          contributions: [
            'Actively participated in the full development lifecycle of web apps such as realtime comms, document management, and urgent feature requests.',
            'Developed backend APIs and wired them into responsive, interactive Vue frontends.',
            'Handled framework upgrades, dependency management, and third-party integrations to keep the stack current.',
            'Translated requirements into production-ready code while keeping documentation accurate.',
            'Partnered with cross-functional teammates through Agile ceremonies including stand-ups, planning, grooming, and retros.',
            'Maintained clean, scalable codebases under guidance from senior engineers.',
          ],
        },
      ],
    },
    {
      company: 'PASCALIA Asia - Ho Chi Minh City, Vietnam',
      period: '2025 — 2026',
      techStack: [
        'PHP (Laravel)',
        'Vue 3',
        'TypeScript',
        'Tailwind CSS',
        'MySQL',
        'API',
        'Node.js',
        'Fastify',
        'Nuxt',
      ],
      roles: [
        {
          title: 'Full Stack Developer',
          period: '2025 — 2026',
          contributions: [
            'Developed full-stack features for a global e-commerce system across admin and customer modules.',
            'Implemented RESTful APIs and backend services to unlock new platform capabilities.',
            'Boosted scalability and maintainability by refactoring critical flows and hardening feature toggles.',
            'Investigated and resolved production as well as staging issues through disciplined root-cause analysis.',
            'Collaborated with cross-functional squads on continuous testing, integration, and ship-readiness.',
          ],
        },
      ],
    },
  ],
  Ba = { id: 'experience', class: 'space-y-10' },
  Na = {
    class: 'flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4',
  },
  Va = {
    class: 'flex items-center gap-3 py-2 sm:py-0',
    role: 'group',
    'aria-label': 'Work experience section',
  },
  Ua = ['aria-checked'],
  Wa = { class: 'relative space-y-10' },
  Ka = { class: 'flex flex-col gap-4 md:flex-row md:items-center md:justify-between' },
  za = { class: 'mt-2 text-2xl font-semibold text-slate-900 dark:text-white' },
  qa = { class: 'text-sm text-slate-500 dark:text-slate-400' },
  Ja = { class: 'text-base font-semibold text-slate-800 dark:text-slate-100' },
  Ga = { class: 'mt-6 grid gap-4' },
  Qa = { class: 'flex flex-wrap items-center justify-between gap-3' },
  Ya = { class: 'text-xl font-semibold text-slate-900 dark:text-white' },
  Za = {
    class:
      'inline-flex items-center rounded-full border border-slate-200/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:text-slate-300',
  },
  Xa = {
    class:
      'mt-4 space-y-3 text-[0.7rem] leading-5 sm:text-sm text-slate-600 dark:text-slate-300',
  },
  ec = {
    key: 0,
    class: 'mt-6 border-t border-dashed border-slate-200 pt-4 dark:border-slate-800',
  },
  tc = { class: 'mt-3 flex flex-wrap gap-2' },
  sc = {
    __name: 'WorkExperience',
    setup(e) {
      const t = It(!1)
      return (s, n) => (
        S(),
        $('section', Ba, [
          u('div', Na, [
            n[2] ||
              (n[2] = u(
                'div',
                { class: 'flex flex-col gap-3' },
                [
                  u('p', { class: 'section-heading' }, 'Work Experience'),
                  u(
                    'h2',
                    {
                      class:
                        'text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white',
                    },
                    ' Real-world engineering experience. '
                  ),
                  u(
                    'p',
                    { class: 'text-base text-slate-600 dark:text-slate-300' },
                    ' Designing, building, and maintaining production systems. '
                  ),
                ],
                -1
              )),
            u('div', Va, [
              n[1] ||
                (n[1] = u(
                  'span',
                  { class: 'text-sm text-slate-500 dark:text-slate-400' },
                  ' Show details ',
                  -1
                )),
              u(
                'button',
                {
                  type: 'button',
                  role: 'switch',
                  'aria-checked': t.value,
                  'aria-label': 'Toggle work experience details',
                  class: ut([
                    'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border border-slate-300 bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:border-slate-600 dark:bg-slate-700 dark:focus:ring-offset-slate-900',
                    t.value ? 'border-brand-500 bg-brand-500 dark:bg-brand-500' : '',
                  ]),
                  onClick: n[0] || (n[0] = (r) => (t.value = !t.value)),
                },
                [
                  u(
                    'span',
                    {
                      class: ut([
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform',
                        t.value ? 'translate-x-5' : 'translate-x-0.5',
                      ]),
                    },
                    null,
                    2
                  ),
                ],
                10,
                Ua
              ),
            ]),
          ]),
          br(
            u(
              'div',
              Wa,
              [
                n[8] ||
                  (n[8] = u(
                    'span',
                    {
                      class:
                        'pointer-events-none absolute left-4 top-0 h-full w-px -translate-x-1/2 bg-slate-200 md:block dark:bg-slate-800',
                    },
                    null,
                    -1
                  )),
                (S(!0),
                $(
                  G,
                  null,
                  fe(
                    H(La),
                    (r) => (
                      S(),
                      $(
                        'article',
                        { key: r.company, class: 'relative transition-all pl-12' },
                        [
                          n[7] ||
                            (n[7] = u(
                              'span',
                              {
                                class:
                                  'pointer-events-none absolute left-4 top-8 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-brand-500 shadow-[0_0_0_8px_rgba(14,165,233,0.2)] md:block dark:border-slate-900',
                              },
                              null,
                              -1
                            )),
                          u('div', Ka, [
                            u('div', null, [
                              n[3] ||
                                (n[3] = u(
                                  'p',
                                  {
                                    class:
                                      'text-xs uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500',
                                  },
                                  ' Company ',
                                  -1
                                )),
                              u('h3', za, P(r.company), 1),
                            ]),
                            u('div', qa, [
                              u('p', Ja, P(r.period), 1),
                              u(
                                'p',
                                null,
                                P(r.roles.length) +
                                  ' ' +
                                  P(r.roles.length === 1 ? 'role' : 'roles'),
                                1
                              ),
                            ]),
                          ]),
                          u('div', Ga, [
                            (S(!0),
                            $(
                              G,
                              null,
                              fe(
                                r.roles,
                                (i) => (
                                  S(),
                                  $(
                                    'div',
                                    {
                                      key: `${r.company}-${i.title}-${i.period ?? 'current'}`,
                                      class:
                                        'rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm transition hover:border-brand-200 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900/60',
                                    },
                                    [
                                      u('div', Qa, [
                                        u('div', null, [
                                          n[4] ||
                                            (n[4] = u(
                                              'p',
                                              {
                                                class:
                                                  'text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500',
                                              },
                                              ' Role ',
                                              -1
                                            )),
                                          u('h4', Ya, P(i.title), 1),
                                        ]),
                                        u('span', Za, P(i.period || r.period), 1),
                                      ]),
                                      u('ul', Xa, [
                                        (S(!0),
                                        $(
                                          G,
                                          null,
                                          fe(
                                            i.contributions,
                                            (l) => (
                                              S(),
                                              $(
                                                'li',
                                                { key: l, class: 'flex gap-2 sm:gap-3' },
                                                [
                                                  n[5] ||
                                                    (n[5] = u(
                                                      'span',
                                                      {
                                                        class:
                                                          'mt-[0.35rem] h-2 w-2 flex-shrink-0 rounded-full bg-brand-400',
                                                      },
                                                      null,
                                                      -1
                                                    )),
                                                  u('span', null, P(l), 1),
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          r.techStack?.length
                            ? (S(),
                              $('div', ec, [
                                n[6] ||
                                  (n[6] = u(
                                    'span',
                                    {
                                      class:
                                        'text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500',
                                    },
                                    ' Stack ',
                                    -1
                                  )),
                                u('div', tc, [
                                  (S(!0),
                                  $(
                                    G,
                                    null,
                                    fe(
                                      r.techStack,
                                      (i) => (
                                        S(),
                                        $(
                                          'span',
                                          {
                                            key: `${r.company}-${i}`,
                                            class:
                                              'inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-200',
                                          },
                                          P(i),
                                          1
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                              ]))
                            : nt('', !0),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ],
              512
            ),
            [[Qr, t.value]]
          ),
        ])
      )
    },
  },
  nc = { id: 'download', class: 'px-4 py-10 text-center sm:px-6 md:px-8' },
  rc = {
    key: 0,
    class:
      'mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400',
  },
  ic = { key: 0 },
  lc = { key: 1 },
  Bn = '/docs/MICHAEL-SABADO_CV.pdf',
  oc = 'MICHAEL-SABADO_CV.pdf',
  ac = {
    __name: 'DownloadCV',
    setup(e) {
      const t = It(null),
        s = It(null)
      function n(i) {
        return i < 1024
          ? `${i} B`
          : i < 1024 * 1024
            ? `${(i / 1024).toFixed(1)} KB`
            : `${(i / (1024 * 1024)).toFixed(1)} MB`
      }
      function r(i) {
        return i
          ? new Date(i).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
          : null
      }
      return (
        Cr(async () => {
          try {
            const i = await fetch(Bn, { method: 'HEAD' }),
              l = i.headers.get('Content-Length')
            l && (t.value = n(Number(l)))
            const o = i.headers.get('Last-Modified')
            o && (s.value = r(o))
          } catch {}
        }),
        (i, l) => (
          S(),
          $('section', nc, [
            l[1] ||
              (l[1] = u(
                'p',
                {
                  class:
                    'text-xs uppercase tracking-[0.3em] text-slate-500 sm:text-sm dark:text-slate-400',
                },
                ' Get a copy of my CV ',
                -1
              )),
            u('div', { class: 'mt-6 flex justify-center' }, [
              u(
                'a',
                {
                  href: Bn,
                  download: oc,
                  class: 'btn-ghost w-full max-w-xs justify-center',
                  role: 'button',
                },
                ' Download CV '
              ),
            ]),
            t.value || s.value
              ? (S(),
                $('p', rc, [
                  l[0] || (l[0] = u('span', null, 'PDF', -1)),
                  t.value ? (S(), $('span', ic, '· ' + P(t.value), 1)) : nt('', !0),
                  s.value ? (S(), $('span', lc, '· ' + P(s.value), 1)) : nt('', !0),
                ]))
              : nt('', !0),
          ])
        )
      )
    },
  },
  cc = { id: 'contact' },
  fc = { class: 'grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[0.9fr,1.1fr]' },
  uc = { class: 'space-y-6 text-pretty' },
  dc = { class: 'text-base text-slate-600 text-pretty sm:text-lg dark:text-slate-300' },
  pc = { key: 0 },
  hc = { class: 'mt-2 text-base text-slate-800 sm:text-lg dark:text-slate-200' },
  gc = { class: 'mt-2 text-base text-slate-800 sm:text-lg dark:text-slate-200' },
  mc = {
    class:
      'space-y-6 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-card sm:p-8 dark:border-slate-800/80 dark:bg-slate-900/60',
  },
  xc = { class: 'space-y-4' },
  bc = { class: 'mt-3 flex flex-wrap gap-2' },
  _c = ['href'],
  vc = { class: 'flex items-center justify-center gap-2 whitespace-nowrap' },
  yc = { class: 'text-slate-500 dark:text-slate-400', 'aria-hidden': 'true' },
  wc = { key: 0, class: 'h-4 w-4', viewBox: '0 0 24 24', fill: 'currentColor' },
  kc = { key: 1, class: 'h-4 w-4', viewBox: '0 0 24 24', fill: 'currentColor' },
  Cc = { key: 2, class: 'h-4 w-4', viewBox: '0 0 24 24', fill: 'currentColor' },
  Sc = {
    __name: 'Contact',
    setup(e) {
      const t = `mailto:${W.contact.email}`
      return (s, n) => (
        S(),
        $('section', cc, [
          u('div', fc, [
            u('div', uc, [
              n[2] || (n[2] = u('p', { class: 'section-heading' }, 'Contact', -1)),
              n[3] ||
                (n[3] = u(
                  'h2',
                  {
                    class:
                      'text-3xl font-semibold tracking-tight text-slate-900 text-balance dark:text-white',
                  },
                  ' Build with me. ',
                  -1
                )),
              u('p', dc, P(H(W).contact.note), 1),
              H(W).contact.availability
                ? (S(),
                  $('div', pc, [
                    n[0] ||
                      (n[0] = u(
                        'p',
                        {
                          class:
                            'text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400',
                        },
                        ' Availability ',
                        -1
                      )),
                    u('p', hc, P(H(W).contact.availability), 1),
                  ]))
                : nt('', !0),
              u('div', null, [
                n[1] ||
                  (n[1] = u(
                    'p',
                    {
                      class:
                        'text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400',
                    },
                    ' Based in ',
                    -1
                  )),
                u('p', gc, P(H(W).contact.location), 1),
              ]),
            ]),
            u('div', mc, [
              u('div', xc, [
                n[4] ||
                  (n[4] = u(
                    'p',
                    {
                      class:
                        'text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400',
                    },
                    ' Email ',
                    -1
                  )),
                u(
                  'a',
                  {
                    href: t,
                    class:
                      'break-words text-base font-semibold text-slate-900 underline-offset-4 transition hover:text-brand-600 sm:text-2xl dark:text-white dark:hover:text-brand-300',
                  },
                  P(H(W).contact.email),
                  1
                ),
              ]),
              u('div', null, [
                n[8] ||
                  (n[8] = u(
                    'p',
                    {
                      class:
                        'text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400',
                    },
                    ' Social ',
                    -1
                  )),
                u('div', bc, [
                  (S(!0),
                  $(
                    G,
                    null,
                    fe(
                      H(W).contact.socials,
                      (r) => (
                        S(),
                        $(
                          'a',
                          {
                            key: r.label,
                            href: r.url,
                            target: '_blank',
                            rel: 'noreferrer noopener',
                            class:
                              'rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-200 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500',
                          },
                          [
                            u('span', vc, [
                              u('span', yc, [
                                r.icon === 'linkedin'
                                  ? (S(),
                                    $('svg', wc, [
                                      ...(n[5] ||
                                        (n[5] = [
                                          u(
                                            'path',
                                            {
                                              d: 'M4.98 3.5C4.98 4.61 4.08 5.5 2.99 5.5C1.9 5.5 1 4.61 1 3.5C1 2.4 1.9 1.5 2.99 1.5C4.08 1.5 4.98 2.4 4.98 3.5ZM1.2 21.5H4.78V7.98H1.2V21.5ZM8.58 7.98H12.04V9.56H12.09C12.57 8.66 13.79 7.72 15.54 7.72C19.2 7.72 19.86 10.22 19.86 13.35V21.5H16.28V14.19C16.28 12.53 16.25 10.4 14.01 10.4C11.75 10.4 11.41 12.21 11.41 14.07V21.5H7.83V7.98H8.58Z',
                                            },
                                            null,
                                            -1
                                          ),
                                        ])),
                                    ]))
                                  : r.icon === 'github'
                                    ? (S(),
                                      $('svg', kc, [
                                        ...(n[6] ||
                                          (n[6] = [
                                            u(
                                              'path',
                                              {
                                                'fill-rule': 'evenodd',
                                                'clip-rule': 'evenodd',
                                                d: 'M12 1.5C6.21 1.5 1.5 6.21 1.5 12C1.5 16.62 4.44 20.51 8.55 21.98C9.05 22.07 9.23 21.77 9.23 21.51C9.23 21.28 9.22 20.62 9.22 19.84C6.73 20.37 6.18 18.68 6.18 18.68C5.72 17.53 5.03 17.22 5.03 17.22C4.06 16.57 5.1 16.58 5.1 16.58C6.16 16.65 6.72 17.66 6.72 17.66C7.68 19.32 9.27 18.84 9.87 18.58C9.96 17.91 10.22 17.45 10.5 17.21C8.35 16.97 6.08 16.19 6.08 12.52C6.08 11.5 6.44 10.67 7.03 10.03C6.93 9.79 6.59 8.86 7.12 7.65C7.12 7.65 7.9 7.38 9.22 8.32C9.97 8.11 10.78 8.01 11.58 8.01C12.38 8.01 13.19 8.11 13.94 8.32C15.26 7.38 16.04 7.65 16.04 7.65C16.57 8.86 16.23 9.79 16.13 10.03C16.72 10.67 17.08 11.5 17.08 12.52C17.08 16.2 14.8 16.96 12.64 17.2C12.99 17.5 13.31 18.07 13.31 18.92C13.31 20.04 13.3 21.14 13.3 21.51C13.3 21.77 13.48 22.08 13.99 21.98C18.09 20.51 21.03 16.62 21.03 12C21.03 6.21 16.32 1.5 10.53 1.5H12Z',
                                              },
                                              null,
                                              -1
                                            ),
                                          ])),
                                      ]))
                                    : r.icon === 'instagram'
                                      ? (S(),
                                        $('svg', Cc, [
                                          ...(n[7] ||
                                            (n[7] = [
                                              u(
                                                'path',
                                                {
                                                  d: 'M16.5 2H7.5C4.46 2 2 4.46 2 7.5V16.5C2 19.54 4.46 22 7.5 22H16.5C19.54 22 22 19.54 22 16.5V7.5C22 4.46 19.54 2 16.5 2ZM20 16.5C20 18.43 18.43 20 16.5 20H7.5C5.57 20 4 18.43 4 16.5V7.5C4 5.57 5.57 4 7.5 4H16.5C18.43 4 20 5.57 20 7.5V16.5Z',
                                                },
                                                null,
                                                -1
                                              ),
                                              u(
                                                'path',
                                                {
                                                  d: 'M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15Z',
                                                },
                                                null,
                                                -1
                                              ),
                                              u(
                                                'circle',
                                                { cx: '17.5', cy: '6.5', r: '1.5' },
                                                null,
                                                -1
                                              ),
                                            ])),
                                        ]))
                                      : nt('', !0),
                              ]),
                              u('span', null, P(r.label), 1),
                            ]),
                          ],
                          8,
                          _c
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
              u(
                'div',
                { class: 'flex w-full flex-col gap-3 pt-2 sm:flex-row sm:gap-4' },
                [
                  u(
                    'a',
                    { href: t, class: 'btn-primary w-full sm:w-auto' },
                    'Start a project'
                  ),
                ]
              ),
            ]),
          ]),
        ])
      )
    },
  },
  $c = {
    class:
      'border-t border-slate-200/60 bg-white/70 py-10 text-sm text-slate-500 dark:border-slate-800/60 dark:bg-slate-950/60 dark:text-slate-400',
  },
  Tc = {
    class:
      'mx-auto grid w-full max-w-6xl gap-6 px-4 sm:grid-cols-[1.2fr,0.9fr,0.9fr] sm:px-6 lg:px-0',
  },
  Ac = { class: 'space-y-3' },
  Mc = { class: 'text-xs text-slate-400 dark:text-slate-500' },
  Pc = { 'aria-label': 'Footer navigation' },
  Ec = {
    class:
      'mt-4 flex flex-wrap gap-4 text-sm font-medium text-slate-600 dark:text-slate-300',
  },
  Ic = ['href'],
  Oc = { class: 'mt-3 text-sm' },
  jc = { class: 'mt-4 flex items-center gap-3' },
  Rc = ['href', 'aria-label'],
  Hc = { class: 'sr-only' },
  Dc = {
    key: 0,
    viewBox: '0 0 24 24',
    class: 'h-5 w-5 fill-current',
    'aria-hidden': 'true',
  },
  Fc = {
    key: 1,
    viewBox: '0 0 24 24',
    class: 'h-5 w-5 fill-current',
    'aria-hidden': 'true',
  },
  Lc = {
    key: 2,
    viewBox: '0 0 24 24',
    class: 'h-5 w-5 fill-current',
    'aria-hidden': 'true',
  },
  Bc = {
    key: 3,
    viewBox: '0 0 24 24',
    class: 'h-5 w-5 stroke-current',
    fill: 'none',
    'stroke-width': '1.5',
    'aria-hidden': 'true',
  },
  Nn = 'UTC+8',
  Nc = {
    __name: 'Footer',
    setup(e) {
      const t = [
          { label: 'Home', href: '#hero' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' },
        ],
        s = W.contact?.socials ?? []
      return (n, r) => (
        S(),
        $('footer', $c, [
          u('div', Tc, [
            u('div', Ac, [
              u(
                'p',
                null,
                ' © ' +
                  P(new Date().getFullYear()) +
                  ' ' +
                  P(H(W).name) +
                  '. All rights reserved. ',
                1
              ),
              r[0] ||
                (r[0] = u(
                  'p',
                  {
                    class:
                      'text-xs uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500',
                  },
                  ' Code. Build. Deliver. ',
                  -1
                )),
              u(
                'p',
                Mc,
                ' Based in ' + P(H(W).location ?? H(W).contact?.location) + ' • ' + P(Nn),
                1
              ),
            ]),
            u('div', null, [
              r[1] ||
                (r[1] = u(
                  'p',
                  {
                    class:
                      'text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500',
                  },
                  ' Quick links ',
                  -1
                )),
              u('nav', Pc, [
                u('ul', Ec, [
                  (S(),
                  $(
                    G,
                    null,
                    fe(t, (i) =>
                      u('li', { key: i.href }, [
                        u(
                          'a',
                          {
                            href: i.href,
                            class:
                              'transition hover:text-slate-900 focus-visible:text-slate-900 dark:hover:text-white dark:focus-visible:text-white',
                          },
                          P(i.label),
                          9,
                          Ic
                        ),
                      ])
                    ),
                    64
                  )),
                ]),
              ]),
            ]),
            u('div', null, [
              r[6] ||
                (r[6] = u(
                  'p',
                  {
                    class:
                      'text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500',
                  },
                  ' Stay connected ',
                  -1
                )),
              u('p', Oc, P(H(W).contact?.location) + ' • ' + P(Nn), 1),
              u('div', jc, [
                (S(!0),
                $(
                  G,
                  null,
                  fe(
                    H(s),
                    (i) => (
                      S(),
                      $(
                        'a',
                        {
                          key: i.label,
                          href: i.url,
                          target: '_blank',
                          rel: 'noreferrer noopener',
                          class:
                            'inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 text-slate-600 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-800/60 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white',
                          'aria-label': i.label,
                        },
                        [
                          u('span', Hc, P(i.label), 1),
                          i.icon === 'github'
                            ? (S(),
                              $('svg', Dc, [
                                ...(r[2] ||
                                  (r[2] = [
                                    u(
                                      'path',
                                      {
                                        d: 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.306.763-1.606-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.004 0c2.292-1.553 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.804 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12Z',
                                      },
                                      null,
                                      -1
                                    ),
                                  ])),
                              ]))
                            : i.icon === 'linkedin'
                              ? (S(),
                                $('svg', Fc, [
                                  ...(r[3] ||
                                    (r[3] = [
                                      u(
                                        'path',
                                        {
                                          d: 'M4.98 3.5a2.5 2.5 0 1 1-5.002 0 2.5 2.5 0 0 1 5.003 0ZM.25 8.5h4.5V24h-4.5zm8.5 0h4.31v2.11h.06c.6-1.14 2.07-2.34 4.26-2.34C21.65 8.27 24 10.52 24 15v9h-4.5v-8.22c0-1.96-.04-4.48-2.73-4.48-2.73 0-3.14 2.14-3.14 4.34V24H9z',
                                        },
                                        null,
                                        -1
                                      ),
                                    ])),
                                ]))
                              : i.icon === 'instagram'
                                ? (S(),
                                  $('svg', Lc, [
                                    ...(r[4] ||
                                      (r[4] = [
                                        u(
                                          'path',
                                          {
                                            d: 'M7 2c-2.757 0-5 2.243-5 5v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm6.5-3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z',
                                          },
                                          null,
                                          -1
                                        ),
                                      ])),
                                  ]))
                                : (S(),
                                  $('svg', Bc, [
                                    ...(r[5] ||
                                      (r[5] = [
                                        u(
                                          'path',
                                          {
                                            d: 'M4 12h16',
                                            'stroke-linecap': 'round',
                                            'stroke-linejoin': 'round',
                                          },
                                          null,
                                          -1
                                        ),
                                        u(
                                          'path',
                                          {
                                            d: 'M12 4v16',
                                            'stroke-linecap': 'round',
                                            'stroke-linejoin': 'round',
                                          },
                                          null,
                                          -1
                                        ),
                                      ])),
                                  ])),
                        ],
                        8,
                        Rc
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
          ]),
        ])
      )
    },
  },
  Vc = { class: 'min-h-screen text-slate-900 dark:text-slate-100' },
  Uc = {
    class:
      'mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-24 pt-28 sm:gap-12 sm:px-6 lg:gap-16 lg:px-0 lg:pt-32',
  },
  Wc = {
    __name: 'App',
    setup(e) {
      return (t, s) => (
        S(),
        $('div', Vc, [
          te(Vo),
          u('main', Uc, [
            te(na, { class: 'mb-20' }),
            te(ua, { class: 'mb-20' }),
            te(xa, { class: 'mb-20' }),
            te(Fa, { class: 'mb-20' }),
            te(sc, { class: 'mb-20' }),
            te(Sc),
            te(ac),
          ]),
          te(Nc),
        ])
      )
    },
  }
Yr()
_o(Wc).mount('#app')
