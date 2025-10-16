import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Minimal resources; extend as needed
const resources = {
  ru: {
    common: {
      app: {
        noAppSelected: "(приложение не выбрано)",
        appPrefix: "Приложение:",
      },
      titleBar: {
        pro: "Pro",
        proOff: "Pro (выключено)",
        credits: "кредитов",
        tooltipCreditsNote:
          "Примечание: обновление статуса кредитов происходит с небольшой задержкой.",
        minimize: "Свернуть",
        maximize: "Развернуть",
        close: "Закрыть",
      },
      home: {
        buildingYourApp: "Собираем ваше приложение",
        buildingSubtitle:
          "Мы настраиваем ваше приложение с помощью ИИ. Это может занять некоторое время...",
        moreIdeas: "Еще идеи",
        whatsNew: "Что нового в v{{version}}?",
      },
      settings: {
        goBack: "Назад",
        settings: "Настройки",
        general: "Общие настройки",
        theme: "Тема",
        autoUpdateNote:
          "Автоматически обновлять приложение при выходе новых версий.",
        workflow: "Настройки рабочего процесса",
        autoApproveNote:
          "Автоматически утверждать изменения кода и запускать их.",
        autoFixNote: "Автоматически исправлять ошибки TypeScript.",
        aiSettings: "Настройки ИИ",
        telemetry: "Телеметрия",
        telemetryId: "Telemetry ID:",
        integrations: "Интеграции",
        toolsMcp: "Инструменты (MCP)",
        experiments: "Эксперименты",
        enableNativeGit: "Включить Native Git",
        installGit: "установкой Git",
        dangerZone: "Опасная зона",
        resetEverything: "Сбросить всё",
        resetting: "Сброс...",
        resetWarning:
          "Это удалит все ваши приложения, чаты и настройки. Действие нельзя отменить.",
        confirmResetTitle: "Сбросить всё",
        confirmResetMessage:
          "Вы уверены? Это удалит все приложения, чаты и настройки. Действие нельзя отменить.",
        confirm: "Подтвердить",
        cancel: "Отмена",
        appVersion: "Версия приложения:",
      },
    },
  },
  en: {
    common: {
      app: { noAppSelected: "(no app selected)", appPrefix: "App:" },
      titleBar: {
        pro: "Pro",
        proOff: "Pro (off)",
        credits: "credits",
        tooltipCreditsNote:
          "Note: there is a slight delay in updating the credit status.",
        minimize: "Minimize",
        maximize: "Maximize",
        close: "Close",
      },
      home: {
        buildingYourApp: "Building your app",
        buildingSubtitle:
          "We're setting up your app with AI magic. This might take a moment...",
        moreIdeas: "More ideas",
        whatsNew: "What's new in v{{version}}?",
      },
      settings: {
        goBack: "Go Back",
        settings: "Settings",
        general: "General Settings",
        theme: "Theme",
        autoUpdateNote:
          "This will automatically update the app when new versions are available.",
        workflow: "Workflow Settings",
        autoApproveNote:
          "This will automatically approve code changes and run them.",
        autoFixNote: "This will automatically fix TypeScript errors.",
        aiSettings: "AI Settings",
        telemetry: "Telemetry",
        telemetryId: "Telemetry ID:",
        integrations: "Integrations",
        toolsMcp: "Tools (MCP)",
        experiments: "Experiments",
        enableNativeGit: "Enable Native Git",
        installGit: "installing Git",
        dangerZone: "Danger Zone",
        resetEverything: "Reset Everything",
        resetting: "Resetting...",
        resetWarning:
          "This will delete all your apps, chats, and settings. This action cannot be undone.",
        confirmResetTitle: "Reset Everything",
        confirmResetMessage:
          "Are you sure you want to reset everything? This will delete all your apps, chats, and settings. This action cannot be undone.",
        confirm: "Reset Everything",
        cancel: "Cancel",
        appVersion: "App Version:",
      },
    },
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "ru",
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

