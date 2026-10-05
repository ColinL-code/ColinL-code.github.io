// Substack-style table of contents: a small bar of lines on the left (one per
// heading, darker for the section you're reading). Click the bar to open the
// list of titles; click a title to jump there; click outside to close.
(function () {
  var headings = document.querySelectorAll('.post h2, .post h3');
  if (headings.length < 2) return;

  var nav = document.createElement('nav');
  nav.className = 'toc';
  nav.setAttribute('aria-label', 'Table of contents');

  var bar = document.createElement('button');
  bar.className = 'toc-bar';
  bar.setAttribute('aria-label', 'Show contents');

  var menu = document.createElement('div');
  menu.className = 'toc-menu';

  var lines = [], links = [];
  headings.forEach(function (h) {
    var sub = h.tagName === 'H3' ? ' toc-sub' : '';

    var line = document.createElement('span');
    line.className = 'toc-line' + sub;
    bar.appendChild(line);
    lines.push(line);

    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.className = sub.trim();
    a.textContent = h.textContent;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      h.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', '#' + h.id);
    });
    menu.appendChild(a);
    links.push(a);
  });

  nav.appendChild(bar);
  nav.appendChild(menu);
  document.body.appendChild(nav);

  bar.addEventListener('click', function () { nav.classList.toggle('open'); });
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) nav.classList.remove('open');
  });

  // Highlight the last heading that has scrolled past the top third of the screen.
  function update() {
    var current = 0;
    headings.forEach(function (h, i) {
      if (h.getBoundingClientRect().top < window.innerHeight / 3) current = i;
    });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      current = headings.length - 1; // at the bottom: last section
    }
    lines.forEach(function (l, i) { l.classList.toggle('active', i === current); });
    links.forEach(function (a, i) { a.classList.toggle('active', i === current); });
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
