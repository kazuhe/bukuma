# bukuma
bookmarks app

# Test

## テストの対象範囲
* Vuexデータストア
* 挙動が複雑なVueコンポーネント
* フレームワークに依存しないレイヤ

# Entity

## bookmarks
`id`は自動採番される。
```json
{
  "comment": "bookmarksに対するコメント",
  "created_at": "2021-04-24T23:12:58+09:00",
  "id": "-MZ3DUQhzjIzeERXAxlM",
  "url": "https://test.com"
}
```

## flag
bookmarksに対して付与される。
```json
{
  "flag_bookmark": "<bookmark_id>",
  "flagged_at": "2021-04-24T23:12:58+09:00"
}
```

# Git
コミットメッセージには必ずステータスを記載する。また、commitは可能な範囲で細かく行う。

# [add] 機能 / ファイル追加
$ git commit -m 'add: 〇〇〇〇〇'

# [fix] バグ修正
$ git commit -m 'fix: 〇〇〇〇〇〇'

# [mod] バグ以外の修正
$ git commit -m 'mod: 〇〇〇〇〇〇'

# [cln] リファクタリング / ファイル整理
$ git commit -m 'cln: 〇〇〇〇〇〇'

# [rvt] 変更の取り消し
$ git commit -m 'rvt: 〇〇〇〇〇〇'
