alert('時間比率の計算をします。「OK」ボタンを押してください。');
let text = prompt("テキストを読んだ時間は何分ですか？");
let issue = prompt("問題に取り組んだ時間は何分ですか？");
document.write("テキストを読んだ時間 = " + text + ":  問題に取り組んだ時間 = " + issue + "<br />");
document.write("時間比率は「テキスト時間：過去問時間」が" + text/(text+issue)*100 + "：" + issue/(text+issue)*100 + "でした" + "<br />");
