
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

## ミドルウェアの追加
header に authorization：Good が付与されていたら処理が走るといった簡易的な認証機能を追加

認証情報付きで作成
```
npx ts-node client/goodHello.ts
```

認証失敗の確認
```
npx ts-node client/badHello.ts
```
TRPCClientError: UNAUTHORIZEDちゃんとエラーが返ってくる

## エンドポイントについて
さっきまでと同じ動作をする
```
npx ts-node client/fetch/getUserlist.ts
npx ts-node client/fetch/createUser.ts
npx ts-node client/fetch/serchUser.ts
```
