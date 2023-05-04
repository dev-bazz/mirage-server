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
						title: "Brush Teeth",
						done: false,
						id: 2,
					},
					{
						title: "Take a Shower",
						done: false,
						id: 3,
					},
					{
						title: "Get Dressed",
						done: false,
						id: 4,
					},
					{
						title: "Eat Breakfast",
						done: false,
						id: 5,
					},
					{
						title: "Commute to Work/School",
						done: false,
						id: 6,
					},
					{
						title: "Attend Meetings/Lectures",
						done: false,
						id: 7,
					},
					{
						title: "Complete Tasks/Assignments",
						done: false,
						id: 8,
					},
				],
			};
		});

		this.post("/todo-list/", (schema, request) => {
			let attrs = {};
			attrs.id = Math.floor(Math.random() * 100);
			attrs.title = JSON.parse(request.requestBody);

			return { todoList: attrs };
		});
	},
});
