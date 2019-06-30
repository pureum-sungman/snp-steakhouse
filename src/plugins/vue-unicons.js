/**
 * vue-unicons 아이콘 플러그인
 * @link https://antonreshetov.github.io/vue-unicons/
 * 1. 상단 링크에서 필요한 아이콘 선택적으로 import 할 것
 * 2. 사용 예시
 *    <unicon
 *        name="car-wash" (이름)
 *        width="120"     (가로 px)
 *        height="100"    (세로 px)
 *        fill="#f99"     (색 hex)
 *    />
 **/

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
