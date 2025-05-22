"use client";

import { PageConstructor, PageConstructorProvider } from "@gravity-ui/page-constructor";
import "@gravity-ui/page-constructor/styles/styles.scss";

export const dynamic = "force-static";

export default function Home() {
  return (
    <PageConstructorProvider>
      <PageConstructor
        content={{
          background: {
            light: {
              color: "#EFF2F8",
              image: "https://preview.gravity-ui.com/page-constructor/story-assets/header-bg-video_light.png",
            },
          },
          blocks: [
            {
              buttons: [
                {
                  text: "Что вас ждет?",
                  theme: "outlined",
                  url: "#",
                },
                {
                  text: "Регистрация\r",
                  theme: "action",
                  url: "https://example.com",
                },
              ],
              description:
                "<p>Дорогие выпускники и уважаемые родители! Это возможность погрузиться в атмосферу знаний и вдохновения, познакомиться с нашим университетским кампусом и узнать о безграничных образовательных возможностях, которые открывает перед вами МАУ.</p> ",
              title: "Летний день открытых дверей в Мурманском арктическом университете",
              type: "header-block",
              verticalOffset: "m",
              width: "m",
            },
            {
              children: [
                {
                  icon: "https://mauniver.ru/info/design/img/templates/01-18.png",
                  text: "Факультет физической культуры и спорта Мурманского арктического университета – единственное учебное заведение в регионе, готовящее специалистов высшего образования в области физической культуры и спорта.",
                  title: "Факультет физической культуры и спорта",
                  type: "basic-card",
                  url: "https://mauniver.ru/structure/faculties/ffks/",
                },
                {
                  icon: "https://mauniver.ru/info/design/img/templates/01-15.png",
                  text: "Институт педагогики и психологии Мурманского арктического университета готовит специалистов для системы образования: учителей, воспитателей, психологов, дефектологов, логопедов. ",
                  title: "Институт педагогики и психологии",
                  type: "basic-card",
                  url: "https://example.com",
                },
                {
                  icon: "https://mauniver.ru/info/design/img/templates/01-14.png",
                  text: "Медико-биологический институт Мурманского арктического университета отвечает потребностям региона в квалифицированных медицинских кадрах и специалистах в области микробиологии и биохимии.",
                  title: "Медико-биологический институт",
                  type: "basic-card",
                  url: "https://mauniver.ru/structure/insts/mbi/",
                },
                {
                  icon: "https://mauniver.ru/info/design/img/templates/01-20.png",
                  text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                  title: "Lorem ipsum dolor sit amet",
                  type: "basic-card",
                  url: "https://example.com",
                },
              ],
              title: {
                text: "Образовательные подразделения",
                url: "https://mauniver.ru/structure/insts/",
              },
              type: "slider-block",
            },
            {
              textContent: {
                additionalInfo:
                  '<p>Для получения дополнительных подробностей о мероприятии присоединяйтесь к нашему <a href="#">Telegram-каналу</a> для абитуриентов.</p>\n',
                text: "<p>Программа нашего Дня открытых дверей начнется c информационного блока, где вы сможете получить все необходимые ответы на вопросы о поступлении и учебе в нашем университете. Мы расскажем о важных датах, поделимся полезными ссылками и поможем сделать процесс поступления простым и понятным!</p>",
                title: "Что вас ждет?",
              },
              type: "content-layout-block",
            },
            {
              children: [
                {
                  content: {
                    text: "Морская академия",
                    title: "Морское признание",
                  },
                  fullscreen: true,
                  media: {
                    previewImg:
                      "https://downloader.disk.yandex.ru/preview/986f9c1a7eeae5aa520ef757d2051e82eca8f2c16a19d980e2578a0651a6e362/682fa8e4/gnjk3-PsHVceTD0tQP415O30bK3tJ7pqX1_Iz7AF79IXzyizb4Tw1ttZVVqoZcBcCAQP1PEYjw5BGaVklROf-Q%3D%3D?uid=0&filename=DSC_2103.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=430x326&crop=1",
                    youtube: "https://vk.com/video-32978_456239750",
                  },
                  type: "layout-item",
                },
                {
                  content: {
                    text: "Креативные индустрии",
                    title: "Институт креативных индустрий и предпринимательства",
                  },
                  fullscreen: true,
                  media: {
                    previewImg:
                      "https://downloader.disk.yandex.ru/preview/7aabd3e071684e507def0892b725b87f76ca9c94fe92ba4214fa05daab57c532/682fa8e4/mueWtpIzbtIXYcUxOztsDxRedftRJjluH9xcOoOpnEq9wsLHU_Gh71CdRAB8qbAOSevx2rV3sA69Mdo8XdkwSA%3D%3D?uid=0&filename=DSC_2467.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=647x490&crop=1",
                    youtube: "https://youtu.be/0Qd3T6skprA",
                  },
                  type: "layout-item",
                },
                {
                  content: {
                    text: "Институт педагогики и психологии",
                    title: "Образование",
                  },
                  fullscreen: true,
                  media: {
                    previewImg:
                      "https://downloader.disk.yandex.ru/preview/1cb2e4d9ff2ce62c1866f4fc7cd7f2503086db03ec5bf95258198e491d81ba31/682fa8e4/12HotCB-Rgp20qyAyn2pT7xaWOrtkSLBozXKOdA-p8EtZGQ_5A7-q47VCbioYiVJKM_mCgsm4KesAWQBg74DYQ%3D%3D?uid=0&filename=DSC_2431.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=647x490&crop=1",
                    youtube: "https://youtu.be/0Qd3T6skprA",
                  },
                  type: "layout-item",
                },
              ],
              title: "Лучшее видео",
              type: "card-layout-block",
            },
            {
              button: {
                text: "Поступи без волнения >",
                url: "https://t.me/postupi_bez_volnenia",
              },
              color: {
                dark: "#262626",
                light: "#EFF2F8",
              },
              disableCompress: true,
              image: {
                light:
                  "https://downloader.disk.yandex.ru/preview/9638ca36b16b6f6d1317927ecfd643ee7c93f0863047ebc28772bbe63b204e11/682fa9cf/eWrA6-v2cd-xp0SPW9ZORtpoO3PQ_IfQTRX6GOwCXqzK-7hjwElTyq4EbXG7yNY6ZYld2uD27C2aKLx_5p-wIg%3D%3D?uid=0&filename=05.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=1675x863",
              },
              subtitle:
                "<p>Для получения дополнительных подробностей о мероприятии присоединяйтесь к нашему <a>Telegram-каналу</a> для абитуриентов. </p> ",
              title: "Не упустите возможность узнать больше о нашем университете!",
              type: "banner-block",
            },
            {
              items: ["vk", "telegram"],
              title: "Социальные сети",
              type: "share-block",
            },
          ],
        }}
      />
    </PageConstructorProvider>
  );
}
