<script>
import DynamicClickTitle from '../DynamicClickTitle.svelte'
import CardImg from './CardImg/CardImg.svelte'
import CardText from './CardText/CardText.svelte'
</script>

<div class="card">
  <DynamicClickTitle defaultTitle="FAQs Card" newTitle="By mrLuisFer" />
  <div class="card-flex">
    <CardImg />
    <CardText />
  </div>
</div>

<style type="text/scss" lang="scss">
.card {
  margin: 0 auto;
  background: #eee;
  border-radius: 10px;
  padding: 1rem;

  @media (min-width: 850px) {
    max-width: 800px;
  }

  &-flex {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    @media (min-width: 850px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
