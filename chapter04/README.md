# Bun으로 패키지 관리하기

## 의존 패키지 설치

```sh
$ bun install
```

또는

```sh
$ bun i
```

## Zod 설치

```sh
$ bun add zod
```

## Prettier, ESLit 설치

```sh
$ bun add -d prettier eslint
```

## Zod 제거

```sh
$ bun remove zod
```

또는

```sh
$ bun rm zod
```

## 갱신이 필요한 패키지 확인

```sh
$ bun outdated
```

## 기존 패키지 갱신

```sh
$ bun update
```

## 설치된 패키지 목록 확인

```sh
$ bun pm ls
```

## 캐시 경로 출력

```sh
$ bun pm cache
```

## 캐시된 패키지 삭제

```sh
$ bun pm cache rm
```

## 패키지 잠금 파일 해독

```sh
$ bun bun.lockb
```
