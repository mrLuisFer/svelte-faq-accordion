<script>
import CardTextItem from './CardTextItem.svelte'
</script>

<section>
  <div class="card-text-container">
    <CardTextItem />
  </div>
</section>

<style type="text/scss" lang="scss">
.card-text {
  &-container {
    border-bottom: 1px solid rgb(170, 170, 170);
  }
}
</style>
