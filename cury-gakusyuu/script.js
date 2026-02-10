// カレーのデータベース
const curryData = [
    {
        name: "ビーフカレー",
        emoji: "🥩🍛",
        comment: "今日のあなたは力強いパワーに満ちています！困難にも立ち向かえる日です。"
    },
    {
        name: "グリーンカレー",
        emoji: "🌿🍛",
        comment: "爽やかな一日になりそう。新しいことにチャレンジするのに最適な日です。"
    },
    {
        name: "バターチキンカレー",
        emoji: "🧈🍗🍛",
        comment: "まろやかな優しさがあなたを包む日。人との出会いを大切にしましょう。"
    },
    {
        name: "シーフードカレー",
        emoji: "🦐🦑🍛",
        comment: "海のように広い心で過ごせる日。柔軟な対応が幸運を呼びます。"
    },
    {
        name: "キーマカレー",
        emoji: "🍖🍛",
        comment: "細かい気配りが光る一日。コツコツ積み重ねることで成果が出ます。"
    },
    {
        name: "野菜カレー",
        emoji: "🥕🥔🍛",
        comment: "健康運UP！体調管理をしっかりすることで、良い一日になるでしょう。"
    },
    {
        name: "スープカレー",
        emoji: "🍲🍛",
        comment: "さっぱりとした気分で過ごせる日。心も体もリフレッシュできます。"
    },
    {
        name: "ドライカレー",
        emoji: "🍚🍛",
        comment: "テキパキと物事が進む日。効率よく行動することで大きな成果が得られます。"
    },
    {
        name: "ポークカレー",
        emoji: "🐷🍛",
        comment: "元気いっぱいの一日！あなたの明るさが周りを幸せにします。"
    },
    {
        name: "チキンカレー",
        emoji: "🍗🍛",
        comment: "バランスの取れた運気。何事も程よく進む安定した一日です。"
    },
    {
        name: "カツカレー",
        emoji: "🍛🥩",
        comment: "勝負運が高まっています！大事な場面で力を発揮できる日です。"
    },
    {
        name: "タイカレー",
        emoji: "🌶️🍛",
        comment: "刺激的な出来事がありそう。いつもと違う選択が幸運を呼びます。"
    }
];

// 要素の取得
const fortuneButton = document.getElementById('fortuneButton');
const fortuneBox = document.getElementById('fortuneBox');
const resultContainer = document.getElementById('resultContainer');
const curryImage = document.getElementById('curryImage');
const curryName = document.getElementById('curryName');
const curryComment = document.getElementById('curryComment');

// ボタンクリック時の処理
fortuneButton.addEventListener('click', function() {
    // ランダムにカレーを選択
    const randomIndex = Math.floor(Math.random() * curryData.length);
    const selectedCurry = curryData[randomIndex];
    
    // ボタンを一時的に無効化（連打防止）
    fortuneButton.disabled = true;
    fortuneButton.textContent = '占い中...';
    
    // 少し待ってから結果を表示（演出のため）
    setTimeout(function() {
        // fortune-boxを非表示
        fortuneBox.style.display = 'none';
        
        // 結果を設定
        curryImage.textContent = selectedCurry.emoji;
        curryName.textContent = selectedCurry.name;
        curryComment.textContent = selectedCurry.comment;
        
        // 結果コンテナを表示
        resultContainer.style.display = 'block';
        
        // ボタンのテキストを変更
        fortuneButton.textContent = 'もう一度占う';
        fortuneButton.disabled = false;
        
        // 次回クリック時は結果をリセット
        fortuneButton.onclick = function() {
            resultContainer.style.display = 'none';
            fortuneBox.style.display = 'flex';
            fortuneButton.textContent = '今日のカレーを占う';
            fortuneButton.onclick = null;
            
            // 再度占いを実行
            setTimeout(function() {
                fortuneButton.click();
            }, 100);
        };
    }, 800);
});
