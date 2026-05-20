$(document).ready(function(){
    // 매터포트 내부 렌더링 시간을 고려해 1초(1000ms) 정도 살짝 딜레이를 줍니다.
    setTimeout(function() {
        var $brandSpan = $(".icon-matterport-brand");
        var $logoImg = $brandSpan.find("img");
        var $logoLink = $brandSpan.find("a");

        // 1. 로고 이미지 및 alt 속성 변경
        $logoImg.attr('src', 'https://zipshowkorea.github.io/matterport/fairmont_seoul/Fairmont_seoul_Black.png');
        $logoImg.attr('alt', '페어몬트 앰배서더 서울 로고');

        // 2. 링크 주소 속성 변경 및 매터포트 고유 클릭 이벤트 가로채기
        if($logoLink.length > 0) {
            var targetUrl = "https://www.ambatel.com/fairmont/seoul/ko/main.do";
            
            // HTML 속성 자체를 페어몬트 주소로 변경
            $logoLink.attr('href', targetUrl);
            $logoLink.attr('target', '_blank');

            // 기존에 걸려있는 매터포트의 클릭 이벤트를 완전히 초기화하고 새로 바인딩
            $logoLink.off('click').on('click', function(e) {
                e.preventDefault();          // 매터포트 기본 이동 동작 막기
                e.stopPropagation();         // 이벤트가 부모 요소로 퍼지는 것 막기
                window.open(targetUrl, '_blank'); // 강제로 페어몬트 사이트 새창 열기
            });
        }
    }, 1000); 
});