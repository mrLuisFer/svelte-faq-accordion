<script>
import CardTextItem from './CardTextItem.svelte'
import { cardTextItems } from './cardTextItems'
</script>

<div class="card-text-container">
  {#each cardTextItems as textItems}
    <CardTextItem
      title="{textItems.title}"
      textToShow="{textItems.textToShow}" />
  {/each}
</div>

<style type="text/scss" lang="scss">
.card-text-container {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: center;
  overflow: auto;

  @media (min-width: 500px) {
    padding: 0 2rem;
  }

  @media (min-width: 850px) {
    row-gap: 2rem;
  }
}
</style>
