const express = require('express');
const cors = require('cors');
const router = require('./routes');
const path = require('path');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', router);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/client/build')));

	app.get('*', (_req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
} else {
	app.get('/', (_req, res) => {
		res.json({ message: 'API Connected...' });
	});
}

app.listen(PORT, () => console.log(`Server listening... Port: ${PORT}`));
