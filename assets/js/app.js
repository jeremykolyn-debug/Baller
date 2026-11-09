(function () {
  "use strict";
  var B = window.BALLER;
  if (!B) return;

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }

  var ICON = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8-9.2L1 2h7l4.8 6.3L18.9 2zm-1.2 18h1.9L7.1 3.9H5.1L17.7 20z"/></svg>',
    discord: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.6 1.3a18.4 18.4 0 0 0-5.6 0L8.6 3a19.7 19.7 0 0 0-4.9 1.4C.6 9.1-.3 13.6.1 18.1a19.9 19.9 0 0 0 6 3l1.3-2.1a12.9 12.9 0 0 1-2-1l.5-.4a14.2 14.2 0 0 0 12.2 0l.5.4c-.6.4-1.3.7-2 1l1.3 2.1a19.8 19.8 0 0 0 6-3c.5-5.2-.8-9.7-3.6-13.7zM8 15.4c-1.2 0-2.2-1.1-2.2-2.4S6.8 10.6 8 10.6s2.2 1.1 2.2 2.4-1 2.4-2.2 2.4zm8 0c-1.2 0-2.2-1.1-2.2-2.4s1-2.4 2.2-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4z"/></svg>',
    wiki: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h12l4 4v12H4z"/><path d="M8 12h8M8 16h5M8 8h4"/></svg>',
    star: "★",
  };

  function isWin(a, b) {
    if (a === "W") return true;
    if (a === "FF" || a === "L") return false;
    if (b === "FF" || b === "L") return true;
    return Number(a) > Number(b);
  }
  function champion(ev) {
    return (ev.placements || []).find(function (p) { return p.place === "1st"; });
  }
  function eventUrl(ev) { return "event.html?id=" + encodeURIComponent(ev.id); }
  function statusChip(ev) {
    if (ev.status === "live") return '<span class="chip live"><span class="dot"></span>Live</span>';
    if (ev.status === "upcoming") return '<span class="chip upcoming"><span class="dot"></span>Upcoming</span>';
    return '<span class="chip done">Completed</span>';
  }
  var events = B.events.slice().sort(function (a, b) { return (b.start || "").localeCompare(a.start || ""); });

  /* ---------- shared: nav ---------- */
  var nav = $("nav");
  if (nav) {
    var toggle = nav.querySelector(".nav-toggle");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); });
    });
    var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 20); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- shared: footer ---------- */
  var footer = $("footer");
  if (footer) {
    footer.innerHTML =
      '<div class="wrap footer-inner">' +
        '<a href="./" class="brand"><img src="assets/img/baller-logo.png" alt=""><span class="display brand-word">Baller</span></a>' +
        '<small>© ' + new Date().getFullYear() + ' Baller. Rainbow Six Siege is a trademark of Ubisoft. Not affiliated with Ubisoft.</small>' +
        '<div class="socials">' +
          '<a href="' + B.org.twitter + '" target="_blank" rel="noopener" aria-label="Baller on X">' + ICON.x + "</a>" +
          '<a href="' + B.org.discord + '" target="_blank" rel="noopener" aria-label="Baller Discord">' + ICON.discord + "</a>" +
          '<a href="' + B.org.liquipedia + '" target="_blank" rel="noopener" aria-label="Baller on Liquipedia">' + ICON.wiki + "</a>" +
        "</div>" +
      "</div>";
  }

  /* =========================================================
     HOME
     ========================================================= */
  if ($("events-grid")) {
    var done = events.filter(function (e) { return e.status === "completed"; });
    var teamEntries = B.events.reduce(function (n, e) { return n + (e.teams || 0); }, 0);
    var crewSet = {};
    B.events.forEach(function (e) {
      Object.keys(e.talent || {}).forEach(function (k) {
        e.talent[k].forEach(function (n) { crewSet[n.replace(/\s*\(.*\)$/, "")] = 1; });
      });
    });

    var stats = [
      { n: B.events.length, l: "Events Hosted" },
      { n: teamEntries + "+", l: "Team Entries" },
      { n: "$1.9K+", l: "Prize Money (USD eq.)" },
      { n: Object.keys(crewSet).length + "+", l: "Casters & Crew" },
    ];
    $("stats").innerHTML = stats.map(function (s) {
      return '<div class="stat"><div class="display num grad-text">' + esc(s.n) + '</div><div class="lbl">' + esc(s.l) + "</div></div>";
    }).join("");

    // Ticker: grand finals + champions
    var tItems = done.map(function (e) {
      var f = e.final;
      var winA = isWin(f.sa, f.sb);
      var w = winA ? f.a : f.b, l = winA ? f.b : f.a;
      var ws = winA ? f.sa : f.sb, ls = winA ? f.sb : f.sa;
      return '<div class="ticker-item"><span class="tag">' + esc(e.short) + "</span>" + esc(w) + " " + ws + '<span class="x">–</span>' + ls + " " + esc(l) + '<span class="x">///</span></div>';
    });
    tItems.push('<div class="ticker-item"><span class="tag">NEXT</span>More Baller events coming soon<span class="x">///</span></div>');
    var tHtml = tItems.join("");
    $("ticker").innerHTML = tHtml + tHtml + tHtml + tHtml;

    // Event cards
    $("events-grid").innerHTML = events.map(function (e, i) {
      var c = champion(e);
      return (
        '<a class="event-card reveal" href="' + eventUrl(e) + '" style="--accent:' + e.accent + ";transition-delay:" + i * 80 + 'ms">' +
          '<div class="banner">' +
            '<img src="assets/img/baller-logo.png" alt="">' +
            '<div class="display big"><small>' + esc(e.season) + "</small>" + esc(e.name.replace(/^Baller\s+/, "")) + "</div>" +
          "</div>" +
          '<div class="body">' +
            '<div class="meta-row">' + statusChip(e) + '<span class="chip">' + esc(e.type) + '</span><span class="chip">' + esc(e.dates) + "</span></div>" +
            '<dl class="kv" style="margin:0">' +
              "<div><dt>Prize</dt><dd>" + esc(e.prize) + "</dd></div>" +
              "<div><dt>Teams</dt><dd>" + esc(e.teams) + "</dd></div>" +
              "<div><dt>Region</dt><dd>NA</dd></div>" +
            "</dl>" +
            (c
              ? '<div class="champ"><div class="trophy">' + ICON.trophy + '</div><div><div class="lbl">Champion</div><div class="name">' + esc(c.team) + "</div></div></div>"
              : '<div class="champ"><div class="trophy">' + ICON.trophy + '</div><div><div class="lbl">Champion</div><div class="name">TBD</div></div></div>') +
          "</div>" +
          '<span class="go">' + ICON.arrow + "</span>" +
        "</a>"
      );
    }).join("");

    // Champions
    $("champ-grid").innerHTML = done.map(function (e, i) {
      var c = champion(e);
      if (!c) return "";
      var f = e.final;
      var winA = isWin(f.sa, f.sb);
      var opp = winA ? f.b : f.a;
      var ws = winA ? f.sa : f.sb, ls = winA ? f.sb : f.sa;
      var mvp = (e.awards || []).find(function (a) { return a.award === "Event MVP"; });
      return (
        '<div class="champ-card reveal" style="transition-delay:' + i * 80 + 'ms">' +
          '<div class="display bg-num">' + esc(e.short.split(" ")[0]) + "</div>" +
          '<div class="ev">' + esc(e.name) + " · " + esc(e.season) + "</div>" +
          '<h3 class="display">' + esc(c.team) + "</h3>" +
          '<div class="score"><span class="n">' + ws + "–" + ls + '</span><span class="vs">vs ' + esc(opp) + "</span></div>" +
          (c.roster ? '<div class="roster">' + c.roster.map(function (p) { return "<span>" + esc(p) + "</span>"; }).join("") + "</div>" : "") +
          (mvp ? '<div class="mvp"><span class="star">' + ICON.star + "</span>Event MVP: <b>" + esc(mvp.player) + "</b></div>" : "") +
        "</div>"
      );
    }).join("");

    // Crew
    $("crew-grid").innerHTML = B.staff.map(function (s) {
      return '<div class="crew"><div class="avatar">' + esc(s.name.charAt(0).toUpperCase()) + '</div><div><div class="n">' + esc(s.name) + '</div><div class="r">' + esc(s.role) + "</div></div></div>";
    }).join("");
    var casters = {};
    B.events.forEach(function (e) { ((e.talent || {}).Commentators || []).forEach(function (n) { casters[n] = 1; }); });
    $("talent-strip").innerHTML = "<b>On the call:</b> " + Object.keys(casters).map(esc).join(" · ");

    // Partners
    $("partners-grid").innerHTML = B.partners.map(function (p) {
      var inner = '<div class="display pn">' + esc(p.name) + '</div><div class="pr">' + esc(p.role) + "</div>";
      return p.url
        ? '<a class="partner" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + inner + "</a>"
        : '<div class="partner">' + inner + "</div>";
    }).join("");
  }

  /* =========================================================
     EVENT PAGE
     ========================================================= */
  var root = $("event-root");
  if (root) {
    var id = new URLSearchParams(location.search).get("id");
    var ev = B.events.find(function (e) { return e.id === id; }) || events[0];
    document.title = ev.name + " " + ev.season + " | Baller";
    document.documentElement.style.setProperty("--accent", ev.accent);

    var html = "";

    // Hero
    html +=
      '<section class="ev-hero">' +
        '<div class="fx-grid"></div><div class="fx-glow"></div>' +
        '<img class="logo-bg" src="assets/img/baller-logo.png" alt="">' +
        '<div class="wrap" style="position:relative">' +
          '<div class="crumbs"><a href="./">Home</a> / <a href="./#events">Events</a> / ' + esc(ev.short) + "</div>" +
          '<div class="meta-row">' + statusChip(ev) + '<span class="chip">' + esc(ev.type) + '</span><span class="chip">' + esc(ev.tier) + "</span></div>" +
          '<h1 class="display">' + esc(ev.name) + '<span class="season">' + esc(ev.season) + "</span></h1>" +
          '<p class="lead">' + esc(ev.summary) + "</p>" +
          '<dl class="ev-meta">' +
            "<div><dt>Dates</dt><dd>" + esc(ev.dates) + "</dd></div>" +
            "<div><dt>Prize Pool</dt><dd>" + esc(ev.prize) + "</dd></div>" +
            "<div><dt>Teams</dt><dd>" + esc(ev.teams) + "</dd></div>" +
            "<div><dt>Region</dt><dd>" + esc(ev.region) + "</dd></div>" +
            "<div><dt>Platform</dt><dd>" + esc(ev.platform) + "</dd></div>" +
            "<div><dt>Organizers</dt><dd>" + esc(["Baller"].concat(ev.coOrganizers || []).join(" × ")) + "</dd></div>" +
          "</dl>" +
        "</div>" +
      "</section>";

    html += '<div class="wrap">';

    // Grand final
    if (ev.final) {
      var f = ev.final, aw = isWin(f.sa, f.sb);
      html +=
        '<section class="ev-section reveal"><span class="eyebrow">Grand Final</span><h2 class="display">The <span class="grad-text">Decider</span></h2>' +
          '<div class="scoreboard">' +
            '<div class="sb-team ' + (aw ? "win" : "lose") + '"><span class="tag">' + (aw ? "Champion" : "Runner-up") + "</span>" + esc(f.a) + "</div>" +
            '<div class="sb-score"><span class="' + (aw ? "w" : "l") + '">' + f.sa + '</span><span class="sep">:</span><span class="' + (aw ? "l" : "w") + '">' + f.sb + "</span></div>" +
            '<div class="sb-team right ' + (aw ? "lose" : "win") + '"><span class="tag">' + (aw ? "Runner-up" : "Champion") + "</span>" + esc(f.b) + "</div>" +
            (f.maps ? '<div class="sb-maps">' + f.maps.map(function (m) {
              var mm = m.match(/^(.*)\s(\S+)$/);
              return mm ? "<span>" + esc(mm[1]) + "<b>" + esc(mm[2]) + "</b></span>" : "<span>" + esc(m) + "</span>";
            }).join("") + "</div>" : "") +
          "</div>" +
        "</section>";
    }

    // Placements
    if (ev.placements && ev.placements.length) {
      html +=
        '<section class="ev-section reveal"><span class="eyebrow">Final Standings</span><h2 class="display">Placements</h2><div class="podium">' +
        ev.placements.map(function (p) {
          var cls = p.place === "1st" ? "p1" : p.place === "2nd" ? "p2" : "p3";
          return '<div class="place ' + cls + '"><div class="pl">' + esc(p.place) + '</div><div class="tm">' + esc(p.team) + "</div>" +
            (p.prize ? '<div class="pz">' + esc(p.prize) + "</div>" : "") +
            (p.roster ? '<div class="roster">' + p.roster.map(function (r) { return "<span>" + esc(r) + "</span>"; }).join("") + "</div>" : "") +
            "</div>";
        }).join("") +
        "</div></section>";
    }

    // Bracket
    if (ev.bracket && ev.bracket.length) {
      html +=
        '<section class="ev-section reveal"><span class="eyebrow">Playoffs</span><h2 class="display">Bracket</h2>' +
        '<div class="bracket-scroll"><div class="bracket">' +
        ev.bracket.map(function (r) {
          return '<div class="round"><div class="round-title">' + esc(r.name) + '</div><div class="round-matches">' +
            r.matches.map(function (m) {
              var wa = isWin(m.sa, m.sb);
              return '<div class="match">' +
                '<div class="mrow ' + (wa ? "w" : "") + '"><span class="t" title="' + esc(m.a) + '">' + esc(m.a) + '</span><span class="s">' + esc(m.sa) + "</span></div>" +
                '<div class="mrow ' + (wa ? "" : "w") + '"><span class="t" title="' + esc(m.b) + '">' + esc(m.b) + '</span><span class="s">' + esc(m.sb) + "</span></div>" +
                (m.maps ? '<div class="mmaps">' + m.maps.map(esc).join(" · ") + "</div>" : "") +
                "</div>";
            }).join("") +
            "</div></div>";
        }).join("") +
        "</div></div>" +
        (ev.thirdPlace ? '<p class="bracket-note">Third-place match: ' + esc(ev.thirdPlace.a) + " " + esc(ev.thirdPlace.sa) + " – " + esc(ev.thirdPlace.sb) + " " + esc(ev.thirdPlace.b) + "</p>" : "") +
        (ev.bracketNote ? '<p class="bracket-note">' + esc(ev.bracketNote) + "</p>" : "") +
        "</section>";
    }

    // Format + Awards / Maps
    html += '<section class="ev-section reveal"><div class="info-grid">';
    html += '<div class="panel"><h3 class="display">Format</h3><ul class="list">' + (ev.format || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>";
    html += '<div class="panel">';
    if (ev.awards && ev.awards.length) {
      html += '<h3 class="display">Awards</h3><div class="awards">' + ev.awards.map(function (a) {
        return '<div class="award"><span class="a">' + esc(a.award) + '</span><span class="p">' + esc(a.player) + "<small>" + esc(a.team) + "</small></span></div>";
      }).join("") + "</div>";
      html += '<h3 class="display" style="margin-top:26px">Map Pool</h3>';
    } else {
      html += '<h3 class="display">Map Pool</h3>';
    }
    html += '<div class="pills">' + (ev.maps || []).map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("") + "</div>";
    if (ev.sponsors && ev.sponsors.length) {
      html += '<h3 class="display" style="margin-top:26px">Sponsors</h3><div class="pills">' + ev.sponsors.map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("") + "</div>";
    }
    html += "</div></div></section>";

    // Participants
    if (ev.participants && ev.participants.length) {
      html += '<section class="ev-section reveal"><span class="eyebrow">' + ev.participants.length + ' Teams</span><h2 class="display">Participants</h2><div class="pills">' +
        ev.participants.slice().sort(function (a, b) { return a.localeCompare(b); }).map(function (p) { return "<span>" + esc(p) + "</span>"; }).join("") +
        "</div></section>";
    }

    // Broadcast
    if (ev.talent) {
      html += '<section class="ev-section reveal"><span class="eyebrow">Broadcast</span><h2 class="display">On Air</h2><div class="info-grid">' +
        Object.keys(ev.talent).map(function (k) {
          return '<div class="panel"><h3 class="display">' + esc(k) + '</h3><div class="pills">' + ev.talent[k].map(function (n) { return "<span>" + esc(n) + "</span>"; }).join("") + "</div></div>";
        }).join("") +
        "</div></section>";
    }

    // Links
    html += '<section class="ev-section reveal" style="padding-bottom:90px"><div class="links-row">';
    (ev.streams || []).forEach(function (s) {
      html += '<a class="btn btn-ghost" href="' + esc(s.url) + '" target="_blank" rel="noopener"><span>' + esc(s.label) + "</span></a>";
    });
    if (ev.links && ev.links.liquipedia) html += '<a class="btn btn-ghost" href="' + esc(ev.links.liquipedia) + '" target="_blank" rel="noopener"><span>Liquipedia</span></a>';
    if (ev.links && ev.links.opl) html += '<a class="btn btn-ghost" href="' + esc(ev.links.opl) + '" target="_blank" rel="noopener"><span>OPL Event Page</span></a>';
    html += '<a class="btn" href="./#events">All Events</a>';
    html += "</div></section>";

    html += "</div>";
    root.innerHTML = html;
  }

  /* ---------- reveal on scroll ---------- */
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }
})();
