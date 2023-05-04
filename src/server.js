import { createServer } from "miragejs";

export const server = createServer({
	routes() {
		this.namespace = "api";

		this.get("/todo-list", () => {
			return {
				todoList: [
					{
						title: "Get Out of Bed",
						done: false,
						id: 1,
					},
					{
						title: "Get Out of Bed",
						done: false,
						id: 2,
					},
					{
						title: "Get Out of Bed",
						done: false,
						id: 3,
					},
					{
						title: "Get Out of Bed",
						done: false,
						id: 4,
					},
					{
						title: "Get Out of Bed",
						done: false,
						id: 5,
					},
					{
						title: "Get Out of Bed",
						done: false,
						id: 6,
					},
					{
						title: "Get Out of Bed",
						done: false,
						id: 7,
					},
					{
						title: "Get Out of Bed",
						done: false,
						id: 8,
					},
				],
			};
		});
	},
});
