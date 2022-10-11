<template>
	<div class="panel">
		<div class="panel-heading">
			<h4
				data-toggle="collapse"
				aria-expanded="false"
				:data-target="`#${id}`"
				:aria-controls="`${id}`"
				class="panel-title"
			>
				<span class="font-bangla-nav">
					{{title}}
				</span>
			</h4>
		</div>
		<div
			:id="`${id}`"
			class="panel-collapse collapse"
			:aria-labelledby="`${id}`"
			data-parent="#accordion-1"
		>
			<div class="panel-body">
				<p class="font-bangla-p">
					{{content}}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["id","title","content"],
};
</script>

<style></style>
