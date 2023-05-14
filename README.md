# 説明

これはバックログ的メモアプリを作ろうとしています。  
使うのは以下です。  
TypeScript, React, MongoDB Atlas, Vercel

https://backlog-like-memo.vercel.app/

# メモ

- mongodb atlas dataAPI を使用した DB 接続方法
  ※いくつかやり方はあるけどここでは API Key を使用した方法

  1. access_token を取得
     https://realm.mongodb.com/api/client/v2.0/app/<app_id>/auth/providers/api-key/login
     上記に APIKEY を使用して接続 レスポンスに access_token が含まれている
  1. access_token を header につけて dataAPI にアクセス

- ReactApp の環境変数
  .env ファイルの作成、REACT_APP_HOGEHOGE で命名  
  npm run build <- これ

- 403 エラーの解消  
   https://realm.mongodb.com/groups/64560c79d311ea6274c87c5a/apps/6457383f88025670f5e93ac4/settings/general
  　ここで設定が必要だった
