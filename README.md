# Comazon

코드잇 '관계형 데이터베이스를 활용한 자바스크립트 서버 만들기' 토픽에 활용되는 E-Commerce 백엔드 프로젝트입니다.

## 실행 준비

### 의존성 설치

```
npm install
```

### Prisma 설정

정의된 `schema.prisma` 파일에 따라 Prisma 패키지를 생성합니다.

```
npx prisma generate
```

### 데이터베이스 세팅

PostgreSQL 데이터베이스를 생성합니다.

`.env.example` 파일을 참고해 `.env` 파일의 `DATABASE_URL` 값을 원하는 데이터베이스 주소로 설정합니다.

그리고나서 데이터베이스 마이그레이션을 진행한다.

```
npx prisma migrate dev
```

### 실행하기

`nodemon`을 사용해 개발 모드로 실행

```
npm run dev
```

또는 `nodemon` 없이 실행

```
npm start
```

## HTTP 테스트

`__http__` 폴더의 파일들은 VS Code REST Client 확장 프로그램으로 실행할 수 있습니다.
