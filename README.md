# bukuma
bookmarks app

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
