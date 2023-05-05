<script setup>
	import { onMounted, ref, reactive } from "vue";
	import { server } from "./server/server.js";
	import List from "./components/list.vue";

	const todoItems = reactive({
		title: "",
		done: false,
	});
	const todos = ref([]);
	const element = ref(null);
	const text = ref(null);

	const getTodo = async (e) => {
		const data = await fetch("/api/todo-list");
		const response = JSON.parse(data._bodyInit);
		console.log(response);
		todos.value = response;
	};

	const createTodo = async (e) => {
		console.log(todoItems);
		try {
			e.preventDefault();
			if (todoItems.title === "") return;
			const data = await fetch("/api/todo-list", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(todoItems),
			});

			const response = data;

			if (!response.ok) {
				return alert("Net work issues try again");
			}

			element.value.showModal();
			getTodo();
			todoItems.title = "";
		} catch (error) {
			throw new Error(error);
			alert("Not Good");
		}
	};

	const closeModal = () => {
		element.value.close();
	};
	onMounted(() => {
		getTodo();
	});
</script>

<template>
	<div class="form">
		<h1 ref="text">Todo List</h1>
		<form @submit.prevent="createTodo">
			<input
				v-model="todoItems.title"
				type="text"
				placeholder="Add New Todo"
				class="newTodo" />
		</form>

		<ul class="to-dos">
			<List
				v-for="todo in todos"
				:todoText="todo.title" />
		</ul>
	</div>
	<dialog ref="element">
		<div class="poo">
			<h4>Success</h4>
			<p>Greate Job</p>
			<button @click="closeModal">Close</button>
		</div>
	</dialog>
</template>

<style scoped lang="scss">
	@use "./styles/utilities.scss" as *;

	.form {
		max-width: px-to-rem(300px);
		background-color: #1f1f1f;
		min-height: px-to-rem(300px);
		margin-inline: auto;
		width: 100%;

		border-radius: px-to-rem(16px);
		padding: px-to-rem(16px) px-to-rem(24px);
		display: flex;
		flex-direction: column;

		// Text
		h1 {
			color: #fff;
			font-size: px-to-rem(24px);
			text-align: center;
			margin-block: px-to-rem(16px);
		}

		.newTodo {
			background-color: transparent;
			border: none;
			padding: px-to-rem(8px);
			border: 1.2px solid #ffffff2a;
			border-radius: px-to-rem(8px);
		}
		.to-dos {
			text-align: left;

			& > * + * {
				margin-top: px-to-rem(8px);
			}
		}
	}
</style>
