/*
 * BALLER — event data
 * ---------------------------------------------------------------
 * Every page on the site is built from this file.
 * To add a new event: copy one of the objects in BALLER.events,
 * give it a unique `id`, and fill in the fields. Set
 * `status: "upcoming"` for events that haven't started yet
 * (results/bracket can be left out until they're played).
 *
 * Bracket scores: numbers are map/series scores. Use "W" / "FF"
 * for forfeits. `maps` is optional: ["Lair 8-7", "Chalet 7-1"].
 */

window.BALLER = {
  org: {
    name: "Baller",
    tagline: "Rainbow Six Siege tournaments built for the community.",
    twitter: "https://x.com/BallerR6X",
    discord: "https://discord.gg/qHVsgECBrQ",
    liquipedia: "https://liquipedia.net/rainbowsix/Baller",
  },

  events: [
    /* ======================================================= */
    {
      id: "tournament-series-s1",
      status: "completed",
      name: "Baller Tournament Series",
      season: "Season 1",
      short: "BTS S1",
      accent: "#ff3d2e",
      dates: "March 22, 2026",
      start: "2026-03-22",
      type: "Open · One-Day Cup",
      region: "North America",
      platform: "PC · Online",
      teams: 31,
      prize: "$400 USD",
      tier: "Tier 5",
      coOrganizers: ["Outlast"],
      sponsors: [],
      summary:
        "A one-day, 32-slot sprint. Best-of-one knockouts all afternoon, best-of-three from the semifinals, and a champion crowned before the night was over.",
      format: [
        "Single-elimination bracket, all matches played on March 22, 2026",
        "Best-of-one until the semifinals",
        "Semifinals and grand final are best-of-three",
        "32 team signup cap",
      ],
      maps: ["Bank", "Border", "Chalet", "Clubhouse", "Consulate", "Fortress", "Kafe Dostoyevsky", "Lair", "Nighthaven Labs"],
      placements: [
        { place: "1st", team: "See You In Valhalla", prize: "$400", roster: ["Ryce", "AlxPrs", "Epic", "Eli", "Sleqt"] },
        { place: "2nd", team: "Project Hail Mary", roster: ["Nyx", "Mask", "Sage", "HK", "Porkins"] },
        { place: "3rd–4th", team: "Puggers" },
        { place: "3rd–4th", team: "Keeg N Co" },
      ],
      final: { a: "See You In Valhalla", b: "Project Hail Mary", sa: 2, sb: 0, maps: ["Chalet 8-7", "Consulate 7-1"] },
      awards: [
        { award: "Event MVP", player: "AlxPrs", team: "See You In Valhalla" },
        { award: "Grand Final MVP", player: "AlxPrs", team: "See You In Valhalla" },
      ],
      bracketNote: "Bracket shown from the Round of 16. Opening round: 15 Bo1 matches on March 22.",
      bracket: [
        {
          name: "Round of 16",
          matches: [
            { a: "Fellas", b: "ICHOR", sa: 0, sb: 1, maps: ["Nighthaven Labs 0-7"] },
            { a: "NuTorious", b: "Puggers", sa: 0, sb: 1, maps: ["Nighthaven Labs 6-8"] },
            { a: "Woo Gang", b: "Freaky Fish", sa: 0, sb: 1, maps: ["Nighthaven Labs 4-7"] },
            { a: "Project Hail Mary", b: "University of Alberta", sa: 1, sb: 0, maps: ["Lair 7-2"] },
            { a: "Baller", b: "Team Foolish", sa: 1, sb: 0, maps: ["Clubhouse 7-2"] },
            { a: "See You In Valhalla", b: "Dom & Co", sa: 1, sb: 0, maps: ["Consulate 7-2"] },
            { a: "Keeg N Co", b: "Eclipse Esports", sa: 1, sb: 0, maps: ["Nighthaven Labs 7-3"] },
            { a: "Ten K", b: "Direct Money Access", sa: 0, sb: 1, maps: ["Bank 3-7"] },
          ],
        },
        {
          name: "Quarterfinals",
          matches: [
            { a: "ICHOR", b: "Puggers", sa: 0, sb: 1, maps: ["Nighthaven Labs 3-7"] },
            { a: "Freaky Fish", b: "Project Hail Mary", sa: 0, sb: 1, maps: ["Clubhouse 6-8"] },
            { a: "Baller", b: "See You In Valhalla", sa: 0, sb: 1, maps: ["Clubhouse 3-7"] },
            { a: "Keeg N Co", b: "Direct Money Access", sa: "W", sb: "L" },
          ],
        },
        {
          name: "Semifinals",
          matches: [
            { a: "Puggers", b: "Project Hail Mary", sa: 0, sb: 2, maps: ["Lair 7-8", "Fortress 5-7"] },
            { a: "See You In Valhalla", b: "Keeg N Co", sa: 2, sb: 0, maps: ["Consulate 7-5", "Nighthaven Labs 7-5"] },
          ],
        },
        {
          name: "Grand Final",
          matches: [{ a: "Project Hail Mary", b: "See You In Valhalla", sa: 0, sb: 2, maps: ["Chalet 7-8", "Consulate 1-7"] }],
        },
      ],
      talent: {
        Commentators: ["SiNOTWTCH", "Chaka"],
        Observers: ["Justrillo", "TheLucyGoosey"],
        Producers: ["T0X", "Tex", "Oreo", "SiNOTWTCH"],
        Admins: ["T0X", "Oreo", "Brookeana"],
      },
      streams: [{ label: "twitch.tv/sinotwtch", url: "https://www.twitch.tv/sinotwtch" }],
      links: {
        liquipedia: "https://liquipedia.net/rainbowsix/Baller_Tournament_Series/Season_1",
        opl: "https://www.opleague.pro/event/7540-BallerTournamentSeries/info",
      },
    },

    /* ======================================================= */
    {
      id: "open-league-s1",
      status: "completed",
      name: "Baller Open League",
      season: "Season 1",
      short: "BOL S1",
      accent: "#ffb21a",
      dates: "Oct 13 – Dec 13, 2025",
      start: "2025-10-13",
      type: "Open League",
      region: "North America",
      platform: "PC · Online",
      teams: 23,
      prize: "CA$800",
      tier: "Tier 5",
      coOrganizers: [],
      sponsors: [],
      summary:
        "Our first open league. Six weeks of Swiss-format Bo1s to find the top eight, then a full playoff run that came down to a five-map grand final.",
      format: [
        "Swiss stage (Oct 13 – Nov 23): Bo1 matches, top 8 advance",
        "Playoffs (Nov 23 – Dec 13): single-elimination bracket",
        "Quarterfinals and semifinals are best-of-three",
        "Grand final and third-place match are best-of-five",
      ],
      maps: ["Bank", "Border", "Chalet", "Clubhouse", "Consulate", "Kafe Dostoyevsky", "Lair", "Nighthaven Labs", "Skyscraper"],
      placements: [
        { place: "1st", team: "Packrunners", prize: "CA$600", roster: ["Nesta", "Artix", "Logger", "Vrionx", "Muki"] },
        { place: "2nd", team: "Daystar Rising", prize: "CA$150", roster: ["Adept", "Kason", "Scarey", "Soapy", "Retrospect"] },
        { place: "3rd", team: "Overtake Sector", prize: "CA$50" },
        { place: "4th", team: "Outlast Black" },
      ],
      final: { a: "Packrunners", b: "Daystar Rising", sa: 3, sb: 2, maps: ["Border 5-7", "Lair 8-6", "Nighthaven Labs 7-3", "Chalet 4-7", "Clubhouse 7-4"] },
      awards: [],
      bracket: [
        {
          name: "Quarterfinals",
          matches: [
            { a: "Packrunners", b: "US Army Esports", sa: 2, sb: 1, maps: ["Lair 7-4", "Border 6-8", "Chalet 7-3"] },
            { a: "Overtake Sector", b: "Misfits", sa: 2, sb: 0, maps: ["Consulate 7-4", "Kafe Dostoyevsky 7-4"] },
            { a: "Outlast Black", b: "2xC Black", sa: 2, sb: 0, maps: ["Chalet 7-0", "Bank 7-3"] },
            { a: "NXG Esports Gold", b: "Daystar Rising", sa: 0, sb: 2, maps: ["Chalet 2-7", "Clubhouse 1-7"] },
          ],
        },
        {
          name: "Semifinals",
          matches: [
            { a: "Packrunners", b: "Overtake Sector", sa: 2, sb: 0, maps: ["Kafe Dostoyevsky 7-5", "Lair 7-1"] },
            { a: "Outlast Black", b: "Daystar Rising", sa: 0, sb: 2, maps: ["Border 4-7", "Nighthaven Labs 5-7"] },
          ],
        },
        {
          name: "Grand Final",
          matches: [{ a: "Packrunners", b: "Daystar Rising", sa: 3, sb: 2, maps: ["Border 5-7", "Lair 8-6", "Nighthaven Labs 7-3", "Chalet 4-7", "Clubhouse 7-4"] }],
        },
      ],
      thirdPlace: { a: "Overtake Sector", b: "Outlast Black", sa: "W", sb: "FF" },
      participants: [
        "2xC Black", "Baller", "Banana Bread Girls", "Bottom's Bottom Bs", "Dark Knight Esports", "Daystar Rising",
        "DefyGG", "Elation Esports", "Ex-Elation Esports", "Forgotten Monarchs", "Misfits", "Nokturns", "NXG Esports Gold",
        "Outlast Acad.", "Outlast Black", "Overtake Sector", "Packrunners", "Soul Reapers Esports", "Syntex Esports",
        "Team Blackwater", "Unity Visual", "US Army Esports", "ZND Black",
      ],
      talent: {
        Commentators: ["IcyCru", "Piercing", "WhiskeyRun", "WhiskeyGlitter", "ReignProxy", "ZekVexol", "Cardzz", "Chaka", "SiNOTWTCH", "Zodiac", "Four", "jjanethe", "Tvan"],
        Observers: ["TheUnamedGamer", "TheLucyGoosey", "Reni583"],
        Production: ["T0X (Director)", "SiNOTWTCH (Producer)"],
        Admins: ["Swifted", "Brookeana", "T0X", "Drewdude7", "Jaz", "Ghoulia"],
      },
      streams: [
        { label: "twitch.tv/SiegeDoubleShot", url: "https://www.twitch.tv/siegedoubleshot" },
        { label: "twitch.tv/sinotwtch", url: "https://www.twitch.tv/sinotwtch" },
      ],
      links: {
        liquipedia: "https://liquipedia.net/rainbowsix/Baller_Open_League/Season_1",
        opl: "https://www.opleague.pro/event/6878-BallerOpenLeagueSeason1/info",
      },
    },

    /* ======================================================= */
    {
      id: "invitational-s1",
      status: "completed",
      name: "Baller Invitational",
      season: "Season 1",
      short: "BI S1",
      accent: "#ff8a1f",
      dates: "Jul 12 – Aug 5, 2025",
      start: "2025-07-12",
      type: "Invite-Only",
      region: "North America",
      platform: "PC · Online",
      teams: 16,
      prize: "$1,000 USD",
      tier: "Tier 5",
      coOrganizers: ["True Synergy Gaming"],
      sponsors: ["HMC", "Kurse"],
      summary:
        "Where it started. Sixteen hand-picked teams in a single-elimination bracket, ending in a best-of-five grand final on SiegeDoubleShot.",
      format: [
        "16-team single-elimination bracket",
        "All matches before the final are best-of-three",
        "Grand final is best-of-five",
        "Invite-only field announced June–July 2025",
      ],
      maps: ["Bank", "Border", "Chalet", "Clubhouse", "Consulate", "Kafe Dostoyevsky", "Lair", "Nighthaven Labs", "Skyscraper"],
      placements: [
        { place: "1st", team: "FiveFears", prize: "$1,000", roster: ["Gasher", "BjL", "Zurs", "Ark", "KoolAid"] },
        { place: "2nd", team: "TEMPR", roster: ["Geek", "Roxo", "Tweedy", "Valen", "Nesta"] },
        { place: "3rd–4th", team: "F5 Esports" },
        { place: "3rd–4th", team: "Turtle Tactics" },
      ],
      final: { a: "FiveFears", b: "TEMPR", sa: 3, sb: 0, maps: ["Clubhouse 7-1", "Border 7-4", "Lair 7-4"] },
      awards: [
        { award: "Event MVP", player: "Ark", team: "FiveFears" },
        { award: "Grand Final MVP", player: "Ark", team: "FiveFears" },
        { award: "Semifinals MVP", player: "Geek", team: "TEMPR" },
        { award: "Quarterfinals MVP", player: "Ark", team: "FiveFears" },
        { award: "Round of 16 MVP", player: "Zman", team: "F5 Esports" },
      ],
      bracket: [
        {
          name: "Round of 16",
          matches: [
            { a: "F5 Esports", b: "Collegiate Warlords", sa: 2, sb: 0, maps: ["Lair 8-7", "Chalet 7-1"] },
            { a: "Estralis LFO", b: "Team Foolish", sa: 0, sb: 2, maps: ["Clubhouse 2-7", "Consulate 1-7"] },
            { a: "FiveFears", b: "Unreal Nightmare", sa: 2, sb: 0, maps: ["Consulate 7-1", "Lair 7-5"] },
            { a: "Rad Esports", b: "TeamSESH", sa: "W", sb: "FF" },
            { a: "TSG Black", b: "Invictus Esports", sa: 1, sb: 2, maps: ["Chalet 7-4", "Clubhouse 3-7", "Nighthaven Labs 2-7"] },
            { a: "Baller", b: "TEMPR", sa: 0, sb: 2, maps: ["Chalet 7-8", "Nighthaven Labs 5-7"] },
            { a: "Turtle Tactics", b: "Fett's Feet Friends", sa: 2, sb: 1, maps: ["Clubhouse 8-6", "Bank 6-8", "Chalet 8-7"] },
            { a: "Team Aura", b: "Valor Esports", sa: "FF", sb: "W" },
          ],
        },
        {
          name: "Quarterfinals",
          matches: [
            { a: "F5 Esports", b: "Team Foolish", sa: 2, sb: 0, maps: ["Kafe Dostoyevsky 7-0", "Clubhouse 7-4"] },
            { a: "FiveFears", b: "Rad Esports", sa: 2, sb: 0, maps: ["Lair 8-6", "Chalet 7-5"] },
            { a: "Invictus Esports", b: "TEMPR", sa: "FF", sb: "W" },
            { a: "Turtle Tactics", b: "Valor Esports", sa: 2, sb: 0, maps: ["Lair 7-4", "Border 7-5"] },
          ],
        },
        {
          name: "Semifinals",
          matches: [
            { a: "F5 Esports", b: "FiveFears", sa: 1, sb: 2, maps: ["Lair 1-7", "Kafe Dostoyevsky 7-2", "Consulate 6-8"] },
            { a: "TEMPR", b: "Turtle Tactics", sa: 2, sb: 0, maps: ["Chalet 7-3", "Border 8-6"] },
          ],
        },
        {
          name: "Grand Final",
          matches: [{ a: "FiveFears", b: "TEMPR", sa: 3, sb: 0, maps: ["Clubhouse 7-1", "Border 7-4", "Lair 7-4"] }],
        },
      ],
      participants: [
        "TSG Black", "Baller", "Estralis LFO", "F5 Esports", "Team Aura", "Invictus Esports", "TEMPR", "FiveFears",
        "Team Foolish", "Rad Esports", "TeamSESH", "Valor Esports", "Turtle Tactics", "Collegiate Warlords",
        "Unreal Nightmare", "Fett's Feet Friends",
      ],
      talent: {
        Commentators: ["SiNOTWTCH", "IcyCru", "Piercing", "WhiskeyRun", "WhiskeyGlitter", "ReignProxy", "gNAwWw", "T0X", "ZekVexol", "Cardzz", "Oreo"],
        Observers: ["TheUnamedGamer", "LtLeah"],
        Production: ["T0X (Director)"],
        Admins: ["Swifted", "Brookeana", "T0X", "Drewdude7", "Jaz"],
      },
      streams: [{ label: "twitch.tv/SiegeDoubleShot", url: "https://www.twitch.tv/siegedoubleshot" }],
      links: {
        liquipedia: "https://liquipedia.net/rainbowsix/Baller_Invitational/Season_1",
        opl: "https://www.opleague.pro/event/6331-BallerInvitational/info",
      },
    },
  ],

  partners: [
    { name: "SiegeDoubleShot", role: "Broadcast Partner", url: "https://www.twitch.tv/siegedoubleshot" },
    { name: "True Synergy Gaming", role: "Co-Organizer · Invitational", url: "https://liquipedia.net/rainbowsix/True_Synergy_Gaming" },
    { name: "Outlast", role: "Co-Organizer · Tournament Series", url: "https://liquipedia.net/rainbowsix/Outlast" },
    { name: "HMC", role: "Sponsor · Invitational", url: null },
    { name: "Kurse", role: "Sponsor · Invitational", url: null },
    { name: "OPL", role: "Tournament Platform", url: "https://www.opleague.pro" },
  ],

  staff: [
    { name: "T0X", role: "Founder · Tournament Director" },
    { name: "Oreo", role: "Admin · Producer · Caster" },
  ],

  // Shown as "On the call" under the crew on the home page
  casters: ["WhiskeyRun", "WhiskeyGlitter", "ZekVexol", "SiNOTWTCH"],
};
