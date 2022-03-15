const express = require("express");
require("dotenv").config();
require("colors");

// initialize express server
const app = express();

const PORT = process.env.PORT || 5000;
app.get("/", (req, res, next) => {
	res.send("hello");
});
app.listen(PORT, () => {
	const info = {
		"server is up": `server is up on port ${PORT}`,
	};
	console.table(info);
});
