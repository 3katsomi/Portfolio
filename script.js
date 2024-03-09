// Create an array of CSS file paths
const cssFiles = [
  'style.css',
  'utils.css',
  'header.css',
  'about.css',
  'latest.css',
  'projects.css',
  'contact.css'
];

// Dynamically import CSS files
cssFiles.forEach(file => {
  const link = document.createElement('link');
  link.href = file;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
});