// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      home: "Bosh sahifa",
      collection: "To'plam",
      navbar: {
        about: "Biz haqimizda",
      },
      contact: "Kontaktlar",
      wishlist: "Sevimlilar",
      winterCollection: "Qish kolleksiyasi",
      autumnCollection: "Kuz kolleksiyasi",
      summerCollection: "Yozgi kolleksiyasi",
      ecoFriendly: "Ekologik Toza Uyqu Mahsulotlari",
      materialQuality: "Material sifati",
      companyDescription:
        "ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini ishlab chiqaradigan kompaniya bo'lib kelgan",
      collectionBtn: "To‘plam",

      services: {
        freeDeliveryTitle: "Yetkazib berish bepul",
        freeDeliveryDesc: "Buyurtmalarni bepul yetkazib berish",
        moneyBackTitle: "Qaytish kafolati",
        moneyBackDesc: "30 kunlik pulni qaytarish",
        deliveryTitle: "Yetkazib berish bepul",
        deliveryDescription: "Buyurtmalarni bepul yetkazib berish",
        returnTitle: "Qaytish kafolati",
        returnDescription: "30 kunlik pulni qaytarish",
        supportTitle: "24/7 onlayn qo'llab-quvvatlash",
        supportDescription: "24/7 onlayn qo'llab-quvvatlash",
        securePaymentTitle: "Xavfsiz to'lov",
        securePaymentDescription: "Barcha to'lov usullari qabul qilinadi",
      },
      hero: {
        eco: "Ekologik",
        clean_sleep: "Toza Uyqu",
        products: "Mahsulotlari",
      },
      news: {
        sectionTitle: "Yangiliklar",
        sectionSubtitle: "Ekologik Toza Uyqu Mahsulotlari",
        adminBy: "admin tomonidan",
        items: [
          {
            title: "Qanday qilib mukammal gadjetlarni tanlash mumkin",
            text: "Go‘zal vodiy atrofimni bug‘ bilan to‘ldirganda va meridian quyoshi daraxtlarimning o‘tib bo‘lmas barglarining ustki yuzasiga urilib, ichkaridagi ma’badga bir nechta adashgan yaltirab kirsa...",
          },
          {
            title: "Zamonaviy texnologiyalardan qanday foydalanish kerak",
            text: "Go‘zal vodiy atrofimni bug‘ bilan to‘ldirganda va meridian quyoshi daraxtlarimning o‘tib bo‘lmas barglarining ustki yuzasiga urilib, ichkaridagi ma’badga bir nechta adashgan yaltirab kirsa...",
          },
          {
            title: "Kreativ g'oyalarni amalga oshirish yo'llari",
            text: "Go‘zal vodiy atrofimni bug‘ bilan to‘ldirganda va meridian quyoshi daraxtlarimning o‘tib bo‘lmas barglarining ustki yuzasiga urilib, ichkaridagi ma’badga bir nechta adashgan yaltirab kirsa...",
          },
        ],
      },
      footer: {
        description:
          "“Ekologik Toza Uyqu Mahsulotlat” koʻp yillardan buyon butun dunyoda foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya hisoblanadi.",
        menu: "Menyu",
        links: {
          home: "Bosh sahifa",
          collection: "To'plam",
          about: "Biz haqimizda",
          contact: "Kontaktlar",
        },
        contacts: {
          title: "Kontaktlar",
          address: "Buxoro, st. Alpomish 80.",
          telegram: "Telegram",
        },
        subscribe: {
          title: "Elektron pochtamizga obuna bo'ling",
          placeholder: "Elektron pochta",
          button: "Obuna Bo'ling",
          note: "Kamida bitta roʻyxatni tanlang.",
        },
        rights:
          "MChJ Ekologik Toza Uyqu Mahsulotlari Barcha huquqlar himoyalangan.",
      },
      categories: {
        all: "Barchasi",
        winter: "Qishki",
        autumn: "Kuzgi",
        summer: "Yozgi",
        collection: "To'plam",
        filterBy: "Qidirish ...",
      },
      connection: {
        title: "Aloqa",
        emailPlaceholder: "Sizning electron pochtangiz",
        phonePlaceholder: "Telefon raqamingiz",
        messagePlaceholder: "Sizning xabaringiz bo'lsa yozing",
        submitButton: "Yuborish",
        toastSuccess: "Xabaringiz muvaffaqiyatli yuborildi!",
        toastError: "Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.",
        subscribeTitle: "Elektron pochtamizga obuna bo'ling",
        contact: {
          email: "Elektron pochta",
          phone: "Telefon raqam",
          address: "Manzil",
        },
      },
      about: {
        title: "Ekologik Toza Uyqu Mahsulotlari",
        imageAlt: "Mahsulotlarimiz va jamoamiz haqida",
        paragraphs: [
          "Matolarimiz va ekologik sumkalar ishlab chiqaruvchi korxonamiz uzoq yillardan beri paxta matolarini global bozorda yetkazib berib kelmoqda.",
          "Korxonamiz o‘z faoliyatini 17 yil avval boshlagan va shu vaqt ichida mijozlarimiz ishonchini qozonib kelmoqda.",
          "Kompaniyamizning bosh maqsadi — sifatli, bardoshli va ekologik xavfsiz mahsulotlarni yaratishdir.",
          "Ishlab chiqarish jarayonlari butunlay ekologik standartlarga mos bo‘lib, atrof-muhitga zarar yetkazmaslikka qaratilgan.",
          "Zamonaviy texnologiyalardan foydalanib, turli xil paxta mahsulotlarini yuqori darajada ishlab chiqarish imkoniyatiga egamiz.",
          "Shuningdek, biz DongJu to‘quv uskunalarining O‘zbekistondagi rasmiy vakili sifatida faoliyat yuritamiz.",
          "Har yili fabrikamizda 80 dan ortiq mahsulot turlari ishlab chiqariladi, buning natijasida kompaniya yuqori sifat va barqaror ishlab chiqarishni ta’minlaydi.",
          "Korxonamizda zamonaviy texnologiyalar asosida 50 dan ortiq to‘quv dastgohlari faoliyat ko‘rsatmoqda.",
          "Bizning ishlab chiqarish jarayonlarimizda faqat sifatli va ekologik xavfsiz mahsulotlar ishlab chiqarishni ta’minlaymiz.",
          "Mijozlarimiz talablariga javoban, ekologik xavfsiz va zamonaviy dizaynli sumkalar ishlab chiqarish yo‘lga qo‘yilgan.",
          "Kompaniyamiz har doim mijozlariga sifatli mahsulot va yuqori darajadagi xizmat ko‘rsatishdan mamnun.",
        ],
      },
      reviewForm: {
        title: "O'z sharhingizni qoldiring",
        ratingLabel: "Sizning reytingingiz:",
        nameLabel: "Ism *",
        emailLabel: "Elektron pochta *",
        reviewLabel: "Sizning sharhingiz *",
        noReviews: "Hozircha sharhlar yo'q.",
        submitButton: "Sharhni yuborish",
      },
    },
  },
  ru: {
    translation: {
      home: "Главная",
      collection: "Коллекция",
      navbar: {
        about: "О нас",
      },
      contact: "Контакты",
      wishlist: "Избранное",
      winterCollection: "Зимняя коллекция",
      autumnCollection: "Осенняя коллекция",
      summerCollection: "Летняя коллекция",
      ecoFriendly: "Экологически чистые товары для сна",
      materialQuality: "Качество материала",
      companyDescription:
        "Компания, которая много лет производит хлопчатобумажные ткани для использования по всему миру",
      collectionBtn: "Коллекция",

      services: {
        freeDeliveryTitle: "Бесплатная доставка",
        freeDeliveryDesc: "Бесплатная доставка заказов",
        moneyBackTitle: "Гарантия возврата",
        moneyBackDesc: "Возврат денег в течение 30 дней",
        deliveryTitle: "Бесплатная доставка",
        deliveryDescription: "Бесплатная доставка заказов",
        returnTitle: "Гарантия возврата",
        returnDescription: "Возврат средств в течение 30 дней",
        supportTitle: "Онлайн-поддержка 24/7",
        supportDescription: "Круглосуточная онлайн-поддержка 24/7",
        securePaymentTitle: "Безопасная оплата",
        securePaymentDescription: "Принимаются все способы оплаты",
      },
      hero: {
        eco: "Экологично",
        clean_sleep: "Чистый Сон",
        products: "Продукты",
      },
      news: {
        sectionTitle: "Новости",
        sectionSubtitle: "Экологически чистые товары для сна",
        adminBy: "от администратора",
        items: [
          {
            title: "Как выбрать идеальные гаджеты",
            text: "Когда прекрасная долина наполнена паром, и меридианное солнце бьет по верхней части непреодолимых листьев деревьев, проникая в святилище...",
          },
          {
            title: "Как использовать современные технологии",
            text: "Когда прекрасная долина наполнена паром, и меридианное солнце бьет по верхней части непреодолимых листьев деревьев, проникая в святилище...",
          },
          {
            title: "Как реализовать креативные идеи",
            text: "Когда прекрасная долина наполнена паром, и меридианное солнце бьет по верхней части непреодолимых листьев деревьев, проникая в святилище...",
          },
        ],
      },
      categories: {
        all: "Все",
        winter: "Зимние",
        autumn: "Осенние",
        summer: "Летние",
        collection: "Коллекция",
        filterBy: "Поиск по ...",
      },
      footer: {
        description:
          "«Экологически Чистые Товары для Сна» — это компания, которая на протяжении многих лет производит хлопчатобумажные ткани для использования по всему миру.",
        menu: "Меню",
        links: {
          home: "Главная",
          collection: "Коллекция",
          about: "О нас",
          contact: "Контакты",
        },
        contacts: {
          title: "Контакты",
          address: "Бухара, ул. Алпомиш 80.",
          telegram: "Телеграм",
        },
        subscribe: {
          title: "Подпишитесь на нашу рассылку",
          placeholder: "Электронная почта",
          button: "Подписаться",
          note: "Выберите хотя бы один список.",
        },
        rights: "ООО Экологически Чистые Товары для Сна. Все права защищены.",
      },
      connection: {
        title: "Связь",
        emailPlaceholder: "Ваш адрес электронной почты",
        phonePlaceholder: "Ваш номер телефона",
        messagePlaceholder: "Если у вас есть сообщение, напишите",
        submitButton: "Отправить",
        toastSuccess: "Ваше сообщение успешно отправлено!",
        toastError: "Произошла ошибка. Пожалуйста, попробуйте снова.",
        subscribeTitle: "Подпишитесь на нашу рассылку",
        contact: {
          email: "Электронная почта",
          phone: "Телефон",
          address: "Адрес",
        },
      },
      about: {
        title: "Экологически чистые продукты для сна",
        imageAlt: "О нашей продукции и команде",
        paragraphs: [
          "Наша компания, производящая ткани и экологические сумки, уже много лет поставляет хлопковые ткани на мировой рынок.",
          "Мы начали свою деятельность 17 лет назад и за это время заслужили доверие наших клиентов.",
          "Главная цель нашей компании — создание качественной, прочной и экологически безопасной продукции.",
          "Производственные процессы полностью соответствуют экологическим стандартам и не наносят вреда окружающей среде.",
          "Используя современные технологии, мы способны производить широкий ассортимент хлопковой продукции на высоком уровне.",
          "Также мы являемся официальным представителем ткацкого оборудования DongJu в Узбекистане.",
          "Ежегодно на нашей фабрике производится более 80 видов продукции, что обеспечивает высокое качество и стабильность производства.",
          "На нашем производстве работает более 50 современных ткацких станков.",
          "Мы гарантируем производство только качественной и экологически безопасной продукции.",
          "В ответ на запросы клиентов, мы наладили производство экологически безопасных сумок с современным дизайном.",
          "Наша компания всегда рада предоставлять клиентам качественную продукцию и высокий уровень сервиса.",
        ],
      },
      reviewForm: {
        title: "Оставьте свой отзыв",
        ratingLabel: "Ваша оценка:",
        nameLabel: "Имя *",
        emailLabel: "Электронная почта *",
        reviewLabel: "Ваш отзыв *",
        noReviews: "Пока нет отзывов.",
        submitButton: "Отправить отзыв",
      },
    },
  },
  eng: {
    translation: {
      home: "Home",
      collection: "Collection",
      navbar: {
        about: "About Us",
      },
      contact: "Contact",
      wishlist: "Wishlist",
      winterCollection: "Winter Collection",
      autumnCollection: "Autumn Collection",
      summerCollection: "Summer Collection",
      ecoFriendly: "Eco-Friendly Sleep Products",
      materialQuality: "Material Quality",
      companyDescription:
        "A company that has been producing cotton fabrics for use around the world for many years",
      collectionBtn: "Collection",
      services: {
        freeDeliveryTitle: "Free Delivery",
        freeDeliveryDesc: "Free delivery for all orders",
        moneyBackTitle: "Money-back Guarantee",
        moneyBackDesc: "30-day money-back guarantee",
        deliveryTitle: "Free delivery",
        deliveryDescription: "Free delivery on all orders",
        returnTitle: "Return guarantee",
        returnDescription: "30-day money back guarantee",
        supportTitle: "24/7 Online Support",
        supportDescription: "24/7 online customer support",
        securePaymentTitle: "Secure payment",
        securePaymentDescription: "All payment methods accepted",
      },
      hero: {
        eco: "Eco-friendly",
        clean_sleep: "Clean Sleep",
        products: "Products",
      },
      news: {
        sectionTitle: "News",
        sectionSubtitle: "Eco-Friendly Sleep Products",
        adminBy: "by admin",
        items: [
          {
            title: "How to choose the perfect gadgets",
            text: "When the beautiful valley is filled with mist, and the meridian sun hits the top of the impenetrable leaves of my trees, shimmering into the temple inside...",
          },
          {
            title: "How to use modern technology",
            text: "When the beautiful valley is filled with mist, and the meridian sun hits the top of the impenetrable leaves of my trees, shimmering into the temple inside...",
          },
          {
            title: "Ways to implement creative ideas",
            text: "When the beautiful valley is filled with mist, and the meridian sun hits the top of the impenetrable leaves of my trees, shimmering into the temple inside...",
          },
        ],
      },
      footer: {
        description:
          "“Eco-Friendly Sleep Products” has been manufacturing cotton fabrics for global use for many years.",
        menu: "Menu",
        links: {
          home: "Home",
          collection: "Collection",
          about: "About Us",
          contact: "Contact",
        },
        contacts: {
          title: "Contacts",
          address: "Bukhara, st. Alpomish 80.",
          telegram: "Telegram",
        },
        subscribe: {
          title: "Subscribe to our newsletter",
          placeholder: "Email address",
          button: "Subscribe",
          note: "Please select at least one list.",
        },
        rights: "LLC Eco-Friendly Sleep Products. All rights reserved.",
      },
      categories: {
        all: "All",
        winter: "Winter",
        autumn: "Autumn",
        summer: "Summer",
        collection: "Collection",
        filterBy: "Searchin for ...",
      },
      connection: {
        title: "Contact",
        emailPlaceholder: "Your email address",
        phonePlaceholder: "Your phone number",
        messagePlaceholder: "Write your message if you have one",
        submitButton: "Send",
        toastSuccess: "Your message has been sent successfully!",
        toastError: "An error occurred. Please try again.",
        subscribeTitle: "Subscribe to our newsletter",
        contact: {
          email: "Email",
          phone: "Phone",
          address: "Address",
        },
      },
      about: {
        title: "Eco-Friendly Sleep Products",
        imageAlt: "About our products and team",
        paragraphs: [
          "Our company, a manufacturer of fabrics and eco-bags, has been supplying cotton fabrics to the global market for many years.",
          "We started our business 17 years ago and have gained the trust of our customers ever since.",
          "The main goal of our company is to create high-quality, durable, and environmentally safe products.",
          "Our production processes fully comply with ecological standards and aim to minimize environmental impact.",
          "Using modern technology, we are capable of producing various types of cotton products at a high level.",
          "In addition, we operate as the official representative of DongJu weaving equipment in Uzbekistan.",
          "Over 80 product types are produced annually at our factory, ensuring high quality and stable production.",
          "More than 50 modern weaving machines are currently in operation at our facility.",
          "We ensure that only quality and environmentally safe products are manufactured in our production process.",
          "In response to customer demands, we have launched production of eco-friendly and modern design bags.",
          "Our company is always happy to provide quality products and high-level service to its customers.",
        ],
      },
      reviewForm: {
        title: "Leave your review",
        ratingLabel: "Your rating:",
        nameLabel: "Name *",
        emailLabel: "Email *",
        reviewLabel: "Your review *",
        noReviews: "No reviews yet.",
        submitButton: "Submit review",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz", // default language
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
