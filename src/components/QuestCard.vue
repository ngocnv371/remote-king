<template>
  <v-card>
    <v-card-title>
      <h3 class="title">{{ quest.name }}</h3>
    </v-card-title>
    <v-card-text>
      <p
        v-for="(log, index) of quest.logs"
        v-text="log"
        class="animate__animated animate__fadeInDown"
        :key="index"
        :class="{ [`animate__delay-${index}s`]: true }"
      ></p>
    </v-card-text>
    <v-list>
      <v-list-item
        v-for="so of quest.solutions"
        class="animate__animated animate__flipInX px-0"
        color="primary"
        :key="so.id"
        :class="{ [`animate__delay-${quest.logs.length}s`]: true }"
        @click="handleSelect(so)"
      >
        <v-list-item-action class="mx-4">
          <v-icon v-if="so.icon">{{ so.icon }}</v-icon>
        </v-list-item-action>
        <span v-text="so.name" />
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Quest, QuestSolution } from '@/models';

@Component({
  name: 'QuestCard',
})
export default class QuestCard extends Vue {
  @Prop({ required: true })
  public quest!: Quest;

  private selectedSolution: QuestSolution | null = null;

  public handleSelect(so: QuestSolution) {
    this.selectedSolution = so;
    this.$emit('select', so);
  }
}
</script>
