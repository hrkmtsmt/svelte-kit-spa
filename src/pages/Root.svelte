<script lang="ts">
  import { useState } from '@src/utils/useState';
  import { onDestroy } from 'svelte';

  const [count, setCount, countUnsubscriber] = useState(0);

  onDestroy(countUnsubscriber);
</script>

<div>Hello World!</div>
<div>
  <input type="text" disabled bind:value={$count} />
  <button type="button" on:click={() => setCount((prev) => prev + 1)}>Increment</button>
</div>
