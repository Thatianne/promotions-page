const Store = require('../models/Store')

const methods = {
	async store (req, res) {
		try {
			const store = await Store.create({
			})

			res.status(201)
			return res.json(store)
		} catch (ex) {
			res.status(400)
			return res.json(ex)
		}
	}
}

module.exports = methods
