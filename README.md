# KAKAO_CLONE

> 카카오톡의 중요 기술을 개발

## ✔️ 실행 방법

1. Config 파일 생성
   - [ConfigImpl.ts](src\config\ConfigImpl.ts) 파일 형식으로 `src/config/env` 내에 `local`, `dev`, `test`, `prod` 생성해 사용
2. .env 생성
   - `npm install -g ts-node`
   - `NODE_ENV={사용하고자 하는 env(local, dev, prod)} ts-node generate-docker-env.ts`
3. docker-compose 실행
   ```
    docker-compose up -d --build
   ```

## 🚦 Project setting

- [ x ] Project init
- [ x ] ESlint
- [ x ] Config
- [ ] Logger
  - 로그 라이브러리: `npm install nest-winston winston `
  - 로그 file 관리 라이브러리: `winston-daily-rotate-file`
  - [Logger.ts](src\module\Logger.ts) 에 winston setting
- [ ] Docker
- [ ] Database
  - [ ] redis
  - [ ] postgrsql
- [ ] RebbitMq

## 기능

- [ ] 로그인
- [ ] 실시간 챗팅
  - [ ] 읽음 1 사라짐
  - [ ] 삭제
    - [ ] 24시간 이후엔 삭제 불능
  - [ ] ip 변경시 이전 기록 못봄
    - [ ] 보기 위해선 서랍장 구독
  - [ ] 이모티콘 사용
  - [ ] 외부 날씨에 의한 배경 변경 (후순위)
  - [ ] 챗팅방 내용 백업
- [ ] 챗팅방
  - [ ] 즐겨찾기
    - [ ] 최상단
  - [ ] 고정
    - [ ] 최상단
- [ ] 친구 목록
  - [ ] 친구 추가
    - [ ] 이메일 검색
    - [ ] 존재하지 않음 카카오 공유

## 🧰 기술 스텍

`RebbiMQ`, `PostgreSQL`, `Redis`, `WebSocket`, `TypeOrm`
