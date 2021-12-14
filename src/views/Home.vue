<template>
	<div class="q-pa-sm">
		<div class="row">
			<div class="col-md-3 col-12 q-pl-md q-pt-md">
				<q-card class="my-card b-b-b">
					<q-card-section>
						<p>
							Pending Orders<br />
							<span>117</span>
						</p>
					</q-card-section>
				</q-card>
			</div>

			<div class="col-md-3 col-12 q-pl-md q-pt-md">
				<q-card class="my-card b-b-g">
					<q-card-section>
						<p>
							Active Orders<br />
							<span>91</span>
						</p>
					</q-card-section>
				</q-card>
			</div>

			<div class="col-md-3 col-12 q-pl-md q-pt-md">
				<q-card class="my-card b-b-gb">
					<q-card-section>
						<p>
							Delivired Orders<br />
							<span>75</span>
						</p>
					</q-card-section>
				</q-card>
			</div>

			<div class="col-md-3 col-12 q-pl-md q-pt-md">
				<q-card class="my-card b-b-or">
					<q-card-section>
						<p>
							Custumer Canceled Orders<br />
							<span>13</span>
						</p>
					</q-card-section>
				</q-card>
			</div>

			<div class="col-md-3 col-12 q-pl-md q-pt-md">
				<q-card class="my-card b-b-b">
					<q-card-section>
						<p>
							Stores<br />
							<span>100</span>
						</p>
					</q-card-section>
				</q-card>
			</div>

			<div class="col-md-3 col-12 q-pl-md q-pt-md">
				<q-card class="my-card b-b-g">
					<q-card-section>
						<p>
							Catigories<br />
							<span>13</span>
						</p>
					</q-card-section>
				</q-card>
			</div>

			<div class="col-md-3 col-12 q-pl-md q-pt-md">
				<q-card class="my-card b-b-gb">
					<q-card-section>
						<p>
							Items<br />
							<span>30</span>
						</p>
					</q-card-section>
				</q-card>
			</div>

			<div class="col-md-3 col-12 q-pl-md q-pt-md">
				<q-card class="my-card b-b-or">
					<q-card-section>
						<p>
							Promotions<br />
							<span>10</span>
						</p>
					</q-card-section>
				</q-card>
			</div>
		</div>
		<br /><br /><br /><br />
		<div>
			<q-tabs v-model="tab" align="justify-start" narrow-indicator class="q-mb-lg q-pl-lg">
				<q-tab class="text-teal" name="alarms" label="Pending" />
				<q-tab class="text-teal" name="movies" label="Active" />
			</q-tabs>
 
			<div class="q-gutter-y-sm">
				<q-tab-panels
					v-model="tab" 
					animated
					transition-prev="jump-up"
					transition-next="jump-down"
					class="text-white text-center"
				>
					<q-tab-panel name="alarms">
						<div class="row q-pt-sm">
							<div class="col-md-6 q-pa-md" v-for="(item, index) in active" :key="index">
								<q-card>
									<q-card-section>
										<div class="row tab justify-between">
											<div class="col-md-2">
												<p class="text-black">
													ORDER ID- <span class="text-secondary">12</span>
												</p>
											</div>

											<div class="col-md-6">
												<p class="text-black">ORDER DATE - <span>May 10,2021 .07.5 pm</span></p>
											</div>
										</div>
										<div class="row avatar justify-between">
											<div class="col-md-4">
												<p>
													<q-avatar size="33" class="q-mr-xs">
														<img src="https://cdn.quasar.dev/img/avatar.png" />
													</q-avatar>
													<span class="text-black">Soap | x4 <span>more</span></span>
												</p>
											</div>
											<div class="col-offset-8"></div>
										</div>
									</q-card-section>
									<q-separator></q-separator>
									<q-card-actions class="text-black action justify-between q-py-sm">
										<p>Order Price - 2311.00 <br /><span>Contact User - 24563112</span></p>

										<div class="q-pb-md">
											<q-btn color="secondary" label="Assign" @click="card = true" />
										</div>
									</q-card-actions>
								</q-card>
							</div>
						</div>
					</q-tab-panel>
				</q-tab-panels>

				<q-tab-panels
					v-model="tab"
					animated
					transition-prev="jump-up"
					transition-next="jump-down"
					class="text-white text-center"
				>
					<q-tab-panel name="movies">
						<div class="row">
							<div class="col-md-6 q-pa-md" v-for="(item, index) in active" :key="index">
								<q-card>
									<q-card-section>
										<div class="row tab justify-between">
											<div class="col-md-2">
												<p class="text-black">
													ORDER ID- <span class="text-secondary">12</span>
												</p>
											</div>

											<div class="col-md-6">
												<p class="text-black">ORDER DATE - <span>May 10,2021 .07.5 pm</span></p>
											</div>
										</div>

										<div class="row avatar justify-between">
											<div class="col-md-4">
												<p>
													<q-avatar size="33" class="q-mr-xs">
														<img src="https://cdn.quasar.dev/img/avatar.png" />
													</q-avatar>
													<span class="text-black">Soap | x4 <span>more</span></span>
												</p>
											</div>

											<div class="col-offset-8"></div>
										</div>
									</q-card-section>
									<q-separator></q-separator>
									<q-card-actions class="text-black action justify-between q-py-sm">
										<p>Order Price - 2311.00 <br /><span>Contact User - 24563112</span></p>

										<div class="q-pb-md">
											<q-btn color="red" label="Done" @click="confirm = true" />
										</div>
									</q-card-actions>
								</q-card>
							</div>
						</div>
					</q-tab-panel>
				</q-tab-panels>
			</div>
		</div>

		<q-dialog v-model="card">
			<q-card class="my-card">
				<q-card-section class="q-pt-md">
					<q-list bordered>
						<q-item clickable v-ripple v-for="(dil, i) in dilivery" :key="i" @click="confirm = true">
							<q-item-section avatar>
								<q-avatar>
									<img src="https://cdn.quasar.dev/img/boy-avatar.png" />
								</q-avatar>
							</q-item-section>
							<q-item-section>Image avatar</q-item-section>
						</q-item>

						<q-separator />
					</q-list>
				</q-card-section>
			</q-card>
		</q-dialog>

		<q-dialog v-model="confirm" persistent>
			<q-card>
				<q-card-section class="row items-center">
					<span class="q-ml-sm">Are You Sure ?</span>
				</q-card-section>

				<q-card-actions align="right">
					<q-btn flat label="No" color="primary" v-close-popup />
					<q-btn flat label="Yes" color="primary" v-close-popup @click="card = false" />
				</q-card-actions>
			</q-card>
		</q-dialog>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	name: 'Home',
	components: {},
	setup() {
		return {
			active: ref(8),
			dilivery: ref(8),
			tab: ref('movies'),
			card: ref(false),
			confirm: ref(false),
		};
	},
};
</script>

<style scoped>
.b-b-b {
	border-bottom: 3px solid #5983f9;
}
.b-b-g {
	border-bottom: 3px solid #3ae58e;
}
.b-b-gb {
	border-bottom: 3px solid #41bbb0;
}
.b-b-or {
	border-bottom: 3px solid #e9997a;
}
.my-card p {
	font-weight: bold;
}
.my-card p span {
	font-size: 20px;
	font-weight: normal;
}
.tab p {
	font-size: 10px;
}
.tab p span {
	font-weight: bold;
}
.avatar p {
	font-size: 12px;
}
.avatar p span span {
	cursor: pointer;
}
.action p {
	font-size: 12px;
	font-weight: bold;
}
.action p span {
	font-size: 11px;
	font-weight: normal;
}
</style>
