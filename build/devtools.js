chrome.devtools.panels.create(
  "React Fetch Tree", // title for the panel tab
  null, // you can specify here path to an icon
  "index.html", // html page for injecting into the tab's content
  () => {} // you can pass here a callback function
);
