<template>
	<div id="Video">
		<videoheader/>
	</div>
</template>

<script>
	import videoheader from './components/video_header';
		export default {
    	components: {videoheader}
	}
</script>

<style lang='stylus'>
	#Video{
		width: 100%;
	    height: 100%;
	    overflow: hidden;
	}
</style>