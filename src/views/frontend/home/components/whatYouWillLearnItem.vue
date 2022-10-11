<template>
	<div class="item">
		<div
			class="img"
			:style="`background-image: url('assets/images/icon/${image_name}.png');`"
		></div>
		<div class="title">
			<h4>{{title}}</h4>
		</div>
	</div>
</template>

<script>
export default {
	props: ['image_name','title']
};
</script>

<style></style>
