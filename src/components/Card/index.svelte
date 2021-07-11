<script>
import CardImg from './CardImg/CardImg.svelte'
import CardText from './CardText/CardText.svelte'
</script>

<div class="card">
  <h1 class="card-title">FAQs Card</h1>
  <CardImg />
  <CardText />
</div>

<style type="text/scss" lang="scss">
.card {
  display: block;
  margin: 0 auto;
  background: #eee;
  border-radius: 10px;
  padding: 1rem;

  &-title {
    font-size: 1.3rem;
    text-align: center;
    font-weight: 600;
    margin: 0;
  }
}
</style>
