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
  @media (min-width: 500px) {
    padding: 0 2rem;
    height: 320px;
  }

  @media (min-width: 850px) {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    justify-content: center;
  }
}
</style>
