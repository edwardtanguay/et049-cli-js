import fs from 'fs';

const title = process.argv[2];

const html = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${title}</title>
</head>
<body>
	<h1>${title}</h1>
	<p>Welcome to this page.</p>
</body>
</html>`;

fs.writeFileSync('index.html', html, { encoding: 'utf8' });
