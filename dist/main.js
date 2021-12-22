(() => {
  'use strict';
  var t = {
      625: (t, e, a) => {
        t.exports = a.p + '97be26bc16795b881b8b.png';
      },
    },
    e = {};
  function a(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var s = (e[r] = { exports: {} });
    return t[r](s, s.exports, a), s.exports;
  }
  (a.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (t) {
      if ('object' == typeof window) return window;
    }
  })()),
    (() => {
      var t;
      a.g.importScripts && (t = a.g.location + '');
      var e = a.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var r = e.getElementsByTagName('script');
        r.length && (t = r[r.length - 1].src);
      }
      if (!t)
        throw new Error(
          'Automatic publicPath is not supported in this browser',
        );
      (t = t
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (a.p = t);
    })(),
    (() => {
      a(625);
      const t = (e) => {
        const a = document.createElement(e.tag);
        return (
          e.class.length > 0 && a.classList.add(...e.class),
          e.textContent && (a.textContent = e.textContent),
          e.attribute &&
            Object.keys(e.attribute).forEach((t) => {
              a.setAttribute(t, e.attribute[t]);
            }),
          e.children &&
            e.children.forEach((e) => {
              a.appendChild(t(e));
            }),
          a
        );
      };
      !(async function (e) {
        !(function (t) {
          const e = document.querySelector('#tv-series-container');
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          t.forEach((t) => {
            e.appendChild(t);
          });
        })(
          (
            await Promise.all(
              [
                {
                  name: 'Squid game',
                  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt10919420',
                },
                {
                  name: 'Game of Thrones',
                  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt0944947',
                },
                {
                  name: 'Dexter',
                  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt0773262',
                },
                {
                  name: 'Grey’s Anatomy',
                  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt0413573',
                },
                {
                  name: 'The Office',
                  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt0386676',
                },
                {
                  name: 'Succession',
                  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt7660850',
                },
                {
                  name: 'Rick & Morty',
                  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt2861424',
                },
                {
                  name: 'The Walking Dead',
                  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt1520211',
                },
              ].map(async (t) =>
                (async function (t) {
                  const e = await fetch(t.url, { method: 'GET' }),
                    a = await e.json(),
                    {
                      name: r,
                      image: { medium: o },
                    } = a;
                  return { name: r, cover: o };
                })(t),
              ),
            )
          )
            .map((t) => {
              return {
                tag: 'article',
                class: ['serie', 'flex', 'flex-col'],
                children: [
                  {
                    tag: 'img',
                    class: [],
                    attribute: { src: (e = t).cover, alt: e.name },
                  },
                  {
                    tag: 'div',
                    class: [],
                    children: [
                      { tag: 'h2', class: [], textContent: e.name },
                      {
                        tag: 'div',
                        class: ['flex', 'justify-between', 'items-baseline'],
                        children: [
                          {
                            tag: 'i',
                            class: ['fas', 'fa-heart', 'text-red-600'],
                          },
                          { tag: 'p', class: [], textContent: '2 likes' },
                        ],
                      },
                    ],
                  },
                  {
                    tag: 'button',
                    class: ['bg-stone-300'],
                    textContent: 'Comment',
                  },
                ],
              };
              var e;
            })
            .map((e) => t(e)),
        );
      })();
    })();
})();
//# sourceMappingURL=main.js.map
