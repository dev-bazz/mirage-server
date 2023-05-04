<script setup>
	import List from "./components/list.vue";
	const me = [1, 2, 3, 5];

	const createTodo = (e) => {
		console.log("sent");
		e.preventDefault();
	};
</script>

<template>
	<div class="form">
		<h1>Todo List</h1>
		<div @click.prevent="createTodo">
			<input
				type="text"
				placeholder="Add New Todo"
				class="newTodo" />
		</div>

		<ul class="to-dos">
			<List v-for="x in me" />
		</ul>
	</div>
</template>

<style scoped lang="scss">
	@use "./styles/utilities.scss" as *;

	.form {
		max-width: px-to-rem(300px);
		background-color: #1f1f1f;
		min-height: px-to-rem(300px);
		margin-inline: auto;
		width: 100%;
		aspect-ratio: 1;
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
