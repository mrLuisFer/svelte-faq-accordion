<script>
import CardTextItem from './CardTextItem.svelte'
import { cardTextItems } from './cardTextItems'
</script>

<section>
  <div class="card-text-container">
    {#each cardTextItems as textItems}
      <CardTextItem
        title="{textItems.title}"
        textToShow="{textItems.textToShow}" />
    {/each}
  </div>
</section>

<style type="text/scss" lang="scss">
</style>
