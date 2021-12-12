const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));

// 各問題の正しい答えが入ったオブジェクト
const correctAnswers = {
  question1: 'B',
  question2: 'A',
  question3: 'B',
  question4: 'C',
  question5: 'D',
  question6: 'B',
}

function checkClickedAnswer(event) {
  // クリックされた答えの要素を取得する(liタグ)
  const clickedAnswerElement = event.currentTarget;
  // console.log(clickedAnswerElement.dataset.answer); // (A,B,C,D)
  // 選択した答え(A,B,C,D)
  const selectedAnswer = clickedAnswerElement.dataset.answer;
  const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
  // 正しい答え(A,B,C,D)
  const correctAnswer = correctAnswers[questionId];

  // メッセージを入れる変数を用意
  let message;
  // カラーコードを入れる変数を用意
  let answerColorCode;

  // 回答の正誤判定の条件分岐
  if (selectedAnswer === correctAnswer) {
    // 正しい答えだったとき
    message = ' スギョイ!!正解です';
    answerColorCode = '';
  } else {
      // 間違った答えだったとき
    message = '残念!!不正解です!!'
    answerColorCode = '#f05959';
  }

  alert(message);

  // 色を変更
  document.querySelector('span#correct-answer').style.color = answerColorCode;

  // 答え全体を表示させる(cssで#section-correct-answerをnoneしているのをJSで解除)
  document.querySelector('#section-correct-answer').style.display = 'block';
}
