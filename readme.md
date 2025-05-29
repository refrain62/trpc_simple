
# tRPCだけに着目して一から構築していく の写経
https://zenn.dev/masahiro_dev/articles/learn-trpc-from-scratch

## サーバーの起動
```
npx nodemon
```

## クライアントの実行
```
npx ts-node client/getUserlist.ts
```
まだデータがないので [] が帰ってくる


```
npx ts-node client/createUser.ts
npx ts-node client/serchUser.ts
```
結果が返ってくる

