export default function Preview({ html, css, js }) {
  const srcDoc = `
    <html>
      <head><style>${css}</style></head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
    </html>
  `;

  return (
    <iframe
      srcDoc={srcDoc}
      title="Live Preview"
      sandbox="allow-scripts"
      frameBorder="0"
      className="w-full h-full border rounded shadow"
    />
  );
}

