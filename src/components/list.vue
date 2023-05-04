<template>
	<li class="todo">
		<input
			type="checkbox"
			name="checkbox"
			id=""
			v-model="todo" /><span :class="todo ? `done text` : `not-done text`">{{
			todoText
		}}</span>
		<span class="delete">Delete</span>
	</li>
</template>

<script setup lang="ts">
	import { ref, withDefaults, computed } from "vue";
	interface Props {
		todoText: string;
	}
	withDefaults(defineProps<Props>(), {
		todoText: "Todo",
	});

	const todo = ref(false);

	const todoTextClass = computed(() => {
		return todo ? "done" : "not-done";
	});
</script>

<style scoped lang="scss">
	@use "../styles/utilities.scss" as *;
	.todo {
		color: white;
		display: flex;
		align-items: center;
		opacity: 0;
		@include animation(
			slide-up,
			400ms,
			1000ms,
			1,
			ltr,
			ease-in-out,
			forwards
		);

		.done {
			color: map-get($colors, $key: "success");
		}
		.text {
			margin-left: 10px;
		}
		.delete {
			margin-left: auto;
			user-select: none;
			cursor: pointer;
			font-weight: 300;
			color: map-get($colors, $key: "danger");
			font-size: 10px;

			background-color: rgba(255, 0, 0, 0.101);
			padding: 4px 8px;
			border-radius: 4px;

			&:hover {
				background-color: map-get($colors, $key: "danger");
				color: white;
			}
		}
	}
</style>
