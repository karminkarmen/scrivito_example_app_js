function importAll(r) {
  r.keys().forEach(r);
}

// Import all js files from subdirectories
importAll(require.context('./', true, /\.js$/));
