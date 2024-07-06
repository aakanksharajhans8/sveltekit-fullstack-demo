<script>
	export let names;
</script>

<div
	class="mt-10 pt-10 w-full max-w-5xl p-16 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
	<div class="flex items-center justify-between mb-4">
		<div class="space-y-1">
			<h2 class="text-xl font-semibold">List of Users</h2>
			<p class="text-sm text-gray-500">
				Fetched {names.length} users
			</p>
		</div>
	</div>
	<div class="divide-y divide-gray-900/5">
		{#each names as user (user.id)}
			<div class="flex items-center justify-between py-3 mt-2">
				<div class="flex items-center space-x-4 flex-grow">
					<div class="flex">
						<p class="font-medium pt-1 leading-none">{user.name}</p>
						<p class="font-medium pl-5 text-gray-500 pt-0">
							{user.email}
						</p>
					</div>
				</div>
				<form method="POST" action="/profiles?/delete" class="flex-shrink-0">
					<input type="hidden" name="id" id="id" value={user.id} />
					<button type="submit">
						<img
							class="w-4 float-right ml-5 mr-5"
							src="./trash-can.svg"
							alt="delete"
						/>
					</button>
				</form>
				<!-- Email update form -->
				<form
					method="POST"
					action="/profiles?/update"
					class="flex items-center space-x-2"
				>
					<input type="hidden" name="id" value={user.id} />
					<input
						type="text"
						name="name"
						placeholder="New name"
						required
						class="border p-2 rounded"
					/>
					<input
						type="email"
						name="email"
						placeholder="New email"
						required
						class="border p-2 rounded"
					/>
					<button
						type="submit"
						class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-15 ml-10 px-5 py-2.5 rounded "
						>Update</button
					>
				</form>
			</div>
		{/each}
	</div>
</div>
