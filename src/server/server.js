import { createServer, Model } from "miragejs";

export const server = createServer({
	models: {
		todo: Model,
	},

	seeds(server) {
		server.db.loadData({
			todo: [
				{ title: "Get Out of Bed", done: false, id: 1 },
				{ title: "Brush Teeth", done: false, id: 2 },
				{ title: "Take a Shower", done: false, id: 3 },
			],
		});
	},

	routes() {
		this.namespace = "api";
		this.get("/todo-list", (schema) => {
			return schema.db.todo;
		});

		this.post("/todo-list/", (schema, request) => {
			const attrs = {};
			const res = JSON.parse(request.requestBody);

			attrs.id = Math.floor(Math.random() * 100);
			attrs.title = res.title;
			attrs.done = res.done;
			schema.db.todo.insert(attrs);
		});
	},
});
