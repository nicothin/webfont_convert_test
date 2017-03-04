# Тест конвертеров шрифтов

Проверка качества работы веб-сервисов и локальных инструментов работы со шрифтами.

### [ttf2woff](https://github.com/fontello/ttf2woff)

<pre>
node_modules/.bin/ttf2woff fonts/lato/lato__latofonts_com.ttf fonts/lato/lato__ttf2woff.woff
</pre>

### [github.com/fontello/ttf2woff](https://github.com/fontello/ttf2woff)

<pre>
cat fonts/lato/lato__latofonts_com.ttf | node_modules/.bin/ttf2woff2 >> fonts/lato/lato__ttf2woff2.woff2
</pre>
