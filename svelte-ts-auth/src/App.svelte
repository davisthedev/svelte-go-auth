<script lang="ts">
  import { onMount } from 'svelte';
  import { authStore } from '../src/lib/stores/auth';

  onMount(() => {
      authStore.initialize();
    });
</script>

<main>
<h1>Test</h1>
</main>

<style>
</style>
