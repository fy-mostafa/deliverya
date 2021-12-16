<template>
	<q-header class="header" bordered>
		<q-toolbar class="tool-bar">
			<q-toolbar-title class="text-blue-6 tool-bar--title">
				Dashboard App
			</q-toolbar-title>
			<div class="header-right">
				<q-icon
					class="cursor-pointer"
					size="md"
					color="grey-8"
					name="notifications"
				/>
				<q-avatar>
					<img src="https://cdn.quasar.dev/img/avatar.png" />
				</q-avatar>
			</div>
		</q-toolbar>
	</q-header>
</template>

<script>
export default {
	name: 'TheNavBar',
};
</script>

<style>
.header {
	background-color: #fff !important;
}

.header-right {
	display: flex;
	align-items: center;
	gap: 40px;
}

.tool-bar--title {
	max-width: 88% !important;
	padding: 0 !important;
}
</style>
