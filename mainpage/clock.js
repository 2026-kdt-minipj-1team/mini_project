        function updateClock() {
            const now = new Date(); // 현재 날짜 및 시간 객체 생성
            const year = now.getFullYear(); // 년
            const month = now.getMonth() + 1; // 월 (0부터 시작하므로 +1)
            const day = now.getDate(); // 일
            const hours = String(now.getHours()).padStart(2, '0'); // 시 (두 자리 맞추기)
            const minutes = String(now.getMinutes()).padStart(2, '0'); // 분 (두 자리 맞추기)
            const seconds = String(now.getSeconds()).padStart(2, '0'); // 초 (두 자리 맞추기)

            // HTML의 clock id를 가진 요소에 시간 표시
            document.getElementById('clock').innerText =
                `${year}년 ${month}월 ${day}일 ${hours}:${minutes}:${seconds}`;
        }

        // 페이지 로드 시 한 번 실행
        updateClock();

        // 1초(1000ms)마다 updateClock 함수를 반복 실행
        setInterval(updateClock, 1000);