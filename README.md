# menus-client

## local

### cloud functionsのemulator

```sh
cd functions
yarn serve
```

コンソールに表示されたURLにアクセスして画面の「Query your server」をクリックする。
http://localhost:5001/menus-client/us-central1/graphql

以下のサイトにリダイレクトされる。
https://studio.apollographql.com/sandbox/explorer

endpointが以下に設定されている。
http://localhost:5001/menus-client/us-central1/graphql

### client server

server.jsでプロキシサーバを起動している。
```sh
yarn dev
```

## firebase

### firestore

localとproductionで、DBは同じfirestoreに接続している。

### auth

<!-- TODO -->

### deploy

#### functions

```sh
cd functions
yarn deploy
```

以下のサイトで、
https://studio.apollographql.com/sandbox/explorer

以下のcloud functionsのエンドポイントに接続する。
https://us-central1-menus-client.cloudfunctions.net/graphql

#### hosting

```sh
yarn deploy
```

## graphql

### cloud functions

cloud functionsからfirestoreに接続してGraphQLサーバを起動している。
localではemulatorに接続する。
productionではcloud functionsに接続する。
DBは同じfirestoreに接続している。

### client

- graphql/schema.graphql: 型を書く
- graphql/**/*.graphql: queryとmutationを書く

コード生成
```sh
yarn codegen
```

- graphql/dist/client.ts: 生成したReact Hooksのコード
