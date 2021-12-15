<template>
	<q-drawer width="250" show-if-above bordered id="style-2" class="bg-white-2">
		<q-scroll-area class="fit">
			<h3 class="q-mx-md q-my-md text-blue-6">Deliverya</h3>
			<q-separator></q-separator>
			<q-list padding class="menu-list">
				<q-item
					clickable
					:active="link === 'i'"
					@click="link = 'i'"
					active-class="my-menu-link"
				>
					<q-item-section avatar>
						<q-icon color="grey-8" name="leaderboard" />
					</q-item-section>

					<q-item-section class="text-grey-8"> Dashboard </q-item-section>
				</q-item>

				<q-item active clickable>
					<q-item-section avatar>
						<q-icon color="grey-8" name="category" />
					</q-item-section>

					<q-item-section class="text-grey-8"> Categories </q-item-section>
				</q-item>

				<q-item clickable>
					<q-item-section avatar>
						<q-icon color="grey-8" name="warehouse" />
					</q-item-section>

					<q-item-section class="text-grey-8"> Warehouses </q-item-section>
				</q-item>

				<q-item clickable>
					<q-item-section avatar>
						<q-icon color="grey-8" name="delivery_dining" />
					</q-item-section>

					<q-item-section class="text-grey-8"> Delivery Boys </q-item-section>
				</q-item>

				<q-item clickable>
					<q-item-section avatar>
						<q-icon color="grey-8" name="list_alt" />
					</q-item-section>

					<q-item-section class="text-grey-8"> Orders </q-item-section>
				</q-item>

				<q-item clickable>
					<q-item-section avatar>
						<q-icon color="grey-8" name="local_offer" />
					</q-item-section>

					<q-item-section class="text-grey-8"> Offers </q-item-section>
				</q-item>

				<q-item clickable>
					<q-item-section avatar>
						<q-icon color="grey-8" name="account_circle" />
					</q-item-section>

					<q-item-section class="text-grey-8"> Users </q-item-section>
				</q-item>

				<q-item clickable>
					<q-item-section avatar>
						<q-icon color="grey-8" name="engineering" />
					</q-item-section>

					<q-item-section class="text-grey-8"> Sub Admins </q-item-section>
				</q-item>

				<q-item clickable>
					<q-item-section avatar>
						<q-icon color="grey-8" name="description" />
					</q-item-section>

					<q-item-section class="text-grey-8"> Reports </q-item-section>
				</q-item>
			</q-list>
		</q-scroll-area>
	</q-drawer>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		let link = ref('');
		return {
			link,
		};
	},
};
</script>

<style>
.my-menu-link {
	background: #ebebeb;
	border-left: 4px solid blue;
	font-weight: bold;
	transition: border-left 0.3s ease;
}
</style>
