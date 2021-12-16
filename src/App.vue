<template>
	<q-layout view="lHh Lpr fFf">
		<the-nav-bar></the-nav-bar>
		<the-side-bar></the-side-bar>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue';
import TheSideBar from './components/TheSideBar.vue';
export default {
	name: 'LayoutDefault',

	components: {
		TheNavBar,
		TheSideBar,
	},

	setup() {
		return {};
	},
};
</script>

<style></style>
