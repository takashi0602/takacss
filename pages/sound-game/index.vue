<template>
  <section>
    <div>作成中</div>
    <!--<div :class="$style.container">-->
      <!--<div :class="$style.song_name">かえるのうた</div>-->
      <!--<div :class="$style.musical_score">-->
        <!--<div :class="$style.musical_notes">-->
          <!--ド　　レ　　ミ　　ファ　 ミ　　レ　　ド　　ミ　　ファ　 ソ　　ラ　　ソ　　ファ　 ミ　　ド　　　　ド　　　　ド　　　　ド　　ド ド レ レ ミ ミ ファ ファ　 ミ　　レ　　ド-->
        <!--</div>-->
      <!--</div>-->
      <!--<div :class="$style.piano">-->
        <!--<span :class="$style.pianokey"></span>-->
        <!--<span :class="[$style.pianokey, $style.sharp]"></span>-->
        <!--<span :class="$style.pianokey"></span>-->
        <!--<span :class="[$style.pianokey, $style.sharp]"></span>-->
        <!--<span :class="$style.pianokey"></span>-->
        <!--<span :class="$style.pianokey"></span>-->
        <!--<span :class="[$style.pianokey, $style.sharp]"></span>-->
        <!--<span :class="$style.pianokey"></span>-->
        <!--<span :class="[$style.pianokey, $style.sharp]"></span>-->
        <!--<span :class="$style.pianokey"></span>-->
        <!--<span :class="[$style.pianokey, $style.sharp]"></span>-->
        <!--<span :class="$style.pianokey"></span>-->
        <!--<span :class="$style.pianokey"></span>-->
      <!--</div>-->
    <!--</div>-->
  </section>
</template>

<script>
// import soundGame from "@/plugins/sound-game/index.js"
//
// export default {
//   head() {
//     return {
//       title: "Sound Game"
//     }
//   },
//   created() {
//     let pianoKey = document.getElementsByClassName("pianokey");
//     let pianoKeyL = pianoKey.length;
//     for (i = 0; i < pianoKeyL; i++) {
//       //クロージャ
//       ((i) => {
//         pianoKey[i].addEventListener("click", function() {
//           //鍵盤の位置で周波数を計算
//           let h = 440 * Math.pow(2, (1 / 12) * (i - 9));
//           play(h);
//         }, false)
//       })(i);
//     }
//   }
// }
</script>

<style lang="scss" module>
.container {
  margin: 0 auto;
  max-width: 600px;
}
.song_name {
  text-align: center;
  font-size: 24px;
  margin: 50px 0;
}

.musical {
  &_score {
    position: relative;
    height: 200px;
    margin-bottom: 50px;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      left: 30px;
      height: 200px;
      border-left: 18px solid blue;
      opacity: .5;
    }
  }
  &_notes {
    position: absolute;
    white-space: nowrap;
    top: 50%;
    transform: translateX(600px);
    animation: frog-song 25s 1 linear;
  }
}

@keyframes frog-song {
  from {
    transform: translateX(600px);
  }
  to {
    transform: translateX(-1300px);
  }
}

.piano {
  position: relative;
  &key {
    border: 1px solid #999;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    height: 200px;
    width: calc(100% / 8 - 5px);
    width: -webkit-calc(100% / 8 - 5px);
  }
}

.sharp {
  border: none;
  background-color: black;
  height: 120px;
  margin-left: -4%;
  position: absolute;
  width: 7%;
}
</style>
