<template>
	<div id="Comic">
		<comicheader/>
		<comicswiper/>
	</div>
</template>

<script>
	import comicheader from './components/comicheader';
	import comicswiper from './components/comicswiper';
	export default {
    	components: { comicheader,comicswiper}
	}
</script>

<style>
	#Comic {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>