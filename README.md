This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
npm i
# and
npm run dev
```
## Deploy on Vercel
실제 텍스트가 들어갈 json 파일에 {{변수}} 를 정의하고, 
렌더링 되는 코드 상에서 
```tsx
  <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ lng }}</strong> to:{' '}
      </Trans>
```
처럼 받은 {{lng}}을 넣을수있는데.. type지정을 하지 않으면 {{lng }}부분에서 에러가 나고, 타입지정을 d.ts에서 지정해줘도 빌드시에 문제가 될 수 있다. ㅇ