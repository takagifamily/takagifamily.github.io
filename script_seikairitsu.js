alert('正解率の計算をします。「OK」ボタンを押してください。');
let all = prompt("全部で何問解きましたか？");
let right = prompt("そのうち、正解した問題は何問ですか？");
document.write("挑戦数 = " + all + ":  正解数 = " + right + "<br />");
document.write('正解率は'+ right/all +'%でした' + "<br />");
