# cyberpunk2077countdown

Public URL: https://leifarriens.github.io/cyberpunk2077countdown/

Wallpaper Engine Steam Workshop Version: https://steamcommunity.com/sharedfiles/filedetails/?id=2313452188

## Change Time
Change the time by passing a valid [JS Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) to the `time` query parameter:

```
?time=2020-12-18T01:00:00
```

## Change Background
Change the background by passing a media URL to the `bg` query parameter:

The bg query paramter accepts `jpg`, `png`, `gif`, `webm` and `mp4` type media:

```
?bg=https://example.com/media/image.jpg
```

By passing `none` as the query param the bg will be transparent:

```
?bg=none
```

## Change Title Message
Change the title message by passing a string to the `message` query parameter:

```
?message=CYBERPUNK%Release
```

## Combine Multiple Parameters
Combine multiple parameters by separating them with `&`:

```
?time=2020-12-18T01:00:00&bg=none
```
