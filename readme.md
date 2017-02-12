# Тест конвертеров шрифтов

Проверка качества работы веб-сервисов и локальных инструментов работы со шрифтами.

Конвертеры шрифтов

- [ttf2woff](https://github.com/fontello/ttf2woff)
- [ttf2woff2](https://github.com/nfroidure/ttf2woff2)
- [font2web.com](http://www.font2web.com)
- [freefontconverter.com](http://www.freefontconverter.com)
- [web-font-generator.com](https://www.web-font-generator.com)
- [fontconverter.org](https://www.fontconverter.org)

Оптимизаторы шрифтов

- [fontmin](https://github.com/ecomfe/fontmin)

Комбинированные инструменты

- [fontforge](https://fontforge.github.io/en-US/)
- [fonttools](https://github.com/fonttools/fonttools)
- [webfonts.ru](https://webfont.ru/converter)
- [fontsquirrel.com](https://www.fontsquirrel.com)
















старое

## Впечатления о конвертерах



### [webfont.ru/converter/](https://webfont.ru/converter/)

- Отдаёт TTF, WOFF, WOFF2.
- Позволяет работать только с имеющимися на проекте шрифтами, свой загрузить нельзя.
- Одновременная работа только с одним шрифтом (при переходе от шрифта к шрифту в рамках гарнитуры сохраняются настройки конвертера).
- Есть настройка с указанием сохраняемых в шрифте диапазонов символов или конкретных символов, что в несколько раз уменьшает вес файла (212Кб → 27Кб для Open Sans [с минимальным набором символов](https://gist.github.com/nicothin/758b76f4785f1f8f4b154c3c86b9bc42)).
- Умеет конвертировать в base64.
- Меняет визуальную плотность, портит полуовалы, деформирует вертикальные размеры букв, меняет высоту строки.



### [font2web.com](http://www.font2web.com/)

- Работает не со всеми шрифтами (чёрный список обнаружить не удалось, попытка сконвертировать Open Sans привела к скачиванию архива без шрифтов).
- Настроек не имеет.
- Работает с одним файлом за раз.
- Не деформирует буквы.



### [fontsquirrel.com/tools/webfont-generator](https://www.fontsquirrel.com/tools/webfont-generator)

- Отдаёт TTF, WOFF, WOFF2, EOT, SVG.
- Работает не со всеми шрифтами (чёрный список [имеется](https://www.fontsquirrel.com/faq#blacklist), но не опубликован).
- Множество настроек, в том числе указание диапазонов символов или конкретных символов (212Кб → 34Кб для Open Sans [с минимальным набором символов](https://gist.github.com/nicothin/758b76f4785f1f8f4b154c3c86b9bc42)).
- С настройками по умолчанию убирает из шрифта все нелатинские символы (в т.ч. кириллические).
- Работает с несколькими файлами за раз.
- Умеет конвертировать в base64.
- Меняет визуальную плотность, портит полуовалы, деформирует вертикальные размеры букв, меняет высоту строки, для некоторых размеров «съедает» внутрибуквенные просветы.



### [web-font-generator.com](https://web-font-generator.com/)

- Отдаёт TTF, WOFF, EOT, SVG.
- Настроек не имеет.
- Работает с одним файлом за раз.
- Показывает превью результата.
- Умеет конвертировать в base64.
- Не деформирует буквы.
- Иногда выдает бОльший размер файла, чем у закачанного оригинала.



### [ttf2woff](https://github.com/fontello/ttf2woff)

- Консольный инструмент. Нужно владеть [азами работы с консолью](https://github.com/nicothin/web-development/tree/master/bash) и иметь установленный [node.js](https://nodejs.org/en/).
- Конвертирует TTF в WOFF.
- Настроек не имеет.
- Не деформирует буквы.

#### Конвертирование с помощью ttf2woff

```bash
node_modules/.bin/ttf2woff fonts/lato/lato__latofonts_com.ttf fonts/lato/lato__ttf2woff.woff
node_modules/.bin/ttf2woff fonts/lato/lato_bold__latofonts_com.ttf fonts/lato/lato_bold__ttf2woff.woff
node_modules/.bin/ttf2woff fonts/opensans/opensans__google_com.ttf fonts/opensans/opensans__ttf2woff.woff
node_modules/.bin/ttf2woff fonts/opensans/opensans_bold__google_com.ttf fonts/opensans/opensans_bold__ttf2woff.woff
node_modules/.bin/ttf2woff fonts/ptserif/ptserif__paratype_ru.ttf fonts/ptserif/ptserif__ttf2woff.woff
node_modules/.bin/ttf2woff fonts/ptserif/ptserif_bold__paratype_ru.ttf fonts/ptserif/ptserif_bold__ttf2woff.woff
node_modules/.bin/ttf2woff fonts/robotoslab/robotoslab__google_com.ttf fonts/robotoslab/robotoslab__ttf2woff.woff
node_modules/.bin/ttf2woff fonts/robotoslab/robotoslab_bold__google_com.ttf fonts/robotoslab/robotoslab_bold__ttf2woff.woff
```



### [github.com/fontello/ttf2woff](https://github.com/fontello/ttf2woff)

- Консольный инструмент. Нужно владеть [азами работы с консолью](https://github.com/nicothin/web-development/tree/master/bash) и иметь установленный [node.js](https://nodejs.org/en/).
- Конвертирует TTF в WOFF2.
- Настроек не имеет.
- У меня (Windows 10) работает медленно: до пары минут на конверсию одного файла.
- Не деформирует буквы.

#### Конвертирование с помощью ttf2woff2

```bash
cat fonts/lato/lato__latofonts_com.ttf | node_modules/.bin/ttf2woff2 >> fonts/lato/lato__ttf2woff2.woff2
cat fonts/lato/lato_bold__latofonts_com.ttf | node_modules/.bin/ttf2woff2 >> fonts/lato/lato_bold__ttf2woff2.woff2
cat fonts/opensans/opensans__google_com.ttf | node_modules/.bin/ttf2woff2 >> fonts/opensans/opensans__ttf2woff2.woff2
cat fonts/opensans/opensans_bold__google_com.ttf | node_modules/.bin/ttf2woff2 >> fonts/opensans/opensans_bold__ttf2woff2.woff2
cat fonts/ptserif/ptserif__paratype_ru.ttf | node_modules/.bin/ttf2woff2 >> fonts/ptserif/ptserif__ttf2woff2.woff2
cat fonts/ptserif/ptserif_bold__paratype_ru.ttf | node_modules/.bin/ttf2woff2 >> fonts/ptserif/ptserif_bold__ttf2woff2.woff2
cat fonts/robotoslab/robotoslab__google_com.ttf | node_modules/.bin/ttf2woff2 >> fonts/robotoslab/robotoslab__ttf2woff2.woff2
cat fonts/robotoslab/robotoslab_bold__google_com.ttf | node_modules/.bin/ttf2woff2 >> fonts/robotoslab/robotoslab_bold__ttf2woff2.woff2
```



## Результаты сравнения для выбранных шрифтов

### Lato

Оригинал взят с [latofonts.com](http://www.latofonts.com/). Версия 2.015.

Если инструмент не работает с каким-либо форматом, то и не упоминается в анализе для соответствующего формата.

#### TTF, жирность 400, Windows 10, Chrome 52

Сравнение с оригинальным TTF с latofonts.com.

webfont.ru. Впечатление увеличения визуальной плотности текста (хорошо заметно на горизонтальной линии буквы «ё») на малых размерах и уменьшения на больших (хорошо заметно на вертикальных полукружиях цифры «0»). Деформированы полуовалы (см. «В» на размере 12 и 13). Изменены вертикальные размеры букв на 12 и 14. Увеличился интерлиньяж.

font2web.com. Без каких-либо изменений (это тот же TTF, который был скормлен сервису, скорее всего).

freefontconverter.com. Без визуальных изменений (хотя файл менялся, размер немного меньше, чем у оригинала).

web-font-generator.com. Без визуальных изменений (хотя файл менялся, размер больше чем у оригинала).

fontsquirrel.com. Впечатление увеличения визуальной плотности текста (хорошо заметно на горизонтальной линии буквы «ё») на малых размерах и уменьшения на больших (хорошо заметно на вертикальных полукружиях цифры «0»). Деформированы полуовалы (см. «В» на размере 12 и 13). Изменены вертикальные размеры букв на 12 и 14. Увеличился интерлиньяж.

**Итого:**

- font2web.com, freefontconverter.com — корркетный результат без деформаций.
- web-font-generator.com — корректно, но почему-то, размер файла больше.
- webfont.ru, fontsquirrel.com — деформации символов, изменения визуальной плотности и интерлиньяжа.

#### WOFF, жирность 400, Windows 10, Chrome 52

Сравнение с оригинальным WOFF с latofonts.com.

webfont.ru. Изменения, аналогичные TTF (серьезные).

font2web.com. Увеличение визуальной плотности на всех размерах (сильно заметно на малых размерах). Непонятное изменение размеров файла: WOFF-оригинал с latofonts.com — 301 Кб, полученный с этого сервиса — 546 Кб.

freefontconverter.com. Без визуальных изменений (хотя файл менялся, размер немного меньше, чем у оригинала).

web-font-generator.com. Без визуальных изменений (размер почти не отличается).

fontsquirrel.com. Изменения, аналогичные TTF (серьезные).

ttf2woff. Без визуальных изменений (размер почти не отличается).

**Итого:**

- freefontconverter.com, web-font-generator.com, ttf2woff — корректный результат без деформаций.
- font2web.com, webfont.ru, fontsquirrel.com — деформации символов, изменения визуальной плотности и интерлиньяжа.

#### WOFF2 жирность 400, Windows 10, Chrome 52

Сравнение с оригинальным WOFF2 с latofonts.com.

webfont.ru. Изменения, аналогичные TTF (серьезные).

freefontconverter.com. Без визуальных изменений (хотя файл менялся, размер чуть-чуть меньше, чем у оригинала).

fontsquirrel.com. Изменения, аналогичные TTF (серьезные).

ttf2woff2. Без визуальных изменений (размер почти не отличается).

**Итого:**

- freefontconverter.com, ttf2woff2 — корректный результат без деформаций.
- webfont.ru, fontsquirrel.com — деформации символов, изменения визуальной плотности и интерлиньяжа.

#### TTF, жирность 700, Windows 10, Chrome 52

Сравнение с оригинальным TTF с latofonts.com.

webfont.ru. Впечатление увеличения визуальной плотности текста (хорошо заметно на горизонтальной линии буквы «ё») на малых размерах и уменьшения на больших (хорошо заметно на вертикальных полукружиях цифры «0»). Изменены вертикальные размеры букв почти на всех размерах в диапазоне 10-20. Увеличился интерлиньяж.

font2web.com. Без каких-либо изменений (это тот же TTF, который был скормлен сервису, скорее всего).

freefontconverter.com. Без визуальных изменений (хотя файл менялся, размер немного меньше, чем у оригинала).

web-font-generator.com. Без визуальных изменений.

fontsquirrel.com. Впечатление увеличения визуальной плотности текста на размерах 16 и 18. Деформированы полуовалы (см. «В» на размере 12 и 13). Изменены вертикальные размеры букв на 12 и 14. Пропал внутрибуквенный просвет в «е/ё» на размере 16. Увеличился интерлиньяж.

- font2web.com, freefontconverter.com, web-font-generator.com — корркетный результат без деформаций.
- webfont.ru, fontsquirrel.com — деформации символов, изменения визуальной плотности и интерлиньяжа.

#### WOFF, жирность 700, Windows 10, Chrome 52

Сравнение с оригинальным WOFF с latofonts.com.

webfont.ru. Изменения, аналогичные TTF (серьезные).

font2web.com. Увеличение визуальной плотности на всех размерах (сильно заметно на малых размерах). Непонятное изменение размеров файла: WOFF-оригинал с latofonts.com — 302 Кб, сконвертированный — 557 Кб.

freefontconverter.com. Без визуальных изменений (хотя файл менялся, размер немного меньше, чем у оригинала).

web-font-generator.com. Без визуальных изменений (размер почти не отличается).

fontsquirrel.com. Деформированы полуовалы (см. «В» на размере 11, 13 и 14). Изменен вертикальный размеры букв на 13. Пропал внутрибуквенный просвет в «е/ё» на размере 16. Увеличился интерлиньяж.

ttf2woff. Без визуальных изменений (размер почти не отличается).

**Итого:**

- freefontconverter.com, web-font-generator.com, ttf2woff — корректный результат без деформаций.
- font2web.com, webfont.ru, fontsquirrel.com — деформации символов, изменения визуальной плотности и интерлиньяжа.

#### WOFF2 жирность 700, Windows 10, Chrome 52

Сравнение с оригинальным WOFF2 с latofonts.com.

webfont.ru. Изменения, аналогичные TTF (серьезные).

freefontconverter.com. Без визуальных изменений (хотя файл менялся, размер чуть-чуть меньше, чем у оригинала).

fontsquirrel.com. Изменения, аналогичные TTF (серьезные).

ttf2woff2. Без визуальных изменений (размер почти не отличается).

**Итого:**

- freefontconverter.com, ttf2woff2 — корректный результат без деформаций.
- webfont.ru, fontsquirrel.com — деформации символов, изменения визуальной плотности и интерлиньяжа.







## Оптимизатор:

- [github.com/ecomfe/fontmin](https://github.com/ecomfe/fontmin) (вырезает из шрифта пробельные символы)

Оптимизация с помощью fontmin

```bash
text="`cat subset.txt`" && node_modules/.bin/fontmin -t "$text" fonts/lato/lato__latofonts_com.ttf > fonts/lato/lato__fontmin.ttf
```



## Исключены из теста:

- [everythingfonts.com/font-face](https://everythingfonts.com/font-face) — требует регистрации и денег, без этого имеет лимит на размер файла в 0.4 Мб (некоторые оригиналы шрифтов — по 0.5 Мб).
- [onlinefontconverter.com](https://onlinefontconverter.com) — после загрузки шрифтов показывает прогресс конвертирования и потом слово «Downloading», но скачивание не начинается (Chrome, Firefox).
