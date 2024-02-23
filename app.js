new Vue({
  el: '#app',
  data: {
        portfolioItems: [
            {
                name: 'NBA Stats of League Leaders',
                nameCh: 'NBA 各項數據排名',
                detail: ['在網頁上顯示 NBA 球員各項數據排名。', '使用 Axios 套件運行 AJAX，向 NBA 官網的 API 拿取 JSON 數據。',
                        '透過 Vue.js 的數據綁定功能，將後端 API 返回的數據動態渲染到網頁上。'],
                image: 'photo-nba-player-stats.png',
                link: 'https://revolmusic23.github.io/NBA-Stats-of-League-Leaders/'
            },
            {
                name: 'Music Portfolio Website',
                nameCh: '音樂作品集網站',
                detail: ['使⽤ HTML、Tailwind CSS、Hugo 製作的靜態網頁。', '使用 Git 進行版本控制。',
                        `使用 Netlify 的 CI/CD，整合並部署網頁。`],
                image: 'photo-website.png',
                link: 'https://revolmusic.me/'
            },
            {
                name: 'Multifunctional Music Player',
                nameCh: '多功能音樂播放器',
                detail: ['使用 Vue.js 動態顯示和管理播放列表，以及更新播放器的狀態。',
                            '使用 HTML5 的 Web API 來實現音樂檔案的拖放功能。',
                            '具有循環播放片段、調整速度等功能，適合當作練習樂器的輔助工具。'],
                image: 'photo-music_player.png',
                link: 'https://revolmusic23.github.io/Vue.js-Music-Player/'
            },
            {
                name: 'College Project',
                nameCh: '畢業專題——音樂視覺化',
                detail: ['使用 Python 的 Mido 函式庫製作',
                        '能偵測鋼琴演奏者所彈的音符，並及時呈現出動畫，讓演奏者的音樂多了視覺的陪襯。'],
                image: 'photo-college_project.jpeg',
                link: 'https://e.pcloud.link/publink/show?code=XZnWWeZudCb5tBJOqyN5x8Fp3Sq7mjLlYv7'
            }
      ]
  }
});
