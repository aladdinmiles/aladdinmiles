(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [872],
  {
    7557: function (n, t, e) {
      Promise.resolve().then(e.t.bind(e, 3222, 23)),
        Promise.resolve().then(e.bind(e, 431)),
        Promise.resolve().then(e.bind(e, 4914)),
        Promise.resolve().then(e.bind(e, 3839)),
        Promise.resolve().then(e.bind(e, 750));
    },
    4914: function (n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, {
          BottomSection: function () {
            return u;
          },
          HeroContent: function () {
            return s;
          },
          HeroContentTextArea: function () {
            return f;
          },
          HeroSection: function () {
            return l;
          }
        });
      var o = e(230),
        i = e(7247),
        r = e(8600);
      function c() {
        let n = (0, o._)([
          '\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 40px;\n  width: ',
          ';\n'
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function a() {
        let n = (0, o._)(['\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 16px;\n']);
        return (
          (a = function () {
            return n;
          }),
          n
        );
      }
      let l = r.Z.div({
          backgroundColor: '#FFF5F8',
          display: 'flex',
          flexDirection: 'row',
          padding: ''.concat((0, i.Wk)(100), ' ').concat((0, i.so)(80)),
          alignItems: 'center',
          justifyContent: 'space-between',
          '& img': { width: (0, i.so)(616), height: (0, i.so)(600), objectFit: 'cover', objectPosition: 'center' }
        }),
        s = r.Z.div(c(), (0, i.so)(560)),
        f = r.Z.div(a()),
        u = r.Z.div({
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'row',
          padding: ''
            .concat((0, i.Wk)(81), ' ')
            .concat((0, i.so)(80), ' ')
            .concat((0, i.Wk)(79)),
          alignItems: 'center',
          gap: (0, i.so)(54),
          justifyContent: 'space-between',
          '& img': { width: (0, i.so)(586), height: (0, i.so)(600), objectFit: 'cover', objectPosition: 'center' }
        });
    },
    3839: function (n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, {
          Card: function () {
            return _;
          },
          CardContent: function () {
            return W;
          },
          CardHeader: function () {
            return S;
          },
          Content: function () {
            return D;
          },
          ContentArea: function () {
            return C;
          },
          Header: function () {
            return y;
          },
          HeaderSection: function () {
            return F;
          },
          ItemRows: function () {
            return v;
          },
          LegalContainerView: function () {
            return B;
          },
          MainContent: function () {
            return I;
          },
          NewLink: function () {
            return H;
          },
          SideLink: function () {
            return T;
          },
          SideNav: function () {
            return R;
          },
          SmallerHeader: function () {
            return w;
          },
          Text: function () {
            return j;
          },
          Wrapper: function () {
            return b;
          }
        });
      var o = e(230),
        i = e(984),
        r = e.n(i),
        c = e(6968),
        a = e.n(c),
        l = e(9855),
        s = e.n(l),
        f = e(7247),
        u = e(8600),
        d = e(1396),
        g = e.n(d),
        p = e(4033),
        h = e(431);
      function x() {
        let n = (0, o._)([
          '\n  display: flex;\n  width: 100%;\n  height: auto;\n  padding: ',
          ' ',
          ';\n  justify-content: center;\n  align-items: center;\n'
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function m() {
        let n = (0, o._)(['\n  display: flex;\n  align-items: flex-start;\n  gap: 80px;\n']);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        let n = (0, o._)([
          '\n  color: #515665;\n  font-size: ',
          ';\n  font-style: normal;\n  line-height: 140%;\n  padding: ',
          ' ',
          ';\n'
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      let b = u.Z.section({
          width: '100%',
          padding: ''.concat((0, f.Wk)(95), ' ').concat((0, f.so)(135)),
          flexDirection: 'column',
          display: 'flex',
          gap: (0, f.Wk)(50)
        }),
        w = u.Z.p([
          r().style,
          { fontSize: (0, f.JB)(16), color: '#FF1654', textTransform: 'uppercase', lineHeight: '150%' }
        ]),
        y = u.Z.p([r().style, { fontSize: (0, f.JB)(32), color: '#1D2029', lineHeight: '150%' }]),
        F = u.Z.div({ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }),
        v = u.Z.div({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 0,
          gap: (0, f.so)(24)
        }),
        C = u.Z.div({
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          gap: (0, f.Wk)(24),
          padding: '0px'
        }),
        Z = (n) => {
          switch (n) {
            case 0:
              return {
                backgroundColor: '#D9FFE8',
                '&:hover': { backgroundColor: '#194C2E', '& p': { color: '#ffffff' } }
              };
            case 1:
              return {
                backgroundColor: '#FFE5EC',
                '&:hover': { backgroundColor: '#5C0A20', '& p': { color: '#ffffff' } }
              };
            case 2:
              return {
                backgroundColor: '#FFF0E5',
                '&:hover': { backgroundColor: '#662B00', '& p': { color: '#ffffff' } }
              };
            case 3:
              return {
                backgroundColor: '#EBF2FF',
                '&:hover': { backgroundColor: '#0A275C', '& p': { color: '#ffffff' } }
              };
          }
        },
        _ = u.Z.div((n) => {
          let { index: t } = n;
          return [
            {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: (0, f.so)(572),
              padding: ''.concat((0, f.Wk)(69), ' ').concat((0, f.so)(40)),
              borderRadius: (0, f.so)(16),
              height: (0, f.Wk)(240),
              gap: (0, f.so)(24),
              '& img': { width: (0, f.so)(120), height: (0, f.so)(120), objectFit: 'cover', objectPosition: 'center' }
            },
            Z(t)
          ];
        }),
        W = u.Z.div({ display: 'flex', flexDirection: 'column', gap: (0, f.Wk)(12), width: (0, f.so)(329) }),
        j = (0, u.Z)(h.RaleText)({ fontSize: (0, f.JB)(22) }),
        S = (0, u.Z)(h.RaleText)([a().style, { color: '#1D2029' }]),
        B = u.Z.section(x(), (0, f.Wk)(80), (0, f.so)(100)),
        D = u.Z.div(m()),
        R = u.Z.aside({ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }),
        I = u.Z.article([
          {
            width: (0, f.so)(977),
            margin: 'auto !important',
            '& p': {
              fontWeight: 400,
              margin: 'auto !important',
              ...s().style,
              color: '#515665',
              fontSize: (0, f.JB)(22),
              lineHeight: '160%',
              padding: ''.concat((0, f.Wk)(12))
            }
          }
        ]),
        H = (0, u.Z)(g())(k(), (0, f.JB)(16), (0, f.Wk)(12), (0, f.so)(10)),
        T = (0, u.Z)(H)((n) => {
          let { href: t } = n,
            e = (0, p.usePathname)();
          return [
            {
              ':hover': { color: '#FF1654' },
              ':active': { color: '#FF1654', borderLeft: ''.concat((0, f.so)(4), ' solid #FF1654') }
            },
            e === t && { color: '#FF1654', borderLeft: ''.concat((0, f.so)(4), ' solid #FF1654') }
          ];
        });
    },
    431: function (n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, {
          AppDownload: function () {
            return J;
          },
          AppDownloadArea: function () {
            return I;
          },
          Arrow: function () {
            return Y;
          },
          BigCircle: function () {
            return q;
          },
          BlueBackground: function () {
            return A;
          },
          ButtonContainer: function () {
            return T;
          },
          ColoredHalf: function () {
            return v;
          },
          ColoredText: function () {
            return _;
          },
          ContentView: function () {
            return w;
          },
          DownloadContent: function () {
            return M;
          },
          DownloadHeader: function () {
            return E;
          },
          HeroImage: function () {
            return P;
          },
          HeroSection: function () {
            return y;
          },
          Line: function () {
            return S;
          },
          MainView: function () {
            return b;
          },
          ManText: function () {
            return D;
          },
          MultiStyleText: function () {
            return Z;
          },
          Page404: function () {
            return $;
          },
          Partners: function () {
            return z;
          },
          PinkBackground: function () {
            return O;
          },
          QRCodeBackground: function () {
            return H;
          },
          RaleBase: function () {
            return B;
          },
          RaleText: function () {
            return R;
          },
          RaleTextWhite: function () {
            return V;
          },
          SB: function () {
            return K;
          },
          SmallMultiStyleText: function () {
            return X;
          },
          SmallboldText: function () {
            return U;
          },
          StartShoppingAreaLeft: function () {
            return G;
          },
          StartShoppingAreaRight: function () {
            return Q;
          },
          StoreButtons: function () {
            return N;
          },
          TextContentArea: function () {
            return W;
          },
          TextWithSVG: function () {
            return j;
          },
          Trusted: function () {
            return L;
          },
          WhiteHalf: function () {
            return C;
          }
        });
      var o = e(7437),
        i = e(3424),
        r = e.n(i),
        c = e(7945),
        a = e.n(c),
        l = e(7676),
        s = e.n(l),
        f = e(2821),
        u = e.n(f),
        d = e(7247),
        g = e(9538),
        p = e(8600),
        h = e(6691),
        x = e.n(h),
        m = e(1396),
        k = e.n(m);
      let b = p.Z.div({ width: '100%', minHeight: '100%', backgroundColor: '#ffffff' }),
        w = p.Z.div({ width: '100%' }),
        y = p.Z.section({ height: (0, d.Wk)(824), width: '100%', display: 'flex', flexDirection: 'row' }),
        F = (0, g.F4)({
          from: { transform: 'translate3d(0px, '.concat((0, d.Wk)(-90), ' , 0px)') },
          '50%': { transform: 'translate3d(0px, '.concat((0, d.Wk)(90), ' , 0px)') },
          '90%': { transform: 'translate3d(0px, '.concat((0, d.Wk)(-100), ' , 0px)') },
          to: { transform: 'translate3d(0px, '.concat((0, d.Wk)(-90), ' , 0px)') }
        }),
        v = p.Z.div({
          height: (0, d.Wk)(824),
          width: '50%',
          background: '#FFF5F8',
          borderBottomRightRadius: (0, d.so)(160),
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          '& img': { animation: ''.concat(F, ' 5s ease infinite') }
        }),
        C = p.Z.div({ height: (0, d.Wk)(824), width: '50%' }),
        Z = p.Z.h1([r().style, { fontSize: (0, d.JB)(44), color: '#1D2029' }]),
        _ = p.Z.span({ color: '#FF1453' }),
        W = p.Z.div({
          margin: ''
            .concat((0, d.Wk)(168), ' ')
            .concat((0, d.so)(24), ' ')
            .concat((0, d.Wk)(120), ' ')
            .concat((0, d.so)(100))
        }),
        j = p.Z.div({ display: 'inline-block' }),
        S = () =>
          (0, o.jsx)('svg', {
            width: (0, d.so)(154),
            height: (0, d.Wk)(8),
            viewBox: '0 0 154 8',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, o.jsx)('path', {
              id: 'Vector',
              d: 'M2 5.64611C28.1648 2.81791 94.7954 -1.0708 152 6',
              stroke: '#FF1F7D',
              'stroke-width': '4',
              'stroke-linecap': 'round'
            })
          }),
        B = (n) => {
          let { className: t, children: e } = n;
          return (0, o.jsx)('p', { className: ''.concat(s().className, ' ').concat(t), children: e });
        },
        D = p.Z.p([
          a().style,
          { fontSize: (0, d.JB)(16), color: '#1D2029', textTransform: 'uppercase', lineHeight: '150%' }
        ]),
        R = (0, p.Z)(B)({ color: '#515665', fontSize: (0, d.JB)(22), lineHeight: '160%' }),
        I = p.Z.div({
          display: 'flex',
          flexDirection: 'row',
          gap: (0, d.so)(24),
          alignItems: 'center',
          marginTop: (0, d.Wk)(40)
        }),
        H = p.Z.div({
          width: (0, d.so)(140),
          height: (0, d.so)(140),
          borderRadius: (0, d.so)(140),
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FF3251',
          display: 'flex'
        }),
        T = p.Z.div({ display: 'flex', flexDirection: 'row', gap: (0, d.so)(10), alignItems: 'center' }),
        N = (0, p.Z)(k())({}),
        P = (0, p.Z)(x())({
          width: (0, d.so)(600),
          height: (0, d.Wk)(600),
          objectFit: 'contain',
          alignSelf: 'center',
          objectPosition: 'center'
        }),
        z = p.Z.div({ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: (0, d.so)(16) }),
        L = p.Z.div({
          margin: ''
            .concat((0, d.Wk)(0), ' ')
            .concat((0, d.so)(24), ' ')
            .concat((0, d.Wk)(40), ' ')
            .concat((0, d.so)(100))
        }),
        A = p.Z.section({
          padding: ''.concat((0, d.Wk)(100), ' ').concat((0, d.so)(80)),
          width: '100%',
          backgroundColor: '#002466',
          alignItems: 'center',
          justifyContent: 'center'
        }),
        J = p.Z.div({
          background: 'url(/images/dotBg.png), no-repeat',
          width: (0, d.so)(1280),
          height: (0, d.Wk)(480),
          display: 'flex',
          backgroundSize: 'cover',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }),
        M = p.Z.div({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: (0, d.Wk)(40),
          width: (0, d.so)(1220),
          height: '100%',
          backgroundColor: '#00000012',
          borderTopLeftRadius: (0, d.so)(178),
          borderBottomRightRadius: (0, d.so)(178)
        }),
        E = (0, p.Z)(R)([u().style, { color: '#ffffff', fontSize: (0, d.JB)(32) }]),
        V = (0, p.Z)(R)({ color: '#ffffff', textAlign: 'center', width: (0, d.so)(440), fontSize: (0, d.JB)(24) }),
        O = p.Z.section({
          backgroundColor: '#FFF5F8',
          borderTopRightRadius: (0, d.so)(160),
          width: '100%',
          display: 'flex',
          flexDirection: 'row'
        }),
        G = p.Z.div({
          width: '50%',
          padding: ''
            .concat((0, d.Wk)(162), ' ')
            .concat((0, d.so)(80), ' ')
            .concat((0, d.Wk)(92)),
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          gap: (0, d.Wk)(40)
        }),
        Q = p.Z.div({
          width: '50%',
          padding: ''.concat((0, d.Wk)(92), ' ').concat((0, d.so)(80)),
          position: 'relative',
          '& img': {
            width: (0, d.so)(404),
            height: (0, d.Wk)(640),
            position: 'absolute',
            top: (0, d.Wk)(60),
            right: (0, d.so)(195),
            objectFit: 'contain',
            objectPosition: 'center'
          }
        }),
        q = p.Z.div({
          borderRadius: (0, d.so)(560),
          backgroundColor: '#FF80A1',
          backdropFilter: 'blur('.concat((0, d.so)(43.75), ')'),
          width: (0, d.Wk)(560),
          height: (0, d.Wk)(560),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }),
        K = p.Z.div({
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: (0, d.so)(16),
          '& img': { width: (0, d.so)(32), height: (0, d.Wk)(48), objectFit: 'contain', objectPosition: 'center' }
        }),
        U = (0, p.Z)(R)([u().style]),
        X = (0, p.Z)(Z)({ fontSize: (0, d.JB)(32) }),
        Y = () =>
          (0, o.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '25',
            height: '24',
            viewBox: '0 0 25 24',
            fill: 'none',
            children: (0, o.jsx)('path', {
              d: 'M12.5 4L11.09 5.41L16.67 11H4.5V13H16.67L11.09 18.59L12.5 20L20.5 12L12.5 4Z',
              fill: 'white'
            })
          }),
        $ = p.Z.div({
          height: (0, d.Wk)(520),
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          display: 'flex'
        });
    },
    750: function (n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, {
          Button: function () {
            return f;
          }
        });
      var o = e(7437),
        i = e(6566),
        r = e.n(i),
        c = e(7247),
        a = e(8600),
        l = e(1396),
        s = e.n(l);
      e(2265);
      let f = (n) => {
          let { children: t, href: e = '/#' } = n;
          return (0, o.jsx)(u, { href: e, children: (0, o.jsx)(d, { className: r().className, children: t }) });
        },
        u = (0, a.Z)(s())({
          backgroundColor: '#FF1654',
          width: (0, c.so)(240),
          height: (0, c.Wk)(56),
          borderRadius: (0, c.so)(4),
          alignItems: 'center',
          justifyContent: 'center',
          display: 'inline-flex',
          textDecoration: 'none'
        }),
        d = a.Z.span({
          fontSize: (0, c.JB)(16),
          color: '#ffffff',
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          '& svg': { strokeWidth: (0, c.so)(24), height: (0, c.so)(24) }
        });
    },
    7247: function (n, t, e) {
      'use strict';
      e.d(t, {
        JB: function () {
          return r;
        },
        Wk: function () {
          return i;
        },
        so: function () {
          return o;
        }
      });
      let o = function (n) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1440;
          return ''.concat((n / t) * 100, 'vw');
        },
        i = function (n) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 924;
          return ''.concat((n / t) * 100, 'vh');
        },
        r = (n, t) => o(n, t);
    },
    984: function (n) {
      n.exports = {
        style: { fontFamily: "'__Manrope_b2bd30', '__Manrope_Fallback_b2bd30'", fontWeight: 600, fontStyle: 'normal' },
        className: '__className_b2bd30'
      };
    },
    9855: function (n) {
      n.exports = {
        style: { fontFamily: "'__Raleway_9224eb', '__Raleway_Fallback_9224eb'", fontWeight: 400, fontStyle: 'normal' },
        className: '__className_9224eb'
      };
    },
    6968: function (n) {
      n.exports = {
        style: { fontFamily: "'__Raleway_40ac20', '__Raleway_Fallback_40ac20'", fontWeight: 600, fontStyle: 'normal' },
        className: '__className_40ac20'
      };
    },
    6566: function (n) {
      n.exports = {
        style: { fontFamily: "'__Manrope_d410de', '__Manrope_Fallback_d410de'", fontWeight: 400, fontStyle: 'normal' },
        className: '__className_d410de'
      };
    },
    4033: function (n, t, e) {
      n.exports = e(8165);
    },
    230: function (n, t, e) {
      'use strict';
      function o(n, t) {
        return t || (t = n.slice(0)), Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(t) } }));
      }
      e.d(t, {
        _: function () {
          return o;
        }
      });
    }
  },
  function (n) {
    n.O(0, [107, 971, 596, 744], function () {
      return n((n.s = 7557));
    }),
      (_N_E = n.O());
  }
]);
