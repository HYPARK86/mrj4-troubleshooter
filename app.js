const ALARM_DATA = {"meta":{"source":"MR-J4 서보앰프 트러블슈팅 Ver.J","section":"1.2 알람 일람표","pages":"1-2 ~ 1-7","note":"정지방식: DB=다이나믹브레이크 정지, EDB=강제정지 후 DB정지, SD=감속정지"},"alarms":[{"no":"10","name":"부족 전압","details":[{"detail":"10.1","name":"제어 회로 전원 전압 저하","stop":"EDB"},{"detail":"10.2","name":"주회로 전원 전압 저하","stop":"SD"}]},{"no":"11","name":"스위치 설정 이상","details":[{"detail":"11.1","name":"축번호 설정이상","stop":"DB"},{"detail":"11.2","name":"무효 축설정이상","stop":"DB"}]},{"no":"12","name":"메모리 이상 1(RAM)","details":[{"detail":"12.1","name":"RAM 이상 1","stop":"DB"},{"detail":"12.2","name":"RAM 이상 2","stop":"DB"},{"detail":"12.3","name":"RAM 이상 3","stop":"DB"},{"detail":"12.4","name":"RAM 이상 4","stop":"DB"},{"detail":"12.5","name":"RAM 이상 5","stop":"DB"}]},{"no":"13","name":"클럭 이상","details":[{"detail":"13.1","name":"제어 클럭 이상 1","stop":"DB"},{"detail":"13.2","name":"제어 클럭 이상 2","stop":"DB"}]},{"no":"14","name":"제어 처리 이상","details":[{"detail":"14.1","name":"제어 처리 이상 1","stop":"DB"},{"detail":"14.2","name":"제어 처리 이상 2","stop":"DB"},{"detail":"14.3","name":"제어 처리 이상 3","stop":"DB"},{"detail":"14.4","name":"제어 처리 이상 4","stop":"DB"},{"detail":"14.5","name":"제어 처리 이상 5","stop":"DB"},{"detail":"14.6","name":"제어 처리 이상 6","stop":"DB"},{"detail":"14.7","name":"제어 처리 이상 7","stop":"DB"},{"detail":"14.8","name":"제어 처리 이상 8","stop":"DB"},{"detail":"14.9","name":"제어 처리 이상 9","stop":"DB"},{"detail":"14.A","name":"제어 처리 이상 10","stop":"DB"}]},{"no":"15","name":"메모리 이상 2(EEP-ROM)","details":[{"detail":"15.1","name":"전원 투입시 EEP-ROM 이상","stop":"DB"},{"detail":"15.2","name":"운전중 EEP-ROM 이상","stop":"DB"},{"detail":"15.4","name":"원점 정보 읽기이상","stop":"DB"}]},{"no":"16","name":"엔코더 초기 통신이상 1","details":[{"detail":"16.1","name":"엔코더 초기 통신 수신 데이터 이상 1","stop":"DB"},{"detail":"16.2","name":"엔코더 초기 통신 수신 데이터 이상 2","stop":"DB"},{"detail":"16.3","name":"엔코더 초기 통신 수신 데이터 이상 3","stop":"DB"},{"detail":"16.5","name":"엔코더 초기 통신 송신 데이터 이상 1","stop":"DB"},{"detail":"16.6","name":"엔코더 초기 통신 송신 데이터 이상 2","stop":"DB"},{"detail":"16.7","name":"엔코더 초기 통신 송신 데이터 이상 3","stop":"DB"},{"detail":"16.A","name":"엔코더 초기 통신 처리 이상 1","stop":"DB"},{"detail":"16.B","name":"엔코더 초기 통신 처리 이상 2","stop":"DB"},{"detail":"16.C","name":"엔코더 초기 통신 처리 이상 3","stop":"DB"},{"detail":"16.D","name":"엔코더 초기 통신 처리 이상 4","stop":"DB"},{"detail":"16.E","name":"엔코더 초기 통신 처리 이상 5","stop":"DB"},{"detail":"16.F","name":"엔코더 초기 통신 처리 이상 6","stop":"DB"}]},{"no":"17","name":"기판 이상","details":[{"detail":"17.1","name":"기판 이상 1","stop":"DB"},{"detail":"17.3","name":"기판 이상 2","stop":"DB"},{"detail":"17.4","name":"기판 이상 3","stop":"DB"},{"detail":"17.5","name":"기판 이상 4","stop":"DB"},{"detail":"17.6","name":"기판 이상 5","stop":"DB"},{"detail":"17.7","name":"기판 이상 6","stop":"DB"},{"detail":"17.8","name":"기판 이상 6 (주6)","stop":"EDB"}]},{"no":"19","name":"메모리 이상 3(FLASH-ROM)","details":[{"detail":"19.1","name":"FLASH-ROM 이상 1","stop":"DB"},{"detail":"19.2","name":"FLASH-ROM 이상 2","stop":"DB"}]},{"no":"1A","name":"서보모터 조합 이상","details":[{"detail":"1A.1","name":"서보모터 조합 이상 1","stop":"DB"},{"detail":"1A.2","name":"서보모터 제어 모드 조합 이상","stop":"DB"},{"detail":"1A.4","name":"서보모터 조합 이상 2","stop":"DB"}]},{"no":"1B","name":"컨버터 이상","details":[{"detail":"1B.1","name":"컨버터 유닛 이상","stop":"DB"}]},{"no":"1E","name":"엔코더 초기 통신이상 2","details":[{"detail":"1E.1","name":"엔코더 고장","stop":"DB"},{"detail":"1E.2","name":"기계단 엔코더 고장","stop":"DB"}]},{"no":"1F","name":"엔코더 초기 통신이상 3","details":[{"detail":"1F.1","name":"엔코더 미대응","stop":"DB"},{"detail":"1F.2","name":"기계단 엔코더 미대응","stop":"DB"}]},{"no":"20","name":"엔코더 통상 통신이상 1","details":[{"detail":"20.1","name":"엔코더 통신 수신 데이터 이상 1","stop":"EDB"},{"detail":"20.2","name":"엔코더 통신 수신 데이터 이상 2","stop":"EDB"},{"detail":"20.3","name":"엔코더 통신 수신 데이터 이상 3","stop":"EDB"},{"detail":"20.5","name":"엔코더 통신 송신 데이터 이상 1","stop":"EDB"},{"detail":"20.6","name":"엔코더 통신 송신 데이터 이상 2","stop":"EDB"},{"detail":"20.7","name":"엔코더 통신 송신 데이터 이상 3","stop":"EDB"},{"detail":"20.9","name":"엔코더 통신 수신 데이터 이상 4","stop":"EDB"},{"detail":"20.A","name":"엔코더 통신 수신 데이터 이상 5","stop":"EDB"}]},{"no":"21","name":"엔코더 통상 통신이상 2","details":[{"detail":"21.1","name":"엔코더 데이터 이상 1","stop":"EDB"},{"detail":"21.2","name":"엔코더 데이터 갱신 이상","stop":"EDB"},{"detail":"21.3","name":"엔코더 데이터 파형 이상","stop":"EDB"},{"detail":"21.4","name":"엔코더 무신호 이상","stop":"EDB"},{"detail":"21.5","name":"엔코더 하드웨어 이상 1","stop":"EDB"},{"detail":"21.6","name":"엔코더 하드웨어 이상 2","stop":"EDB"},{"detail":"21.9","name":"엔코더 데이터 이상 2","stop":"EDB"}]},{"no":"24","name":"주회로이상","details":[{"detail":"24.1","name":"하드웨어 검출 회로에 의한 지락 검출","stop":"DB"},{"detail":"24.2","name":"소프트웨어 검출 처리에 의한 지락 검출","stop":"DB","reset":["알람리셋","전원재투입"]}]},{"no":"25","name":"절대위치 소실","details":[{"detail":"25.1","name":"서보모터 엔코더 절대위치 소실","stop":"DB"},{"detail":"25.2","name":"스케일 계측 엔코더 절대위치 소실","stop":"DB"}]},{"no":"27","name":"초기 자극 검출 이상","details":[{"detail":"27.1","name":"초기 자극 검출시 이상종료","stop":"DB","reset":["알람리셋"]},{"detail":"27.2","name":"초기 자극 검출시 타임 아웃 에러","stop":"DB","reset":["알람리셋"]},{"detail":"27.3","name":"초기 자극 검출시 리미트 스위치 에러","stop":"DB","reset":["알람리셋"]},{"detail":"27.4","name":"초기 자극 검출시 추정 오차 이상","stop":"DB","reset":["알람리셋"]},{"detail":"27.5","name":"초기 자극 검출시 위치 편차 이상","stop":"DB","reset":["알람리셋"]},{"detail":"27.6","name":"초기 자극 검출시 속도 편차 이상","stop":"DB","reset":["알람리셋"]},{"detail":"27.7","name":"초기 자극 검출시 전류 이상","stop":"DB","reset":["알람리셋"]}]},{"no":"28","name":"리니어 엔코더 이상 2","details":[{"detail":"28.1","name":"리니어 엔코더 환경 이상","stop":"EDB"}]},{"no":"2A","name":"리니어 엔코더 이상 1","details":[{"detail":"2A.1","name":"리니어 엔코더 이상1-1","stop":"EDB"},{"detail":"2A.2","name":"리니어 엔코더 이상1-2","stop":"EDB"},{"detail":"2A.3","name":"리니어 엔코더 이상1-3","stop":"EDB"},{"detail":"2A.4","name":"리니어 엔코더 이상1-4","stop":"EDB"},{"detail":"2A.5","name":"리니어 엔코더 이상1-5","stop":"EDB"},{"detail":"2A.6","name":"리니어 엔코더 이상1-6","stop":"EDB"},{"detail":"2A.7","name":"리니어 엔코더 이상1-7","stop":"EDB"},{"detail":"2A.8","name":"리니어 엔코더 이상1-8","stop":"EDB"}]},{"no":"2B","name":"엔코더 카운터 이상","details":[{"detail":"2B.1","name":"엔코더 카운터 이상 1","stop":"EDB"},{"detail":"2B.2","name":"엔코더 카운터 이상 2","stop":"EDB"}]},{"no":"30","name":"회생 이상","details":[{"detail":"30.1","name":"회생 발열량 이상","stop":"DB","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]},{"detail":"30.2","name":"회생 신호 이상","stop":"DB","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]},{"detail":"30.3","name":"회생 피드백 신호 이상","stop":"DB","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]}]},{"no":"31","name":"과속도","details":[{"detail":"31.1","name":"모터 회전속도 이상/모터 속도 이상","stop":"SD","reset":["알람리셋","CPU리셋","전원재투입"]}]},{"no":"32","name":"과전류","details":[{"detail":"32.1","name":"하드웨어 검출 회로에 의한 과전류 검출(운전중)","stop":"DB"},{"detail":"32.2","name":"소프트웨어 검출 처리에 의한 과전류 검출(운전중)","stop":"DB","reset":["알람리셋","CPU리셋","전원재투입"]},{"detail":"32.3","name":"하드웨어 검출 회로에 의한 과전류 검출(정지중)","stop":"DB"},{"detail":"32.4","name":"소프트웨어 검출 처리에 의한 과전류 검출(정지중)","stop":"DB","reset":["알람리셋","CPU리셋","전원재투입"]}]},{"no":"33","name":"과전압","details":[{"detail":"33.1","name":"주회로 전압 이상","stop":"EDB","reset":["알람리셋","CPU리셋","전원재투입"]}]},{"no":"34","name":"SSCNET 수신 이상 1","details":[{"detail":"34.1","name":"SSCNET 수신 데이터 이상","stop":"SD","reset":["알람리셋","CPU리셋(주5)"]},{"detail":"34.2","name":"SSCNET 커넥터 접속 에러","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"34.3","name":"SSCNET 통신 데이터 이상","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"34.4","name":"하드웨어 이상 신호 검출","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"34.5","name":"SSCNET 수신 데이터 이상(안전 감시 기능)","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"34.6","name":"SSCNET 통신 데이터 이상(안전 감시 기능)","stop":"SD","reset":["알람리셋","CPU리셋"]}]},{"no":"35","name":"지령 주파수 이상","details":[{"detail":"35.1","name":"지령 주파수 이상","stop":"SD","reset":["알람리셋","CPU리셋","전원재투입"]}]},{"no":"36","name":"SSCNET 수신 이상 2","details":[{"detail":"36.1","name":"단속적인 통신 데이터 이상","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"36.2","name":"단속적인 통신 데이터 이상(안전 감시 기능)","stop":"SD","reset":["알람리셋","CPU리셋"]}]},{"no":"37","name":"파라미터 이상","details":[{"detail":"37.1","name":"파라미터 설정 범위 이상","stop":"DB"},{"detail":"37.2","name":"파라미터 조합에 의한 이상","stop":"DB"},{"detail":"37.3","name":"포인트 테이블 설정에 의한 이상","stop":"DB"}]},{"no":"39","name":"프로그램 이상","details":[{"detail":"39.1","name":"프로그램 이상","stop":"DB"},{"detail":"39.2","name":"명령 인수 범위이상","stop":"DB"},{"detail":"39.3","name":"레지스터수 이상","stop":"DB"},{"detail":"39.4","name":"미대응 명령이상","stop":"DB"}]},{"no":"3A","name":"돌입전류 억제 회로이상","details":[{"detail":"3A.1","name":"돌입전류 억제 회로이상","stop":"EDB"}]},{"no":"3D","name":"드라이버간 통신용 파라미터 설정이상","details":[{"detail":"3D.1","name":"슬레이브측 드라이버간 통신용 파라미터 조합이상","stop":"DB"},{"detail":"3D.2","name":"마스터측 드라이버간 통신용 파라미터 조합이상","stop":"DB"}]},{"no":"3E","name":"운전 모드 이상","details":[{"detail":"3E.1","name":"운전 모드 이상","stop":"DB"},{"detail":"3E.6","name":"운전 모드 전환이상","stop":"DB"}]},{"no":"42","name":"서보 제어 이상(리니어 서보모터, 다이렉트 드라이브 모터 사용시) / 풀 클로즈드 제어 이상(풀 클로즈드 제어 사용시)","details":[{"detail":"42.1","name":"위치 편차에 의한 서보 제어이상","stop":"EDB","reset":["(주4)"]},{"detail":"42.2","name":"속도 편차에 의한 서보 제어이상","stop":"EDB","reset":["(주4)"]},{"detail":"42.3","name":"토크/추력 편차에 의한 서보 제어이상","stop":"EDB","reset":["(주4)"]},{"detail":"42.8","name":"위치 편차에 의한 풀 클로즈드 제어이상","stop":"EDB","reset":["(주4)"]},{"detail":"42.9","name":"속도 편차에 의한 풀 클로즈드 제어이상","stop":"EDB","reset":["(주4)"]},{"detail":"42.A","name":"지령 정지시 위치 편차에 의한 풀 클로즈드 제어이상","stop":"EDB","reset":["(주4)"]}]},{"no":"45","name":"주회로 소자 과열","details":[{"detail":"45.1","name":"주회로 소자 온도이상 1","stop":"SD","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]},{"detail":"45.2","name":"주회로 소자 온도이상 2","stop":"SD","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]}]},{"no":"46","name":"서보모터 과열","details":[{"detail":"46.1","name":"서보모터 온도이상 1","stop":"SD","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]},{"detail":"46.2","name":"서보모터 온도이상 2","stop":"SD","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]},{"detail":"46.3","name":"서미스트 미접속 이상","stop":"SD","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]},{"detail":"46.4","name":"서미스트 회로 이상","stop":"SD","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]},{"detail":"46.5","name":"서보모터 온도이상 3","stop":"DB","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]},{"detail":"46.6","name":"서보모터 온도이상 4","stop":"DB","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]}]},{"no":"47","name":"냉각 팬 이상","details":[{"detail":"47.1","name":"냉각 팬 정지이상","stop":"SD"},{"detail":"47.2","name":"냉각 팬 회전속도 저하이상","stop":"SD"}]},{"no":"50","name":"과부하 1","details":[{"detail":"50.1","name":"운전시 과부하 서멀 이상 1","stop":"SD","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]},{"detail":"50.2","name":"운전시 과부하 서멀 이상 2","stop":"SD","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]},{"detail":"50.3","name":"운전시 과부하 서멀 이상 4","stop":"SD","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]},{"detail":"50.4","name":"정지시 과부하 서멀 이상 1","stop":"SD","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]},{"detail":"50.5","name":"정지시 과부하 서멀 이상 2","stop":"SD","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]},{"detail":"50.6","name":"정지시 과부하 서멀 이상 4","stop":"SD","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]}]},{"no":"51","name":"과부하 2","details":[{"detail":"51.1","name":"운전시 과부하 서멀 이상 3","stop":"DB","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]},{"detail":"51.2","name":"정지시 과부하 서멀 이상 3","stop":"DB","reset":["알람리셋(주1)","CPU리셋(주1)","전원재투입(주1)"]}]},{"no":"52","name":"오차 과대","details":[{"detail":"52.1","name":"누적 펄스 과대 1","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"52.3","name":"누적 펄스 과대 2","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"52.4","name":"토크 제한 제시시 오차 과대","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"52.5","name":"누적 펄스 과대 3","stop":"EDB","reset":["알람리셋","CPU리셋"]}]},{"no":"54","name":"발진 검지","details":[{"detail":"54.1","name":"발진 검지이상","stop":"EDB","reset":["알람리셋","CPU리셋"]}]},{"no":"56","name":"강제 정지이상","details":[{"detail":"56.2","name":"강제 정지시 오버 스피드","stop":"EDB","reset":["알람리셋","CPU리셋"]},{"detail":"56.3","name":"강제 정지시 감속 예측 거리 오버","stop":"EDB","reset":["알람리셋","CPU리셋"]}]},{"no":"61","name":"오퍼레이션 에러","details":[{"detail":"61.1","name":"포인트 테이블 설정 범위 이상","stop":"DB","reset":["알람리셋"]}]},{"no":"63","name":"STO 타이밍 이상","details":[{"detail":"63.1","name":"STO1 OFF","stop":"DB","reset":["알람리셋","CPU리셋","전원재투입"]},{"detail":"63.2","name":"STO2 OFF","stop":"DB","reset":["알람리셋","CPU리셋","전원재투입"]},{"detail":"63.5","name":"기능 안전 유닛에 의한 STO","stop":"DB","reset":["알람리셋","CPU리셋","전원재투입"]}]},{"no":"64","name":"기능 안전 유닛 설정이상","details":[{"detail":"64.1","name":"STO 입력 이상","stop":"DB"},{"detail":"64.2","name":"호환 모드 설정이상","stop":"DB"},{"detail":"64.3","name":"운전 모드 이상","stop":"DB"}]},{"no":"65","name":"기능 안전 유닛 접속이상","details":[{"detail":"65.1","name":"기능 안전 유닛 통신이상 1","stop":"SD"},{"detail":"65.2","name":"기능 안전 유닛 통신이상 2","stop":"SD"},{"detail":"65.3","name":"기능 안전 유닛 통신이상 3","stop":"SD"},{"detail":"65.4","name":"기능 안전 유닛 통신이상 4","stop":"SD"},{"detail":"65.5","name":"기능 안전 유닛 통신이상 5","stop":"SD"},{"detail":"65.6","name":"기능 안전 유닛 통신이상 6","stop":"SD"},{"detail":"65.7","name":"기능 안전 유닛 통신이상 7","stop":"SD"},{"detail":"65.8","name":"기능 안전 유닛 차단 신호이상 1","stop":"DB"},{"detail":"65.9","name":"기능 안전 유닛 차단 신호이상 2","stop":"DB"}]},{"no":"70","name":"기계단 엔코더 초기통신이상 1","details":[{"detail":"70.1","name":"기계단 엔코더 초기 통신 수신 데이터 이상 1","stop":"DB"},{"detail":"70.2","name":"기계단 엔코더 초기 통신 수신 데이터 이상 2","stop":"DB"},{"detail":"70.3","name":"기계단 엔코더 초기 통신 수신 데이터 이상 3","stop":"DB"},{"detail":"70.5","name":"기계단 엔코더 초기 통신 송신 데이터 이상 1","stop":"DB"},{"detail":"70.6","name":"기계단 엔코더 초기 통신 송신 데이터 이상 2","stop":"DB"},{"detail":"70.7","name":"기계단 엔코더 초기 통신 송신 데이터 이상 3","stop":"DB"},{"detail":"70.A","name":"기계단 엔코더 초기 통신 처리 이상 1","stop":"DB"},{"detail":"70.B","name":"기계단 엔코더 초기 통신 처리 이상 2","stop":"DB"},{"detail":"70.C","name":"기계단 엔코더 초기 통신 처리 이상 3","stop":"DB"},{"detail":"70.D","name":"기계단 엔코더 초기 통신 처리 이상 4","stop":"DB"},{"detail":"70.E","name":"기계단 엔코더 초기 통신 처리 이상 5","stop":"DB"},{"detail":"70.F","name":"기계단 엔코더 초기 통신 처리 이상 6","stop":"DB"}]},{"no":"71","name":"기계단 엔코더 통상통신이상 1","details":[{"detail":"71.1","name":"기계단 엔코더 통신 수신 데이터 이상 1","stop":"EDB"},{"detail":"71.2","name":"기계단 엔코더 통신 수신 데이터 이상 2","stop":"EDB"},{"detail":"71.3","name":"기계단 엔코더 통신 수신 데이터 이상 3","stop":"EDB"},{"detail":"71.5","name":"기계단 엔코더 통신 송신 데이터 이상 1","stop":"EDB"},{"detail":"71.6","name":"기계단 엔코더 통신 송신 데이터 이상 2","stop":"EDB"},{"detail":"71.7","name":"기계단 엔코더 통신 송신 데이터 이상 3","stop":"EDB"},{"detail":"71.9","name":"기계단 엔코더 통신 송신 데이터 이상 4","stop":"EDB"},{"detail":"71.A","name":"기계단 엔코더 통신 송신 데이터 이상 5","stop":"EDB"}]},{"no":"72","name":"기계단 엔코더 통상통신이상 2","details":[{"detail":"72.1","name":"기계단 엔코더 데이터 이상 1","stop":"EDB"},{"detail":"72.2","name":"기계단 엔코더 데이터 갱신 이상","stop":"EDB"},{"detail":"72.3","name":"기계단 엔코더 데이터 파형 이상","stop":"EDB"},{"detail":"72.4","name":"기계단 엔코더 무신호 이상","stop":"EDB"},{"detail":"72.5","name":"기계단 엔코더 하드웨어 이상 1","stop":"EDB"},{"detail":"72.6","name":"기계단 엔코더 하드웨어 이상 2","stop":"EDB"},{"detail":"72.9","name":"기계단 엔코더 데이터 이상 2","stop":"EDB"}]},{"no":"74","name":"옵션 카드 이상 1","details":[{"detail":"74.1","name":"옵션 카드 이상 1","stop":"DB"},{"detail":"74.2","name":"옵션 카드 이상 2","stop":"DB"},{"detail":"74.3","name":"옵션 카드 이상 3","stop":"DB"},{"detail":"74.4","name":"옵션 카드 이상 4","stop":"DB"},{"detail":"74.5","name":"옵션 카드 이상 5","stop":"DB"}]},{"no":"75","name":"옵션 카드 이상 2","details":[{"detail":"75.3","name":"옵션 카드 접속 이상","stop":"EDB"},{"detail":"75.4","name":"옵션 카드 미접속","stop":"DB"}]},{"no":"79","name":"기능 안전 유닛 진단 이상","details":[{"detail":"79.1","name":"기능 안전 유닛 전원 전압 이상","stop":"DB","reset":["알람리셋(주7)"]},{"detail":"79.2","name":"기능 안전 유닛 내부 이상","stop":"DB"},{"detail":"79.3","name":"기능 안전 유닛 온도 이상","stop":"SD","reset":["알람리셋(주7)"]},{"detail":"79.4","name":"서보앰프 이상","stop":"SD"},{"detail":"79.5","name":"입력 디바이스 이상","stop":"SD"},{"detail":"79.6","name":"출력 디바이스 이상","stop":"SD"},{"detail":"79.7","name":"입력 신호 불일치 이상","stop":"SD"},{"detail":"79.8","name":"위치 피드백 고착이상","stop":"DB"}]},{"no":"7A","name":"파라미터 설정 이상(안전 감시 기능)","details":[{"detail":"7A.1","name":"파라미터 조합이상(안전 감시 기능)","stop":"DB"},{"detail":"7A.2","name":"파라미터 설정 범위이상(안전 감시 기능)","stop":"DB"},{"detail":"7A.3","name":"파라미터 조합에 의한 이상(안전 감시 기능)","stop":"DB"},{"detail":"7A.4","name":"기능 안전 유닛 조합이상(안전 감시 기능)","stop":"DB"}]},{"no":"7C","name":"기능 안전 유닛 통신 진단이상(안전 감시 기능)","details":[{"detail":"7C.1","name":"기능 안전 유닛 통신 주기이상(안전 감시 기능)","stop":"SD","reset":["알람리셋(주7)"]},{"detail":"7C.2","name":"기능 안전 유닛 통신 데이터이상(안전 감시 기능)","stop":"SD","reset":["알람리셋(주7)"]}]},{"no":"7D","name":"안전 감시 이상","details":[{"detail":"7D.2","name":"속도 감시 이상","stop":"DB","reset":["알람리셋(주7)"]}]},{"no":"82","name":"마스터 슬레이브 운전 이상 1","details":[{"detail":"82.1","name":"마스터 슬레이브 운전 이상 1","stop":"EDB","reset":["알람리셋","CPU리셋"]}]},{"no":"8A","name":"USB 통신 타임 아웃 이상/시리얼 통신 타임 아웃 이상","details":[{"detail":"8A.1","name":"USB 통신 타임 아웃 이상/시리얼 통신 타임 아웃 이상","stop":"SD","reset":["알람리셋","CPU리셋"]}]},{"no":"8D","name":"CC-Link IE 통신 이상","details":[{"detail":"8D.1","name":"CC-Link IE 통신이상 1","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"8D.2","name":"CC-Link IE 통신이상 2","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"8D.3","name":"마스터국 설정이상 1","stop":"DB","reset":["CPU리셋"]},{"detail":"8D.5","name":"마스터국 설정이상 2","stop":"DB","reset":["CPU리셋"]},{"detail":"8D.6","name":"CC-Link IE 통신이상 3","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"8D.7","name":"CC-Link IE 통신이상 4","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"8D.8","name":"CC-Link IE 통신이상 5","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"8D.9","name":"동기 이상 1","stop":"SD","reset":["CPU리셋"]},{"detail":"8D.A","name":"동기 이상 2","stop":"SD","reset":["CPU리셋"]}]},{"no":"8E","name":"USB 통신 이상/시리얼 통신 이상","details":[{"detail":"8E.1","name":"USB 통신 수신 에러/시리얼 통신 수신 에러","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"8E.2","name":"USB 통신 체크 섬 에러/시리얼 통신 체크 섬 에러","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"8E.3","name":"USB 통신 캐릭터 에러/시리얼 통신 캐릭터 에러","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"8E.4","name":"USB 통신 커맨드 에러/시리얼 통신 커맨드 에러","stop":"SD","reset":["알람리셋","CPU리셋"]},{"detail":"8E.5","name":"USB 통신 데이터 넘버 에러/시리얼 통신 데이터 넘버 에러","stop":"SD","reset":["알람리셋","CPU리셋"]}]},{"no":"88888","name":"워치도그","details":[{"detail":"8888_","name":"워치도그","stop":"SD"}]}]};

const STOP_LABEL = {
  DB: { label: 'DB 정지', desc: '다이나믹 브레이크로 정지 (전자 브레이크 없는 경우 프리런)' },
  EDB: { label: '강제정지 후 DB', desc: '일정시간 강제정지 후 다이나믹 브레이크로 정지' },
  SD: { label: '감속정지', desc: '파라미터로 설정된 감속시간에 따라 감속 후 정지' }
};

const STORAGE_KEY_FAV = 'mrj4_favorites_v1';
const STORAGE_KEY_RECENT = 'mrj4_recent_v1';

function loadJSON(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch (e) { return fallback; }
}
function saveJSON(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
}

let favorites = loadJSON(STORAGE_KEY_FAV, []);
let recent = loadJSON(STORAGE_KEY_RECENT, []);

const FLAT = [];
ALARM_DATA.alarms.forEach(a => {
  a.details.forEach(d => {
    FLAT.push({
      key: a.no + '_' + d.detail,
      groupNo: a.no,
      groupName: a.name,
      detail: d.detail,
      detailName: d.name,
      stop: d.stop,
      reset: d.reset || null,
      searchBlob: normalize(a.no + ' AL' + a.no + ' AL.' + a.no + ' ' + a.name + ' ' + d.detail + ' ' + d.name)
    });
  });
});

function normalize(s) { return s.toLowerCase().replace(/[\s.\-_]/g, ''); }
function getByKey(key) { return FLAT.find(x => x.key === key); }

const searchInput = document.getElementById('searchInput');
const alarmList = document.getElementById('alarmList');
const emptyState = document.getElementById('emptyState');
const resultCount = document.getElementById('resultCount');
const clearBtn = document.getElementById('clearBtn');

function renderList(query) {
  const q = normalize(query || '');
  let items;
  if (!q) {
    items = [];
  } else {
    items = FLAT.filter(it => it.searchBlob.includes(q));
    items.sort((a, b) => {
      const aExact = a.groupNo.toLowerCase() === q || a.detail.toLowerCase().replace(/[.\-]/g,'') === q;
      const bExact = b.groupNo.toLowerCase() === q || b.detail.toLowerCase().replace(/[.\-]/g,'') === q;
      if (aExact && !bExact) return -1;
      if (bExact && !aExact) return 1;
      return 0;
    });
  }

  alarmList.innerHTML = '';
  if (q && items.length === 0) {
    emptyState.classList.remove('hidden');
    resultCount.textContent = '';
  } else {
    emptyState.classList.add('hidden');
    resultCount.textContent = q ? (items.length + '건 검색됨') : '';
    items.slice(0, 80).forEach(it => alarmList.appendChild(renderCard(it)));
  }

  document.getElementById('favSection').classList.toggle('hidden', !!q || favorites.length === 0);
  document.getElementById('recentSection').classList.toggle('hidden', !!q || recent.length === 0);

  if (!q) renderChips();
}

function renderCard(it) {
  const card = document.createElement('button');
  card.className = 'alarm-card';
  card.dataset.key = it.key;
  const stopInfo = STOP_LABEL[it.stop] || { label: it.stop, desc: '' };
  card.innerHTML = `
    <div class="alarm-card-code">AL.${escapeHtml(it.detail)}</div>
    <div class="alarm-card-main">
      <div class="alarm-card-title">${escapeHtml(it.detailName)}</div>
      <div class="alarm-card-sub">${escapeHtml(it.groupName)}</div>
    </div>
    <div class="alarm-card-tag tag-${escapeHtml(it.stop)}">${escapeHtml(stopInfo.label)}</div>
  `;
  card.addEventListener('click', () => openDetail(it.key));
  return card;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function renderChips() {
  const favChips = document.getElementById('favChips');
  const recentChips = document.getElementById('recentChips');
  favChips.innerHTML = '';
  recentChips.innerHTML = '';
  favorites.forEach(key => { const it = getByKey(key); if (it) favChips.appendChild(makeChip(it)); });
  recent.filter(k => !favorites.includes(k)).forEach(key => { const it = getByKey(key); if (it) recentChips.appendChild(makeChip(it)); });
}

function makeChip(it) {
  const chip = document.createElement('button');
  chip.className = 'chip';
  chip.textContent = 'AL.' + it.detail;
  chip.addEventListener('click', () => openDetail(it.key));
  return chip;
}

function addRecent(key) {
  recent = [key, ...recent.filter(k => k !== key)].slice(0, 10);
  saveJSON(STORAGE_KEY_RECENT, recent);
}

function toggleFavorite(key) {
  if (favorites.includes(key)) favorites = favorites.filter(k => k !== key);
  else favorites = [key, ...favorites].slice(0, 20);
  saveJSON(STORAGE_KEY_FAV, favorites);
}

const detailOverlay = document.getElementById('detailOverlay');
const detailBody = document.getElementById('detailBody');
const toggleFavBtn = document.getElementById('toggleFav');
let currentDetailKey = null;

function openDetail(key) {
  const it = getByKey(key);
  if (!it) return;
  currentDetailKey = key;
  addRecent(key);

  const stopInfo = STOP_LABEL[it.stop] || { label: it.stop, desc: '' };
  const resetList = it.reset && it.reset.length
    ? it.reset.map(r => `<span class="reset-pill">${escapeHtml(r)}</span>`).join('')
    : '<span class="reset-pill reset-none">해당 없음 (아래 참고)</span>';

  const online = navigator.onLine !== false;

  detailBody.innerHTML = `
    <div class="detail-code">AL.${escapeHtml(it.detail)}</div>
    <h2 class="detail-title">${escapeHtml(it.detailName)}</h2>
    <div class="detail-group">${escapeHtml(it.groupNo)}. ${escapeHtml(it.groupName)}</div>

    <div class="detail-block">
      <div class="detail-block-label">정지 방식</div>
      <div class="stop-box tag-${escapeHtml(it.stop)}">
        <strong>${escapeHtml(stopInfo.label)}</strong>
        <span>${escapeHtml(stopInfo.desc)}</span>
      </div>
    </div>

    <div class="detail-block">
      <div class="detail-block-label">해제(리셋) 방법</div>
      <div class="reset-row">${resetList}</div>
    </div>

    <div class="detail-block placeholder-block">
      <div class="detail-block-label">원인 &amp; 점검 순서</div>
      <div class="placeholder-body">
        <p>상세 원인·현장 점검 체크리스트는 매뉴얼 1.4장(알람 대처 방법)에서 순차적으로 채워 넣을 예정입니다.</p>
        <p class="placeholder-ref">참고: MR-J4 트러블슈팅 매뉴얼 Ver.J · 1.4 알람 대처 방법 (1-10 ~ 1-69쪽)</p>
      </div>
    </div>

    <div class="detail-block ai-block ${online ? '' : 'disabled'}">
      <div class="detail-block-label">매뉴얼 근거 기반 AI 질문</div>
      <div class="placeholder-body">
        <p>${online ? '온라인 상태입니다. (AI 질의 기능은 다음 단계에서 연결 예정)' : '오프라인 상태에서는 사용할 수 없습니다. 인터넷 연결 시 AI에게 추가 질문이 가능해질 예정입니다.'}</p>
      </div>
    </div>

    <div class="detail-block placeholder-block">
      <div class="detail-block-label">내 조치 이력</div>
      <div class="placeholder-body"><p>아직 기록된 이력이 없습니다. (이력 기능은 다음 단계에서 추가됩니다)</p></div>
    </div>
  `;

  toggleFavBtn.textContent = favorites.includes(key) ? '★' : '☆';
  detailOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  detailOverlay.classList.add('hidden');
  document.body.style.overflow = '';
  renderList(searchInput.value);
}

document.getElementById('closeDetail').addEventListener('click', closeDetail);
detailOverlay.addEventListener('click', (e) => { if (e.target === detailOverlay) closeDetail(); });

toggleFavBtn.addEventListener('click', () => {
  if (!currentDetailKey) return;
  toggleFavorite(currentDetailKey);
  toggleFavBtn.textContent = favorites.includes(currentDetailKey) ? '★' : '☆';
});

document.getElementById('favBtn').addEventListener('click', () => {
  searchInput.value = '';
  renderList('');
  document.getElementById('favSection').scrollIntoView({ behavior: 'smooth' });
});

searchInput.addEventListener('input', (e) => {
  renderList(e.target.value);
  clearBtn.classList.toggle('hidden', !e.target.value);
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  renderList('');
  clearBtn.classList.add('hidden');
  searchInput.focus();
});

renderList('');
clearBtn.classList.add('hidden');

function updateOnlineStatus() {
  const banner = document.getElementById('offlineBanner');
  const statusLine = document.getElementById('statusLine');
  if (navigator.onLine === false) {
    banner.classList.remove('hidden');
    statusLine.textContent = '오프라인 모드 · 키워드 검색만 가능';
  } else {
    banner.classList.add('hidden');
    statusLine.textContent = '미쓰비시 서보앰프 알람 검색';
  }
}
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
updateOnlineStatus();

// 표준 서비스워커 등록 (같은 origin의 실제 파일)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
