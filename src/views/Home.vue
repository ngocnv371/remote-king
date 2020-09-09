<template>
  <div class="home">
    <QuestCard :quest="initialQuest" class="ma-3" />
  </div>
</template>

<script lang="ts">
import { Quest } from '@/models';
import { Component, Vue } from 'vue-property-decorator';
import QuestCard from '../components/QuestCard.vue';

@Component({
  components: {
    QuestCard,
  },
})
export default class Home extends Vue {
  public initialQuest: Quest = {
    id: 'initial',
    name: 'Where are you, Your Grace?',
    logs: [
      'The guards have been looking all over the place for you.',
      'Your subjects are here waiting for you in the throne room right now.',
      'Where are you, Your Grace?',
    ],
    solutions: [
      { id: '1', name: 'I am in a better place now' },
      { id: '2', name: 'You do not need to know' },
      { id: '3', name: 'I do not know' },
    ],
  };
}
</script>
