// https://antonreshetov.github.io/vue-unicons/
// 아이콘 플러그인
import Vue from 'vue';
import Unicon from 'vue-unicons';
import {
  uniInfoCircle,
  uniRestaurant,
  uniShop,
  uniClipboardNotes
} from 'vue-unicons/src/icons';

Unicon.add([uniInfoCircle, uniRestaurant, uniShop, uniClipboardNotes]);

Vue.use(Unicon);
