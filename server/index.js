const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
const routes = require('./routes')
require('dotenv').config()

config.dev = process.env.NODE_ENV !== 'production'

async function start () {
	// Init Nuxt.js
	const nuxt = new Nuxt(config)

	const { host, port } = nuxt.options.server

	await nuxt.ready()
	// Build only in dev mode
	if (config.dev) {
		const builder = new Builder(nuxt)
		await builder.build()
	}

	const dbUrl = process.env.DB_HOST.replace('{{password}}', process.env.DB_PASSWORD)
	mongoose.connect(dbUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	// Give nuxt middleware to express
	app.use(nuxt.render)
	app.use(cors())
	app.use(express.json())
	app.use(routes)

	// Listen the server
	app.listen(port, host)
	consola.ready({
		message: `Server listening on http://${host}:${port}`,
		badge: true
	})
}
start()
