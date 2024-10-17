import {animate, animation, style, transition, trigger, useAnimation} from '@angular/animations';

export const showDetailsAnimation = animation([
  style({
    height: '{{ startHeight }}',
  }),
  animate('{{ time }}', style({
    height: '{{ targetHeight }}',
  }))
]);

export const triggerShowDetailsAnimation = trigger('showHide', [
  transition(':enter', [
    style({ height: '0' }),
    animate('200ms ease-out', style({
      height: '*'
    }))
  ]),
  transition(':leave', [
    animate('200ms ease-out', style({
      height: '0',
      opacity: 1,
    }))
  ])
]);

export const myTriggerAnimation = trigger('myInsertRemoveTrigger', [
  transition(':enter', [style({opacity: 0}), animate('300ms', style({opacity: 1}))]),
  transition(':leave', [animate('300ms', style({opacity: 0}))]),
]);
