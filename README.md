# file-dl

Скачивание файлов из браузера. 

## Кейс

По нажатию на кнопку API c задержкой в несколько секунд возвращает ответ вида:
```json
{
  "fileName": "cat.pdf",
  "contentType": "application/pdf",
  "fileDataBase64": "<<содержимое файла в Base64>>"
}
```

Base64-данные из ответа преобразуются в Blob, который скачивается браузером на устройство пользователя.

## Реализация 

[file-saver@2.0.5](https://github.com/eligrey/FileSaver.js) (MIT) — 
позволяет скачивать файлы из Blob-объектов 
размером до порядка сотен МБ.


## Протестировано

- ✅ Safari 14.0.3 / macOs 11.2.3
- ✅ Safari / iOS 14.4.2 
- ✅ Safari / iOS 13.5.1
- ✅ Chrome 89.0.4389.72 / macOS 11.2.3
- ✅ Chrome 89.0.4389.114 / Windows 10
- ✅ Chrome 89.0.4389.105 / Android 10
- ✅ Firefox 87.0 / macOS 11.2.3
- ✅ Firefox 78.8.0esr / Windows 10
- ✅ Internet Explorer 11 / Windows 10


## Инсталляция и запуск

1. Node.js 14
2. `yarn install` 
3. `yarn start`
4. [http://localhost:3000](http://localhost:3000)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
