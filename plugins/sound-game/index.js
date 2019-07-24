class audio {
  constructor() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    //ピアノの鍵盤を取得
    let pianoKey = document.getElementsByClassName("pianokey");
    let pianoKeyL = pianoKey.length;
    for (i = 0; i < pianoKeyL; i++) {
      //クロージャ
      ((i) => {
        pianoKey[i].addEventListener("click", function() {
          //鍵盤の位置で周波数を計算
          let h = 440 * Math.pow(2, (1 / 12) * (i - 9));
          this.play(h);
        }, false)
      })(i);
    }
  }

  //引数のヘルツの高さの音を出す関数
  play(hz) {

    //正弦波の音を作成 オシレーターノードの生成
    let osciillator = audioCtx.createOscillator();

    //ヘルツ（周波数）指定
    osciillator.frequency.value = hz;

    //音の出力先
    let audioDestination = audioCtx.destination;

    //出力先のスピーカーに接続
    osciillator.connect(audioDestination);

    //音を出す
    osciillator.start = osciillator.start || osciillator.noteOn; //クロスブラウザ対応
    osciillator.start();

    //音を0.25秒後にストップ
    setTimeout(function() {
      osciillator.stop();
    }, 250);
  }
}
