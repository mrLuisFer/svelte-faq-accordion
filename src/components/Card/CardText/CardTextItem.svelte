<script>
import { cardTextItems } from './cardTextItems'

let active = false

const handleShowText = () => {
  active = !active
  console.log(active)
}
</script>

<div>
  <div class="card-text-item" on:click="{handleShowText}">
    <p>Lorem ipsum dolor sit amet, consectetur adipisc</p>
    <img class="card-text-icon" src="/assets/down-arrow.svg" alt="Arrow" />
  </div>
  {#if active}
    <p class="card-text-hidden">
      Aenean vel dictum est. Maecenas in posuere nisl. Nullam viverra nibh in
      nisl ultricies egestas. Donec vel urna turpis. Sed rutrum elit vitae
      semper ultrices. Nullam imperdiet ac nibh nec varius. Aenean sit amet dui
      velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin
      at aliquam est.
    </p>
  {/if}
</div>

<style type="text/scss" lang="scss">
.card-text {
  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 0.8rem;
    padding-bottom: 1rem;
  }

  &-icon {
    width: 15px;
    height: 15px;
    opacity: 0.8;
  }

  &-hidden {
    text-align: center;
  }
}
</style>
